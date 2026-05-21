import QUESTIONS_DATABASE from './questions.json';
import React, { useState, useEffect } from 'react';

// ==========================================
// DATABASE 60 SOAL MANAJEMEN PROYEK (MPSI)
// ==========================================
;

const MATERI_KILAT_UTS = [
  {
    "id": "uts_lvl1_card1",
    "level": 1,
    "title": "1. Karakteristik & Konsep Proyek MPSI",
    "points": [
      "Proyek bersifat dinamis, non-rutin, relatif pendek, memiliki jadwal tetap, dan kebutuhan sumber daya berubah-ubah (5M).",
      "Proyek bersifat sementara (temporary endeavor) dengan batas awal dan akhir yang jelas untuk menghasilkan produk/jasa unik.",
      "Sumber daya proyek (5M) meliputi: Man (Manusia), Money (Uang), Material (Bahan baku), Machine (Peralatan/Server), dan Method (Prosedur/Metodologi).",
      "Proyek internal (swakelola) dikerjakan langsung secara internal oleh organisasi tanpa melalui proses tender/lelang kompetitif.",
      "Triple Constraints proyek meliputi: Scope (Ruang Lingkup), Time (Waktu/Jadwal), dan Cost (Anggaran/Biaya)."
    ]
  },
  {
    "id": "uts_lvl1_card2",
    "level": 1,
    "title": "2. Proses & Kelompok Proses PMBOK Edisi 5",
    "points": [
      "Terdapat 5 Kelompok Proses (Process Groups): Initiating, Planning, Executing, Monitoring & Controlling, dan Closing (total 47 sub-proses).",
      "Terdapat 10 Area Pengetahuan (Knowledge Areas) di PMBOK Edisi 5 (ditambahkannya Project Stakeholder Management).",
      "Kelompok proses Executing memakan waktu dan sumber daya organisasi terbesar dalam siklus hidup proyek.",
      "Kelompok proses Monitoring & Controlling berfungsi mengukur kinerja aktual terhadap rencana baseline dan mengambil tindakan korektif jika terjadi deviasi.",
      "Proses Identify Stakeholders masuk kelompok proses Initiating, mendampingi proses pembuatan Project Charter."
    ]
  },
  {
    "id": "uts_lvl1_card3",
    "level": 1,
    "title": "3. Otorisasi & Project Charter",
    "points": [
      "Project Charter adalah dokumen awal yang meresmikan keberadaan proyek dan memberi wewenang hukum kepada Manajer Proyek (PM).",
      "Project Charter biasanya ditandatangani dan diterbitkan oleh Sponsor Proyek atau Manajemen Senior.",
      "Input utama pembuatan Project Charter meliputi Statement of Work (SOW), Kontrak, dan kasus bisnis (Business Case).",
      "Elemen utama dalam Project Charter mencakup deskripsi proyek, sponsor proyek, penunjukan PM, target waktu (milestone), estimasi anggaran awal, dan kriteria sukses.",
      "Pemangku kepentingan (Stakeholder) mencakup seluruh individu/organisasi yang terlibat aktif atau kepentingannya dipengaruhi oleh proyek."
    ]
  },
  {
    "id": "uts_lvl1_card4",
    "level": 1,
    "title": "4. Manajemen Scope & Dasar WBS",
    "points": [
      "Project Scope Management memastikan proyek hanya mengerjakan aktivitas yang diperlukan untuk mencapai tujuan akhir dengan sukses.",
      "Aktivitas awal perencanaan scope meliputi penyusunan Project Scope Statement yang mendefinisikan batas kerja (in-scope dan out-of-scope).",
      "Create WBS (Work Breakdown Structure) adalah proses membagi secara hierarkis deliverable proyek menjadi komponen yang lebih kecil dan mudah dikelola.",
      "WBS memfokuskan pembagian pada deliverables (hasil kerja), bukan daftar aktivitas harian.",
      "Kegagalan mendefinisikan scope dengan jelas di awal mengakibatkan pembengkakan biaya dan keterlambatan jadwal karena cost of changes yang meningkat eksponensial."
    ]
  },
  {
    "id": "uts_lvl2_card1",
    "level": 2,
    "title": "5. Aturan WBS & Work Package",
    "points": [
      "Aturan 100% (100% Rule): WBS harus mencakup 100% ruang lingkup proyek dan seluruh deliverable, tidak kurang dan tidak lebih.",
      "Work Package is elemen terendah hasil dekomposisi WBS yang dapat diestimasi durasi & biayanya, serta dapat ditugaskan ke unit penanggung jawab.",
      "WBS Dictionary adalah dokumen pendukung yang mendefinisikan secara detail deskripsi tugas, penanggung jawab, kriteria sukses, dan deliverable tiap elemen WBS.",
      "WBS membantu mengidentifikasi semua pekerjaan fisik sehingga mencegah terjadinya scope creep (pemekaran ruang lingkup tanpa kontrol).",
      "Dekomposisi WBS berhenti ketika komponen pekerjaan sudah cukup kecil untuk diestimasi biayanya secara akurat."
    ]
  },
  {
    "id": "uts_lvl2_card2",
    "level": 2,
    "title": "6. Ketergantungan (Sequencing & PDM/ADM)",
    "points": [
      "Finish-to-Start (FS): Aktivitas B baru bisa mulai setelah Aktivitas A selesai (tipe paling umum).",
      "Start-to-Start (SS): Aktivitas B baru bisa mulai setelah Aktivitas A dimulai.",
      "Finish-to-Finish (FF): Aktivitas B baru bisa selesai setelah Aktivitas A selesai.",
      "Start-to-Finish (SF): Aktivitas B baru bisa selesai setelah Aktivitas A dimulai.",
      "Precedence Diagramming Method (PDM / AON) menggambarkan aktivitas di dalam kotak (node) dan dependensi menggunakan anak panah.",
      "Arrow Diagramming Method (ADM / AOA) menggambarkan aktivitas pada anak panah (arrow) dan lingkaran (node) sebagai penanda kejadian (event).",
      "Aktivitas Dummy dalam diagram AOA digambarkan dengan garis putus-putus, berdurasi 0 hari, dan tidak mengonsumsi biaya/sumber daya; gunanya hanya mempertahankan logika dependensi."
    ]
  },
  {
    "id": "uts_lvl2_card3",
    "level": 2,
    "title": "7. Jalur Kritis (Critical Path Method - CPM)",
    "points": [
      "Jalur Kritis (Critical Path) adalah jalur terpanjang dalam diagram jaringan proyek yang menentukan waktu penyelesaian proyek tercepat.",
      "Seluruh aktivitas yang berada di sepanjang Jalur Kritis memiliki nilai Float (Slack) = 0 (Nol).",
      "Penundaan waktu pengerjaan pada aktivitas kritis akan langsung menunda tanggal penyelesaian akhir proyek secara keseluruhan.",
      "Perhitungan Maju (Forward Pass) berjalan dari awal ke akhir untuk menghitung Early Start (ES) dan Early Finish (EF).",
      "Perhitungan Mundur (Backward Pass) berjalan dari akhir ke awal untuk menghitung Late Start (LS) dan Late Finish (LF)."
    ]
  },
  {
    "id": "uts_lvl2_card4",
    "level": 2,
    "title": "8. Kelonggaran Waktu, Lag/Lead & Kompresi",
    "points": [
      "Total Float (Slack) adalah waktu kelonggaran aktivitas tanpa menunda tanggal penyelesaian akhir proyek keseluruhan. Rumus: Float = LS - ES atau Float = LF - EF.",
      "Free Float adalah kelonggaran waktu aktivitas tanpa menunda tanggal Early Start dari aktivitas penerus (successor) terdekat.",
      "Lag (Jeda Waktu) adalah waktu tunggu wajib (delay positif) di antara pendahulu dan penerus.",
      "Lead (Waktu Mendahului) adalah waktu tumpang tindih (delay negatif) di antara dua aktivitas.",
      "Crashing mempercepat jadwal dengan menambahkan sumber daya pada jalur kritis dengan konsekuensi peningkatan biaya.",
      "Fast Tracking mempercepat jadwal dengan menjalankan aktivitas kritis secara paralel (meningkatkan risiko rework)."
    ]
  },
  {
    "id": "uts_lvl3_card1",
    "level": 3,
    "title": "9. Teknik Estimasi Biaya & Durasi",
    "points": [
      "Analogous Estimating (Top-Down) menggunakan biaya/durasi proyek historis serupa sebagai acuan. Cepat, murah, namun akurasinya rendah.",
      "Bottom-Up Estimating menaksir biaya/durasi elemen WBS terendah lalu dijumlahkan ke atas. Sangat akurat namun memakan waktu dan biaya pengerjaan yang besar.",
      "Parametric Modeling menggunakan algoritma matematis berdasarkan data historis dan variabel proyek (misal: jumlah baris kode x tarif programmer).",
      "PERT (Program Evaluation and Review Technique) memperhitungkan ketidakpastian dengan 3 estimasi waktu: Optimistic (o), Most Likely (m), dan Pessimistic (p).",
      "Rumus PERT Distribusi Beta (PMBOK): E = (o + 4m + p) / 6 dan standar deviasi dev = (p - o) / 6. Distribusi Triangular: E = (o + m + p) / 3."
    ]
  },
  {
    "id": "uts_lvl3_card2",
    "level": 3,
    "title": "10. Earned Value Management (EVM) - Indikator Dasar",
    "points": [
      "Planned Value (PV) / BCWS: Anggaran disetujui yang direncanakan untuk diselesaikan pada tanggal evaluasi.",
      "Earned Value (EV) / BCWP: Nilai pekerjaan yang telah diselesaikan secara nyata hingga tanggal evaluasi.",
      "Actual Cost (AC) / ACWP: Biaya aktual yang dihabiskan untuk menyelesaikan pekerjaan hingga tanggal evaluasi.",
      "Cost Variance (CV): Selisih biaya aktual dengan hasil kerja nyata. Rumus: CV = EV - AC (CV < 0 berarti boros/over-budget).",
      "Schedule Variance (SV): Selisih jadwal rencana dengan hasil kerja nyata. Rumus: SV = EV - PV (SV < 0 berarti terlambat/behind schedule)."
    ]
  },
  {
    "id": "uts_lvl3_card3",
    "level": 3,
    "title": "11. EVM - Indeks Kinerja & Prakiraan Lanjutan",
    "points": [
      "Cost Performance Index (CPI): Indeks kinerja efisiensi biaya. Rumus: CPI = EV / AC (CPI < 1.0 berarti biaya tidak efisien).",
      "Schedule Performance Index (SPI): Indeks kinerja efisiensi waktu. Rumus: SPI = EV / PV (SPI < 1.0 berarti pengerjaan lambat).",
      "Estimate at Completion (EAC): Prakiraan total biaya akhir proyek jika kinerja saat ini berlanjut. Rumus standar: EAC = BAC / CPI.",
      "Estimate to Complete (ETC): Prakiraan biaya tambahan untuk menyelesaikan sisa pekerjaan. Rumus: ETC = EAC - AC atau ETC = (BAC - EV) / CPI.",
      "To-Complete Performance Index (TCPI): Indeks kinerja biaya yang harus dicapai untuk menyelesaikan sisa proyek sesuai anggaran. Rumus: TCPI = (BAC - EV) / (BAC - AC)."
    ]
  },
  {
    "id": "uts_lvl3_card4",
    "level": 3,
    "title": "12. Struktur Organisasi Proyek (OP)",
    "points": [
      "Organisasi Proyek Murni (Projectized): Tim proyek dipisahkan secara mandiri, wewenang Manajer Proyek mutlak/penuh, dan staf tidak memiliki divisi asal (home-base).",
      "Organisasi Fungsional: Staf dikelompokkan berdasarkan divisi spesialisasi fungsional vertikal, jalur koordinasi bersifat birokratis, dan PM memiliki wewenang sangat minim/nol.",
      "Organisasi Matriks (Matrix Organization): Menggabungkan struktur fungsional dan fungsional proyek. Memiliki dua jalur komando (PM dan Manajer Fungsional).",
      "Weak Matrix: PM bertindak sebagai koordinator/expediter dengan wewenang minim.",
      "Balanced Matrix: PM dan Manajer Fungsional berbagi wewenang secara setara.",
      "Strong Matrix: PM memiliki wewenang lebih dominan dibanding Manajer Fungsional."
    ]
  }
];

