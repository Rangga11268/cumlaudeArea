import QUESTIONS_DATABASE from './questions.json';
import PRACTICE_DATABASE from './practice_questions.json';
import React, { useState, useEffect } from 'react';

import { PRACTICE_MEETINGS } from './data/constants';
import DashboardPage from './pages/DashboardPage';
import MateriPage from './pages/MateriPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import ChangelogPage from './pages/ChangelogPage';
import CalculatorView from './components/CalculatorView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ==========================================
// MAIN APP COMPONENT (State Manager + Router)
// ==========================================
export default function CumlaudeArea() {
  // ── Navigation State ──────────────────────────────────────────────────────
  const [view, setView] = useState('dashboard'); // 'dashboard'|'quiz'|'result'|'materi'|'calculator'|'changelog'

  // ── Quiz / Practice State ─────────────────────────────────────────────────
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [unlockAll, setUnlockAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('mpsi');
  const [selectedExamType, setSelectedExamType] = useState('uts');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [practiceType, setPracticeType] = useState(null);
  const [practiceNum, setPracticeNum] = useState(null);

  // ── Interactive Features State ────────────────────────────────────────────
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [expandedReview, setExpandedReview] = useState({});
  const [unlockedLevels, setUnlockedLevels] = useState(() => {
    const saved = localStorage.getItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`);
    return saved ? JSON.parse(saved) : [1];
  });

  // ── Premium Features State ────────────────────────────────────────────────
  const [theme, setTheme] = useState(() => localStorage.getItem('cumlaude_theme') || 'light');
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cumlaude_bookmarked_questions') || '[]'); }
    catch { return []; }
  });
  const [wrongQuestions, setWrongQuestions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cumlaude_wrong_questions') || '[]'); }
    catch { return []; }
  });
  const [customQuizQuestions, setCustomQuizQuestions] = useState([]);
  const [isCustomSession, setIsCustomSession] = useState(false);
  const [customSessionType, setCustomSessionType] = useState('');

  // ── Calculator State ──────────────────────────────────────────────────────
  const [calcTab, setCalcTab] = useState('evm');
  const [evmInputs, setEvmInputs] = useState({ pv: '', ev: '', ac: '', bac: '' });
  const [pertInputs, setPertInputs] = useState({ o: '', m: '', p: '' });

  // ── Custom Exam Config ────────────────────────────────────────────────────
  const [customConfig, setCustomConfig] = useState({ selectedPertemuans: [], questionCount: 10, timeLimit: 15 });

  // ── Flashcard State ───────────────────────────────────────────────────────
  const [flashcardLevelFilter, setFlashcardLevelFilter] = useState('all');
  const [flashcardSearchQuery, setFlashcardSearchQuery] = useState('');
  const [studiedCards, setStudiedCards] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cumlaude_studied_cards') || '[]'); }
    catch { return []; }
  });

  // ── Exam History State ────────────────────────────────────────────────────
  const [examHistory, setExamHistory] = useState(() => {
    const saved = localStorage.getItem('cumlaude_exam_history');
    return saved ? JSON.parse(saved) : [];
  });

  // ── Effects ───────────────────────────────────────────────────────────────

  // Sync theme with :root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark-theme');
    else root.classList.remove('dark-theme');
    localStorage.setItem('cumlaude_theme', theme);
  }, [theme]);

  // Sync unlocked levels when course/exam changes
  useEffect(() => {
    const saved = localStorage.getItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`);
    setUnlockedLevels(saved ? JSON.parse(saved) : [1]);
  }, [selectedCourse, selectedExamType]);

  // Reset flashcard filters on course/exam change
  useEffect(() => {
    setFlashcardLevelFilter('all');
    setFlashcardSearchQuery('');
    setFlippedCards({});
  }, [selectedCourse, selectedExamType]);

  // Countdown timer
  useEffect(() => {
    if (view !== 'quiz' || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); setView('result'); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  // Log attempt and unlock levels on result
  useEffect(() => {
    if (view === 'result') {
      if (activeQuestions.length === 0) return;
      const percentage = Math.round((score / activeQuestions.length) * 100);
      const isPassed = percentage >= 60;
      const attemptId = `attempt_${Date.now()}`;

      let loggedExamType = selectedExamType.toUpperCase();
      let loggedLevel = selectedLevel !== null ? `Level ${selectedLevel}` : 'Semua Level';

      if (isCustomSession) {
        if (customSessionType === 'custom_exam') { loggedExamType = 'UJIAN KUSTOM'; loggedLevel = `P${customConfig.selectedPertemuans.join(', P')}`; }
        else if (customSessionType === 'bookmarks') { loggedExamType = 'LATIHAN FAVORIT'; loggedLevel = 'Soal Ditandai'; }
        else if (customSessionType === 'wrong_answers') { loggedExamType = 'LATIHAN PERBAIKAN'; loggedLevel = 'Soal Salah'; }
      } else if (isPracticeMode) {
        loggedExamType = 'LATIHAN';
        loggedLevel = practiceType === 'kuis' ? 'Kuis P07 (Minggu Lalu)' : `Latihan Pertemuan ${practiceNum}`;
      }

      const newAttempt = {
        id: attemptId,
        timestamp: new Date().toLocaleString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
        course: selectedCourse.toUpperCase(),
        examType: loggedExamType,
        level: loggedLevel,
        score,
        total: activeQuestions.length,
        percentage,
        passed: isPassed
      };

      setExamHistory(prev => {
        if (prev.some(item => item.id.split('_')[1] === attemptId.split('_')[1] || (Date.now() - parseInt(item.id.split('_')[1] || 0) < 1000))) return prev;
        const updated = [newAttempt, ...prev].slice(0, 10);
        localStorage.setItem('cumlaude_exam_history', JSON.stringify(updated));
        return updated;
      });

      if (!isCustomSession && !isPracticeMode && selectedLevel !== null && isPassed) {
        const nextLevel = selectedLevel + 1;
        if (nextLevel <= 3 && !unlockedLevels.includes(nextLevel)) {
          const updatedLevels = [...unlockedLevels, nextLevel];
          setUnlockedLevels(updatedLevels);
          localStorage.setItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`, JSON.stringify(updatedLevels));
        }
      }
    }
  }, [view]);

  // ── Derived State ─────────────────────────────────────────────────────────
  const activeQuestions = isCustomSession
    ? customQuizQuestions
    : (isPracticeMode
      ? PRACTICE_DATABASE.filter(q => q.course === selectedCourse && q.type === practiceType && q.pertemuan === practiceNum)
      : QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && (selectedLevel !== null ? q.level === selectedLevel : true))
    );

  const totalExamQuestions = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType).length;
  const lvl1Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 1).length;
  const lvl2Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 2).length;
  const lvl3Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 3).length;

  const passedCount = examHistory.filter(item => item.passed).length;
  const passingRate = examHistory.length > 0 ? Math.round((passedCount / examHistory.length) * 100) : 0;
  const avgScore = examHistory.length > 0 ? Math.round(examHistory.reduce((acc, item) => acc + item.percentage, 0) / examHistory.length) : 0;

  // ── Helpers ───────────────────────────────────────────────────────────────
  const findQuestionById = (id) => {
    const qIdStr = String(id);
    return QUESTIONS_DATABASE.find(q => String(q.id) === qIdStr) || PRACTICE_DATABASE.find(q => String(q.id) === qIdStr);
  };

  const toggleBookmark = (questionId) => {
    setBookmarkedQuestions(prev => {
      const idStr = String(questionId);
      const updated = prev.includes(idStr) ? prev.filter(id => id !== idStr) : [...prev, idStr];
      localStorage.setItem('cumlaude_bookmarked_questions', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const getQuestionPertemuan = (q) => {
    if (q.pertemuan) return q.pertemuan;
    const cat = String(q.category || '').toLowerCase();
    if (cat.includes('karakteristik') || cat.includes('ciri proyek') || cat.includes('konsep proyek')) return 1;
    if (cat.includes('proses') || cat.includes('pmbok')) return 2;
    if (cat.includes('charter') || cat.includes('inisiasi')) return 3;
    if (cat.includes('scope') || cat.includes('wbs') || cat.includes('cpm') || cat.includes('ketergantungan') || cat.includes('float') || cat.includes('jalur kritis')) return 4;
    if (cat.includes('estimasi') || cat.includes('evm') || cat.includes('earned value') || cat.includes('pert')) return 5;
    if (cat.includes('organisasi')) return 6;
    if (cat.includes('pengadaan') || cat.includes('procurement') || cat.includes('kontrak')) return 9;
    if (cat.includes('plc') || cat.includes('sdlc')) return 10;
    if (cat.includes('risiko') || cat.includes('risk') || cat.includes('emv')) {
      return (cat.includes('kualitatif') || cat.includes('kuantitatif')) ? 12 : 11;
    }
    if (cat.includes('konversi') || cat.includes('serah terima') || cat.includes('penutupan')) return 13;
    if (cat.includes('pmp') || cat.includes('project management plan') || cat.includes('baseline')) return 14;
    if (q.examType === 'uts') { if (q.level === 1) return 1; if (q.level === 2) return 4; return 5; }
    else { if (q.level === 1) return 9; if (q.level === 2) return 10; return 14; }
  };

  const getWeakTopics = () => {
    const topicCounts = {};
    wrongQuestions.forEach(id => {
      const q = findQuestionById(id);
      if (!q) return;
      let topic = "Lain-lain";
      if (q.pertemuan) {
        topic = `Pertemuan ${q.pertemuan}: ${PRACTICE_MEETINGS.find(m => m.num === q.pertemuan)?.title || 'Materi Belajar'}`;
      } else {
        const type = String(q.examType).toLowerCase();
        const lvl = parseInt(q.level);
        if (type === 'uts') {
          if (lvl === 1) topic = "UTS L1: Konsep Proyek & Kelompok Proses (P1-P3)";
          else if (lvl === 2) topic = "UTS L2: Scope Management & CPM Jalur Kritis (P4)";
          else if (lvl === 3) topic = "UTS L3: EVM, PERT & Struktur Organisasi (P5-P6)";
        } else if (type === 'uas') {
          if (lvl === 1) topic = "UAS L1: Manajemen Pengadaan & Risiko Proyek (P9-P10)";
          else if (lvl === 2) topic = "UAS L2: PLC vs SDLC & Analisis Kelayakan Sistem";
          else if (lvl === 3) topic = "UAS L3: Konversi Sistem, PMP & Penutupan (P14)";
        }
      }
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });
    return Object.entries(topicCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ── Actions ───────────────────────────────────────────────────────────────
  const startQuiz = (level = null) => {
    setIsCustomSession(false); setCustomSessionType(''); setCustomQuizQuestions([]);
    setIsPracticeMode(false); setPracticeType(null); setPracticeNum(null);
    setSelectedLevel(level);
    setView('quiz'); setCurrentQuestionIndex(0); setScore(0);
    setSelectedOption(null); setIsAnswered(false); setUserAnswers({}); setExpandedReview({});
    const qCount = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && (level !== null ? q.level === level : true)).length;
    let secondsPerQuestion = 45;
    if (level === 1) secondsPerQuestion = 60;
    else if (level === 2) secondsPerQuestion = 45;
    else if (level === 3) secondsPerQuestion = 30;
    setTimeLeft(qCount * secondsPerQuestion);
  };

  const startPractice = (type, num) => {
    setIsCustomSession(false); setCustomSessionType(''); setCustomQuizQuestions([]);
    setIsPracticeMode(true); setPracticeType(type); setPracticeNum(num);
    setSelectedLevel(null);
    setView('quiz'); setCurrentQuestionIndex(0); setScore(0);
    setSelectedOption(null); setIsAnswered(false); setUserAnswers({}); setExpandedReview({});
    const qCount = PRACTICE_DATABASE.filter(q => q.course === selectedCourse && q.type === type && q.pertemuan === num).length;
    setTimeLeft(qCount * 60);
  };

  const startWrongQuestionsPractice = () => {
    if (wrongQuestions.length === 0) { alert("Belum ada catatan soal salah."); return; }
    const qs = wrongQuestions.map(id => findQuestionById(id)).filter(Boolean);
    if (qs.length === 0) { alert("Soal salah tidak ditemukan di database."); return; }
    setCustomQuizQuestions(qs); setIsCustomSession(true); setCustomSessionType('wrong_answers');
    setIsPracticeMode(true);
    setView('quiz'); setCurrentQuestionIndex(0); setScore(0);
    setSelectedOption(null); setIsAnswered(false); setUserAnswers({}); setExpandedReview({});
    setTimeLeft(qs.length * 60);
  };

  const startBookmarkedQuestionsPractice = () => {
    if (bookmarkedQuestions.length === 0) { alert("Belum ada soal favorit yang disimpan."); return; }
    const qs = bookmarkedQuestions.map(id => findQuestionById(id)).filter(Boolean);
    if (qs.length === 0) { alert("Soal favorit tidak ditemukan di database."); return; }
    setCustomQuizQuestions(qs); setIsCustomSession(true); setCustomSessionType('bookmarks');
    setIsPracticeMode(true);
    setView('quiz'); setCurrentQuestionIndex(0); setScore(0);
    setSelectedOption(null); setIsAnswered(false); setUserAnswers({}); setExpandedReview({});
    setTimeLeft(qs.length * 60);
  };

  const startCustomExam = () => {
    const { selectedPertemuans, questionCount, timeLimit } = customConfig;
    if (selectedPertemuans.length === 0) { alert("Silakan pilih minimal satu pertemuan."); return; }
    const allMatching = [
      ...QUESTIONS_DATABASE.filter(q => q.course === selectedCourse),
      ...PRACTICE_DATABASE.filter(q => q.course === selectedCourse)
    ].filter(q => selectedPertemuans.includes(getQuestionPertemuan(q)));
    if (allMatching.length === 0) { alert("Tidak ditemukan soal untuk pertemuan yang dipilih."); return; }
    const shuffled = [...allMatching].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, questionCount);
    setCustomQuizQuestions(selectedQuestions); setIsCustomSession(true); setCustomSessionType('custom_exam');
    setIsPracticeMode(false);
    setView('quiz'); setCurrentQuestionIndex(0); setScore(0);
    setSelectedOption(null); setIsAnswered(false); setUserAnswers({}); setExpandedReview({});
    setTimeLeft(timeLimit * 60);
  };

  const handleOptionClick = (optionIndex, isCorrect) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex); setIsAnswered(true);
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: optionIndex }));
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const qIdStr = String(currentQuestion.id);
    if (isCorrect) {
      setScore(score + 1);
      setWrongQuestions(prev => {
        if (prev.includes(qIdStr)) { const u = prev.filter(id => id !== qIdStr); localStorage.setItem('cumlaude_wrong_questions', JSON.stringify(u)); return u; }
        return prev;
      });
    } else {
      setWrongQuestions(prev => {
        if (!prev.includes(qIdStr)) { const u = [...prev, qIdStr]; localStorage.setItem('cumlaude_wrong_questions', JSON.stringify(u)); return u; }
        return prev;
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false); setSelectedOption(null);
    } else {
      setView('result');
    }
  };

  const toggleFlashcard = (cardId) => setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));

  const toggleReview = (idx) => setExpandedReview(prev => ({ ...prev, [idx]: !prev[idx] }));

  const toggleCardStudied = (cardId, e) => {
    e.stopPropagation();
    setStudiedCards(prev => {
      const updated = prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId];
      localStorage.setItem('cumlaude_studied_cards', JSON.stringify(updated));
      return updated;
    });
  };

  const clearHistory = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua riwayat ujian?")) {
      setExamHistory([]);
      localStorage.removeItem('cumlaude_exam_history');
    }
  };

  // ── ROUTING ───────────────────────────────────────────────────────────────

  if (view === 'materi') {
    return (
      <MateriPage
        selectedExamType={selectedExamType}
        flashcardLevelFilter={flashcardLevelFilter}
        setFlashcardLevelFilter={setFlashcardLevelFilter}
        flashcardSearchQuery={flashcardSearchQuery}
        setFlashcardSearchQuery={setFlashcardSearchQuery}
        flippedCards={flippedCards}
        studiedCards={studiedCards}
        toggleFlashcard={toggleFlashcard}
        toggleCardStudied={toggleCardStudied}
        startQuiz={startQuiz}
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  }

  if (view === 'quiz') {
    return (
      <QuizPage
        activeQuestions={activeQuestions}
        currentQuestionIndex={currentQuestionIndex}
        selectedOption={selectedOption}
        isAnswered={isAnswered}
        timeLeft={timeLeft}
        isPracticeMode={isPracticeMode}
        bookmarkedQuestions={bookmarkedQuestions}
        toggleBookmark={toggleBookmark}
        handleOptionClick={handleOptionClick}
        handleNextQuestion={handleNextQuestion}
        setView={setView}
        startPractice={startPractice}
        startQuiz={startQuiz}
        practiceType={practiceType}
        practiceNum={practiceNum}
        selectedLevel={selectedLevel}
        formatTime={formatTime}
      />
    );
  }

  if (view === 'result') {
    return (
      <ResultPage
        score={score}
        activeQuestions={activeQuestions}
        userAnswers={userAnswers}
        bookmarkedQuestions={bookmarkedQuestions}
        toggleBookmark={toggleBookmark}
        expandedReview={expandedReview}
        toggleReview={toggleReview}
        isPracticeMode={isPracticeMode}
        practiceType={practiceType}
        practiceNum={practiceNum}
        selectedLevel={selectedLevel}
        startQuiz={startQuiz}
        startPractice={startPractice}
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  }

  if (view === 'calculator') {
    return (
      <div className="app-container fade-in">
        <Navbar activeTab="calculator" setView={setView} theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <CalculatorView
            calcTab={calcTab}
            setCalcTab={setCalcTab}
            evmInputs={evmInputs}
            setEvmInputs={setEvmInputs}
            pertInputs={pertInputs}
            setPertInputs={setPertInputs}
          />
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'changelog') {
    return (
      <ChangelogPage
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  }

  // Default: Dashboard
  return (
    <DashboardPage
      selectedCourse={selectedCourse}
      setSelectedCourse={setSelectedCourse}
      selectedExamType={selectedExamType}
      setSelectedExamType={setSelectedExamType}
      totalExamQuestions={totalExamQuestions}
      lvl1Count={lvl1Count}
      lvl2Count={lvl2Count}
      lvl3Count={lvl3Count}
      examHistory={examHistory}
      avgScore={avgScore}
      passingRate={passingRate}
      passedCount={passedCount}
      unlockAll={unlockAll}
      setUnlockAll={setUnlockAll}
      unlockedLevels={unlockedLevels}
      wrongQuestions={wrongQuestions}
      bookmarkedQuestions={bookmarkedQuestions}
      startQuiz={startQuiz}
      startPractice={startPractice}
      startWrongQuestionsPractice={startWrongQuestionsPractice}
      startBookmarkedQuestionsPractice={startBookmarkedQuestionsPractice}
      startCustomExam={startCustomExam}
      findQuestionById={findQuestionById}
      getWeakTopics={getWeakTopics}
      customConfig={customConfig}
      setCustomConfig={setCustomConfig}
      clearHistory={clearHistory}
      setView={setView}
      theme={theme}
      toggleTheme={toggleTheme}
    />
  );
}
