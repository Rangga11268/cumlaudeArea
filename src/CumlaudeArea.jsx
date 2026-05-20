import QUESTIONS_DATABASE from './questions.json';
import React, { useState, useEffect } from 'react';

// ==========================================
// DATABASE 60 SOAL MANAJEMEN PROYEK (MPSI)
// ==========================================
;

const MATERI_KILAT_UTS = [
  {
    "title": "Level 1 (Pertemuan 1 & 2): Konsep Dasar & Kelompok Proses",
    "points": [
      "Proyek bersifat dinamis, non-rutin, relatif pendek, memiliki jadwal tetap, dan kebutuhan sumber daya berubah-ubah (5M).",
      "Proyek internal (swakelola) dikerjakan langsung tanpa melalui proses tender/lelang kompetitif.",
      "5 Kelompok Proses (Process Groups): Initiating, Planning, Executing, Monitoring & Controlling, dan Closing, dengan total 47 proses PMBOK Edisi 5.",
      "Project Integration Management memiliki 6 proses utama berdasarkan PMBOK Edisi 5.",
      "Create WBS adalah menjabarkan scope statement menjadi susunan deliverable hierarkis yang mudah dikelola."
    ]
  },
  {
    "title": "Level 2 (Pertemuan 3 & 4): Inisiasi, Project Charter & Scope",
    "points": [
      "Inisiasi memiliki 2 proses utama: Develop Project Charter (Project Definition) dan Identify Stakeholders.",
      "Tujuan pelaksanaan proyek (Executing) adalah mengoordinasikan staf dan sumber daya guna merealisasikan rencana manajemen proyek.",
      "Work Result Guideline digunakan untuk memandu hasil pekerjaan proyek agar tetap sesuai standar saat eksekusi.",
      "Problem Statement mendokumentasikan masalah bisnis secara kuantitatif berdasarkan pengukuran nyata.",
      "Timeline (lini waktu) dalam Project Charter menjelaskan target tanggal penyelesaian setiap fase proyek.",
      "Scope (ruang lingkup) mendefinisikan batasan kerja: apa yang masuk (in-scope) dan apa yang keluar/tidak termasuk (out-of-scope)."
    ]
  },
  {
    "title": "Level 3 (Pertemuan 5 & 6): Estimasi Biaya & SDM Proyek",
    "points": [
      "Teknik estimasi biaya MPSI terdiri dari 3 metode: Analogous (Top-Down), Bottom-Up, dan Parametric Modeling.",
      "Performa bermasalah jika indeks kinerja biaya (CPI) dan jadwal (SPI) kurang dari atau sama dengan 100% (1.0).",
      "Actual Cost (AC) adalah biaya total yang dihabiskan. Planned Value (PV) adalah anggaran disetujui yang direncanakan untuk aktivitas.",
      "Organisasi Proyek (OP) Murni memisahkan tim proyek secara mandiri, memberikan otoritas mutlak kepada Manajer Proyek.",
      "OP Fungsional mengelompokkan staf berdasarkan fungsi spesialisasi divisi dengan jalur komando hierarki vertikal."
    ]
  }
];

const MATERI_KILAT_UAS = [
  {
    "title": "Level 1 (Pertemuan 9): Pengadaan & Risiko Proyek",
    "points": [
      "Departemen Pengadaan (Procurement) sering kali dinamakan Departemen Pembelian (Purchasing Department) di perusahaan.",
      "Project Procurement Management adalah bidang yang mengatur pembelian/pengadaan barang dan jasa dari luar secara formal.",
      "Risiko sehubungan dengan batasan yang dibebankan oleh manajemen atau pasar termasuk ke dalam kategori Pengaruh Bisnis (Business Influence).",
      "Manajemen Risiko Proyek terdiri dari 6 proses utama berdasarkan PMBOK Edisi 5."
    ]
  },
  {
    "title": "Level 2 (Pertemuan 10): Siklus Hidup & Penerapan SDLC",
    "points": [
      "Fase rekayasa sistem/software (SDLC) seperti coding, pengujian, dan penataan program dilaksanakan pada tahap pelaksanaan proyek (Executing).",
      "Perancangan sistem berkonsentrasi pada bagaimana sistem dibangun (how) untuk memenuhi kebutuhan pada fase Design.",
      "PLC stands for Project Life Cycle (Siklus Hidup Proyek).",
      "Metode konversi serentak (direct cutover) menghentikan sistem lama seketika dan langsung mengaktifkan sistem baru.",
      "Kelayakan jadwal (schedule feasibility) menganalisis batasan waktu penyusunan sistem."
    ]
  },
  {
    "title": "Level 3 (Pertemuan 14): Project Management Plan (PMP)",
    "points": [
      "PMP dirancang oleh Project Manager, ditandatangani Key Stakeholder sebagai otorisasi resmi baseline proyek.",
      "Tiga dokumen utama (Scope Statement, WBS, WBS Dictionary) menyusun Scope Baseline (acuan dasar ruang lingkup).",
      "Penyederhanaan PMP merujuk pada rumusan taktis 4W + 1H (What, Why, When, Who, How)."
    ]
  }
];

