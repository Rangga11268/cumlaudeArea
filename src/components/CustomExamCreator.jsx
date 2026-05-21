import React from 'react';
import { PRACTICE_MEETINGS } from '../data/constants';

const CustomExamCreator = ({ customConfig, setCustomConfig, startCustomExam }) => {
  const handleMeetingCheckboxChange = (num) => {
    setCustomConfig(prev => {
      const current = prev.selectedPertemuans;
      const updated = current.includes(num)
        ? current.filter(n => n !== num)
        : [...current, num];
      return { ...prev, selectedPertemuans: updated };
    });
  };

  const selectAllMeetings = () => {
    setCustomConfig(prev => ({
      ...prev,
      selectedPertemuans: PRACTICE_MEETINGS.filter(m => m.active).map(m => m.num)
    }));
  };

  const selectNoneMeetings = () => {
    setCustomConfig(prev => ({ ...prev, selectedPertemuans: [] }));
  };

  return (
    <div className="custom-exam-panel">
      <h3 className="custom-exam-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-blue)' }}>
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
        </svg>
        Pembuat Ujian Kustom (Custom Exam Creator)
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
        Rancang sesi ujian mandiri Anda sendiri. Pilih bab pertemuan yang ingin diujikan, tentukan jumlah soal, dan atur batas waktu pengerjaan.
      </p>

      <div className="custom-exam-grid">
        <div className="custom-exam-field">
          <label>Pilih Bab Pertemuan Kuliah:</label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <button className="btn-practice-start" style={{ padding: '4px 10px', fontSize: '0.75rem' }} onClick={selectAllMeetings}>Pilih Semua</button>
            <button className="btn-practice-start" style={{ padding: '4px 10px', fontSize: '0.75rem' }} onClick={selectNoneMeetings}>Kosongkan</button>
          </div>
          <div className="meeting-checkbox-grid">
            {PRACTICE_MEETINGS.filter(m => m.active).map(m => (
              <label key={m.num} className="meeting-checkbox-item">
                <input
                  type="checkbox"
                  checked={customConfig.selectedPertemuans.includes(m.num)}
                  onChange={() => handleMeetingCheckboxChange(m.num)}
                />
                <span>P{m.num} - {m.title}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="custom-exam-field">
            <label htmlFor="custom-qcount">Jumlah Pertanyaan:</label>
            <input
              id="custom-qcount"
              type="number"
              min="5"
              max="50"
              className="custom-exam-input"
              value={customConfig.questionCount}
              onChange={(e) => setCustomConfig(prev => ({ ...prev, questionCount: Math.max(5, parseInt(e.target.value) || 5) }))}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Minimal 5 soal, maksimal 50 soal.</span>
          </div>

          <div className="custom-exam-field">
            <label htmlFor="custom-time">Batas Waktu (Menit):</label>
            <input
              id="custom-time"
              type="number"
              min="5"
              max="120"
              className="custom-exam-input"
              value={customConfig.timeLimit}
              onChange={(e) => setCustomConfig(prev => ({ ...prev, timeLimit: Math.max(5, parseInt(e.target.value) || 5) }))}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Batas waktu pengerjaan simulasi ujian kustom.</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button className="btn-primary" onClick={startCustomExam}>
          Mulai Ujian Kustom &#x279C;
        </button>
      </div>
    </div>
  );
};

export default CustomExamCreator;
