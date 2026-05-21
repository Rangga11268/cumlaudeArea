import React from 'react';
import { PRACTICE_MEETINGS } from '../data/constants';

const WeakTopicsAlert = ({ wrongQuestions, bookmarkedQuestions, findQuestionById, startWrongQuestionsPractice, startBookmarkedQuestionsPractice, getWeakTopics }) => {
  if (wrongQuestions.length === 0) return null;

  const weakTopics = getWeakTopics();

  return (
    <div className="weak-topics-panel">
      <div className="weak-topics-content">
        <h4 className="weak-topics-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Peringatan Topik Lemah!
        </h4>
        <p className="weak-topics-desc">
          Berdasarkan hasil simulasi ujian, Anda terdeteksi memiliki kendala pada beberapa topik berikut. Direkomendasikan melakukan latihan perbaikan:
        </p>
        <div className="weak-topics-badges">
          {weakTopics.slice(0, 3).map((topic, tIdx) => (
            <span key={tIdx} className="weak-topic-badge">
              {topic.name} ({topic.count} Soal Salah)
            </span>
          ))}
        </div>
        <div className="weak-topics-actions">
          <button
            className="btn-practice-start"
            style={{ background: '#ef4444', color: 'white', borderColor: '#ef4444' }}
            onClick={startWrongQuestionsPractice}
          >
            Latihan Soal Salah ({wrongQuestions.length} Soal)
          </button>
          {bookmarkedQuestions.length > 0 && (
            <button className="btn-practice-start" onClick={startBookmarkedQuestionsPractice}>
              Latihan Soal Favorit ({bookmarkedQuestions.length} Soal)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeakTopicsAlert;