const MATERI_KILAT_UAS = [
  {
    "id": "uas_lvl1_card1",
    "level": 1,
    "title": "1. Manajemen Pengadaan (Project Procurement)",
    "points": [
      "Pengadaan (Procurement) mengatur hubungan kerja sama, pembelian, atau penyediaan barang & jasa dari pihak ketiga (vendor/supplier) secara formal.",
      "4 Proses Utama Pengadaan (PMBOK 5): Plan Procurement Management, Conduct Procurements, Control Procurements, dan Close Procurements.",
      "Make-or-Buy Analysis: Analisis kelayakan finansial & operasional untuk menentukan apakah organisasi membuat sendiri produk atau membelinya dari luar."
    ]
  },
  {
    "id": "uas_lvl1_card2",
    "level": 1,
    "title": "2. Tipe-Tipe Kontrak Pengadaan",
    "points": [
      "Fixed-Price (Lump Sum): Harga disepakati sejak awal, risiko biaya sepenuhnya ditanggung oleh penjual (vendor).",
      "Cost-Reimbursable: Pembayaran biaya aktual dari pekerjaan ditambah keuntungan tetap (fee), risiko sepenuhnya ditanggung oleh pembeli (buyer).",
      "Time and Material (T&M): Kontrak hibrida dengan tarif satuan (per jam/hari) yang disepakati untuk tenaga kerja dan material."
    ]
  },
  {
    "id": "uas_lvl1_card3",
    "level": 1,
    "title": "3. Manajemen Risiko Proyek (Project Risk)",
    "points": [
      "Risiko proyek adalah peristiwa/kondisi tidak pasti yang jika terjadi berdampak positif (opportunity) atau negatif (threat) pada tujuan proyek.",
      "6 Proses Utama Risiko (PMBOK 5): Plan Risk Management, Identify Risks, Perform Qualitative Analysis, Perform Quantitative Analysis, Plan Risk Responses, dan Control Risks.",
      "Risk Register: Dokumen sentral hasil identifikasi risiko yang mencakup daftar risiko, pemicu (triggers), respons, dan pemilik risiko (risk owners)."
    ]
  },
  {
    "id": "uas_lvl1_card4",
    "level": 1,
    "title": "4. Kategori & Pemicu Risiko",
    "points": [
      "Kategori Risiko Utama: Risiko Teknis (software/hardware), Project Management (estimasi buruk), Organisasi (kekurangan staf), dan Eksternal (perubahan hukum/pasar).",
      "Business Influence: Pengaruh eksternal bisnis/pasar terhadap keberhasilan proyek, seperti fluktuasi ekonomi atau persaingan pasar.",
      "Risk Triggers: Tanda-tanda peringatan dini (early warning signs) bahwa suatu risiko akan segera terjadi (misalnya kegagalan modul berkali-kali)."
    ]
  },
  {
    "id": "uas_lvl2_card1",
    "level": 2,
    "title": "5. Analisis Risiko Kualitatif & Kuantitatif",
    "points": [
      "Qualitative Risk Analysis: Menilai probabilitas & dampak tiap risiko menggunakan skala deskriptif (Low, Medium, High) untuk memprioritaskan risiko.",
      "Quantitative Risk Analysis: Menganalisis dampak numerik dari risiko gabungan pada target proyek secara matematis.",
      "Expected Monetary Value (EMV): Metode kuantitatif menghitung hasil rata-rata saat skenario masa depan tidak pasti. Rumus: EMV = Probability x Impact."
    ]
  },
  {
    "id": "uas_lvl2_card2",
    "level": 2,
    "title": "6. Strategi Respons Risiko (Threat & Opportunity)",
    "points": [
      "Respons Ancaman (Threats): Avoid (Menghindari risiko), Transfer (Memindahkan risiko ke pihak ketiga/asuransi), Mitigate (Mengurangi dampak), dan Accept (Menerima risiko).",
      "Respons Peluang (Opportunities): Exploit (Memastikan peluang terjadi), Share (Membagi peluang dengan pihak ketiga), Enhance (Meningkatkan probabilitas), dan Accept (Menerima peluang)."
    ]
  },
  {
    "id": "uas_lvl2_card3",
    "level": 2,
    "title": "7. Project Life Cycle (PLC) vs SDLC",
    "points": [
      "Project Life Cycle (PLC): Rangkaian fase dari awal hingga penutupan proyek (Initiation, Planning, Execution, Monitoring, Closing).",
      "Systems Development Life Cycle (SDLC): Metodologi pengembangan software untuk membangun produk sistem informasi.",
      "Keterkaitan: Fase rekayasa teknis SDLC (analisis, desain, coding, testing) dieksekusi di dalam fase Execution dari PLC proyek."
    ]
  },
  {
    "id": "uas_lvl2_card4",
    "level": 2,
    "title": "8. Studi Kelayakan Pengembangan Sistem",
    "points": [
      "Technical Feasibility: Menilai kemampuan organisasi, teknologi, dan infrastruktur yang tersedia untuk membangun sistem.",
      "Operational Feasibility: Mengukur apakah sistem baru dapat dioperasikan secara efektif dalam prosedur organisasi sehari-hari.",
      "Economic Feasibility: Menganalisis keuntungan finansial (ROI, NPV, Payback Period) dibandingkan biaya pengembangan.",
      "Schedule Feasibility: Menganalisis batasan waktu penyusunan dan pengiriman sistem apakah realistis atau tidak."
    ]
  },
  {
    "id": "uas_lvl3_card1",
    "level": 3,
    "title": "9. Metode Konversi Sistem (System Conversion)",
    "points": [
      "Direct Cutover: Penghentian total sistem lama secara instan dan langsung mengaktifkan sistem baru. Cepat, murah, namun memiliki risiko kegagalan tertinggi.",
      "Parallel Conversion: Menjalankan sistem lama dan sistem baru secara bersamaan hingga sistem baru terbukti stabil. Paling aman, namun memakan biaya & tenaga ganda.",
      "Phased Conversion: Migrasi sistem dilakukan secara bertahap berdasarkan modul atau divisi. Meminimalkan risiko dampak kegagalan sistemik.",
      "Pilot Conversion: Menguji sistem baru hanya di satu divisi/lokasi percontohan sebelum disebarluaskan ke seluruh organisasi."
    ]
  },
  {
    "id": "uas_lvl3_card2",
    "level": 3,
    "title": "10. Project Management Plan (PMP) & 4W+1H",
    "points": [
      "Project Management Plan (PMP): Dokumen induk resmi yang mengintegrasikan seluruh rencana area pengetahuan untuk mengarahkan eksekusi dan kontrol proyek.",
      "Formulasi PMP (4W + 1H): What (tujuan/deliverable), Why (alasan/kasus bisnis), When (milestone/jadwal), Who (tim/organisasi), dan How (metode/manajemen).",
      "Persetujuan PMP: Harus ditandatangani oleh Sponsor Proyek dan Manajer Fungsional/Kunci sebagai tanda otorisasi resmi baseline proyek."
    ]
  },
  {
    "id": "uas_lvl3_card3",
    "level": 3,
    "title": "11. Scope Baseline & CCB",
    "points": [
      "Scope Baseline terdiri atas 3 dokumen utama: Project Scope Statement (deskripsi ruang lingkup), WBS (struktur dekomposisi), dan WBS Dictionary.",
      "Change Control Board (CCB): Kelompok pemangku kepentingan formal yang bertanggung jawab meninjau, mengevaluasi, menyetujui, atau menolak perubahan baseline proyek.",
      "Cost of Changes: Biaya untuk melakukan perubahan scope meningkat secara eksponensial seiring berjalannya fase proyek menuju akhir."
    ]
  },
  {
    "id": "uas_lvl3_card4",
    "level": 3,
    "title": "12. Penutupan Proyek & Serah Terima",
    "points": [
      "Close Project: Fase formal untuk memverifikasi seluruh deliverable telah selesai, diterima pelanggan, dan mendokumentasikan pelajaran berharga (lessons learned).",
      "Administrative Closure: Pengarsipan file proyek, pembubaran tim proyek (release of resources), dan penyelesaian kewajiban kontrak vendor.",
      "Acceptance Criteria: Kriteria formal tertulis yang disepakati dengan pelanggan untuk menyatakan bahwa deliverables memenuhi standar kualitas yang diinginkan."
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
  { id: 'uas', name: 'UAS (Ujian Akhir Semester)', active: false }
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

  // Flashcards state hooks
  const [flashcardLevelFilter, setFlashcardLevelFilter] = useState('all');
  const [flashcardSearchQuery, setFlashcardSearchQuery] = useState('');
  const [studiedCards, setStudiedCards] = useState(() => {
    const saved = localStorage.getItem('cumlaude_studied_cards');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Reset flashcard filters when course or exam type changes
  useEffect(() => {
    setFlashcardLevelFilter('all');
    setFlashcardSearchQuery('');
    setFlippedCards({});
  }, [selectedCourse, selectedExamType]);

  const toggleCardStudied = (cardId, e) => {
    e.stopPropagation(); // Prevent card flipping on badge toggle click
    setStudiedCards(prev => {
      const updated = prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId];
      localStorage.setItem('cumlaude_studied_cards', JSON.stringify(updated));
      return updated;
    });
  };

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

  const toggleFlashcard = (cardId) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const toggleReview = (idx) => {
    setExpandedReview(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Cumulative statistics calculations
  const passedCount = examHistory.filter(item => item.passed).length;
  const passingRate = examHistory.length > 0 ? Math.round((passedCount / examHistory.length) * 100) : 0;
  const avgScore = examHistory.length > 0 ? Math.round(examHistory.reduce((acc, item) => acc + item.percentage, 0) / examHistory.length) : 0;

  if (view === 'materi') {
    const baseMateri = selectedExamType === 'uts' ? MATERI_KILAT_UTS : MATERI_KILAT_UAS;
    
    // Filter by Level
    let filteredMateri = baseMateri;
    if (flashcardLevelFilter !== 'all') {
      const targetLevel = parseInt(flashcardLevelFilter, 10);
      filteredMateri = filteredMateri.filter(m => m.level === targetLevel);
    }
    
    // Filter by Search query
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
        {renderNavbar('materi')}

        <main className="quiz-main">
          <div className="materi-card glass-panel">
            <div className="materi-header">
              <span className="category-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Mode Belajar: {selectedExamType.toUpperCase()} MPSI
              </span>
              <h2>Flashcards Belajar Interaktif</h2>
              <p>Gunakan kartu belajar di bawah ini untuk meninjau ringkasan materi penting sebelum memulai simulasi ujian.</p>
            </div>

            {/* Progress Tracker Card */}
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

            {/* Controls Bar: Filters & Search */}
            <div className="flashcard-controls">
              <div className="filter-tabs">
                <button 
                  className={`filter-tab ${flashcardLevelFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setFlashcardLevelFilter('all')}
                >
                  Semua
                </button>
                <button 
                  className={`filter-tab ${flashcardLevelFilter === '1' ? 'active' : ''}`}
                  onClick={() => setFlashcardLevelFilter('1')}
                >
                  Level 1 (Mudah)
                </button>
                <button 
                  className={`filter-tab ${flashcardLevelFilter === '2' ? 'active' : ''}`}
                  onClick={() => setFlashcardLevelFilter('2')}
                >
                  Level 2 (Sedang)
                </button>
                <button 
                  className={`filter-tab ${flashcardLevelFilter === '3' ? 'active' : ''}`}
                  onClick={() => setFlashcardLevelFilter('3')}
                >
                  Level 3 (Sulit)
                </button>
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
                    &times;
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
                <button className="btn-outline" style={{ marginTop: '15px', padding: '8px 16px', fontSize: '0.9rem' }} onClick={() => { setFlashcardSearchQuery(''); setFlashcardLevelFilter('all'); }}>
                  Reset Filter & Pencarian
                </button>
              </div>
            ) : (
              <div className="flashcards-container">
                {filteredMateri.map((materi) => {
                  const isFlipped = !!flippedCards[materi.id];
                  const isStudied = studiedCards.includes(materi.id);
                  
                  let levelText = "Level 1 - Mudah";
                  let levelClass = "level-1-accent";
                  if (materi.level === 2) {
                    levelText = "Level 2 - Sedang";
                    levelClass = "level-2-accent";
                  } else if (materi.level === 3) {
                    levelText = "Level 3 - Sulit";
                    levelClass = "level-3-accent";
                  }

                  return (
                    <div key={materi.id} className="flashcard-wrapper" onClick={() => toggleFlashcard(materi.id)}>
                      <div className={`flashcard ${isFlipped ? 'flipped' : ''} ${levelClass} ${isStudied ? 'studied-card' : ''}`}>
                        
                        {/* FRONT FACE */}
                        <div className="flashcard-face flashcard-front">
                          <div className="flashcard-badge-row">
                            <span className={`card-level-badge ${levelClass}`}>{levelText}</span>
                            {isStudied && <span className="studied-badge">✓ Dipelajari</span>}
                          </div>
                          
                          <div className="card-front-content">
                            <h3>{materi.title}</h3>
                            <p className="tap-hint">Klik untuk Membalik ➔</p>
                          </div>
                          
                          <div className="card-action-row">
                            <button 
                              className={`btn-studied-toggle ${isStudied ? 'studied' : ''}`}
                              onClick={(e) => toggleCardStudied(materi.id, e)}
                            >
                              {isStudied ? '✓ Sudah Dipelajari' : 'Tandai Sudah Dipelajari'}
                            </button>
                          </div>
                        </div>

                        {/* BACK FACE */}
                        <div className="flashcard-face flashcard-back">
                          <div className="flashcard-badge-row">
                            <span className={`card-level-badge ${levelClass}`}>{levelText}</span>
                            {isStudied && <span className="studied-badge">✓ Dipelajari</span>}
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
                              {isStudied ? '✓ Sudah Dipelajari' : 'Tandai Sudah Dipelajari'}
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="hero-actions" style={{marginTop: '45px', alignItems: 'center'}}>
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
              <h4>Level 1 - Mudah</h4>
              <span className="level-count">{lvl1Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Konsep Dasar Proyek, Kelompok Proses, & Otorisasi Project Charter.' 
                : 'Pengenalan Pengadaan Barang (Procurement) dan Manajemen Risiko Proyek.'}
            </p>
            <button className="btn-level outline" onClick={() => startQuiz(1)}>Mulai Level 1</button>
          </div>
          
          <div className={"level-card glass-card " + (isLvl2Locked ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 2 - Sedang</h4>
              <span className="level-count">{lvl2Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Manajemen Scope (WBS), Dependensi (FS/SS/FF/SF), & Critical Path Method.' 
                : 'Project Life Cycle (PLC) & Metode Konversi Sistem dalam SDLC.'}
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
              <h4>Level 3 - Sulit</h4>
              <span className="level-count">{lvl3Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Estimasi Biaya PERT (Triangular/Beta), EVM (CPI/SPI/EAC), & Organisasi Proyek.' 
                : 'Penyusunan Project Management Plan (PMP), Scope Baseline, & 4W+1H.'}
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

        {/* Update Log / Changelog Panel */}
        <div className="changelog-section">
          <div className="changelog-card glass-panel">
            <div className="changelog-header-area">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="changelog-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <h3>Log Pembaruan Aplikasi (Changelog)</h3>
            </div>
            <div className="changelog-list">
              <div className="changelog-item">
                <div className="changelog-meta">
                  <span className="changelog-version">v1.2.0</span>
                  <span className="changelog-date">21 Mei 2026</span>
                  <span className="changelog-tag current">Terbaru</span>
                </div>
                <ul className="changelog-details">
                  <li><strong>Penggabungan Bank Soal UTS:</strong> Soal dari Pertemuan 1-6 kini digabungkan per tingkat kesulitan (Level 1 - Mudah, Level 2 - Sedang, Level 3 - Sulit) untuk mempermudah pemahaman komprehensif.</li>
                  <li><strong>Pembersihan Pertanyaan Placeholder:</strong> Menghapus seluruh 89 pertanyaan tambahan dummy dan menggantinya dengan 89 soal riil MPSI berkualitas tinggi (studi kasus EVM, penjadwalan CPM, PERT, dll.).</li>
                  <li><strong>Panel Log Pembaruan Terintegrasi:</strong> Menambahkan panel log rilis aplikasi langsung di halaman utama Dashboard.</li>
                  <li><strong>Penyempurnaan Tampilan Premium:</strong> Sentuhan efek visual modern, perbaikan layout responsif pada dialog pembahasan ujian, dan kartu tingkat kesulitan.</li>
                </ul>
              </div>

              <div className="changelog-item">
                <div className="changelog-meta">
                  <span className="changelog-version">v1.1.0</span>
                  <span className="changelog-date">20 Mei 2026</span>
                </div>
                <ul className="changelog-details">
                  <li><strong>Skala Waktu Dinamis per Level:</strong> Level 1 (60 detik/soal), Level 2 (45 detik/soal), dan Level 3 (30 detik/soal) untuk menguji kecepatan berpikir.</li>
                  <li><strong>Sistem Pembukaan Level Progresif:</strong> Mahasiswa harus mendapatkan skor minimal 60% pada level sebelumnya untuk membuka tingkat kesulitan berikutnya.</li>
                  <li><strong>Opsi Bypass Buka Semua Level:</strong> Menyediakan tombol toggle &quot;Buka Semua Level&quot; di dashboard untuk memudahkan review.</li>
                </ul>
              </div>

              <div className="changelog-item">
                <div className="changelog-meta">
                  <span className="changelog-version">v1.0.0</span>
                  <span className="changelog-date">19 Mei 2026</span>
                </div>
                <ul className="changelog-details">
                  <li><strong>Rilis Awal Simulasi Ujian:</strong> Simulasi ujian UTS &amp; UAS untuk mata kuliah Manajemen Proyek Sistem Informasi (MPSI).</li>
                  <li><strong>Flashcards Belajar Interaktif:</strong> Kartu belajar balik (flipcards) untuk rangkuman materi kilat sebelum ujian.</li>
                  <li><strong>Papan Statistik Kumulatif:</strong> Menghitung rata-rata nilai, jumlah keikutsertaan ujian, dan rasio kelulusan secara offline berbasis LocalStorage.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
