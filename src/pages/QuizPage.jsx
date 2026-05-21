import React from 'react';
import Footer from '../components/Footer';

const QuizPage = ({
  activeQuestions,
  currentQuestionIndex,
  selectedOption,
  isAnswered,
  timeLeft,
  isPracticeMode,
  bookmarkedQuestions,
  toggleBookmark,
  handleOptionClick,
  handleNextQuestion,
  setView,
  startPractice,
  startQuiz,
  practiceType,
  practiceNum,
  selectedLevel,
  formatTime
}) => {
  const currentQuestion = activeQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  const handleExitQuiz = () => {
    if (window.confirm("Apakah Anda yakin ingin membatalkan simulasi ujian? Semua progres pengerjaan Anda pada sesi ini akan hilang.")) {
      setView('dashboard');
    }
  };

  const chosenOption = currentQuestion.options[selectedOption];
  const isCorrectAnswer = chosenOption?.isCorrect;

  return (
    <div className="app-container fade-in">
      <header className="navbar glass-panel">
        <div className="nav-left">
          <img src="/cumlaude_logo.png" alt="Cumlaude Area Logo" className="navbar-logo" />
          <div className="nav-titles">
            <span className="navbar-tagline">{isPracticeMode ? 'Latihan Mandiri MPSI' : 'Simulasi Ujian MPSI'}</span>
          </div>
        </div>
        <div className="nav-center" style={{ gap: '15px' }}>
          <div className={`timer-badge ${timeLeft < 5 * 60 ? 'warning' : ''}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
        <button className="btn-outline" onClick={handleExitQuiz}>Kembali</button>
      </header>

      <main className="quiz-main">
        <div className="quiz-card glass-panel">
          <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="category-badge">{currentQuestion.category}</span>
              <span className="question-tracker" style={{ marginLeft: '10px' }}>Soal {currentQuestionIndex + 1} / {activeQuestions.length}</span>
            </div>
            <button
              className={`bookmark-star-btn ${bookmarkedQuestions.includes(String(currentQuestion.id)) ? 'bookmarked' : ''}`}
              onClick={() => toggleBookmark(currentQuestion.id)}
              title={bookmarkedQuestions.includes(String(currentQuestion.id)) ? "Hapus dari Favorit" : "Tandai Soal (Favorit)"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24"
                fill={bookmarkedQuestions.includes(String(currentQuestion.id)) ? 'currentColor' : 'none'}
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
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
                  <span className="option-letter">{optionLetters[idx]}</span>
                  <span className="option-text">{option.text}</span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`feedback-box fade-in ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
              <div className="feedback-status-row">
                {isCorrectAnswer ? (
                  <span className="feedback-status-badge correct">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Jawaban Anda Benar!
                  </span>
                ) : (
                  <span className="feedback-status-badge incorrect">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    Jawaban Kurang Tepat!
                  </span>
                )}
              </div>
              <p style={{ marginTop: '10px' }}>
                <strong>Penjelasan:</strong> {chosenOption?.rationale || currentQuestion.options.find(o => o.isCorrect).rationale}
              </p>
              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn-primary" onClick={handleNextQuestion}>
                  {currentQuestionIndex === activeQuestions.length - 1 ? 'Selesai' : 'Lanjut \u279C'}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
