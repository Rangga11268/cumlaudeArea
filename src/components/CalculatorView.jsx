import React from 'react';

const CalculatorView = ({ calcTab, setCalcTab, evmInputs, setEvmInputs, pertInputs, setPertInputs }) => {
  // EVM Calculations
  const pvVal = parseFloat(evmInputs.pv);
  const evVal = parseFloat(evmInputs.ev);
  const acVal = parseFloat(evmInputs.ac);
  const bacVal = parseFloat(evmInputs.bac);

  const isEvmValid = !isNaN(pvVal) && !isNaN(evVal) && !isNaN(acVal) && !isNaN(bacVal)
    && pvVal >= 0 && acVal >= 0 && evVal >= 0 && bacVal >= 0;

  let evm = { cv: 0, sv: 0, cpi: 0, spi: 0, eac: 0, etc: 0, tcpi: 0 };
  if (isEvmValid) {
    evm.cv = evVal - acVal;
    evm.sv = evVal - pvVal;
    evm.cpi = acVal === 0 ? 0 : evVal / acVal;
    evm.spi = pvVal === 0 ? 0 : evVal / pvVal;
    evm.eac = evm.cpi === 0 ? 0 : bacVal / evm.cpi;
    evm.etc = evm.eac - acVal;
    const tcpiDenom = bacVal - acVal;
    evm.tcpi = tcpiDenom <= 0 ? 0 : (bacVal - evVal) / tcpiDenom;
  }

  // PERT Calculations
  const oVal = parseFloat(pertInputs.o);
  const mVal = parseFloat(pertInputs.m);
  const pVal = parseFloat(pertInputs.p);

  const isPertValid = !isNaN(oVal) && !isNaN(mVal) && !isNaN(pVal)
    && oVal >= 0 && mVal >= oVal && pVal >= mVal;

  let pert = { te: 0, sd: 0, v: 0 };
  if (isPertValid) {
    pert.te = (oVal + 4 * mVal + pVal) / 6;
    pert.sd = (pVal - oVal) / 6;
    pert.v = pert.sd * pert.sd;
  }

  return (
    <div className="calc-container glass-panel" style={{ width: '100%', padding: '25px', borderRadius: '16px' }}>
      <span className="category-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>SOLVER PERHITUNGAN</span>
      <h2 style={{ marginBottom: '10px' }}>Kalkulator EVM dan PERT Interaktif</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '25px', fontSize: '0.95rem' }}>
        Alat bantu hitung otomatis rumus Manajemen Proyek Sistem Informasi. Masukkan variabel untuk melihat hasil kalkulasi instan beserta penjelasan matematisnya.
      </p>

      <div className="calc-tabs">
        <button
          className={`calc-tab-btn ${calcTab === 'evm' ? 'active' : ''}`}
          onClick={() => setCalcTab('evm')}
        >
          Earned Value Management (EVM)
        </button>
        <button
          className={`calc-tab-btn ${calcTab === 'pert' ? 'active' : ''}`}
          onClick={() => setCalcTab('pert')}
        >
          PERT (Program Evaluation &amp; Review Technique)
        </button>
      </div>

      {calcTab === 'evm' ? (
        <div className="calc-layout" style={{ marginTop: '25px' }}>
          <div className="calc-form-panel">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '15px', color: 'var(--text-strong)' }}>Input Parameter EVM</h3>

            <div className="calc-input-row">
              <div className="custom-exam-field">
                <label htmlFor="evm-pv">Planned Value (PV):</label>
                <input id="evm-pv" type="number" placeholder="Contoh: 100000" className="custom-exam-input"
                  value={evmInputs.pv} onChange={(e) => setEvmInputs(p => ({ ...p, pv: e.target.value }))} />
              </div>
              <div className="custom-exam-field">
                <label htmlFor="evm-ev">Earned Value (EV):</label>
                <input id="evm-ev" type="number" placeholder="Contoh: 90000" className="custom-exam-input"
                  value={evmInputs.ev} onChange={(e) => setEvmInputs(p => ({ ...p, ev: e.target.value }))} />
              </div>
            </div>

            <div className="calc-input-row">
              <div className="custom-exam-field">
                <label htmlFor="evm-ac">Actual Cost (AC):</label>
                <input id="evm-ac" type="number" placeholder="Contoh: 110000" className="custom-exam-input"
                  value={evmInputs.ac} onChange={(e) => setEvmInputs(p => ({ ...p, ac: e.target.value }))} />
              </div>
              <div className="custom-exam-field">
                <label htmlFor="evm-bac">Budget at Completion (BAC):</label>
                <input id="evm-bac" type="number" placeholder="Contoh: 200000" className="custom-exam-input"
                  value={evmInputs.bac} onChange={(e) => setEvmInputs(p => ({ ...p, bac: e.target.value }))} />
              </div>
            </div>

            <div className="calc-explanation-box" style={{ marginTop: '10px' }}>
              <h4>Keterangan Variabel:</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Planned Value (PV)</strong>: Anggaran yang direncanakan diselesaikan s/d tanggal evaluasi.</li>
                <li><strong>Earned Value (EV)</strong>: Nilai pekerjaan nyata yang berhasil diselesaikan s/d tanggal evaluasi.</li>
                <li><strong>Actual Cost (AC)</strong>: Pengeluaran biaya aktual untuk menyelesaikan pekerjaan s/d tanggal evaluasi.</li>
                <li><strong>Budget at Completion (BAC)</strong>: Total estimasi anggaran proyek keseluruhan.</li>
              </ul>
            </div>
          </div>

          <div className="calc-results-panel">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-strong)' }}>Hasil Analisis Kinerja Biaya &amp; Jadwal</h3>

            {!isEvmValid ? (
              <div className="flex-center" style={{ minHeight: '200px', flexDirection: 'column', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px' }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                Silakan isi semua parameter input di sebelah kiri dengan benar untuk menampilkan hasil perhitungan.
              </div>
            ) : (
              <>
                <div className="calc-result-metrics">
                  <div className="calc-result-card">
                    <span className="calc-result-label">Cost Variance (CV)</span>
                    <span className="calc-result-value">{evm.cv.toLocaleString('id-ID')}</span>
                    <span className={`calc-result-status ${evm.cv >= 0 ? 'calc-status-good' : 'calc-status-bad'}`}>
                      {evm.cv >= 0 ? 'Hemat (Under Budget)' : 'Boros (Over Budget)'}
                    </span>
                  </div>
                  <div className="calc-result-card">
                    <span className="calc-result-label">Schedule Variance (SV)</span>
                    <span className="calc-result-value">{evm.sv.toLocaleString('id-ID')}</span>
                    <span className={`calc-result-status ${evm.sv >= 0 ? 'calc-status-good' : 'calc-status-bad'}`}>
                      {evm.sv >= 0 ? 'Lebih Cepat (Ahead)' : 'Terlambat (Behind)'}
                    </span>
                  </div>
                  <div className="calc-result-card">
                    <span className="calc-result-label">CPI (Cost Performance Index)</span>
                    <span className="calc-result-value">{evm.cpi.toFixed(3)}</span>
                    <span className={`calc-result-status ${evm.cpi >= 1 ? 'calc-status-good' : 'calc-status-bad'}`}>
                      {evm.cpi >= 1 ? 'Efisien' : 'Tidak Efisien'}
                    </span>
                  </div>
                  <div className="calc-result-card">
                    <span className="calc-result-label">SPI (Schedule Perf. Index)</span>
                    <span className="calc-result-value">{evm.spi.toFixed(3)}</span>
                    <span className={`calc-result-status ${evm.spi >= 1 ? 'calc-status-good' : 'calc-status-bad'}`}>
                      {evm.spi >= 1 ? 'Efisien' : 'Tidak Efisien'}
                    </span>
                  </div>
                </div>

                <div className="calc-result-metrics" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                  <div className="calc-result-card">
                    <span className="calc-result-label">EAC (Estimate at Completion)</span>
                    <span className="calc-result-value">{Math.round(evm.eac).toLocaleString('id-ID')}</span>
                    <span className="calc-result-status calc-status-good" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--primary-blue)' }}>
                      Prakiraan Biaya Total
                    </span>
                  </div>
                  <div className="calc-result-card">
                    <span className="calc-result-label">TCPI (To-Complete PI)</span>
                    <span className="calc-result-value">{evm.tcpi.toFixed(3)}</span>
                    <span className="calc-result-status calc-status-good" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--primary-blue)' }}>
                      Kinerja Target
                    </span>
                  </div>
                </div>

                <div className="calc-explanation-box">
                  <h4>Penjelasan Langkah Perhitungan:</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                    <div>
                      <strong>1. Varian Biaya (Cost Variance):</strong>
                      <div className="calc-formula">CV = EV - AC</div>
                      <p>CV = {evVal.toLocaleString('id-ID')} - {acVal.toLocaleString('id-ID')} = <strong>{evm.cv.toLocaleString('id-ID')}</strong>. {evm.cv >= 0 ? 'Nilai positif menandakan biaya yang dikeluarkan masih di bawah anggaran.' : 'Nilai negatif menandakan adanya pemborosan anggaran (over budget).'}</p>
                    </div>
                    <div>
                      <strong>2. Varian Jadwal (Schedule Variance):</strong>
                      <div className="calc-formula">SV = EV - PV</div>
                      <p>SV = {evVal.toLocaleString('id-ID')} - {pvVal.toLocaleString('id-ID')} = <strong>{evm.sv.toLocaleString('id-ID')}</strong>. {evm.sv >= 0 ? 'Nilai positif menandakan kemajuan pengerjaan proyek mendahului rencana awal.' : 'Nilai negatif menandakan pengerjaan proyek terlambat (behind schedule).'}</p>
                    </div>
                    <div>
                      <strong>3. Indeks Kinerja Biaya (CPI):</strong>
                      <div className="calc-formula">CPI = EV / AC</div>
                      <p>CPI = {evVal.toLocaleString('id-ID')} / {acVal.toLocaleString('id-ID')} = <strong>{evm.cpi.toFixed(3)}</strong>. {evm.cpi >= 1 ? 'CPI >= 1 menandakan penggunaan biaya sangat efisien.' : 'CPI < 1 menandakan inefisiensi biaya (proyek berpotensi over budget).'}</p>
                    </div>
                    <div>
                      <strong>4. Indeks Kinerja Jadwal (SPI):</strong>
                      <div className="calc-formula">SPI = EV / PV</div>
                      <p>SPI = {evVal.toLocaleString('id-ID')} / {pvVal.toLocaleString('id-ID')} = <strong>{evm.spi.toFixed(3)}</strong>. {evm.spi >= 1 ? 'SPI >= 1 menandakan kemajuan jadwal efisien.' : 'SPI < 1 menandakan kecepatan pengerjaan proyek lambat dari rencana.'}</p>
                    </div>
                    <div>
                      <strong>5. Estimasi Biaya Akhir (EAC):</strong>
                      <div className="calc-formula">EAC = BAC / CPI</div>
                      <p>EAC = {bacVal.toLocaleString('id-ID')} / {evm.cpi.toFixed(3)} = <strong>{Math.round(evm.eac).toLocaleString('id-ID')}</strong>. Ini merupakan prediksi total biaya proyek pada saat selesai jika efisiensi biaya saat ini bertahan.</p>
                    </div>
                    <div>
                      <strong>6. Indeks Kinerja Target (TCPI):</strong>
                      <div className="calc-formula">TCPI = (BAC - EV) / (BAC - AC)</div>
                      <p>TCPI = ({bacVal.toLocaleString('id-ID')} - {evVal.toLocaleString('id-ID')}) / ({bacVal.toLocaleString('id-ID')} - {acVal.toLocaleString('id-ID')}) = <strong>{evm.tcpi.toFixed(3)}</strong>. Ini adalah efisiensi biaya yang harus dipertahankan s/d akhir proyek untuk dapat mencapai target anggaran BAC awal.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="calc-layout" style={{ marginTop: '25px' }}>
          <div className="calc-form-panel">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '15px', color: 'var(--text-strong)' }}>Input Parameter PERT</h3>

            <div className="custom-exam-field">
              <label htmlFor="pert-o">Optimistic Time (o):</label>
              <input id="pert-o" type="number" placeholder="Durasi tercepat (contoh: 4)" className="custom-exam-input"
                value={pertInputs.o} onChange={(e) => setPertInputs(p => ({ ...p, o: e.target.value }))} />
            </div>
            <div className="custom-exam-field">
              <label htmlFor="pert-m">Most Likely Time (m):</label>
              <input id="pert-m" type="number" placeholder="Durasi paling realistis (contoh: 7)" className="custom-exam-input"
                value={pertInputs.m} onChange={(e) => setPertInputs(p => ({ ...p, m: e.target.value }))} />
            </div>
            <div className="custom-exam-field">
              <label htmlFor="pert-p">Pessimistic Time (p):</label>
              <input id="pert-p" type="number" placeholder="Durasi terlama/terburuk (contoh: 16)" className="custom-exam-input"
                value={pertInputs.p} onChange={(e) => setPertInputs(p => ({ ...p, p: e.target.value }))} />
            </div>

            <div className="calc-explanation-box" style={{ marginTop: '10px' }}>
              <h4>Keterangan Variabel PERT:</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Optimistic Time (o)</strong>: Estimasi durasi tersingkat jika segalanya berjalan lancar tanpa hambatan.</li>
                <li><strong>Most Likely Time (m)</strong>: Estimasi durasi paling mungkin/realistis dalam kondisi normal.</li>
                <li><strong>Pessimistic Time (p)</strong>: Estimasi durasi terlama jika proyek mengalami banyak hambatan/masalah teknis.</li>
              </ul>
            </div>
          </div>

          <div className="calc-results-panel">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-strong)' }}>Hasil Estimasi Durasi Aktivitas</h3>

            {!isPertValid ? (
              <div className="flex-center" style={{ minHeight: '200px', flexDirection: 'column', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px' }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                Silakan isi semua parameter input di sebelah kiri dengan benar. Pastikan syarat: o &le; m &le; p terpenuhi.
              </div>
            ) : (
              <>
                <div className="calc-result-metrics">
                  <div className="calc-result-card">
                    <span className="calc-result-label">Expected Duration (t_e)</span>
                    <span className="calc-result-value">{pert.te.toFixed(2)}</span>
                    <span className="calc-result-status calc-status-good">Durasi Estimasi</span>
                  </div>
                  <div className="calc-result-card">
                    <span className="calc-result-label">Standard Deviation (&sigma;)</span>
                    <span className="calc-result-value">{pert.sd.toFixed(2)}</span>
                    <span className="calc-result-status calc-status-good" style={{ background: 'rgba(217,119,6,0.1)', color: '#d97706' }}>Deviasi Standar</span>
                  </div>
                </div>

                <div className="calc-result-metrics" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                  <div className="calc-result-card" style={{ gridColumn: 'span 2' }}>
                    <span className="calc-result-label">Variance (&sigma;&sup2;)</span>
                    <span className="calc-result-value">{pert.v.toFixed(3)}</span>
                    <span className="calc-result-status calc-status-good" style={{ background: 'rgba(107,114,128,0.1)', color: '#6b7280' }}>Variansi Aktivitas</span>
                  </div>
                </div>

                <div className="calc-explanation-box">
                  <h4>Penjelasan Langkah Perhitungan (Distribusi Beta PMBOK):</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                    <div>
                      <strong>1. Durasi Harapan (Expected Duration):</strong>
                      <div className="calc-formula">t_e = (o + 4m + p) / 6</div>
                      <p>t_e = ({oVal} + 4 &times; {mVal} + {pVal}) / 6 = ({oVal} + {4 * mVal} + {pVal}) / 6 = <strong>{pert.te.toFixed(2)}</strong> hari/minggu.</p>
                    </div>
                    <div>
                      <strong>2. Standar Deviasi:</strong>
                      <div className="calc-formula">&sigma; = (p - o) / 6</div>
                      <p>&sigma; = ({pVal} - {oVal}) / 6 = <strong>{pert.sd.toFixed(2)}</strong>. Semakin kecil nilainya, semakin tinggi tingkat kepastian estimasi.</p>
                    </div>
                    <div>
                      <strong>3. Variansi:</strong>
                      <div className="calc-formula">&sigma;&sup2; = ((p - o) / 6)&sup2;</div>
                      <p>&sigma;&sup2; = <strong>{pert.v.toFixed(3)}</strong>. Variansi digunakan untuk menghitung probabilitas penyelesaian proyek keseluruhan pada jalur kritis.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorView;
