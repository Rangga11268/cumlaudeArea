import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResultPage = ({
  score,
  activeQuestions,
  userAnswers,
  bookmarkedQuestions,
  toggleBookmark,
  expandedReview,
  toggleReview,
  isPracticeMode,
  practiceType,
  practiceNum,
  selectedLevel,
  startQuiz,
  startPractice,
  setView,
  theme,
  toggleTheme
}) => {
  const percentage = Math.round((score / activeQuestions.length) * 100);
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="app-container fade-in">
      <Navbar activeTab="dashboard" setView={setView} theme={theme} toggleTheme={toggleTheme} />

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

          {/* Fixed: use CSS var instead of hardcoded #0f172a */}
          <h1 className="result-title-text" style={{ color: 'var(--text-strong)' }}>
            {percentage >= 60 ? 'Selamat, Anda Lulus!' : 'Coba Lagi, Tetap Semangat!'}
          </h1>
          <p style={{ marginTop: '10px' }}>
            Anda menjawab benar <strong>{score}</strong> dari <strong>{activeQuestions.length}</strong> soal.
          </p>

          <div className="result-actions">
            <button className="btn-outline" onClick={() => setView('dashboard')}>Ke Dashboard</button>
            <button className="btn-primary" onClick={() => isPracticeMode ? startPractice(practiceType, practiceNum) : startQuiz(selectedLevel)}>
              {isPracticeMode ? 'Ulangi Latihan' : 'Ulangi Ujian'}
            </button>
          </div>

          {/* Detailed Review */}
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
                      <div className="review-header-left" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
                        <span className={`review-status-badge ${isUserCorrect ? 'correct' : 'incorrect'}`}>
                          {isUserCorrect ? 'Benar' : 'Salah'}
                        </span>
                        <button
                          className={`bookmark-star-btn ${bookmarkedQuestions.includes(String(q.id)) ? 'bookmarked' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(q.id); }}
                          title="Tandai Soal (Favorit)"
                          style={{ padding: '2px', marginRight: '5px' }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24"
                            fill={bookmarkedQuestions.includes(String(q.id)) ? 'currentColor' : 'none'}
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        </button>
                        <span className="review-question-text">{idx + 1}. {q.question.substring(0, 70)}...</span>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{isExpanded ? '▲' : '▼'}</span>
                    </div>

                    {isExpanded && (
                      <div className="review-body fade-in">
                        {/* Fixed: use CSS var instead of hardcoded #0f172a */}
                        <p style={{ fontWeight: '600', marginBottom: '15px', color: 'var(--text-strong)' }}>{q.question}</p>
                        <div className="review-options-list">
                          {q.options.map((opt, oIdx) => {
                            let pillClass = "review-option-pill";
                            if (opt.isCorrect) pillClass += " correct-ans";
                            else if (oIdx === userAnsIndex) pillClass += " user-incorrect-ans";
                            return (
                              <div key={oIdx} className={pillClass}>
                                {opt.text}
                                {opt.isCorrect && " \u2713"}
                                {oIdx === userAnsIndex && !opt.isCorrect && " \u2717"}
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
};

export default ResultPage;
