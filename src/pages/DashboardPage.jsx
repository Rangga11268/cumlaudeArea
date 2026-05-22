import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WeakTopicsAlert from '../components/WeakTopicsAlert';
import CustomExamCreator from '../components/CustomExamCreator';
import { COURSES, EXAM_TYPES, PRACTICE_MEETINGS } from '../data/constants';

const DashboardPage = ({
  selectedCourse,
  setSelectedCourse,
  selectedExamType,
  setSelectedExamType,
  totalExamQuestions,
  lvl1Count,
  lvl2Count,
  lvl3Count,
  examHistory,
  avgScore,
  passingRate,
  passedCount,
  unlockAll,
  setUnlockAll,
  unlockedLevels,
  wrongQuestions,
  bookmarkedQuestions,
  startQuiz,
  startPractice,
  startWrongQuestionsPractice,
  startBookmarkedQuestionsPractice,
  startCustomExam,
  findQuestionById,
  getWeakTopics,
  customConfig,
  setCustomConfig,
  clearHistory,
  setView,
  theme,
  toggleTheme
}) => {
  const isLvl2Locked = !unlockAll && !unlockedLevels.includes(2);
  const isLvl3Locked = !unlockAll && !unlockedLevels.includes(3);

  return (
    <div className="app-container fade-in">
      <Navbar activeTab="dashboard" setView={setView} theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        {/* Weak Topics Alert - only shown if there are wrong questions */}
        <WeakTopicsAlert
          wrongQuestions={wrongQuestions}
          bookmarkedQuestions={bookmarkedQuestions}
          findQuestionById={findQuestionById}
          startWrongQuestionsPractice={startWrongQuestionsPractice}
          startBookmarkedQuestionsPractice={startBookmarkedQuestionsPractice}
          getWeakTopics={getWeakTopics}
        />

        {/* Selection Panel */}
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

        {/* Hero Section */}
        <div className="hero-section glass-panel" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)' }}>
          <div className="hero-content">
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="badge">Sistem Simulasi {selectedExamType.toUpperCase()} MPSI Resmi</span>
              <span
                className="badge version-badge"
                style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.15)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                onClick={() => setView('changelog')}
              >
                v1.5.0 (Terbaru)
              </span>
            </div>
            <h2 className="hero-title">Optimalkan Nilai {selectedExamType.toUpperCase()} Manajemen Proyek</h2>
            <p className="hero-desc">
              Uji pemahaman Anda terhadap PMBOK Edisi 5, modul BSI, perhitungan biaya Earned Value, dekomposisi WBS, dan penataan organisasi sistem informasi melalui {totalExamQuestions} soal terstandarisasi.
            </p>
          </div>
          <div className="hero-actions">
            <button className="btn-outline" onClick={() => setView('materi')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              Materi Kilat
            </button>
            <button className="btn-primary" onClick={() => startQuiz(null)}>
              Mulai Ujian
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
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
            <strong className="stat-value orange-text">Skor &ge; 60</strong>
          </div>
        </div>

        {/* Cumulative Statistics */}
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
              <h4>Level 1 - Mudah</h4>
              <span className="level-count">{lvl1Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts'
                ? 'Konsep Dasar Proyek, Kelompok Proses (PMBOK), & Otorisasi Project Charter (P1-P3).'
                : 'Manajemen Pengadaan, Tipe Kontrak, & Manajemen Risiko Proyek (P9, P11).'}
            </p>
            <button className="btn-level outline" onClick={() => startQuiz(1)}>Mulai Level 1</button>
          </div>

          <div className={`level-card glass-card ${isLvl2Locked ? 'locked' : ''}`}>
            <div className="level-head">
              <h4>Level 2 - Sedang</h4>
              <span className="level-count">{lvl2Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts'
                ? 'Manajemen Scope, WBS, & Work Package (P4).'
                : 'Analisis Kelayakan, Ketergantungan PDM/ADM & CPM Jalur Kritis (P10-P12).'}
            </p>
            <button className="btn-level outline" disabled={isLvl2Locked} onClick={() => startQuiz(2)}>
              {isLvl2Locked ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Terkunci
                </span>
              ) : 'Mulai Level 2'}
            </button>
          </div>

          <div className={`level-card glass-card ${isLvl3Locked ? 'locked' : ''}`}>
            <div className="level-head">
              <h4>Level 3 - Sulit</h4>
              <span className="level-count">{lvl3Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts'
                ? 'Teknik Estimasi Biaya, EVM (Earned Value), & Struktur Organisasi Proyek (P5-P6).'
                : 'Lag/Lead & Kompresi, Konversi Sistem, PMP (4W+1H), & Penutupan Proyek (P10, P12-P14).'}
            </p>
            <button className="btn-level outline" disabled={isLvl3Locked} onClick={() => startQuiz(3)}>
              {isLvl3Locked ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Terkunci
                </span>
              ) : 'Mulai Level 3'}
            </button>
          </div>
        </div>

        {/* Custom Exam Creator */}
        <CustomExamCreator
          customConfig={customConfig}
          setCustomConfig={setCustomConfig}
          startCustomExam={startCustomExam}
        />

        {/* Interactive Tools Section */}
        <div className="tools-banner-container glass-panel" style={{
          marginTop: '25px',
          marginBottom: '25px',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          padding: '22px 25px',
          borderRadius: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(37,99,235,0.12)', color: 'var(--primary-blue)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '10px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="9" x2="15" y2="9"/>
                <line x1="9" y1="13" x2="15" y2="13"/>
                <line x1="9" y1="17" x2="15" y2="17"/>
              </svg>
              ALAT BANTU &amp; SOLVER MPSI
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-strong)', marginBottom: '8px' }}>Kalkulator EVM &amp; PERT Interaktif</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-darker)', margin: 0, lineHeight: '1.5' }}>
              Hitung cepat metrik kinerja proyek seperti <strong>SPI, CPI, EV, PV, AC, CV, SV</strong> serta probabilitas durasi <strong>PERT</strong>. Lengkap dengan penjelasan langkah demi langkah dan <strong>Pencari Variabel (Rumus Balik)</strong> untuk persiapan UTS/UAS MPSI!
            </p>
          </div>
          <button 
            className="btn-primary" 
            onClick={() => setView('calculator')}
            style={{
              padding: '12px 24px',
              fontSize: '0.95rem',
              fontWeight: '600',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
              flexShrink: 0,
              cursor: 'pointer'
            }}
          >
            Buka Kalkulator MPSI
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Latihan per Pertemuan */}
        <div className="practice-section-header">
          <h3>Latihan per Pertemuan &amp; Kuis</h3>
          <p>Lakukan latihan mandiri untuk memantapkan pemahaman per bab pertemuan kuliah atau kuis kelas.</p>
        </div>

        <div className="practice-grid">
          {PRACTICE_MEETINGS.map((meeting) => {
            const isQuiz = meeting.type === 'kuis';
            const isActive = meeting.active;

            let cardClass = "practice-card glass-card";
            if (isQuiz) cardClass += " special-kuis";
            if (!isActive) cardClass += " inactive";

            return (
              <div key={meeting.num} className={cardClass}>
                <div className="practice-card-badge">
                  {isQuiz ? (
                    <span className="badge-kuis">Kuis Kelas</span>
                  ) : (
                    <span className="badge-pertemuan">Pertemuan {meeting.num}</span>
                  )}
                </div>
                <h4 className="practice-card-title">{meeting.title}</h4>
                <div className="practice-card-footer">
                  {isActive ? (
                    <>
                      <span className="practice-qcount">{meeting.qCount} Soal</span>
                      <button className="btn-practice-start" onClick={() => startPractice(meeting.type, meeting.num)}>
                        Mulai Latihan
                      </button>
                    </>
                  ) : (
                    <span className="practice-inactive-label">{meeting.label || 'Tugas Mandiri'}</span>
                  )}
                </div>
              </div>
            );
          })}
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

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '10px' }}>
              <button className="btn-practice-start" style={{ padding: '8px 18px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setView('changelog')}>
                Lihat Log Pembaruan Aplikasi (Changelog v1.5.0)
              </button>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
