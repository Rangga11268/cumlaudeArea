// ==========================================
// MATERI KILAT FLASHCARDS - UTS
// ==========================================
export const MATERI_KILAT_UTS = [
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
    "title": "6. Teknik Estimasi Biaya & Durasi",
    "points": [
      "Analogous Estimating (Top-Down) menggunakan biaya/durasi proyek historis serupa sebagai acuan. Cepat, murah, namun akurasinya rendah.",
      "Bottom-Up Estimating menaksir biaya/durasi elemen WBS terendah lalu dijumlahkan ke atas. Sangat akurat namun memakan waktu dan biaya pengerjaan yang besar.",
      "Parametric Modeling menggunakan algoritma matematis berdasarkan data historis dan variabel proyek (misal: jumlah baris kode x tarif programmer).",
      "PERT (Program Evaluation and Review Technique) memperhitungkan ketidakpastian dengan 3 estimasi waktu: Optimistic (o), Most Likely (m), dan Pessimistic (p).",
      "Rumus PERT Distribusi Beta (PMBOK): E = (o + 4m + p) / 6 dan standar deviasi dev = (p - o) / 6. Distribusi Triangular: E = (o + m + p) / 3."
    ]
  },
  {
    "id": "uts_lvl2_card3",
    "level": 2,
    "title": "7. Struktur Organisasi Proyek (OP)",
    "points": [
      "Organisasi Proyek Murni (Projectized): Tim proyek dipisahkan secara mandiri, wewenang Manajer Proyek mutlak/penuh, dan staf tidak memiliki divisi asal (home-base).",
      "Organisasi Fungsional: Staf dikelompokkan berdasarkan divisi spesialisasi fungsional vertikal, jalur koordinasi bersifat birokratis, dan PM memiliki wewenang sangat minim/nol.",
      "Organisasi Matriks (Matrix Organization): Menggabungkan struktur fungsional dan fungsional proyek. Memiliki dua jalur komando (PM dan Manajer Fungsional).",
      "Weak Matrix: PM bertindak sebagai koordinator/expediter dengan wewenang minim.",
      "Balanced Matrix: PM dan Manajer Fungsional berbagi wewenang secara setara.",
      "Strong Matrix: PM memiliki wewenang lebih dominan dibanding Manajer Fungsional."
    ]
  },
  {
    "id": "uts_lvl3_card1",
    "level": 3,
    "title": "8. Earned Value Management (EVM) - Indikator Dasar",
    "points": [
      "Planned Value (PV) / BCWS: Anggaran disetujui yang direncanakan untuk diselesaikan pada tanggal evaluasi.",
      "Earned Value (EV) / BCWP: Nilai pekerjaan yang telah diselesaikan secara nyata hingga tanggal evaluasi.",
      "Actual Cost (AC) / ACWP: Biaya aktual yang dihabiskan untuk menyelesaikan pekerjaan hingga tanggal evaluasi.",
      "Cost Variance (CV): Selisih biaya aktual dengan hasil kerja nyata. Rumus: CV = EV - AC (CV < 0 berarti boros/over-budget).",
      "Schedule Variance (SV): Selisih jadwal rencana dengan hasil kerja nyata. Rumus: SV = EV - PV (SV < 0 berarti terlambat/behind schedule)."
    ]
  },
  {
    "id": "uts_lvl3_card2",
    "level": 3,
    "title": "9. EVM - Indeks Kinerja & Prakiraan Lanjutan",
    "points": [
      "Cost Performance Index (CPI): Indeks kinerja efisiensi biaya. Rumus: CPI = EV / AC (CPI < 1.0 berarti biaya tidak efisien).",
      "Schedule Performance Index (SPI): Indeks kinerja efisiensi waktu. Rumus: SPI = EV / PV (SPI < 1.0 berarti pengerjaan lambat).",
      "Estimate at Completion (EAC): Prakiraan total biaya akhir proyek jika kinerja saat ini berlanjut. Rumus standar: EAC = BAC / CPI.",
      "Estimate to Complete (ETC): Prakiraan biaya tambahan untuk menyelesaikan sisa pekerjaan. Rumus: ETC = EAC - AC atau ETC = (BAC - EV) / CPI.",
      "To-Complete Performance Index (TCPI): Indeks kinerja biaya yang harus dicapai untuk menyelesaikan sisa proyek sesuai anggaran. Rumus: TCPI = (BAC - EV) / (BAC - AC)."
    ]
  }
];