const COURSES = [
  { id: 'mpsi', name: 'Manajemen Proyek Sistem Informasi', code: 'MPSI', active: true },
  { id: 'soon1', name: 'Next Course', code: 'SOON', active: false },
  { id: 'soon2', name: 'Next Course', code: 'SOON', active: false },
  { id: 'soon3', name: 'Next Course', code: 'SOON', active: false }
];

const EXAM_TYPES = [
  { id: 'uts', name: 'UTS (Ujian Tengah Semester)', active: true },
  { id: 'uas', name: 'UAS (Ujian Akhir Semester)', active: true }
];

const Footer = () => (
  <footer className="app-footer">
    <div className="footer-content">
      <div className="footer-text">
        <span>Empowering IT Leaders to Achieve More | Crafted with passion by <strong>Darell Rangga</strong></span>
      </div>
      <div className="footer-links">
        <a href="https://www.darellrangga.me/" target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          darellrangga.me
        </a>
        <a href="mailto:darrelrangga@gmail.com">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          darrelrangga@gmail.com
        </a>
      </div>
    </div>
  </footer>
);

export default function CumlaudeArea() {
  const [view, setView] = useState('dashboard'); // 'dashboard', 'quiz', 'result', 'materi'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [unlockAll, setUnlockAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('mpsi');
  const [selectedExamType, setSelectedExamType] = useState('uts');
  const [selectedLevel, setSelectedLevel] = useState(null);

  // States for interactive features
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [expandedReview, setExpandedReview] = useState({});
  const [unlockedLevels, setUnlockedLevels] = useState(() => {
    const saved = localStorage.getItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`);
    return saved ? JSON.parse(saved) : [1];
  });

  // Local storage history state
  const [examHistory, setExamHistory] = useState(() => {
    const saved = localStorage.getItem('cumlaude_exam_history');
    return saved ? JSON.parse(saved) : [];
  });

  // Keep unlockedLevels in sync with selection
  useEffect(() => {
    const saved = localStorage.getItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`);
    setUnlockedLevels(saved ? JSON.parse(saved) : [1]);
  }, [selectedCourse, selectedExamType]);

  // Derived state for questions
  const activeQuestions = QUESTIONS_DATABASE.filter(
    q => q.course === selectedCourse && q.examType === selectedExamType && (selectedLevel !== null ? q.level === selectedLevel : true)
  );

  const totalExamQuestions = QUESTIONS_DATABASE.filter(
    q => q.course === selectedCourse && q.examType === selectedExamType
  ).length;

  const lvl1Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 1).length;
  const lvl2Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 2).length;
  const lvl3Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 3).length;

  // Countdown timer hook
  useEffect(() => {
    if (view !== 'quiz' || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setView('result');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  // Handle progressive level unlock and logging attempts upon reaching result page
  useEffect(() => {
    if (view === 'result') {
      const percentage = Math.round((score / activeQuestions.length) * 100);
      const isPassed = percentage >= 60;
      const attemptId = `attempt_${Date.now()}`;

      // Build attempt item
      const newAttempt = {
        id: attemptId,
        timestamp: new Date().toLocaleString('id-ID', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }),
        course: selectedCourse.toUpperCase(),
        examType: selectedExamType.toUpperCase(),
        level: selectedLevel !== null ? `Level ${selectedLevel}` : 'Semua Level',
        score: score,
        total: activeQuestions.length,
        percentage: percentage,
        passed: isPassed
      };

      // Push to history state safely preventing strict mode double execution
      setExamHistory(prev => {
        if (prev.some(item => item.id.split('_')[1] === attemptId.split('_')[1] || (Date.now() - parseInt(item.id.split('_')[1] || 0) < 1000))) {
          return prev;
        }
        const updated = [newAttempt, ...prev].slice(0, 10);
        localStorage.setItem('cumlaude_exam_history', JSON.stringify(updated));
        return updated;
      });

      // Auto unlock next level
      if (selectedLevel !== null && isPassed) {
        const nextLevel = selectedLevel + 1;
        if (nextLevel <= 3 && !unlockedLevels.includes(nextLevel)) {
          const updatedLevels = [...unlockedLevels, nextLevel];
          setUnlockedLevels(updatedLevels);
          localStorage.setItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`, JSON.stringify(updatedLevels));
        }
      }
    }
  }, [view]);

  const clearHistory = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua riwayat ujian?")) {
      setExamHistory([]);
      localStorage.removeItem('cumlaude_exam_history');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = (level = null) => {
    setSelectedLevel(level);
    setView('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExpandedReview({});
    
    const qCount = QUESTIONS_DATABASE.filter(
      q => q.course === selectedCourse && q.examType === selectedExamType && (level !== null ? q.level === level : true)
    ).length;

    // Scale timer difficulty based on level:
    // Level 1 = 60s/q, Level 2 = 45s/q, Level 3 = 30s/q, Full Exam (null) = 45s/q
    let secondsPerQuestion = 45;
    if (level === 1) secondsPerQuestion = 60;
    else if (level === 2) secondsPerQuestion = 45;
    else if (level === 3) secondsPerQuestion = 30;

    setTimeLeft(qCount * secondsPerQuestion);
  };

  const renderNavbar = (activeTab) => (
    <header className="navbar glass-panel">
      <div className="nav-left">
        <img src="/cumlaude_logo.png" alt="Cumlaude Area Logo" className="navbar-logo" />
        <div className="nav-titles">
          <span className="navbar-tagline">Manajemen Proyek SI</span>
        </div>
      </div>
      <div className="nav-center">
        <button className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}>Dashboard</button>
        <button className={`nav-btn ${activeTab === 'materi' ? 'active' : ''}`} onClick={() => setView('materi')}>Flashcards Belajar</button>
      </div>
      <div className="nav-right">
        <div className="user-info">
          <span className="user-role">Mahasiswa Aktif</span>
          <strong className="user-batch">BSI @ 2026</strong>
        </div>
      </div>
    </header>
  );

  const handleOptionClick = (optionIndex, isCorrect) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: optionIndex }));
    if (isCorrect) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setView('result');
    }
  };

  const toggleFlashcard = (idx) => {
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleReview = (idx) => {
    setExpandedReview(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Cumulative statistics calculations
  const passedCount = examHistory.filter(item => item.passed).length;
  const passingRate = examHistory.length > 0 ? Math.round((passedCount / examHistory.length) * 100) : 0;
  const avgScore = examHistory.length > 0 ? Math.round(examHistory.reduce((acc, item) => acc + item.percentage, 0) / examHistory.length) : 0;

  if (view === 'materi') {
    const activeMateri = selectedExamType === 'uts' ? MATERI_KILAT_UTS : MATERI_KILAT_UAS;
    return (
      <div className="app-container fade-in">
        {renderNavbar('materi')}

        <main className="quiz-main">
          <div className="materi-card glass-panel">
            <div className="materi-header">
              <h2>Flashcards Belajar Interaktif</h2>
              <p>Pilih dan klik kartu untuk membalik dan melihat ringkasan materi penting.</p>
            </div>
            
            <div className="flashcards-container">
              {activeMateri.map((materi, idx) => (
                <div key={idx} className="flashcard-wrapper" onClick={() => toggleFlashcard(idx)}>
                  <div className={`flashcard ${flippedCards[idx] ? 'flipped' : ''}`}>
                    <div className="flashcard-face flashcard-front">
                      <h3>{materi.title}</h3>
                      <p style={{ marginTop: '15px', color: '#3b82f6', fontWeight: '500' }}>Klik untuk Membalik ➔</p>
                    </div>
                    <div className="flashcard-face flashcard-back">
                      <h4>{materi.title}</h4>
                      <ul>
                        {materi.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-actions" style={{marginTop: '40px', alignItems: 'center'}}>
              <button className="btn-primary" onClick={() => startQuiz(null)}>Sudah Paham, Mulai Ujian ➔</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'quiz') {
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
    
    return (
      <div className="app-container fade-in">
        <header className="navbar glass-panel">
          <div className="nav-left">
            <img src="/cumlaude_logo.png" alt="Cumlaude Area Logo" className="navbar-logo" />
            <div className="nav-titles">
              <span className="navbar-tagline">Simulasi Ujian MPSI</span>
            </div>
          </div>
          <div className="nav-center" style={{ gap: '15px' }}>
            <div className={`timer-badge ${timeLeft < 5 * 60 ? 'warning' : ''}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <button className="btn-outline" onClick={() => setView('dashboard')}>Kembali</button>
        </header>
        
        <main className="quiz-main">
          <div className="quiz-card glass-panel">
            <div className="quiz-header">
              <span className="category-badge">{currentQuestion.category}</span>
              <span className="question-tracker">Soal {currentQuestionIndex + 1} / {activeQuestions.length}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <h2 className="question-text">{currentQuestion.question}</h2>
            
            <div className="options-grid">
              {currentQuestion.options.map((option, idx) => {
                let optClass = "option-btn";
                if (isAnswered) {
                  if (option.isCorrect) optClass += " correct";
                  else if (idx === selectedOption) optClass += " incorrect";
                }
                return (
                  <button key={idx} className={optClass} onClick={() => handleOptionClick(idx, option.isCorrect)} disabled={isAnswered}>
                    {option.text}
                  </button>
                );
              })}
            </div>
            
            {isAnswered && (
              <div className="feedback-box fade-in">
                <p><strong>Penjelasan:</strong> {currentQuestion.options[selectedOption]?.rationale || currentQuestion.options.find(o=>o.isCorrect).rationale}</p>
                <button className="btn-primary" onClick={handleNextQuestion}>
                  {currentQuestionIndex === activeQuestions.length - 1 ? 'Selesai' : 'Lanjut ➔'}
                </button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'result') {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    const radius = 55;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="app-container fade-in">
        {renderNavbar('dashboard')}
        
        <main className="quiz-main" style={{ marginTop: '20px' }}>
          <div className="result-card glass-panel scale-up" style={{ width: '100%', maxWidth: '680px', margin: '0 auto' }}>
            
            <div className="progress-ring-container">
              <svg className="progress-ring" width="140" height="140">
                <circle
                  stroke="rgba(226, 232, 240, 0.8)"
                  strokeWidth="10"
                  fill="transparent"
                  r={radius}
                  cx="70"
                  cy="70"
                />
                <circle
                  className="progress-ring-circle"
                  stroke={percentage >= 60 ? '#10b981' : '#ef4444'}
                  strokeWidth="10"
                  fill="transparent"
                  r={radius}
                  cx="70"
                  cy="70"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
              <div className="progress-ring-text" style={{ color: percentage >= 60 ? '#10b981' : '#ef4444' }}>
                {percentage}%
              </div>
            </div>

            <h1 className="result-title-text" style={{ color: '#0f172a' }}>{percentage >= 60 ? 'Selamat, Anda Lulus!' : 'Coba Lagi, Tetap Semangat!'}</h1>
            <p style={{ marginTop: '10px' }}>
              Anda menjawab benar <strong>{score}</strong> dari <strong>{activeQuestions.length}</strong> soal.
            </p>

            <div className="result-actions">
              <button className="btn-outline" onClick={() => setView('dashboard')}>Ke Dashboard</button>
              <button className="btn-primary" onClick={() => startQuiz(selectedLevel)}>Ulangi Ujian</button>
            </div>

            {/* Detailed Review Section */}
            <div className="review-section">
              <h3 className="review-title">Tinjau Pembahasan Soal</h3>
              <div className="review-list">
                {activeQuestions.map((q, idx) => {
                  const userAnsIndex = userAnswers[idx];
                  const isUserCorrect = q.options[userAnsIndex]?.isCorrect || false;
                  const isExpanded = expandedReview[idx];
                  
                  return (
                    <div key={idx} className="review-item">
                      <div className="review-header" onClick={() => toggleReview(idx)}>
                        <div className="review-header-left">
                          <span className={`review-status-badge ${isUserCorrect ? 'correct' : 'incorrect'}`}>
                            {isUserCorrect ? 'Benar' : 'Salah'}
                          </span>
                          <span className="review-question-text">{idx + 1}. {q.question.substring(0, 75)}...</span>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{isExpanded ? '▲' : '▼'}</span>
                      </div>
                      
                      {isExpanded && (
                        <div className="review-body fade-in">
                          <p style={{ fontWeight: '600', marginBottom: '15px', color: '#0f172a' }}>{q.question}</p>
                          <div className="review-options-list">
                            {q.options.map((opt, oIdx) => {
                              let pillClass = "review-option-pill";
                              if (opt.isCorrect) {
                                pillClass += " correct-ans";
                              } else if (oIdx === userAnsIndex) {
                                pillClass += " user-incorrect-ans";
                              }
                              return (
                                <div key={oIdx} className={pillClass}>
                                  {opt.text}
                                  {opt.isCorrect && " ✓"}
                                  {oIdx === userAnsIndex && !opt.isCorrect && " ✗"}
                                </div>
                              );
                            })}
                          </div>
                          <div className="review-rationale-box">
                            <strong>Penjelasan:</strong> {q.options[userAnsIndex]?.rationale || q.options.find(o => o.isCorrect).rationale}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Dashboard Locking Indicators
  const isLvl2Locked = !unlockAll && !unlockedLevels.includes(2);
  const isLvl3Locked = !unlockAll && !unlockedLevels.includes(3);

  return (
    <div className="app-container fade-in">
      {/* Navbar */}
      {renderNavbar('dashboard')}

      {/* Main Content */}
      <main className="main-content">
        {/* Selection Panel (Mata Kuliah & Jenis Ujian) */}
        <div className="selection-panel glass-panel">
          <div className="exam-type-selector">
            {EXAM_TYPES.map(type => (
              <button 
                key={type.id} 
                className={`exam-type-btn ${selectedExamType === type.id ? 'active' : ''} ${!type.active ? 'disabled' : ''}`}
                disabled={!type.active}
                onClick={() => setSelectedExamType(type.id)}
              >
                {type.name} {!type.active && <span className="type-badge">Coming Soon</span>}
              </button>
            ))}
          </div>

          <div className="course-selector-container">
            <h4>Pilih Mata Kuliah:</h4>
            <div className="course-grid">
              {COURSES.map(course => (
                <button
                  key={course.id}
                  className={`course-card-btn ${selectedCourse === course.id ? 'active' : ''} ${!course.active ? 'disabled' : ''}`}
                  disabled={!course.active}
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <span className="course-code">{course.code}</span>
                  <span className="course-name">{course.name}</span>
                  {!course.active && <span className="course-badge">Coming Soon</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-section glass-panel" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)' }}>
          <div className="hero-content">
            <span className="badge">Sistem Simulasi {selectedExamType.toUpperCase()} MPSI Resmi</span>
            <h2 className="hero-title">Optimalkan Nilai {selectedExamType.toUpperCase()} Manajemen Proyek</h2>
            <p className="hero-desc">
              Uji pemahaman Anda terhadap PMBOK Edisi 5, modul BSI, perhitungan biaya Earned Value, dekomposisi WBS, dan penataan organisasi sistem informasi melalui {totalExamQuestions} soal terstandarisasi.
            </p>
          </div>
          <div className="hero-actions">
            <button className="btn-outline" onClick={() => setView('materi')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              Materi Kilat
            </button>
            <button className="btn-primary" onClick={() => startQuiz(null)}>
              Mulai Ujian
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card glass-card">
            <span className="stat-label">Total Database Soal</span>
            <strong className="stat-value">{totalExamQuestions} Soal</strong>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-label">Durasi Penuh {selectedExamType.toUpperCase()}</span>
            <strong className="stat-value green-text">{selectedExamType === 'uts' ? '60' : '30'} Menit</strong>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-label">Tingkatan Kesulitan</span>
            <strong className="stat-value purple-text">3 Level</strong>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-label">Aturan Kelulusan</span>
            <strong className="stat-value orange-text">Skor &gt;= 60</strong>
          </div>
        </div>

        {/* Cumulative Statistics & History Panels */}
        <div className="cumulative-stats-container">
          <div className="cumulative-stat-card glass-card">
            <span className="cum-stat-label">Total Ujian Diikuti</span>
            <strong className="cum-stat-value">{examHistory.length} Kali</strong>
          </div>
          <div className="cumulative-stat-card glass-card">
            <span className="cum-stat-label">Rata-Rata Skor</span>
            <strong className="cum-stat-value" style={{ color: avgScore >= 60 ? '#10b981' : '#ef4444' }}>{avgScore}%</strong>
          </div>
          <div className="cumulative-stat-card glass-card">
            <span className="cum-stat-label">Rasio Kelulusan</span>
            <strong className="cum-stat-value" style={{ color: passingRate >= 60 ? '#10b981' : '#ef4444' }}>{passingRate}%</strong>
          </div>
        </div>

        {/* Levels Section */}
        <div className="levels-header">
          <div className="levels-title-area">
            <h3>Tingkat Level Ujian</h3>
            <p>Selesaikan satu tingkat untuk membuka tingkat berikutnya, atau toggle Buka Semua Ujian.</p>
          </div>
          <div className="toggle-wrapper">
            <span>Buka Semua Level:</span>
            <label className="switch">
              <input type="checkbox" checked={unlockAll} onChange={(e) => setUnlockAll(e.target.checked)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="levels-grid">
          <div className="level-card glass-card">
            <div className="level-head">
              <h4>Level 1 - Inisiasi</h4>
              <span className="level-count">{lvl1Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Konsep Dasar, Proyek, dan Kelompok Proses.' 
                : 'Departemen Pengadaan, Procurement, dan Risiko Proyek.'}
            </p>
            <button className="btn-level outline" onClick={() => startQuiz(1)}>Mulai Level 1</button>
          </div>
          
          <div className={"level-card glass-card " + (isLvl2Locked ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 2 - Eksekusi</h4>
              <span className="level-count">{lvl2Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Inisiasi, Sasaran Proyek, Project Charter, dan Scope.' 
                : 'Siklus Hidup Proyek (PLC) dan Penerapan SDLC.'}
            </p>
            <button className="btn-level outline" disabled={isLvl2Locked} onClick={() => startQuiz(2)}>
              {isLvl2Locked ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Terkunci
                </span>
              ) : 'Mulai Level 2'}
            </button>
          </div>

          <div className={"level-card glass-card " + (isLvl3Locked ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 3 - Penutupan</h4>
              <span className="level-count">{lvl3Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Estimasi Biaya (Analogous, Bottom-Up, Parametric), EVM, dan Struktur Organisasi.' 
                : 'Project Management Plan (PMP), Scope Baseline, dan 4W+1H.'}
            </p>
            <button className="btn-level outline" disabled={isLvl3Locked} onClick={() => startQuiz(3)}>
              {isLvl3Locked ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Terkunci
                </span>
              ) : 'Mulai Level 3'}
            </button>
          </div>
        </div>

        {/* History Table */}
        <div className="history-section">
          <div className="history-card glass-panel">
            <div className="history-title-area">
              <h3>Riwayat Ujian Terakhir</h3>
              {examHistory.length > 0 && (
                <button className="btn-danger-outline" onClick={clearHistory}>
                  Hapus Riwayat
                </button>
              )}
            </div>
            
            <div className="history-table-wrapper">
              {examHistory.length === 0 ? (
                <div className="no-history-text">
                  Belum ada riwayat ujian. Selesaikan ujian pertama Anda untuk melihat statistik!
                </div>
              ) : (
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Mata Kuliah</th>
                      <th>Tipe</th>
                      <th>Tingkat</th>
                      <th>Skor</th>
                      <th>Persentase</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examHistory.map((item) => (
                      <tr key={item.id}>
                        <td>{item.timestamp}</td>
                        <td><strong>{item.course}</strong></td>
                        <td>{item.examType}</td>
                        <td>{item.level}</td>
                        <td>{item.score} / {item.total}</td>
                        <td>{item.percentage}%</td>
                        <td>
                          <span className={`badge-status ${item.passed ? 'lulus' : 'gagal'}`}>
                            {item.passed ? 'Lulus' : 'Gagal'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
