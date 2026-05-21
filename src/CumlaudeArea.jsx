import QUESTIONS_DATABASE from './questions.json';
import PRACTICE_DATABASE from './practice_questions.json';
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

const PRACTICE_MEETINGS = [
  { num: 1, title: "Konsep & Ciri Proyek", qCount: 8, active: true, type: "pertemuan" },
  { num: 2, title: "Kelompok Proses & Area PMBOK", qCount: 8, active: true, type: "pertemuan" },
  { num: 3, title: "Inisiasi & Project Charter", qCount: 8, active: true, type: "pertemuan" },
  { num: 4, title: "Manajemen Scope & WBS", qCount: 8, active: true, type: "pertemuan" },
  { num: 5, title: "Cost Estimation & EVM", qCount: 15, active: true, type: "pertemuan" },
  { num: 6, title: "Struktur Organisasi Proyek", qCount: 8, active: true, type: "pertemuan" },
  { num: 7, title: "Kuis P07 (Minggu Lalu)", qCount: 30, active: true, type: "kuis", isSpecial: true },
  { num: 8, title: "UTS - Evaluasi Pembelajaran", qCount: 0, active: false, label: "Evaluasi/Tugas" },
  { num: 9, title: "Manajemen Pengadaan", qCount: 8, active: true, type: "pertemuan" },
  { num: 10, title: "Siklus PLC & SDLC", qCount: 8, active: true, type: "pertemuan" },
  { num: 11, title: "Manajemen Risiko Proyek", qCount: 0, active: false, label: "Tugas Mandiri" },
  { num: 12, title: "Analisis Risiko Kualitatif", qCount: 0, active: false, label: "Tugas Mandiri" },
  { num: 13, title: "Konversi Sistem & Penutupan", qCount: 0, active: false, label: "Review Mandiri" },
  { num: 14, title: "Project Management Plan (PMP)", qCount: 8, active: true, type: "pertemuan" }
];

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
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [practiceType, setPracticeType] = useState(null); // 'pertemuan' or 'kuis'
  const [practiceNum, setPracticeNum] = useState(null); // 1-14 or 7

  // States for interactive features
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [expandedReview, setExpandedReview] = useState({});
  const [unlockedLevels, setUnlockedLevels] = useState(() => {
    const saved = localStorage.getItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`);
    return saved ? JSON.parse(saved) : [1];
  });

  // Premium Features States
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('cumlaude_theme') || 'light';
  });
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(() => {
    const saved = localStorage.getItem('cumlaude_bookmarked_questions');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [wrongQuestions, setWrongQuestions] = useState(() => {
    const saved = localStorage.getItem('cumlaude_wrong_questions');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [customQuizQuestions, setCustomQuizQuestions] = useState([]);
  const [isCustomSession, setIsCustomSession] = useState(false);
  const [customSessionType, setCustomSessionType] = useState(''); // 'bookmarks', 'wrong_answers', 'custom_exam'
  const [calcTab, setCalcTab] = useState('evm');
  const [evmInputs, setEvmInputs] = useState({ pv: '', ev: '', ac: '', bac: '' });
  const [pertInputs, setPertInputs] = useState({ o: '', m: '', p: '' });
  const [customConfig, setCustomConfig] = useState({
    selectedPertemuans: [],
    questionCount: 10,
    timeLimit: 15
  });

  // Sync theme with Document Element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
    localStorage.setItem('cumlaude_theme', theme);
  }, [theme]);

  // Helper function to find a question by ID across databases
  const findQuestionById = (id) => {
    const qIdStr = String(id);
    let found = QUESTIONS_DATABASE.find(q => String(q.id) === qIdStr);
    if (!found) {
      found = PRACTICE_DATABASE.find(q => String(q.id) === qIdStr);
    }
    return found;
  };

  const toggleBookmark = (questionId) => {
    setBookmarkedQuestions(prev => {
      const idStr = String(questionId);
      const updated = prev.includes(idStr)
        ? prev.filter(id => id !== idStr)
        : [...prev, idStr];
      localStorage.setItem('cumlaude_bookmarked_questions', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
      if (cat.includes('kualitatif') || cat.includes('kuantitatif')) return 12;
      return 11;
    }
    if (cat.includes('konversi') || cat.includes('serah terima') || cat.includes('penutupan')) return 13;
    if (cat.includes('pmp') || cat.includes('project management plan') || cat.includes('baseline')) return 14;
    
    // Fallback based on level
    if (q.examType === 'uts') {
      if (q.level === 1) return 1;
      if (q.level === 2) return 4;
      return 5;
    } else {
      if (q.level === 1) return 9;
      if (q.level === 2) return 10;
      return 14;
    }
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
    
    return Object.entries(topicCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  };

  const startWrongQuestionsPractice = () => {
    if (wrongQuestions.length === 0) {
      alert("Belum ada catatan soal salah.");
      return;
    }
    const qs = wrongQuestions.map(id => findQuestionById(id)).filter(Boolean);
    if (qs.length === 0) {
      alert("Soal salah tidak ditemukan di database.");
      return;
    }
    
    setCustomQuizQuestions(qs);
    setIsCustomSession(true);
    setCustomSessionType('wrong_answers');
    setIsPracticeMode(true);
    setView('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExpandedReview({});
    setTimeLeft(qs.length * 60);
  };

  const startBookmarkedQuestionsPractice = () => {
    if (bookmarkedQuestions.length === 0) {
      alert("Belum ada soal favorit yang disimpan.");
      return;
    }
    const qs = bookmarkedQuestions.map(id => findQuestionById(id)).filter(Boolean);
    if (qs.length === 0) {
      alert("Soal favorit tidak ditemukan di database.");
      return;
    }
    
    setCustomQuizQuestions(qs);
    setIsCustomSession(true);
    setCustomSessionType('bookmarks');
    setIsPracticeMode(true);
    setView('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExpandedReview({});
    setTimeLeft(qs.length * 60);
  };

  const startCustomExam = () => {
    const { selectedPertemuans, questionCount, timeLimit } = customConfig;
    if (selectedPertemuans.length === 0) {
      alert("Silakan pilih minimal satu pertemuan.");
      return;
    }
    
    const allMatching = [
      ...QUESTIONS_DATABASE.filter(q => q.course === selectedCourse),
      ...PRACTICE_DATABASE.filter(q => q.course === selectedCourse)
    ].filter(q => {
      const pNum = getQuestionPertemuan(q);
      return selectedPertemuans.includes(pNum);
    });
    
    if (allMatching.length === 0) {
      alert("Tidak ditemukan soal untuk pertemuan yang dipilih.");
      return;
    }
    
    const shuffled = [...allMatching].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, questionCount);
    
    setCustomQuizQuestions(selectedQuestions);
    setIsCustomSession(true);
    setCustomSessionType('custom_exam');
    setIsPracticeMode(false); // custom exam acts like regular exam (logs to history)
    setView('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExpandedReview({});
    setTimeLeft(timeLimit * 60);
  };

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
    setCustomConfig(prev => ({
      ...prev,
      selectedPertemuans: []
    }));
  };

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
  const activeQuestions = isCustomSession
    ? customQuizQuestions
    : (isPracticeMode
      ? PRACTICE_DATABASE.filter(q => q.course === selectedCourse && q.type === practiceType && q.pertemuan === practiceNum)
      : QUESTIONS_DATABASE.filter(
          q => q.course === selectedCourse && q.examType === selectedExamType && (selectedLevel !== null ? q.level === selectedLevel : true)
        )
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
      if (activeQuestions.length === 0) return;
      const percentage = Math.round((score / activeQuestions.length) * 100);
      const isPassed = percentage >= 60;
      const attemptId = `attempt_${Date.now()}`;

      let loggedExamType = selectedExamType.toUpperCase();
      let loggedLevel = selectedLevel !== null ? `Level ${selectedLevel}` : 'Semua Level';

      if (isCustomSession) {
        if (customSessionType === 'custom_exam') {
          loggedExamType = 'UJIAN KUSTOM';
          loggedLevel = `P${customConfig.selectedPertemuans.join(', P')}`;
        } else if (customSessionType === 'bookmarks') {
          loggedExamType = 'LATIHAN FAVORIT';
          loggedLevel = 'Soal Ditandai';
        } else if (customSessionType === 'wrong_answers') {
          loggedExamType = 'LATIHAN PERBAIKAN';
          loggedLevel = 'Soal Salah';
        }
      } else if (isPracticeMode) {
        loggedExamType = 'LATIHAN';
        loggedLevel = practiceType === 'kuis' ? 'Kuis P07 (Minggu Lalu)' : `Latihan Pertemuan ${practiceNum}`;
      }

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
        examType: loggedExamType,
        level: loggedLevel,
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

      // Auto unlock next level (only for regular exam mode)
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
    setIsCustomSession(false);
    setCustomSessionType('');
    setCustomQuizQuestions([]);
    setIsPracticeMode(false);
    setPracticeType(null);
    setPracticeNum(null);
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

  const startPractice = (type, num) => {
    setIsCustomSession(false);
    setCustomSessionType('');
    setCustomQuizQuestions([]);
    setIsPracticeMode(true);
    setPracticeType(type);
    setPracticeNum(num);
    setSelectedLevel(null);
    setView('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setExpandedReview({});
    
    const qCount = PRACTICE_DATABASE.filter(
      q => q.course === selectedCourse && q.type === type && q.pertemuan === num
    ).length;

    setTimeLeft(qCount * 60); // 60 seconds per question for practice
  };

  const renderCalculatorView = () => {
    // EVM Calculations
    const pvVal = parseFloat(evmInputs.pv);
    const evVal = parseFloat(evmInputs.ev);
    const acVal = parseFloat(evmInputs.ac);
    const bacVal = parseFloat(evmInputs.bac);

    const isEvmValid = !isNaN(pvVal) && !isNaN(evVal) && !isNaN(acVal) && !isNaN(bacVal) && pvVal >= 0 && acVal >= 0 && evVal >= 0 && bacVal >= 0;

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

    const isPertValid = !isNaN(oVal) && !isNaN(mVal) && !isNaN(pVal) && oVal >= 0 && mVal >= oVal && pVal >= mVal;

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
            PERT (Program Evaluation & Review Technique)
          </button>
        </div>

        {calcTab === 'evm' ? (
          <div className="calc-layout" style={{ marginTop: '25px' }}>
            <div className="calc-form-panel">
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '15px', color: 'var(--text-strong)' }}>Input Parameter EVM</h3>
              
              <div className="calc-input-row">
                <div className="custom-exam-field">
                  <label htmlFor="evm-pv">Planned Value (PV):</label>
                  <input 
                    id="evm-pv"
                    type="number" 
                    placeholder="Contoh: 100000" 
                    className="custom-exam-input" 
                    value={evmInputs.pv} 
                    onChange={(e) => setEvmInputs(p => ({ ...p, pv: e.target.value }))}
                  />
                </div>
                <div className="custom-exam-field">
                  <label htmlFor="evm-ev">Earned Value (EV):</label>
                  <input 
                    id="evm-ev"
                    type="number" 
                    placeholder="Contoh: 90000" 
                    className="custom-exam-input" 
                    value={evmInputs.ev} 
                    onChange={(e) => setEvmInputs(p => ({ ...p, ev: e.target.value }))}
                  />
                </div>
              </div>

              <div className="calc-input-row">
                <div className="custom-exam-field">
                  <label htmlFor="evm-ac">Actual Cost (AC):</label>
                  <input 
                    id="evm-ac"
                    type="number" 
                    placeholder="Contoh: 110000" 
                    className="custom-exam-input" 
                    value={evmInputs.ac} 
                    onChange={(e) => setEvmInputs(p => ({ ...p, ac: e.target.value }))}
                  />
                </div>
                <div className="custom-exam-field">
                  <label htmlFor="evm-bac">Budget at Completion (BAC):</label>
                  <input 
                    id="evm-bac"
                    type="number" 
                    placeholder="Contoh: 200000" 
                    className="custom-exam-input" 
                    value={evmInputs.bac} 
                    onChange={(e) => setEvmInputs(p => ({ ...p, bac: e.target.value }))}
                  />
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-strong)' }}>Hasil Analisis Kinerja Biaya & Jadwal</h3>
              
              {!isEvmValid ? (
                <div className="flex-center" style={{ minHeight: '200px', flexDirection: 'column', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
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
                        <strong>3. Indeks Kinerja Biaya (Cost Performance Index):</strong>
                        <div className="calc-formula">CPI = EV / AC</div>
                        <p>CPI = {evVal.toLocaleString('id-ID')} / {acVal.toLocaleString('id-ID')} = <strong>{evm.cpi.toFixed(3)}</strong>. {evm.cpi >= 1 ? 'CPI ≥ 1 menandakan penggunaan biaya sangat efisien.' : 'CPI {"<"} 1 menandakan inefisiensi biaya (proyek berpotensi over budget).'}</p>
                      </div>
                      <div>
                        <strong>4. Indeks Kinerja Jadwal (Schedule Performance Index):</strong>
                        <div className="calc-formula">SPI = EV / PV</div>
                        <p>SPI = {evVal.toLocaleString('id-ID')} / {pvVal.toLocaleString('id-ID')} = <strong>{evm.spi.toFixed(3)}</strong>. {evm.spi >= 1 ? 'SPI ≥ 1 menandakan kemajuan jadwal efisien.' : 'SPI {"<"} 1 menandakan kecepatan pengerjaan proyek lambat dari rencana.'}</p>
                      </div>
                      <div>
                        <strong>5. Estimasi Biaya Akhir (Estimate at Completion):</strong>
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
                <input 
                  id="pert-o"
                  type="number" 
                  placeholder="Durasi tercepat (contoh: 4)" 
                  className="custom-exam-input" 
                  value={pertInputs.o} 
                  onChange={(e) => setPertInputs(p => ({ ...p, o: e.target.value }))}
                />
              </div>

              <div className="custom-exam-field">
                <label htmlFor="pert-m">Most Likely Time (m):</label>
                <input 
                  id="pert-m"
                  type="number" 
                  placeholder="Durasi paling realistis (contoh: 7)" 
                  className="custom-exam-input" 
                  value={pertInputs.m} 
                  onChange={(e) => setPertInputs(p => ({ ...p, m: e.target.value }))}
                />
              </div>

              <div className="custom-exam-field">
                <label htmlFor="pert-p">Pessimistic Time (p):</label>
                <input 
                  id="pert-p"
                  type="number" 
                  placeholder="Durasi terlama/terburuk (contoh: 16)" 
                  className="custom-exam-input" 
                  value={pertInputs.p} 
                  onChange={(e) => setPertInputs(p => ({ ...p, p: e.target.value }))}
                />
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
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  Silakan isi semua parameter input di sebelah kiri dengan benar. Pastikan syarat: o ≤ m ≤ p terpenuhi.
                </div>
              ) : (
                <>
                  <div className="calc-result-metrics">
                    <div className="calc-result-card">
                      <span className="calc-result-label">Expected Duration (t_e)</span>
                      <span className="calc-result-value">{pert.te.toFixed(2)}</span>
                      <span className="calc-result-status calc-status-good">
                        Durasi Estimasi
                      </span>
                    </div>

                    <div className="calc-result-card">
                      <span className="calc-result-label">Standard Deviation (σ)</span>
                      <span className="calc-result-value">{pert.sd.toFixed(2)}</span>
                      <span className="calc-result-status calc-status-good" style={{ background: 'rgba(217,119,6,0.1)', color: '#d97706' }}>
                        Deviasi Standar
                      </span>
                    </div>
                  </div>

                  <div className="calc-result-metrics" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                    <div className="calc-result-card" style={{ gridColumn: 'span 2' }}>
                      <span className="calc-result-label">Variance (σ²)</span>
                      <span className="calc-result-value">{pert.v.toFixed(3)}</span>
                      <span className="calc-result-status calc-status-good" style={{ background: 'rgba(107,114,128,0.1)', color: '#6b7280' }}>
                        Variansi Aktivitas
                      </span>
                    </div>
                  </div>

                  <div className="calc-explanation-box">
                    <h4>Penjelasan Langkah Perhitungan (Distribusi Beta PMBOK):</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                      <div>
                        <strong>1. Durasi Harapan (Expected Duration):</strong>
                        <div className="calc-formula">t_e = (o + 4m + p) / 6</div>
                        <p>t_e = ({oVal} + 4 × {mVal} + {pVal}) / 6 = ({oVal} + {4 * mVal} + {pVal}) / 6 = <strong>{pert.te.toFixed(2)}</strong> hari/minggu.</p>
                      </div>
                      <div>
                        <strong>2. Standar Deviasi (Standard Deviation):</strong>
                        <div className="calc-formula">σ = (p - o) / 6</div>
                        <p>σ = ({pVal} - {oVal}) / 6 = <strong>{pert.sd.toFixed(2)}</strong>. Semakin kecil nilainya, semakin tinggi tingkat kepastian estimasi.</p>
                      </div>
                      <div>
                        <strong>3. Variansi (Variance):</strong>
                        <div className="calc-formula">σ² = ((p - o) / 6)²</div>
                        <p>σ² = <strong>{pert.v.toFixed(3)}</strong>. Variansi digunakan untuk menghitung probabilitas penyelesaian proyek keseluruhan pada jalur kritis.</p>
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
        <button className={`nav-btn ${activeTab === 'calculator' ? 'active' : ''}`} onClick={() => { setIsCustomSession(false); setView('calculator'); }}>Kalkulator MPSI</button>
        <button className={`nav-btn ${activeTab === 'changelog' ? 'active' : ''}`} onClick={() => setView('changelog')}>Log Pembaruan</button>
      </div>
      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme} 
          aria-label="Toggle Theme"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
        <div className="user-info" style={{ textAlign: 'right' }}>
          <span className="user-role">Mahasiswa Aktif</span>
          <strong className="user-batch">BSI @ 2026</strong>
        </div>
      </div>
    </header>
  );

  const renderLeaderboard = () => {
    const mockStudents = [
      { name: "Budi Santoso", avg: 92, avatar: "BS" },
      { name: "Siti Rahma", avg: 88, avatar: "SR" },
      { name: "Ahmad Fauzi", avg: 83, avatar: "AF" },
      { name: "Rian Hidayat", avg: 78, avatar: "RH" },
      { name: "Dewi Lestari", avg: 72, avatar: "DL" },
      { name: "Eko Prasetyo", avg: 65, avatar: "EP" },
      { name: "Mega Wijaya", avg: 58, avatar: "MW" }
    ];

    const userEntry = { name: "Anda (Darell Rangga)", avg: avgScore, avatar: "DR", isUser: true };
    const leaderboardList = [...mockStudents, userEntry].sort((a, b) => b.avg - a.avg);

    return (
      <div className="leaderboard-panel glass-card" style={{ width: '100%' }}>
        <h3 className="leaderboard-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#eab308' }}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/></svg>
          Papan Peringkat Kelas (Simulasi)
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
          Peringkat Anda dihitung secara dinamis berdasarkan nilai rata-rata seluruh riwayat simulasi ujian Anda.
        </p>

        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Rank</th>
                <th>Mahasiswa</th>
                <th style={{ textAlign: 'right', width: '120px' }}>Rata-Rata</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardList.map((student, index) => {
                const rank = index + 1;
                const isUser = student.isUser;
                
                let rankDisplay;
                if (rank === 1) rankDisplay = <span className="leaderboard-medal medal-gold">1</span>;
                else if (rank === 2) rankDisplay = <span className="leaderboard-medal medal-silver">2</span>;
                else if (rank === 3) rankDisplay = <span className="leaderboard-medal medal-bronze">3</span>;
                else rankDisplay = <span className="rank-other">{rank}</span>;

                return (
                  <tr key={index} className={isUser ? "leaderboard-row-user" : ""}>
                    <td>
                      <div className="leaderboard-rank-cell">
                        {rankDisplay}
                      </div>
                    </td>
                    <td>
                      <div className="leaderboard-student-profile">
                        <div className="leaderboard-avatar" style={{ backgroundColor: isUser ? 'rgba(37, 99, 235, 0.15)' : '#cbd5e1' }}>
                          {student.avatar}
                        </div>
                        <span>{student.name}</span>
                      </div>
                    </td>
                    <td style={{ fontWeight: '700', textAlign: 'right' }}>
                      {student.avg}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const handleOptionClick = (optionIndex, isCorrect) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: optionIndex }));
    
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const qIdStr = String(currentQuestion.id);

    if (isCorrect) {
      setScore(score + 1);
      setWrongQuestions(prev => {
        if (prev.includes(qIdStr)) {
          const updated = prev.filter(id => id !== qIdStr);
          localStorage.setItem('cumlaude_wrong_questions', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    } else {
      setWrongQuestions(prev => {
        if (!prev.includes(qIdStr)) {
          const updated = [...prev, qIdStr];
          localStorage.setItem('cumlaude_wrong_questions', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    }
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
                    {"×"}
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill={bookmarkedQuestions.includes(String(currentQuestion.id)) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><polyline points="20 6 9 17 4 12"/></svg>
                      Jawaban Anda Benar!
                    </span>
                  ) : (
                    <span className="feedback-status-badge incorrect">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      Jawaban Kurang Tepat!
                    </span>
                  )}
                </div>
                <p style={{ marginTop: '10px' }}>
                  <strong>Penjelasan:</strong> {chosenOption?.rationale || currentQuestion.options.find(o=>o.isCorrect).rationale}
                </p>
                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn-primary" onClick={handleNextQuestion}>
                    {currentQuestionIndex === activeQuestions.length - 1 ? 'Selesai' : 'Lanjut ➔'}
                  </button>
                </div>
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
              <button className="btn-primary" onClick={() => isPracticeMode ? startPractice(practiceType, practiceNum) : startQuiz(selectedLevel)}>
                {isPracticeMode ? 'Ulangi Latihan' : 'Ulangi Ujian'}
              </button>
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
                        <div className="review-header-left" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
                          <span className={`review-status-badge ${isUserCorrect ? 'correct' : 'incorrect'}`}>
                            {isUserCorrect ? 'Benar' : 'Salah'}
                          </span>
                          <button 
                            className={`bookmark-star-btn ${bookmarkedQuestions.includes(String(q.id)) ? 'bookmarked' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(q.id);
                            }}
                            title="Tandai Soal (Favorit)"
                            style={{ padding: '2px', marginRight: '5px' }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill={bookmarkedQuestions.includes(String(q.id)) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                          </button>
                          <span className="review-question-text">{idx + 1}. {q.question.substring(0, 70)}...</span>
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

  if (view === 'calculator') {
    return (
      <div className="app-container fade-in">
        {renderNavbar('calculator')}
        <main className="main-content">
          {renderCalculatorView()}
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'changelog') {
    return (
      <div className="app-container fade-in">
        {/* Navbar */}
        {renderNavbar('changelog')}

        <main className="main-content">
          <div className="changelog-page-header glass-panel">
            <span className="badge">Riwayat Pembaruan</span>
            <h2 className="changelog-page-title">Log Pembaruan Aplikasi (Changelog)</h2>
            <p className="changelog-page-desc">
              Pantau fitur terbaru, perbaikan bug, dan peningkatan performa yang diimplementasikan pada Cumlaude Area.
            </p>
          </div>

          <div className="changelog-section standalone">
            <div className="changelog-card glass-panel">
              <div className="changelog-list">
                <div className="changelog-item">
                  <div className="changelog-meta">
                    <span className="changelog-version">v1.4.1</span>
                    <span className="changelog-date">21 Mei 2026</span>
                    <span className="changelog-tag current">Terbaru</span>
                  </div>
                  <ul className="changelog-details">
                    <li><strong>Halaman Changelog Mandiri:</strong> Memisahkan log pembaruan aplikasi dari dashboard utama ke halaman mandiri yang bersih, responsif, dan interaktif.</li>
                    <li><strong>Ekspansi Soal Latihan &amp; Studi Kasus EVM/PERT:</strong> Menambahkan 34 soal latihan mandiri baru berkualitas tinggi (total 109 soal latihan), termasuk 10 soal perhitungan studi kasus EVM, CPI, SPI, EAC, dan estimasi durasi PERT pada Pertemuan 5.</li>
                  </ul>
                </div>

                <div className="changelog-item">
                  <div className="changelog-meta">
                    <span className="changelog-version">v1.4.0</span>
                    <span className="changelog-date">21 Mei 2026</span>
                  </div>
                  <ul className="changelog-details">
                    <li><strong>Fitur Latihan per Pertemuan:</strong> Menyediakan bank soal latihan mandiri untuk Pertemuan 1, 2, 3, 4, 5, 6, 9, 10, dan 14 langsung dari materi bab buku teks BSI MPSI.</li>
                    <li><strong>Latihan Kuis Kelas (P07):</strong> Integrasi bank soal Kuis MPSI Pertemuan 7 sebanyak 30 soal riil dengan kunci jawaban terverifikasi dan pembahasan terperinci.</li>
                    <li><strong>Mode Latihan Terisolasi:</strong> Sesi latihan berjalan dalam mode terpisah sehingga tidak memengaruhi pencapaian kelulusan level ujian reguler (UTS/UAS).</li>
                    <li><strong>Pembaruan Dashboard:</strong> Grid layout dinamis dan interaktif untuk akses cepat materi latihan, serta log aktivitas terperinci.</li>
                  </ul>
                </div>

                <div className="changelog-item">
                  <div className="changelog-meta">
                    <span className="changelog-version">v1.3.0</span>
                    <span className="changelog-date">21 Mei 2026</span>
                  </div>
                  <ul className="changelog-details">
                    <li><strong>Halaman Flashcards Interaktif &amp; Filter:</strong> Menambahkan fitur pencarian real-time, filter tab berdasarkan tingkat kesulitan, dan status progress bar belajar yang tersimpan secara lokal.</li>
                    <li><strong>Ekspansi Materi UAS MPSI:</strong> Meningkatkan jumlah kartu materi UAS MPSI menjadi 12 kartu terstruktur untuk menyamai materi UTS dan mencakup seluruh indikator kompetensi utama.</li>
                    <li><strong>Penyempurnaan Ujian &amp; Responsivitas:</strong> Menambahkan penanda opsi huruf (A, B, C, D) dengan efek hover/active modern, status box jawaban (Benar/Salah) yang dinamis pada penjelasan, serta dialog konfirmasi keluar ujian.</li>
                    <li><strong>Aksen Visual Premium:</strong> Optimalisasi tata letak grid dan keselarasan elemen visual pada berbagai perangkat seluler (smartphone).</li>
                  </ul>
                </div>

                <div className="changelog-item">
                  <div className="changelog-meta">
                    <span className="changelog-version">v1.2.0</span>
                    <span className="changelog-date">21 Mei 2026</span>
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

  // Dashboard Locking Indicators
  const isLvl2Locked = !unlockAll && !unlockedLevels.includes(2);
  const isLvl3Locked = !unlockAll && !unlockedLevels.includes(3);

  return (
    <div className="app-container fade-in">
      {/* Navbar */}
      {renderNavbar('dashboard')}

      {/* Main Content */}
      <main className="main-content">
        {wrongQuestions.length > 0 && (
          <div className="weak-topics-panel">
            <div className="weak-topics-content">
              <h4 className="weak-topics-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Peringatan Topik Lemah!
              </h4>
              <p className="weak-topics-desc">
                Berdasarkan hasil simulasi ujian, Anda terdeteksi memiliki kendala pada beberapa topik berikut. Direkomendasikan melakukan latihan perbaikan:
              </p>
              <div className="weak-topics-badges">
                {getWeakTopics().slice(0, 3).map((topic, tIdx) => (
                  <span key={tIdx} className="weak-topic-badge">
                    {topic.name} ({topic.count} Soal Salah)
                  </span>
                ))}
              </div>
              <div className="weak-topics-actions">
                <button className="btn-practice-start" style={{ background: '#ef4444', color: 'white', borderColor: '#ef4444' }} onClick={startWrongQuestionsPractice}>
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
        )}
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
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="badge">Sistem Simulasi {selectedExamType.toUpperCase()} MPSI Resmi</span>
              <span className="badge version-badge" style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.15)', display: 'inline-flex', alignItems: 'center', gap: '4px' }} onClick={() => setView('changelog')}>
                v1.4.1 (Terbaru)
              </span>
            </div>
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
            <strong className="stat-value orange-text">Skor ≥ 60</strong>
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

        {/* Custom Exam Creator Panel */}
        <div className="custom-exam-panel">
          <h3 className="custom-exam-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-blue)' }}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
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
              Mulai Ujian Kustom ➔
            </button>
          </div>
        </div>

        {/* Latihan per Pertemuan & Kuis Section */}
        <div className="practice-section-header">
          <h3>Latihan per Pertemuan {"&"} Kuis</h3>
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
                      <button 
                        className="btn-practice-start"
                        onClick={() => startPractice(meeting.type, meeting.num)}
                      >
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
        {renderLeaderboard()}

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
            {/* Standalone Changelog Redirect Link */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '10px' }}>
              <button className="btn-practice-start" style={{ padding: '8px 18px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setView('changelog')}>
                Lihat Log Pembaruan Aplikasi (Changelog v1.4.1)
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
