import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MATERI_KILAT_UTS, MATERI_KILAT_UAS } from '../data/constants';

const MateriPage = ({
  selectedExamType,
  flashcardLevelFilter,
  setFlashcardLevelFilter,
  flashcardSearchQuery,
  setFlashcardSearchQuery,
  flippedCards,
  studiedCards,
  toggleFlashcard,
  toggleCardStudied,
  startQuiz,
  setView,
  theme,
  toggleTheme
}) => {
  const baseMateri = selectedExamType === 'uts' ? MATERI_KILAT_UTS : MATERI_KILAT_UAS;

  let filteredMateri = baseMateri;
  if (flashcardLevelFilter !== 'all') {
    const targetLevel = parseInt(flashcardLevelFilter, 10);
    filteredMateri = filteredMateri.filter(m => m.level === targetLevel);
  }
  if (flashcardSearchQuery.trim() !== '') {
    const query = flashcardSearchQuery.toLowerCase();
    filteredMateri = filteredMateri.filter(m =>
      m.title.toLowerCase().includes(query) ||
      m.points.some(p => p.toLowerCase().includes(query))
    );
  }

  const totalMateriCount = baseMateri.length;
  const studiedMateriCount = baseMateri.filter(m => studiedCards.includes(m.id)).length;
  const studiedPercentage = totalMateriCount > 0 ? Math.round((studiedMateriCount / totalMateriCount) * 100) : 0;

  return (
    <div className="app-container fade-in">
      <Navbar activeTab="materi" setView={setView} theme={theme} toggleTheme={toggleTheme} />

      <main className="quiz-main">
        <div className="materi-card glass-panel">
          <div className="materi-header">
            <span className="category-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>
              Mode Belajar: {selectedExamType.toUpperCase()} MPSI
            </span>
            <h2>Flashcards Belajar Interaktif</h2>
            <p>Gunakan kartu belajar di bawah ini untuk meninjau ringkasan materi penting sebelum memulai simulasi ujian.</p>
          </div>

          {/* Progress Tracker */}
          <div className="flashcard-progress-section glass-card">
            <div className="progress-info">
              <div className="progress-text-group">
                <span className="progress-label">Progress Belajar Anda:</span>
                <strong className="progress-value">{studiedMateriCount} dari {totalMateriCount} Kartu Dipelajari</strong>
              </div>
              <span className="progress-percentage">{studiedPercentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${studiedPercentage}%` }}></div>
            </div>
          </div>

          {/* Controls: Filter & Search */}
          <div className="flashcard-controls">
            <div className="filter-tabs">
              <button className={`filter-tab ${flashcardLevelFilter === 'all' ? 'active' : ''}`} onClick={() => setFlashcardLevelFilter('all')}>Semua</button>
              <button className={`filter-tab ${flashcardLevelFilter === '1' ? 'active' : ''}`} onClick={() => setFlashcardLevelFilter('1')}>Level 1 (Mudah)</button>
              <button className={`filter-tab ${flashcardLevelFilter === '2' ? 'active' : ''}`} onClick={() => setFlashcardLevelFilter('2')}>Level 2 (Sedang)</button>
              <button className={`filter-tab ${flashcardLevelFilter === '3' ? 'active' : ''}`} onClick={() => setFlashcardLevelFilter('3')}>Level 3 (Sulit)</button>
            </div>

            <div className="search-bar-container">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Cari materi..."
                className="flashcard-search"
                value={flashcardSearchQuery}
                onChange={(e) => setFlashcardSearchQuery(e.target.value)}
              />
              {flashcardSearchQuery && (
                <button className="clear-search-btn" onClick={() => setFlashcardSearchQuery('')}>
                  &#xD7;
                </button>
              )}
            </div>
          </div>

          {/* Flashcards Grid */}
          {filteredMateri.length === 0 ? (
            <div className="no-materi-results glass-card">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '15px' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <h3>Materi tidak ditemukan</h3>
              <p>Tidak ada kartu belajar yang cocok dengan filter atau kata kunci pencarian Anda.</p>
              <button className="btn-outline" style={{ marginTop: '15px', padding: '8px 16px', fontSize: '0.9rem' }}
                onClick={() => { setFlashcardSearchQuery(''); setFlashcardLevelFilter('all'); }}>
                Reset Filter &amp; Pencarian
              </button>
            </div>
          ) : (
            <div className="flashcards-container">
              {filteredMateri.map((materi) => {
                const isFlipped = !!flippedCards[materi.id];
                const isStudied = studiedCards.includes(materi.id);

                let levelText = "Level 1 - Mudah";
                let levelClass = "level-1-accent";
                if (materi.level === 2) { levelText = "Level 2 - Sedang"; levelClass = "level-2-accent"; }
                else if (materi.level === 3) { levelText = "Level 3 - Sulit"; levelClass = "level-3-accent"; }

                return (
                  <div key={materi.id} className="flashcard-wrapper" onClick={() => toggleFlashcard(materi.id)}>
                    <div className={`flashcard ${isFlipped ? 'flipped' : ''} ${levelClass} ${isStudied ? 'studied-card' : ''}`}>
                      {/* FRONT */}
                      <div className="flashcard-face flashcard-front">
                        <div className="flashcard-badge-row">
                          <span className={`card-level-badge ${levelClass}`}>{levelText}</span>
                          {isStudied && <span className="studied-badge">&#x2713; Dipelajari</span>}
                        </div>
                        <div className="card-front-content">
                          <h3>{materi.title}</h3>
                          <p className="tap-hint">Klik untuk Membalik &#x27A4;</p>
                        </div>
                        <div className="card-action-row">
                          <button
                            className={`btn-studied-toggle ${isStudied ? 'studied' : ''}`}
                            onClick={(e) => toggleCardStudied(materi.id, e)}
                          >
                            {isStudied ? '&#x2713; Sudah Dipelajari' : 'Tandai Sudah Dipelajari'}
                          </button>
                        </div>
                      </div>
                      {/* BACK */}
                      <div className="flashcard-face flashcard-back">
                        <div className="flashcard-badge-row">
                          <span className={`card-level-badge ${levelClass}`}>{levelText}</span>
                          {isStudied && <span className="studied-badge">&#x2713; Dipelajari</span>}
                        </div>
                        <div className="card-back-content">
                          <h4>{materi.title}</h4>
                          <ul>
                            {materi.points.map((point, pIdx) => (
                              <li key={pIdx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="card-action-row">
                          <button
                            className={`btn-studied-toggle ${isStudied ? 'studied' : ''}`}
                            onClick={(e) => toggleCardStudied(materi.id, e)}
                          >
                            {isStudied ? '&#x2713; Sudah Dipelajari' : 'Tandai Sudah Dipelajari'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="hero-actions" style={{ marginTop: '45px', alignItems: 'center' }}>
            <button className="btn-primary" onClick={() => startQuiz(null)}>Sudah Paham, Mulai Ujian &#x279C;</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MateriPage;