// ==========================================
// MATERI KILAT FLASHCARDS - UAS
// ==========================================
export const MATERI_KILAT_UAS = [
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
    "id": "uas_lvl1_card5",
    "level": 1,
    "title": "5. Project Life Cycle (PLC) vs SDLC",
    "points": [
      "Project Life Cycle (PLC): Rangkaian fase dari awal hingga penutupan proyek (Initiation, Planning, Execution, Monitoring, Closing).",
      "Systems Development Life Cycle (SDLC): Metodologi pengembangan software untuk membangun produk sistem informasi.",
      "Keterkaitan: Fase rekayasa teknis SDLC (analisis, desain, coding, testing) dieksekusi di dalam fase Execution dari PLC proyek."
    ]
  },
  {
    "id": "uas_lvl2_card1",
    "level": 2,
    "title": "6. Analisis Risiko Kualitatif & Kuantitatif",
    "points": [
      "Qualitative Risk Analysis: Menilai probabilitas & dampak tiap risiko menggunakan skala deskriptif (Low, Medium, High) untuk memprioritaskan risiko.",
      "Quantitative Risk Analysis: Menganalisis dampak numerik dari risiko gabungan pada target proyek secara matematis.",
      "Expected Monetary Value (EMV): Metode kuantitatif menghitung hasil rata-rata saat skenario masa depan tidak pasti. Rumus: EMV = Probability x Impact."
    ]
  },
  {
    "id": "uas_lvl2_card2",
    "level": 2,
    "title": "7. Strategi Respons Risiko (Threat & Opportunity)",
    "points": [
      "Respons Ancaman (Threats): Avoid (Menghindari risiko), Transfer (Memindahkan risiko ke pihak ketiga/asuransi), Mitigate (Mengurangi dampak), dan Accept (Menerima risiko).",
      "Respons Peluang (Opportunities): Exploit (Memastikan peluang terjadi), Share (Membagi peluang dengan pihak ketiga), Enhance (Meningkatkan probabilitas), dan Accept (Menerima peluang)."
    ]
  },
  {
    "id": "uas_lvl2_card3",
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
    "id": "uas_lvl2_card4",
    "level": 2,
    "title": "9. Ketergantungan (Sequencing & PDM/ADM)",
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
    "id": "uas_lvl2_card5",
    "level": 2,
    "title": "10. Jalur Kritis (Critical Path Method - CPM)",
    "points": [
      "Jalur Kritis (Critical Path) adalah jalur terpanjang dalam diagram jaringan proyek yang menentukan waktu penyelesaian proyek tercepat.",
      "Seluruh aktivitas yang berada di sepanjang Jalur Kritis memiliki nilai Float (Slack) = 0 (Nol).",
      "Penundaan waktu pengerjaan pada aktivitas kritis akan langsung menunda tanggal penyelesaian akhir proyek secara keseluruhan.",
      "Perhitungan Maju (Forward Pass) berjalan dari awal ke akhir untuk menghitung Early Start (ES) dan Early Finish (EF).",
      "Perhitungan Mundur (Backward Pass) berjalan dari akhir ke awal untuk menghitung Late Start (LS) dan Late Finish (LF)."
    ]
  },
  {
    "id": "uas_lvl3_card1",
    "level": 3,
    "title": "11. Kelonggaran Waktu, Lag/Lead & Kompresi",
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
    "id": "uas_lvl3_card2",
    "level": 3,
    "title": "12. Metode Konversi Sistem (System Conversion)",
    "points": [
      "Direct Cutover: Penghentian total sistem lama secara instan dan langsung mengaktifkan sistem baru. Cepat, murah, namun memiliki risiko kegagalan tertinggi.",
      "Parallel Conversion: Menjalankan sistem lama dan sistem baru secara bersamaan hingga sistem baru terbukti stabil. Paling aman, namun memakan biaya & tenaga ganda.",
      "Phased Conversion: Migrasi sistem dilakukan secara bertahap berdasarkan modul atau divisi. Meminimalkan risiko dampak kegagalan sistemik.",
      "Pilot Conversion: Menguji sistem baru hanya di satu divisi/lokasi percontohan sebelum disebarluaskan ke seluruh organisasi."
    ]
  },
  {
    "id": "uas_lvl3_card3",
    "level": 3,
    "title": "13. Penutupan Proyek & Serah Terima",
    "points": [
      "Close Project: Fase formal untuk memverifikasi seluruh deliverable telah selesai, diterima pelanggan, dan mendokumentasikan pelajaran berharga (lessons learned).",
      "Administrative Closure: Pengarsipan file proyek, pembubaran tim proyek (release of resources), dan penyelesaian kewajiban kontrak vendor.",
      "Acceptance Criteria: Kriteria formal tertulis yang disepakati dengan pelanggan untuk menyatakan bahwa deliverables memenuhi standar kualitas yang diinginkan."
    ]
  },
  {
    "id": "uas_lvl3_card4",
    "level": 3,
    "title": "14. Project Management Plan (PMP) & 4W+1H",
    "points": [
      "Project Management Plan (PMP): Dokumen induk resmi yang mengintegrasikan seluruh rencana area pengetahuan untuk mengarahkan eksekusi dan kontrol proyek.",
      "Formulasi PMP (4W + 1H): What (tujuan/deliverable), Why (alasan/kasus bisnis), When (milestone/jadwal), Who (tim/organisasi), dan How (metode/manajemen).",
      "Persetujuan PMP: Harus ditandatangani oleh Sponsor Proyek dan Manajer Fungsional/Kunci sebagai tanda otorisasi resmi baseline proyek."
    ]
  },
  {
    "id": "uas_lvl3_card5",
    "level": 3,
    "title": "15. Scope Baseline & CCB",
    "points": [
      "Scope Baseline terdiri atas 3 dokumen utama: Project Scope Statement (deskripsi ruang lingkup), WBS (struktur dekomposisi), dan WBS Dictionary.",
      "Change Control Board (CCB): Kelompok pemangku kepentingan formal yang bertanggung jawab meninjau, mengevaluasi, menyetujui, atau menolak perubahan baseline proyek.",
      "Cost of Changes: Biaya untuk melakukan perubahan scope meningkat secara eksponensial seiring berjalannya fase proyek menuju akhir."
    ]
  }
];

// ==========================================
// COURSES & EXAM TYPES
// ==========================================
export const COURSES = [
  { id: 'mpsi', name: 'Manajemen Proyek Sistem Informasi', code: 'MPSI', active: true },
  { id: 'soon1', name: 'Next Course', code: 'SOON', active: false },
  { id: 'soon2', name: 'Next Course', code: 'SOON', active: false },
  { id: 'soon3', name: 'Next Course', code: 'SOON', active: false }
];

export const EXAM_TYPES = [
  { id: 'uts', name: 'UTS (Ujian Tengah Semester)', active: true },
  { id: 'uas', name: 'UAS (Ujian Akhir Semester)', active: false }
];

// ==========================================
// PRACTICE MEETINGS
// ==========================================
export const PRACTICE_MEETINGS = [
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
