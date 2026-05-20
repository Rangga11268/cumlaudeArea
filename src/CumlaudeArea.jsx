import React, { useState } from 'react';

// ==========================================
// DATABASE 60 SOAL MANAJEMEN PROYEK (MPSI)
// ==========================================
const QUESTIONS_DATABASE = [
  // --- LEVEL 1: KONSEP DASAR & INISIASI (1 - 20) ---
  {
    id: 1,
    level: 1,
    category: "Konsep Dasar MPSI",
    question: "Menurut Peterson & Plowman, pengertian manajemen yang paling tepat adalah...",
    options: [
      { text: "Seni menyelesaikan pekerjaan melalui orang lain secara sistematis", isCorrect: false, rationale: "Ini adalah definisi manajemen menurut Mary Parker Follett." },
      { text: "Teknik atau cara untuk mencapai suatu tujuan tertentu yang sejatinya telah ditetapkan terlebih dahulu", isCorrect: true, rationale: "Peterson & Plowman mendefinisikan manajemen sebagai sebuah teknik atau cara spesifik untuk mencapai tujuan yang telah disepakati sebelumnya." },
      { text: "Proses merencanakan, mengorganisasikan, memimpin, dan mengendalikan upaya anggota organisasi", isCorrect: false, rationale: "Ini merupakan definisi manajemen klasik dari Stoner & Freeman." },
      { text: "Suatu ilmu untuk merancang arsitektur sistem informasi enterprise", isCorrect: false, rationale: "Ini merupakan definisi rekayasa informasi teknis, bukan manajemen secara umum." }
    ],
    hint: "Pikirkan kata kunci 'teknik untuk mencapai tujuan tertentu yang telah ditetapkan terlebih dahulu'."
  },
  {
    id: 2,
    level: 1,
    category: "Konsep Dasar MPSI",
    question: "Aktivitas yang bersifat temporer (sementara), selalu memiliki pembatasan dalam pelaksanaan, biaya, serta skalanya disebut...",
    options: [
      { text: "Operasional Bisnis", isCorrect: false, rationale: "Operasional bersifat terus-menerus (repetitif) dan tidak memiliki batas waktu selesai yang kaku." },
      { text: "Proyek", isCorrect: true, rationale: "Proyek memiliki karakteristik unik: temporer (ada awal dan akhir yang jelas), unik, serta dibatasi oleh triple constraints (waktu, biaya, lingkup)." },
      { text: "Sistem Informasi", isCorrect: false, rationale: "Sistem Informasi adalah kombinasi teknologi dan aktivitas manusia, bukan aktivitas temporer pembatas." },
      { text: "Manajemen Siklus", isCorrect: false, rationale: "Manajemen siklus adalah metodologi pengelolaan, bukan nama aktivitasnya." }
    ],
    hint: "Aktivitas ini bertolak belakang dengan operasional rutin karena selalu berakhir ketika tujuannya telah tercapai."
  },
  {
    id: 3,
    level: 1,
    category: "Konsep Dasar MPSI",
    question: "Kumpulan lengkap pekerjaan, teknik, serta perangkat yang diaplikasikan selama pelaksanaan proyek disebut sebagai...",
    options: [
      { text: "Sistem Manajemen", isCorrect: false, rationale: "Sistem manajemen mencakup tata kelola operasional organisasi secara luas." },
      { text: "Manajemen Proyek", isCorrect: true, rationale: "Manajemen Proyek adalah aplikasi dari pengetahuan, keterampilan, perangkat, dan teknik untuk memenuhi persyaratan proyek." },
      { text: "Arsitektur Enterprise", isCorrect: false, rationale: "Arsitektur Enterprise adalah blueprint keselarasan bisnis dan TI organisasi jangka panjang." },
      { text: "Metodologi SDLC", isCorrect: false, rationale: "SDLC adalah siklus hidup pengembangan perangkat lunak teknis, bukan manajemen proyek secara umum." }
    ],
    hint: "Pikirkan tentang penggabungan ilmu manajemen dengan karakteristik spesifik dari sebuah proyek."
  },
  {
    id: 4,
    level: 1,
    category: "Konsep Dasar MPSI",
    question: "Faktor terpenting dan menempati kasta tertinggi dalam model kematangan PM-CMM (Project Management Capability Maturity Model) adalah...",
    options: [
      { text: "Proses (Process)", isCorrect: false, rationale: "Proses adalah elemen pendukung metode, tetapi bukan elemen utama penentu keberhasilan adaptasi." },
      { text: "Teknologi (Technology)", isCorrect: false, rationale: "Teknologi hanyalah alat bantu sekunder, kematangan utama ditentukan oleh kapabilitas manusia." },
      { text: "Manusia (People)", isCorrect: true, rationale: "PM-CMM menegaskan bahwa manusia (staf/tim) merupakan aset paling berharga dan penentu utama keberhasilan manajemen proyek." },
      { text: "Anggaran (Budget)", isCorrect: false, rationale: "Anggaran adalah konstrain proyek, bukan bagian dari penilaian model kematangan PM-CMM." }
    ],
    hint: "Tanpa adanya kompetensi dari faktor ini, proses kerja yang matang dan teknologi tercanggih sekalipun tidak akan dapat berjalan secara optimal."
  },
  {
    id: 5,
    level: 1,
    category: "Konsep Dasar MPSI",
    question: "Penyebab kegagalan utama dari sebuah proyek pengembangan sistem informasi di perusahaan umumnya adalah...",
    options: [
      { text: "Implementasi tidak sesuai jadwal dan sistem yang dihasilkan tidak efektif digunakan", isCorrect: true, rationale: "Kegagalan proyek TI biasanya disebabkan oleh keterlambatan penyelesaian (behind schedule) serta resistensi pengguna karena sistem tidak fungsional." },
      { text: "Harga komputer yang tiba-tiba turun di pasaran", isCorrect: false, rationale: "Penurunan harga perangkat keras justru menguntungkan pengadaan anggaran proyek." },
      { text: "Terlalu banyak dokumentasi proyek yang tersusun rapi", isCorrect: false, rationale: "Dokumentasi yang rapi justru mempermudah proses serah terima dan pemeliharaan jangka panjang." },
      { text: "Staf IT menggunakan komputer dengan sistem operasi open-source", isCorrect: false, rationale: "Sistem operasi open-source tidak berkorelasi langsung dengan kegagalan manajemen proyek." }
    ],
    hint: "Fokus pada dua parameter utama: ketepatan waktu (schedule baseline) dan kebermanfaatan produk akhir bagi pengguna."
  },
  {
    id: 6,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Wilayah bisnis, batasan fitur, serta rentang tanggung jawab pekerjaan di dalam sebuah proyek disebut dengan istilah...",
    options: [
      { text: "Metode Proyek", isCorrect: false, rationale: "Metode mengacu pada taktik implementasi teknis." },
      { text: "Scope Proyek", isCorrect: true, rationale: "Scope (ruang lingkup) mendefinisikan batasan pekerjaan apa saja yang termasuk dan tidak termasuk di dalam proyek." },
      { text: "Tujuan Proyek", isCorrect: false, rationale: "Tujuan adalah target akhir yang ingin dicapai, sedangkan rentang kerjanya didefinisikan oleh Scope." },
      { text: "Manajemen Integrasi", isCorrect: false, rationale: "Integrasi adalah koordinasi antar area pengetahuan, bukan batasan kerjanya." }
    ],
    hint: "Istilah ini merujuk pada area cakupan atau batasan pekerjaan agar proyek tidak meluas tanpa arah."
  },
  {
    id: 7,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Dokumen formal yang ditandatangani oleh Sponsor Proyek untuk melegalkan keberadaan proyek dan menunjuk Manajer Proyek secara resmi adalah...",
    options: [
      { text: "Project Charter", isCorrect: true, rationale: "Project Charter memberikan otorisasi resmi bagi jalannya proyek serta wewenang bagi PM untuk mengalokasikan sumber daya organisasi." },
      { text: "Statement of Work (SOW)", isCorrect: false, rationale: "SOW adalah deskripsi naratif kebutuhan bisnis proyek, bukan dokumen otorisasi legal." },
      { text: "Work Breakdown Structure (WBS)", isCorrect: false, rationale: "WBS adalah dekomposisi ruang lingkup kerja yang dibuat pada fase perencanaan." },
      { text: "Project Management Plan (PMP)", isCorrect: false, rationale: "PMP adalah rencana eksekusi terperinci yang baru disusun setelah Project Charter terbit." }
    ],
    hint: "Dokumen ini diterbitkan pada kelompok proses inisiasi (Initiating) sebagai gerbang legalitas pertama proyek."
  },
  {
    id: 8,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Di bawah ini yang merupakan pemangku kepentingan utama (Key Stakeholders) dalam proyek sistem informasi adalah...",
    options: [
      { text: "Project Sponsor, Project Manager, Tim Proyek, dan Pelanggan/Klien", isCorrect: true, rationale: "Empat entitas ini adalah pemangku kepentingan utama yang memiliki pengaruh langsung terhadap keputusan dan keberhasilan proyek." },
      { text: "Keluarga dekat dari staf programmer", isCorrect: false, rationale: "Keluarga staf tidak memiliki pengaruh atau kepentingan langsung dalam tata kelola manajemen proyek." },
      { text: "Toko retail komputer di sekitar kantor", isCorrect: false, rationale: "Toko retail umum bukan bagian dari struktur stakeholder internal maupun eksternal proyek." },
      { text: "Pegawai pajak pemerintah pusat saja", isCorrect: false, rationale: "Pegawai pajak menangani regulasi keuangan negara secara umum, bukan operasional manajemen proyek." }
    ],
    hint: "Pikirkan pihak-pihak yang mendanai, memimpin, mengerjakan, serta menggunakan hasil akhir dari sistem informasi tersebut."
  },
  {
    id: 9,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Berdasarkan PMBOK 5th Edition, tiga batasan utama dalam proyek (Triple Constraints) klasik terdiri atas...",
    options: [
      { text: "Manusia, Sistem, dan Proses", isCorrect: false, rationale: "Ini adalah elemen sosiologi organisasi, bukan konstrain batas proyek." },
      { text: "Scope, Time, dan Cost", isCorrect: true, rationale: "Triple constraints klasik menuntut keseimbangan antara ruang lingkup (Scope), waktu (Time), dan biaya (Cost)." },
      { text: "Risiko, Komunikasi, dan Kualitas", isCorrect: false, rationale: "Ini adalah area pengetahuan pendukung, bukan bagian dari segitiga konstrain emas klasik." },
      { text: "Software, Hardware, dan Brainware", isCorrect: false, rationale: "Ini adalah komponen utama dari sistem komputer, bukan batasan proyek." }
    ],
    hint: "Ingat segitiga legendaris manajemen proyek: Apa yang dikerjakan, Kapan harus selesai, dan Berapa anggaran yang tersedia."
  },
  {
    id: 10,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Proses mengidentifikasi seluruh orang, kelompok, atau organisasi yang dapat mempengaruhi atau dipengaruhi oleh proyek dicatat di dalam...",
    options: [
      { text: "Stakeholder Register", isCorrect: true, rationale: "Stakeholder Register adalah dokumen keluaran dari fase inisiasi yang mendata profil, peran, serta tingkat pengaruh pemangku kepentingan." },
      { text: "Project Charter", isCorrect: false, rationale: "Project Charter hanya mencantumkan nama sponsor dan manajer proyek utama secara ringkas, bukan analisis detail seluruh pihak." },
      { text: "WBS Dictionary", isCorrect: false, rationale: "WBS Dictionary menjelaskan rincian teknis dari setiap paket kerja dalam WBS." },
      { text: "Communication Management Plan", isCorrect: false, rationale: "Rencana komunikasi mengatur tata cara distribusi informasi, bukan daftar profil stakeholdernya." }
    ],
    hint: "Dokumen ini bertindak sebagai basis data profil seluruh pemangku kepentingan sejak hari pertama proyek dimulai."
  },
  {
    id: 11,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Tahapan siklus hidup manajemen proyek yang berfokus pada perolehan otorisasi formal untuk memulai proyek baru adalah...",
    options: [
      { text: "Planning", isCorrect: false, rationale: "Planning berfokus pada perancangan rencana aksi terperinci." },
      { text: "Executing", isCorrect: false, rationale: "Executing berfokus pada pengerjaan fisik produk/deliverables." },
      { text: "Initiating", isCorrect: true, rationale: "Initiating adalah fase awal yang menetapkan kelayakan bisnis dan otorisasi formal proyek." },
      { text: "Closing", isCorrect: false, rationale: "Closing adalah fase akhir penutupan dan serah terima dokumen." }
    ],
    hint: "Fase ini menghasilkan dokumen Project Charter yang menandai titik mula legal proyek."
  },
  {
    id: 12,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Sifat 'temporer' dalam sebuah proyek sistem informasi berarti...",
    options: [
      { text: "Sistem informasi yang dibangun akan langsung rusak setelah setahun", isCorrect: false, rationale: "Sistem yang dibuat diharapkan bertahan lama dalam fase operasional; yang temporer adalah proyek pembuatannya." },
      { text: "Setiap proyek memiliki titik awal dan akhir pengerjaan yang pasti dan jelas", isCorrect: true, rationale: "Temporer berarti masa kerja proyek dibatasi oleh tanggal mulai dan tanggal selesai yang telah ditentukan sejak awal." },
      { text: "Anggota tim proyek bekerja tanpa adanya kontrak ikatan hukum", isCorrect: false, rationale: "Kontrak kerja proyek tetap memiliki kekuatan hukum yang sah selama masa pengerjaan." },
      { text: "Sistem dibangun menggunakan server cloud trial gratisan", isCorrect: false, rationale: "Server cloud trial tidak mendefinisikan sifat temporer sosiologis sebuah proyek." }
    ],
    hint: "Pikirkan batasan dimensi waktu pengerjaan yang tidak berlangsung selamanya."
  },
  {
    id: 13,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Siapakah pihak eksternal atau internal yang menyediakan sumber daya finansial (dana) untuk berjalannya proyek?",
    options: [
      { text: "Project Sponsor", isCorrect: true, rationale: "Sponsor adalah individu atau kelompok yang menyediakan dana, mendukung proyek, dan bertanggung jawab atas kesuksesan finansialnya." },
      { text: "Project Manager", isCorrect: false, rationale: "PM adalah pengelola operasional proyek, bukan penyedia dana investasi utama." },
      { text: "System Analyst", isCorrect: false, rationale: "System Analyst merancang arsitektur sistem, bukan penyandang dana." },
      { text: "User Pengguna Akhir", isCorrect: false, rationale: "User menggunakan produk akhir sistem, mereka tidak mendanai proyek secara langsung dari saku pribadi." }
    ],
    hint: "Pihak ini memiliki otoritas finansial tertinggi untuk menyetujui anggaran belanja proyek."
  },
  {
    id: 14,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Manakah dokumen awal yang memuat analisis kelayakan bisnis, proyeksi keuntungan finansial (ROI), serta alasan strategis pemilihan proyek?",
    options: [
      { text: "Business Case", isCorrect: true, rationale: "Business Case menjabarkan justifikasi investasi keuangan proyek dari sudut pandang kebutuhan bisnis sebelum charter dibuat." },
      { text: "WBS Dictionary", isCorrect: false, rationale: "WBS Dictionary fokus pada kamus teknis paket kerja, bukan justifikasi finansial organisasi." },
      { text: "Quality Checklist", isCorrect: false, rationale: "Quality Checklist memuat kriteria pengujian kualitas, bukan kelayakan bisnis." },
      { text: "Issue Log", isCorrect: false, rationale: "Issue Log melacak masalah yang sedang aktif di lapangan." }
    ],
    hint: "Dokumen ini berisi analisis keuntungan investasi (cost-benefit analysis) sebelum dana resmi dikucurkan."
  },
  {
    id: 15,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Peristiwa penting di dalam jadwal proyek yang memiliki durasi pengerjaan tepat sama dengan nol (0) disebut...",
    options: [
      { text: "Milestone", isCorrect: true, rationale: "Milestone adalah penanda titik pencapaian penting dalam jadwal proyek yang tidak memakan durasi waktu maupun sumber daya." },
      { text: "Critical Path", isCorrect: false, rationale: "Critical Path adalah jalur aktivitas terpanjang, bukan penanda dengan durasi nol." },
      { text: "Work Package", isCorrect: false, rationale: "Work Package adalah paket kerja terendah di WBS yang memiliki estimasi durasi dan biaya nyata." },
      { text: "Slack Time", isCorrect: false, rationale: "Slack adalah kelonggaran waktu tunda aktivitas, bukan peristiwa penanda." }
    ],
    hint: "Ia bertindak sebagai penanda sejarah (seperti 'Database Selesai Dirancang') tanpa memiliki durasi hari kerja."
  },
  {
    id: 16,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Aspek lingkungan eksternal dan internal organisasi di luar kendali proyek yang dapat mempengaruhi jalannya proyek disebut...",
    options: [
      { text: "Enterprise Environmental Factors (EEF)", isCorrect: true, rationale: "EEF mencakup faktor seperti budaya organisasi, kondisi pasar, regulasi pemerintah, dan infrastruktur sistem yang ada." },
      { text: "Organizational Process Assets (OPA)", isCorrect: false, rationale: "OPA adalah aset internal organisasi seperti template, pedoman SOP, dan basis data historis." },
      { text: "WBS Dictionary", isCorrect: false, rationale: "Ini adalah dokumen dekomposisi lingkup kerja teknis." },
      { text: "Scope Baseline", isCorrect: false, rationale: "Scope baseline adalah acuan dasar ruang lingkup proyek yang disetujui." }
    ],
    hint: "Pikirkan singkatan EEF yang menggambarkan kondisi lingkungan makro sekitar perusahaan."
  },
  {
    id: 17,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Aset internal perusahaan berupa template dokumen, kebijakan, prosedur operasi standar (SOP), serta database pelajaran masa lalu disebut...",
    options: [
      { text: "Organizational Process Assets (OPA)", isCorrect: true, rationale: "OPA adalah kumpulan aset proses organisasi yang memfasilitasi koordinasi dan mempermudah PM memulai proyek baru." },
      { text: "Enterprise Environmental Factors (EEF)", isCorrect: false, rationale: "EEF adalah faktor lingkungan eksternal organisasi yang berada di luar kendali langsung." },
      { text: "Project Charter", isCorrect: false, rationale: "Charter adalah dokumen inisiasi spesifik satu proyek, bukan aset organisasi secara global." },
      { text: "Business Case", isCorrect: false, rationale: "Business Case adalah analisis keuangan spesifik proyek sebelum dimulai." }
    ],
    hint: "OPA mencakup seluruh perpustakaan template dan data historis berharga milik organisasi induk."
  },
  {
    id: 18,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Mengapa Kick-off Meeting sangat penting dilaksanakan tepat setelah dokumen perencanaan disetujui?",
    options: [
      { text: "Untuk memperkenalkan tim, menyelaraskan pemahaman tujuan, dan menyatakan proyek resmi dimulai", isCorrect: true, rationale: "Kick-off meeting membangun komitmen bersama, menyamakan persepsi, serta mengumumkan mulainya fase eksekusi proyek secara resmi." },
      { text: "Agar tim pengembang dapat membagikan bonus keuangan termin pertama", isCorrect: false, rationale: "Bonus termin pertama dibayarkan berdasarkan pencapaian milestone kontrak, bukan di awal pertemuan." },
      { text: "Untuk melakukan pemecatan massal staf fungsional yang kurang aktif", isCorrect: false, rationale: "Pertemuan ini bernuansa positif untuk membangun motivasi tim, bukan untuk pemberhentian staf." },
      { text: "Sebagai ajang demo program aplikasi versi akhir ke hadapan media", isCorrect: false, rationale: "Demo versi akhir dilakukan pada fase closing atau serah terima, bukan kick-off." }
    ],
    hint: "Pertemuan ini diadakan untuk menekan tombol 'start' tanda dimulainya kerja sama tim secara formal."
  },
  {
    id: 19,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Pernyataan naratif tertulis yang merinci kebutuhan bisnis, deskripsi ruang lingkup produk, serta rencana strategis proyek disebut...",
    options: [
      { text: "Statement of Work (SOW)", isCorrect: true, rationale: "SOW adalah dokumen acuan awal yang menjabarkan deskripsi produk sistem informasi yang diminta oleh pelanggan." },
      { text: "WBS Dictionary", isCorrect: false, rationale: "WBS Dictionary mendeskripsikan elemen paket kerja WBS secara mikro, bukan narasi bisnis makro." },
      { text: "Project Charter", isCorrect: false, rationale: "Charter adalah dokumen legal otorisasi, sedangkan SOW adalah dokumen masukan (input) tertulis mengenai ruang lingkup kerja produk." },
      { text: "Control Chart", isCorrect: false, rationale: "Control Chart adalah alat kendali statistik pengawasan mutu pengerjaan." }
    ],
    hint: "Dokumen ini sering dilampirkan dalam undangan tender lelang proyek sebagai deskripsi pekerjaan (SOW)."
  },
  {
    id: 20,
    level: 1,
    category: "Inisiasi & Integrasi",
    question: "Pada fase manakah proses rekrutmen atau pembentukan struktur tim proyek sistem informasi idealnya diselesaikan secara penuh?",
    options: [
      { text: "Fase Planning menuju awal Executing", isCorrect: true, rationale: "Tim inti harus lengkap saat perencanaan diselesaikan agar mereka siap mengeksekusi (Executing) tugas coding dan desain database." },
      { text: "Fase Closing setelah software serah terima", isCorrect: false, rationale: "Pada fase closing, tim justru dibubarkan (released) dari proyek." },
      { text: "Fase Penjualan saham perusahaan ke bursa efek", isCorrect: false, rationale: "Ini adalah aksi korporasi keuangan induk, bukan bagian dari siklus manajemen proyek." },
      { text: "Ketika sistem mengalami crash fatal di tangan pengguna", isCorrect: false, rationale: "Pembentukan tim dilakukan di awal untuk mencegah crash, bukan setelah krisis terjadi." }
    ],
    hint: "Tim harus sudah terbentuk sebelum aktivitas pembuatan program (coding) dan desain fisik mulai berjalan."
  },

  // --- LEVEL 2: PERENCANAAN & MANAJEMEN WAKTU (21 - 40) ---
  {
    id: 21,
    level: 2,
    category: "Perencanaan MPSI",
    question: "Sesuai dengan slide Modul BSI halaman 126, Project Management Plan (PMP) dibuat oleh... dan ditandatangani oleh...",
    options: [
      { text: "Project Manager, Key Stakeholder", isCorrect: true, rationale: "PMP dirancang oleh Project Manager sebagai pemimpin tim, lalu disetujui serta ditandatangani oleh Key Stakeholder agar menjadi acuan baseline yang sah." },
      { text: "System Analyst, Programmer", isCorrect: false, rationale: "Analyst dan Programmer adalah pelaksana teknis, mereka tidak memiliki otoritas menandatangani dokumen baseline organisasi." },
      { text: "Database Administrator, Quality Assurance", isCorrect: false, rationale: "DBA dan QA berfokus pada kualitas dan data, bukan penyusunan rencana induk proyek." },
      { text: "Sponsor Proyek, Direktur Keuangan", isCorrect: false, rationale: "Sponsor dan Direktur Keuangan adalah penerima laporan dan pendana, bukan pembuat rencana proyek." }
    ],
    hint: "PM bertindak sebagai penyusun rencana, sedangkan pemangku kepentingan utama bertindak sebagai pemberi tanda persetujuan."
  },
  {
    id: 22,
    level: 2,
    category: "Perencanaan MPSI",
    question: "Berdasarkan Modul BSI, elemen penting yang menyusun dokumen 'Scope Baseline' secara terintegrasi adalah...",
    options: [
      { text: "Project Scope Statement, WBS, dan WBS Dictionary", isCorrect: true, rationale: "Scope Baseline dikunci melalui kombinasi pernyataan lingkup tertulis (Scope Statement), bagan dekomposisi kerja (WBS), dan kamus detailnya (WBS Dictionary)." },
      { text: "Project Charter, Gantt Chart, dan Cost Baseline", isCorrect: false, rationale: "Charter bukan bagian dari baseline scope, sedangkan Gantt Chart merupakan bagian dari Schedule Baseline." },
      { text: "SOW, SLA, dan Risk Register", isCorrect: false, rationale: "SOW dan SLA adalah instrumen kesepakatan tingkat layanan, sedangkan Risk Register mengelola risiko." },
      { text: "Milestone List, Activity List, dan Network Diagram", isCorrect: false, rationale: "Ini merupakan elemen penyusun baseline jadwal (Schedule Baseline)." }
    ],
    hint: "Baseline ini terdiri dari tiga serangkai dokumen lingkup yang mengunci batasan fitur aplikasi."
  },
  {
    id: 23,
    level: 2,
    category: "Perencanaan MPSI",
    question: "Penyederhanaan isi dari Project Management Plan sering kali dirangkum dalam rumusan taktis...",
    options: [
      { text: "4 W dan 1 H", isCorrect: true, rationale: "PMP disederhanakan menjadi rumusan taktis 4W + 1H (What, Why, When, Who, dan How) untuk mempermudah pemahaman tim proyek." },
      { text: "5 W dan 1 H", isCorrect: false, rationale: "Meskipun merupakan prinsip jurnalisme umum, dalam Modul BSI penyederhanaan PMP merujuk spesifik pada 4W + 1H." },
      { text: "3 W dan 2 H", isCorrect: false, rationale: "Rumusan ini kurang mencakup elemen esensial perencanaan proyek." },
      { text: "2 W dan 3 H", isCorrect: false, rationale: "Salah, rumusan ini tidak dikenal dalam standar penyederhanaan rencana proyek." }
    ],
    hint: "Isinya memuat pertanyaan: Apa pekerjaannya, Mengapa dilakukan, Kapan jadwalnya, Siapa pelaksananya, dan Bagaimana pengawasannya."
  },
  {
    id: 24,
    level: 2,
    category: "Perencanaan MPSI",
    question: "Menurut Modul BSI halaman 126, Project Management Plan (PMP) wajib ditandatangani oleh...",
    options: [
      { text: "Key Stakeholder", isCorrect: true, rationale: "Key Stakeholder memberikan persetujuan formal mutlak atas rencana yang diajukan oleh PM agar dapat dijadikan dasar evaluasi." },
      { text: "Programmer", isCorrect: false, rationale: "Programmer tidak memiliki hak otoritas menyetujui baseline rencana induk proyek." },
      { text: "System Analyst", isCorrect: false, rationale: "System Analyst bertugas merancang analisis sistem, bukan mengotorisasi dokumen PMP." },
      { text: "Team Proyek secara keseluruhan", isCorrect: false, rationale: "Tim proyek menjalankan rencana, namun persetujuan formal berada di tangan Key Stakeholder." }
    ],
    hint: "Pihak pemangku kepentingan utama yang memegang kendali atas keberhasilan dan keselarasan bisnis proyek."
  },
  {
    id: 25,
    level: 2,
    category: "Perencanaan MPSI",
    question: "Struktur hierarki dekomposisi ruang lingkup pekerjaan yang harus diselesaikan oleh tim proyek disebut...",
    options: [
      { text: "Work Breakdown Structure (WBS)", isCorrect: true, rationale: "WBS memecah ruang lingkup proyek secara hierarkis menjadi bagian-bagian yang lebih kecil dan mudah dikelola." },
      { text: "Gantt Chart", isCorrect: false, rationale: "Gantt Chart adalah visualisasi jadwal berbasis linier waktu, bukan hierarki pekerjaan." },
      { text: "Network Diagram", isCorrect: false, rationale: "Network Diagram menggambarkan hubungan dependensi urutan aktivitas kerja." },
      { text: "Resource Histogram", isCorrect: false, rationale: "Resource Histogram menunjukkan visualisasi pembebanan alokasi staf proyek." }
    ],
    hint: "Diagram pohon ini memecah proyek besar menjadi modul, sub-modul, hingga paket kerja terendah."
  },
  {
    id: 26,
    level: 2,
    category: "Manajemen Waktu",
    question: "Urutan aktivitas terpanjang dalam diagram jaringan proyek yang menentukan durasi total minimum proyek disebut...",
    options: [
      { text: "Critical Path (Jalur Kritis)", isCorrect: true, rationale: "Critical Path menentukan durasi tercepat untuk menyelesaikan proyek. Setiap penundaan pada jalur ini akan langsung memundurkan tanggal akhir proyek." },
      { text: "Float Path", isCorrect: false, rationale: "Float path adalah jalur yang memiliki kelonggaran waktu tunda, bukan jalur penentu durasi minimum." },
      { text: "Milestone Path", isCorrect: false, rationale: "Tidak ada istilah milestone path dalam analisis penjadwalan jaringan kerja." },
      { text: "Fast Track Path", isCorrect: false, rationale: "Fast track adalah nama teknik kompresi jadwal, bukan nama jalurnya." }
    ],
    hint: "Aktivitas-aktivitas di jalur ini memiliki nilai kelonggaran waktu (Slack/Float) tepat sama dengan nol."
  },
  {
    id: 27,
    level: 2,
    category: "Manajemen Waktu",
    question: "Kelonggaran waktu tunda suatu aktivitas tanpa mempengaruhi tanggal akhir proyek secara keseluruhan disebut...",
    options: [
      { text: "Float atau Slack", isCorrect: true, rationale: "Float (Slack) adalah selisih antara Late Start dengan Early Start (LS - ES), yang menunjukkan toleransi keterlambatan aktivitas." },
      { text: "Milestone", isCorrect: false, rationale: "Milestone adalah penanda titik pencapaian proyek dengan durasi nol." },
      { text: "Lag Time", isCorrect: false, rationale: "Lag adalah waktu tunggu wajib yang disisipkan di antara dua aktivitas yang berurutan." },
      { text: "Lead Time", isCorrect: false, rationale: "Lead adalah percepatan waktu pengerjaan aktivitas penerus sebelum aktivitas pendahulu selesai sepenuhnya." }
    ],
    hint: "Rumus perhitungannya adalah Late Start dikurangi Early Start (LS - ES)."
  },
  {
    id: 28,
    level: 2,
    category: "Manajemen Waktu",
    question: "Metode kompresi jadwal dengan cara menambahkan sumber daya ekstra pada aktivitas jalur kritis dengan konsekuensi penambahan biaya disebut...",
    options: [
      { text: "Crashing", isCorrect: true, rationale: "Crashing memangkas waktu pengerjaan dengan menginvestasikan biaya tambahan (misalnya kerja lembur atau menambah jumlah programmer)." },
      { text: "Fast Tracking", isCorrect: false, rationale: "Fast Tracking mempercepat jadwal dengan menjalankan aktivitas secara paralel/tumpang tindih tanpa penambahan biaya langsung." },
      { text: "Resource Leveling", isCorrect: false, rationale: "Resource Leveling adalah teknik pemerataan alokasi sumber daya agar tidak terjadi kelebihan beban kerja." },
      { text: "Scope Reduction", isCorrect: false, rationale: "Scope Reduction adalah pengurangan ruang lingkup fitur secara ekstrem, bukan teknik kompresi waktu standar." }
    ],
    hint: "Teknik ini mengorbankan faktor biaya (anggaran membengkak) demi memperoleh waktu penyelesaian yang lebih cepat."
  },
  {
    id: 29,
    level: 2,
    category: "Manajemen Waktu",
    question: "Metode kompresi jadwal dengan menjalankan beberapa aktivitas yang seharusnya berurutan secara paralel atau tumpang tindih disebut...",
    options: [
      { text: "Fast Tracking", isCorrect: true, rationale: "Fast Tracking menyejajarkan tugas-tugas kritis secara bersamaan, sehingga menghemat waktu tetapi meningkatkan risiko pengerjaan ulang (rework)." },
      { text: "Crashing", isCorrect: false, rationale: "Crashing fokus pada penambahan biaya/staf untuk mempercepat durasi, bukan memparalelkan tugas." },
      { text: "Heuristic Scheduling", isCorrect: false, rationale: "Heuristic adalah pendekatan aturan praktis berdasarkan pengalaman masa lalu." },
      { text: "Critical Chain Method", isCorrect: false, rationale: "Critical Chain mengelola cadangan waktu (buffer) keamanan proyek." }
    ],
    hint: "Teknik ini tidak menambah biaya finansial secara langsung, namun meningkatkan risiko kesalahan kualitas akibat tumpang tindih pekerjaan."
  },
  {
    id: 30,
    level: 2,
    category: "Manajemen Ruang Lingkup",
    question: "Fenomena bertambahnya ruang lingkup proyek secara perlahan dan tidak terkontrol tanpa penyesuaian anggaran, waktu, dan persetujuan formal disebut...",
    options: [
      { text: "Scope Creep", isCorrect: true, rationale: "Scope Creep merayap perlahan akibat permintaan tambahan fitur kecil secara informal dari klien yang tidak melalui alur kontrol perubahan (change control)." },
      { text: "Gold Plating", isCorrect: false, rationale: "Gold Plating adalah penambahan fitur ekstra secara sukarela oleh tim internal proyek tanpa diminta oleh klien." },
      { text: "Scope Validation", isCorrect: false, rationale: "Scope Validation adalah proses penerimaan deliverables secara formal oleh klien." },
      { text: "Product Backlog Expansion", isCorrect: false, rationale: "Ini adalah istilah penataan daftar fitur dalam metodologi Agile Scrum." }
    ],
    hint: "Pikirkan kata kunci 'merayap' (creep) yang merujuk pada perubahan lingkup yang tidak resmi dan merugikan performa biaya proyek."
  },
  {
    id: 31,
    level: 2,
    category: "Manajemen Ruang Lingkup",
    question: "Tindakan tim pengembang memberikan fitur tambahan yang tidak diminta oleh klien dan tidak tercantum di dalam scope resmi disebut...",
    options: [
      { text: "Gold Plating", isCorrect: true, rationale: "Gold Plating dilarang dalam manajemen proyek profesional karena membuang jam kerja produktif dan meningkatkan risiko error baru pada sistem." },
      { text: "Scope Creep", isCorrect: false, rationale: "Scope Creep dipicu oleh permintaan tidak resmi dari pihak luar/klien, sedangkan Gold Plating murni inisiatif tim internal." },
      { text: "Validate Scope", isCorrect: false, rationale: "Validate Scope adalah proses verifikasi persetujuan hasil kerja resmi bersama klien." },
      { text: "Requirements Churn", isCorrect: false, rationale: "Requirements Churn adalah ketidakstabilan definisi kebutuhan sistem di awal proyek." }
    ],
    hint: "Istilah ini bermakna 'melapisi dengan emas' sebagai perumpamaan tindakan mempercantik produk secara berlebihan."
  },
  {
    id: 32,
    level: 2,
    category: "Manajemen Ruang Lingkup",
    question: "Mendapatkan persetujuan dan tanda tangan tertulis (sign-off) dari pelanggan atas deliverables proyek yang telah selesai dikerjakan disebut proses...",
    options: [
      { text: "Validate Scope", isCorrect: true, rationale: "Validate Scope berfokus pada penerimaan formal (formal acceptance) atas deliverables yang telah selesai oleh pemangku kepentingan." },
      { text: "Define Scope", isCorrect: false, rationale: "Define Scope adalah proses awal mendefinisikan batasan pekerjaan proyek." },
      { text: "Control Scope", isCorrect: false, rationale: "Control Scope adalah mengawasi agar tidak ada penyimpangan selama pengerjaan berlangsung." },
      { text: "Quality Control", isCorrect: false, rationale: "Quality Control berfokus pada kebenaran teknis pengujian produk secara internal sebelum divalidasi oleh klien." }
    ],
    hint: "Proses ini menitikberatkan pada kesepakatan serah terima produk akhir antara tim pengembang dengan pelanggan."
  },
  {
    id: 33,
    level: 2,
    category: "Manajemen Ruang Lingkup",
    question: "Dokumen yang memuat rincian deskripsi teknis, penanggung jawab, kriteria penerimaan, estimasi biaya, dan jadwal dari setiap paket kerja disebut...",
    options: [
      { text: "WBS Dictionary", isCorrect: true, rationale: "WBS Dictionary bertindak sebagai kamus rincian teknis pendukung bagan pohon WBS." },
      { text: "Stakeholder Register", isCorrect: false, rationale: "Stakeholder Register mendata profil pemangku kepentingan, bukan rincian paket kerja." },
      { text: "Activity List", isCorrect: false, rationale: "Activity List adalah daftar aktivitas jadwal mikro, bukan bagian pendukung baseline scope." },
      { text: "Quality Checklist", isCorrect: false, rationale: "Quality Checklist memuat parameter uji kualitas teknis." }
    ],
    hint: "Dokumen ini wajib mendampingi bagan WBS agar tidak terjadi multitafsir atas nama paket kerja yang singkat."
  },
  {
    id: 34,
    level: 2,
    category: "Manajemen Waktu",
    question: "Hubungan ketergantungan di mana aktivitas penerus (successor) baru boleh dimulai setelah aktivitas pendahulu (predecessor) selesai disebut...",
    options: [
      { text: "Finish-to-Start (FS)", isCorrect: true, rationale: "FS adalah tipe ketergantungan paling umum di mana tugas kedua baru bisa dimulai setelah tugas pertama tuntas dikerjakan." },
      { text: "Start-to-Start (SS)", isCorrect: false, rationale: "SS mengharuskan kedua aktivitas dimulai secara bersamaan." },
      { text: "Finish-to-Finish (FF)", isCorrect: false, rationale: "FF mengharuskan aktivitas penerus baru bisa selesai jika aktivitas pendahulu telah selesai." },
      { text: "Start-to-Finish (SF)", isCorrect: false, rationale: "SF mengharuskan aktivitas pendahulu dimulai sebelum aktivitas penerus dapat diselesaikan." }
    ],
    hint: "Pikirkan urutan kerja logis: Selesaikan penulisan kode program (Finish), kemudian mulailah pengujian sistem (Start)."
  },
  {
    id: 35,
    level: 2,
    category: "Manajemen Waktu",
    question: "Teknik estimasi durasi jadwal proyek yang menggunakan parameter dari proyek sejenis di masa lalu secara analogis disebut...",
    options: [
      { text: "Analogous Estimating", isCorrect: true, rationale: "Analogous Estimating (Top-Down) mengandalkan data historis proyek terdahulu yang mirip untuk mengestimasi durasi proyek saat ini secara cepat." },
      { text: "Parametric Estimating", isCorrect: false, rationale: "Parametric menggunakan algoritma perhitungan statistik kuantitatif unit kerja." },
      { text: "Three-Point Estimating", isCorrect: false, rationale: "Three-Point menggunakan rata-rata bobot estimasi Optimis, Pesimis, dan Paling Mungkin (PERT)." },
      { text: "Bottom-Up Estimating", isCorrect: false, rationale: "Bottom-Up menghitung dari unit terkecil lalu diakumulasikan ke atas." }
    ],
    hint: "Metode ini sangat cepat digunakan di awal proyek namun memiliki tingkat akurasi yang relatif rendah."
  },
  {
    id: 36,
    level: 2,
    category: "Manajemen Waktu",
    question: "Teknik estimasi durasi yang menggunakan data hubungan statistik antara data historis dengan variabel kuantitatif pengerjaan disebut...",
    options: [
      { text: "Parametric Estimating", isCorrect: true, rationale: "Parametric Estimating menghitung durasi berdasarkan rasio parameter unit (misal: pengerjaan 1 halaman modul membutuhkan waktu 3 jam kerja)." },
      { text: "Analogous Estimating", isCorrect: false, rationale: "Analogous mengandalkan tebakan kasar berdasarkan kemiripan proyek masa lalu secara keseluruhan." },
      { text: "Bottom-Up Estimating", isCorrect: false, rationale: "Bottom-Up menjumlahkan estimasi mikro dari bawah ke tingkat atas." },
      { text: "Heuristic Analysis", isCorrect: false, rationale: "Heuristic menggunakan prinsip praktis kualitatif, bukan rumus statistik kuantitatif." }
    ],
    hint: "Estimasi ini menggunakan model matematika sederhana yang mengalikan volume kerja dengan standar produktivitas staf."
  },
  {
    id: 37,
    level: 2,
    category: "Manajemen Waktu",
    question: "Dalam perhitungan penjadwalan PDM, nilai Early Finish (EF) dari suatu aktivitas dihitung dengan rumus...",
    options: [
      { text: "EF = ES + Durasi - 1", isCorrect: true, rationale: "EF dihitung dari Early Start ditambah durasi pengerjaan dikurangi satu (ES + Duration - 1) untuk penyesuaian waktu mulai hari ke-1." },
      { text: "EF = LF - Float", isCorrect: false, rationale: "Meskipun secara tidak langsung bernilai sama, ini adalah rumus turunan kelonggaran waktu, bukan rumus dasar perhitungan maju (forward pass)." },
      { text: "EF = ES + LS", isCorrect: false, rationale: "Penjumlahan ES dan LS tidak menghasilkan parameter penyelesaian jadwal tercepat." },
      { text: "EF = LF + Durasi", isCorrect: false, rationale: "Rumus ini salah dan tidak logis dalam perhitungan penjadwalan jaringan kerja." }
    ],
    hint: "Pikirkan tentang kalkulasi pengerjaan maju (forward pass) di mana nilai selesai tercepat bergantung pada nilai mulai tercepat dan lamanya durasi kerja."
  },
  {
    id: 38,
    level: 2,
    category: "Manajemen Waktu",
    question: "Teknik memuluskan alokasi sumber daya manusia agar tidak melebihi kapasitas beban kerja harian disebut...",
    options: [
      { text: "Resource Leveling", isCorrect: true, rationale: "Resource Leveling menunda atau menyesuaikan tanggal aktivitas agar pembebanan staf merata dan tidak melebihi batas jam kerja harian." },
      { text: "Crashing", isCorrect: false, rationale: "Crashing adalah percepatan durasi aktivitas jalur kritis dengan konsekuensi penambahan biaya staf." },
      { text: "Fast Tracking", isCorrect: false, rationale: "Fast Tracking adalah penyejajaran urutan kerja secara paralel." },
      { text: "Schedule Baseline Locking", isCorrect: false, rationale: "Ini adalah tindakan mengunci rencana jadwal, bukan pengelolaan beban kerja staf." }
    ],
    hint: "Istilah ini merujuk pada upaya meratakan tingkat ketersediaan (leveling) kapasitas kerja SDM organisasi."
  },
  {
    id: 39,
    level: 2,
    category: "Manajemen Ruang Lingkup",
    question: "Tindakan mendokumentasikan secara rinci kriteria pengujian untuk memverifikasi apakah deliverable telah memenuhi standar mutu adalah tujuan dari...",
    options: [
      { text: "Quality Checklist", isCorrect: true, rationale: "Quality Checklist berisi daftar butir verifikasi untuk memastikan seluruh deliverables memenuhi kriteria kualitas teknis sebelum diajukan ke klien." },
      { text: "WBS Dictionary", isCorrect: false, rationale: "WBS Dictionary menjabarkan deskripsi paket kerja lingkup, bukan parameter pengujian mutu." },
      { text: "Assumption Log", isCorrect: false, rationale: "Assumption Log mencatat asumsi batasan proyek." },
      { text: "Issue Log", isCorrect: false, rationale: "Issue Log mendata kendala aktif harian tim proyek." }
    ],
    hint: "Pikirkan lembar verifikasi ceklis (checklist) untuk mencentang parameter kualitas produk yang lolos uji."
  },
  {
    id: 40,
    level: 2,
    category: "Perencanaan MPSI",
    question: "Keluaran (output) utama dari proses perancangan manajemen waktu proyek yang disetujui secara formal untuk menjadi acuan evaluasi jadwal adalah...",
    options: [
      { text: "Schedule Baseline", isCorrect: true, rationale: "Schedule Baseline adalah versi rencana jadwal proyek yang disetujui, digunakan sebagai dasar perbandingan performa waktu aktual." },
      { text: "Gantt Chart Draft", isCorrect: false, rationale: "Draft Gantt Chart belum memiliki status disetujui secara formal sebagai baseline." },
      { text: "WBS Dictionary", isCorrect: false, rationale: "Ini adalah bagian dari Scope Baseline, bukan Schedule Baseline." },
      { text: "Project Charter", isCorrect: false, rationale: "Project Charter diterbitkan di awal fase inisiasi, bukan di akhir perencanaan jadwal." }
    ],
    hint: "Acuan dasar ini akan dikunci dan setiap perubahannya wajib disetujui melalui mekanisme kontrol perubahan formal (CCB)."
  },

  // --- LEVEL 3: BIAYA, ORGANISASI & RISIKO (41 - 60) ---
  {
    id: 41,
    level: 3,
    category: "Manajemen Biaya",
    question: "Metode estimasi biaya dengan menjumlahkan secara rinci estimasi biaya dari tingkat paket kerja terbawah hingga ke tingkat atas disebut...",
    options: [
      { text: "Bottom-Up Estimating", isCorrect: true, rationale: "Bottom-Up Estimating menghitung biaya dari elemen WBS paling bawah secara detail, menghasilkan estimasi yang sangat akurat namun memakan banyak waktu." },
      { text: "Analogous Estimating", isCorrect: false, rationale: "Analogous mengandalkan tebakan cepat berbasis perbandingan proyek terdahulu secara global (top-down)." },
      { text: "Parametric Estimating", isCorrect: false, rationale: "Parametric menggunakan perhitungan rasio matematis kuantitas unit kerja." },
      { text: "Expert Judgment", isCorrect: false, rationale: "Expert Judgment mengandalkan opini subyektif dari tenaga ahli." }
    ],
    hint: "Metode ini merangkak naik dari taksiran unit kerja paling kecil (bawah/bottom) menuju akumulasi total (atas/up)."
  },
  {
    id: 42,
    level: 3,
    category: "Earned Value Management",
    question: "Dalam analisis EVM, selisih biaya antara nilai hasil pekerjaan yang diselesaikan (EV) dengan biaya aktual yang dikeluarkan (AC) disebut...",
    options: [
      { text: "Cost Variance (CV)", isCorrect: true, rationale: "Rumus CV = EV - AC. CV mengukur selisih antara nilai kerja nyata dengan anggaran biaya nyata yang telah habis terpakai." },
      { text: "Schedule Variance (SV)", isCorrect: false, rationale: "SV mengukur selisih jadwal antara EV dengan PV (EV - PV)." },
      { text: "Cost Performance Index (CPI)", isCorrect: false, rationale: "CPI adalah indeks rasio efisiensi biaya (EV / AC), bukan nilai selisih pengurang." },
      { text: "Estimate to Complete (ETC)", isCorrect: false, rationale: "ETC adalah sisa perkiraan biaya untuk menuntaskan proyek." }
    ],
    hint: "Kata kunci 'Variance' menunjukkan nilai selisih pengurangan biaya (Cost)."
  },
  {
    id: 43,
    level: 3,
    category: "Earned Value Management",
    question: "Apabila nilai Cost Performance Index (CPI) suatu proyek bernilai kurang dari 1.0 (CPI < 1.0), hal ini mengindikasikan status biaya proyek...",
    options: [
      { text: "Mengalami pemborosan anggaran (Over Budget)", isCorrect: true, rationale: "CPI < 1.0 berarti biaya aktual yang dikeluarkan (AC) lebih besar dari nilai hasil kerja yang diperoleh (EV), menandakan proyek rugi finansial." },
      { text: "Mengalami penghematan anggaran (Under Budget)", isCorrect: false, rationale: "Under Budget ditunjukkan oleh nilai CPI yang lebih besar dari 1.0 (CPI > 1.0)." },
      { text: "Biaya berjalan tepat sesuai dengan target rencana awal", isCorrect: false, rationale: "Tepat sesuai target terjadi ketika nilai CPI tepat sama dengan 1.0." },
      { text: "Proyek tidak membutuhkan tambahan dana cadangan", isCorrect: false, rationale: "Status CPI < 1.0 justru menuntut PM mengevaluasi pembengkakan biaya dan mencairkan dana cadangan kontingensi." }
    ],
    hint: "Kurang dari satu berarti kinerja keuangan buruk atau biaya nyata yang keluar melebihi hasil kerja yang didapat."
  },
  {
    id: 44,
    level: 3,
    category: "Earned Value Management",
    question: "Jika nilai Schedule Performance Index (SPI) suatu proyek bernilai kurang dari 1.0 (SPI < 1.0), status kemajuan jadwal proyek adalah...",
    options: [
      { text: "Proyek berjalan mengalami keterlambatan (Behind Schedule)", isCorrect: true, rationale: "SPI < 1.0 berarti kemajuan pengerjaan nyata (EV) lebih lambat dari target rencana waktu yang dijadwalkan (PV)." },
      { text: "Proyek berjalan lebih cepat dari rencana (Ahead of Schedule)", isCorrect: false, rationale: "Ahead of schedule ditandai oleh nilai SPI yang lebih besar dari 1.0 (SPI > 1.0)." },
      { text: "Proyek tepat waktu sesuai dengan baseline rencana", isCorrect: false, rationale: "Tepat waktu terjadi jika nilai SPI tepat bernilai 1.0." },
      { text: "Aktivitas kritis proyek tidak memiliki ketergantungan tugas", isCorrect: false, rationale: "SPI mengukur efisiensi waktu keseluruhan, tidak mengindikasikan struktur ketergantungan tugas." }
    ],
    hint: "SPI kurang dari satu menunjukkan bahwa tim hanya menyelesaikan persentase pekerjaan yang lebih sedikit dibanding target rencana pada tanggal evaluasi."
  },
  {
    id: 45,
    level: 3,
    category: "Earned Value Management",
    question: "Berapakah nilai Schedule Variance (SV) jika nilai Earned Value (EV) proyek sebesar Rp 50.000.000 dan Planned Value (PV) sebesar Rp 60.000.000?",
    options: [
      { text: "-Rp 10.000.000", isCorrect: true, rationale: "Rumus SV = EV - PV. Maka, Rp 50.000.000 - Rp 60.000.000 = -Rp 10.000.000. Nilai negatif menunjukkan keterlambatan pengerjaan senilai 10 juta rupiah." },
      { text: "Rp 10.000.000", isCorrect: false, rationale: "Nilai positif salah karena hasil kerja nyata (EV) lebih kecil dari rencana target (PV)." },
      { text: "Rp 110.000.000", isCorrect: false, rationale: "Ini adalah hasil dari penjumlahan EV + PV, bukan selisih variance." },
      { text: "-Rp 20.000.000", isCorrect: false, rationale: "Salah kalkulasi perhitungan matematis." }
    ],
    hint: "Gunakan rumus selisih jadwal: SV sama dengan Earned Value dikurangi Planned Value."
  },
  {
    id: 46,
    level: 3,
    category: "Sosiologi Organisasi",
    question: "Sesuai dokumen Modul BSI halaman 130, Hobbs & Menard (1993) mengidentifikasi beberapa faktor pemilihan organisasi proyek. Ada berapa total faktor tersebut?",
    options: [
      { text: "7 Faktor", isCorrect: true, rationale: "Hobbs & Menard mendefinisikan 7 faktor utama terkait sosiologi pemilihan organisasi: ukuran, kebijakan, inovasi, integrasi, kompleksitas, konstrain, dan stabilitas sumber daya." },
      { text: "5 Faktor", isCorrect: false, rationale: "5 adalah jumlah Process Groups dalam manajemen proyek standar PMBOK." },
      { text: "10 Faktor", isCorrect: false, rationale: "10 adalah jumlah Area Pengetahuan (Knowledge Areas) dalam PMBOK 5th Edition." },
      { text: "12 Faktor", isCorrect: false, rationale: "Salah, tidak ada klasifikasi 12 faktor Hobbs & Menard dalam literatur." }
    ],
    hint: "Pikirkan rentang angka di atas lima dan di bawah sepuluh, yang sering dikaitkan dengan faktor pemilihan struktur otonomi tim proyek."
  },
  {
    id: 47,
    level: 3,
    category: "Sosiologi Organisasi",
    question: "Manakah yang bukan termasuk bagian dari 7 Faktor Pemilihan Organisasi menurut Hobbs & Menard (1993)?",
    options: [
      { text: "Ukuran proyek dan Kebijakan strategis", isCorrect: false, rationale: "Dua faktor ini merupakan pilar utama dalam 7 faktor Hobbs & Menard." },
      { text: "Kebutuhan terhadap inovasi terbaru dan Stabilitas permintaan sumber daya", isCorrect: false, rationale: "Keduanya merupakan bagian valid dari 7 faktor pemilihan organisasi." },
      { text: "Tingkat pendidikan formal dan sertifikasi internasional para programmer", isCorrect: true, rationale: "Sertifikasi programmer mempengaruhi kapabilitas teknis individu, bukan kriteria sosiologis penentu struktur otonomi organisasi induk proyek." },
      { text: "Kompleksitas dari tugas pengerjaan", isCorrect: false, rationale: "Kompleksitas adalah salah satu dari 7 faktor penentu." }
    ],
    hint: "Faktor penentu bersifat manajerial, bukan kapabilitas individu."
  },
  {
    id: 48,
    level: 3,
    category: "Manajemen Risiko",
    question: "Manakah dokumen yang digunakan untuk mendata seluruh risiko yang telah diidentifikasi, beserta pemilik risiko dan rencana mitigasinya?",
    options: [
      { text: "Risk Register", isCorrect: true, rationale: "Risk Register adalah dokumen pusat untuk mencatat hasil identifikasi, analisis, dan respons risiko." },
      { text: "Risk Management Plan", isCorrect: false, rationale: "Ini adalah panduan metodologi manajemen risiko, bukan daftar risikonya." },
      { text: "Issue Log", isCorrect: false, rationale: "Issue Log mencatat masalah yang sudah terjadi, bukan risiko (yang belum terjadi)." },
      { text: "Assumption Log", isCorrect: false, rationale: "Mencatat asumsi awal proyek, bukan daftar risiko secara langsung." }
    ],
    hint: "Dokumen ini berfungsi seperti 'buku besar' atau register untuk melacak seluruh potensi ancaman proyek."
  },
  {
    id: 49,
    level: 3,
    category: "Manajemen Risiko",
    question: "Strategi merespons risiko negatif dengan cara mengalihkan dampak finansial risiko tersebut kepada pihak ketiga (seperti perusahaan asuransi) disebut...",
    options: [
      { text: "Mitigate (Mitigasi)", isCorrect: false, rationale: "Mitigasi adalah upaya internal mengurangi probabilitas atau dampak risiko." },
      { text: "Avoid (Menghindari)", isCorrect: false, rationale: "Menghindari berarti mengubah rencana proyek secara drastis untuk menghilangkan risiko." },
      { text: "Transfer (Transfer)", isCorrect: true, rationale: "Transfer menggeser beban penanganan dan kerugian finansial risiko kepada pihak eksternal, biasanya melalui kontrak atau asuransi." },
      { text: "Accept (Menerima)", isCorrect: false, rationale: "Menerima berarti tidak melakukan tindakan khusus dan siap menanggung konsekuensinya." }
    ],
    hint: "Kata kuncinya adalah 'mengalihkan' tanggung jawab ke pihak lain."
  },
  {
    id: 50,
    level: 3,
    category: "Manajemen Mutu",
    question: "Proses mengawasi hasil spesifik proyek untuk menentukan apakah mereka memenuhi standar kualitas yang relevan dan mengidentifikasi cara menghilangkan penyebab kinerja yang tidak memuaskan disebut...",
    options: [
      { text: "Perform Quality Assurance", isCorrect: false, rationale: "Quality Assurance berfokus pada proses audit kualitas kerja, bukan pengecekan hasil akhir." },
      { text: "Control Quality (Quality Control)", isCorrect: true, rationale: "Quality Control (QC) adalah inspeksi langsung terhadap hasil kerja (deliverables) untuk mendeteksi cacat sebelum diserahkan." },
      { text: "Validate Scope", isCorrect: false, rationale: "Validate Scope adalah serah terima dengan klien, sedangkan QC dilakukan secara internal." },
      { text: "Plan Quality Management", isCorrect: false, rationale: "Ini adalah tahap perencanaan standar kualitas." }
    ],
    hint: "Fokus pada kata 'mengawasi hasil spesifik' (inspeksi produk)."
  },
  {
    id: 51,
    level: 3,
    category: "Manajemen Komunikasi",
    question: "Berapa banyak saluran komunikasi (communication channels) yang terbentuk dalam sebuah tim proyek yang beranggotakan 6 orang (termasuk Manajer Proyek)?",
    options: [
      { text: "15", isCorrect: true, rationale: "Rumus saluran komunikasi: N(N-1)/2. Dengan N=6, maka 6(6-1)/2 = 6 * 5 / 2 = 15 saluran." },
      { text: "30", isCorrect: false, rationale: "Ini hasil dari N(N-1) tanpa dibagi 2." },
      { text: "6", isCorrect: false, rationale: "Ini hanyalah jumlah anggota tim." },
      { text: "21", isCorrect: false, rationale: "Ini adalah jumlah saluran jika anggota tim berjumlah 7 orang." }
    ],
    hint: "Gunakan rumus N x (N - 1) / 2"
  },
  {
    id: 52,
    level: 3,
    category: "Manajemen Pengadaan",
    question: "Tipe kontrak pengadaan di mana harga bersifat tetap dan risiko biaya pembengkakan ditanggung sepenuhnya oleh pihak kontraktor/vendor adalah...",
    options: [
      { text: "Time and Material (T&M)", isCorrect: false, rationale: "T&M berisiko pada pembeli karena dibayar berdasarkan durasi kerja." },
      { text: "Cost Reimbursable", isCorrect: false, rationale: "Pada kontrak ini, risiko kelebihan biaya ditanggung oleh pembeli." },
      { text: "Fixed Price (Lump Sum)", isCorrect: true, rationale: "Dalam Fixed Price, harga dikunci di awal. Jika biaya aktual vendor membengkak, vendorlah yang menanggung kerugian." },
      { text: "Cost Plus Fixed Fee", isCorrect: false, rationale: "Ini adalah variasi dari Cost Reimbursable." }
    ],
    hint: "Harga telah dipatok 'tetap' sejak penandatanganan kontrak."
  },
  {
    id: 53,
    level: 3,
    category: "Manajemen Pengadaan",
    question: "Teknik yang digunakan pada fase Perencanaan Pengadaan untuk memutuskan apakah tim internal akan membangun produk sendiri atau membelinya dari pihak luar disebut...",
    options: [
      { text: "Make-or-Buy Analysis", isCorrect: true, rationale: "Analisis ini membandingkan biaya, risiko, dan kelayakan antara membuat sendiri (make) vs membeli/outsourcing (buy)." },
      { text: "Cost-Benefit Analysis", isCorrect: false, rationale: "Digunakan untuk justifikasi investasi awal, bukan spesifik pengadaan barang." },
      { text: "Vendor Bid Analysis", isCorrect: false, rationale: "Digunakan untuk mengevaluasi proposal dari beberapa vendor." },
      { text: "Expert Judgment", isCorrect: false, rationale: "Opini ahli bisa digunakan, namun bukan nama teknik spesifiknya." }
    ],
    hint: "Terjemahan literalnya: 'Buat-atau-Beli'."
  },
  {
    id: 54,
    level: 3,
    category: "Manajemen Mutu",
    question: "Biaya yang dikeluarkan untuk mencegah, mendeteksi, serta memperbaiki kecacatan produk dalam proyek disebut sebagai...",
    options: [
      { text: "Cost of Quality (COQ)", isCorrect: true, rationale: "COQ mencakup biaya konformansi (pelatihan, inspeksi) dan biaya non-konformansi (rework, garansi/kerusakan)." },
      { text: "Sunk Cost", isCorrect: false, rationale: "Biaya yang sudah telanjur keluar dan tidak bisa kembali." },
      { text: "Opportunity Cost", isCorrect: false, rationale: "Biaya kehilangan peluang karena memilih alternatif lain." },
      { text: "Direct Cost", isCorrect: false, rationale: "Biaya yang langsung terikat pada pengerjaan proyek (misal gaji staf)." }
    ],
    hint: "Ini adalah istilah payung untuk biaya penjaminan 'Mutu' atau 'Kualitas'."
  },
  {
    id: 55,
    level: 3,
    category: "Manajemen Komunikasi",
    question: "Dokumen yang mendeskripsikan siapa yang butuh informasi, format informasinya, frekuensi, serta siapa yang bertanggung jawab menyediakannya adalah...",
    options: [
      { text: "Communications Management Plan", isCorrect: true, rationale: "Rencana komunikasi mengatur distribusi informasi kepada seluruh stakeholder secara tepat." },
      { text: "Stakeholder Register", isCorrect: false, rationale: "Hanya mendata daftar stakeholder, bukan panduan detail distribusinya." },
      { text: "Project Charter", isCorrect: false, rationale: "Dokumen inisiasi awal." },
      { text: "Risk Register", isCorrect: false, rationale: "Untuk mendata risiko." }
    ],
    hint: "Dokumen ini merupakan panduan utama 'Komunikasi' proyek."
  },
  {
    id: 56,
    level: 3,
    category: "Manajemen Integrasi (Closing)",
    question: "Pada tahap penutupan (Closing), arsip historis tentang apa saja yang berjalan dengan baik dan apa yang harus diperbaiki di proyek mendatang dicatat dalam dokumen...",
    options: [
      { text: "Lessons Learned Register", isCorrect: true, rationale: "Dokumen ini sangat berharga sebagai OPA (Organizational Process Assets) bagi proyek organisasi di masa depan." },
      { text: "Issue Log", isCorrect: false, rationale: "Catatan masalah operasional saat proyek berjalan." },
      { text: "Project Charter", isCorrect: false, rationale: "Dibuat di awal proyek, bukan di akhir." },
      { text: "Statement of Work", isCorrect: false, rationale: "Deskripsi ruang lingkup yang dibuat di awal." }
    ],
    hint: "Istilahnya merujuk pada 'Pelajaran yang Dapat Dipetik' dari pengalaman pengerjaan proyek."
  },
  {
    id: 57,
    level: 3,
    category: "Manajemen Integrasi (Closing)",
    question: "Kegiatan administratif manakah yang merupakan tanda resmi bahwa fase eksekusi proyek telah benar-benar ditutup secara hukum?",
    options: [
      { text: "Formal Acceptance (Sign-Off) dari Klien", isCorrect: true, rationale: "Tanda tangan penerimaan formal (sign-off) membuktikan klien puas dan proyek selesai sesuai kesepakatan." },
      { text: "Pembubaran tim proyek (Releasing Resources)", isCorrect: false, rationale: "Pembubaran tim dilakukan setelah penerimaan formal." },
      { text: "Pembayaran gaji bulan terakhir staf", isCorrect: false, rationale: "Itu adalah operasional rutin keuangan." },
      { text: "Mengarsipkan dokumen di rak lemari", isCorrect: false, rationale: "Pengarsipan adalah prosedur internal, bukan pelepasan hukum secara eksternal." }
    ],
    hint: "Diperlukan bukti persetujuan hitam-di-atas-putih dari pihak pelanggan."
  },
  {
    id: 58,
    level: 3,
    category: "Manajemen Integrasi (Closing)",
    question: "Setelah proyek sistem informasi selesai dan diserahkan kepada klien, tanggung jawab pemeliharaan harian (maintenance) berpindah kepada divisi...",
    options: [
      { text: "Operasional / IT Support", isCorrect: true, rationale: "Setelah proyek selesai (closed), hasil kerjanya diserahkan (transitioned) ke tim operasional harian untuk dijaga." },
      { text: "Manajer Proyek", isCorrect: false, rationale: "Manajer proyek dibebastugaskan setelah proyek ditutup." },
      { text: "Project Sponsor", isCorrect: false, rationale: "Sponsor adalah penyandang dana, bukan teknisi pemeliharaan." },
      { text: "Quality Assurance", isCorrect: false, rationale: "QA bertugas saat proyek berjalan." }
    ],
    hint: "Tim ini bertugas menjaga rutinitas 'Operasional' sistem perusahaan."
  },
  {
    id: 59,
    level: 3,
    category: "Manajemen Integrasi (Closing)",
    question: "Mengapa pembubaran tim proyek (releasing project team) harus dilakukan secara resmi pada fase Closing?",
    options: [
      { text: "Agar mereka dapat segera ditugaskan kembali ke departemen fungsional asal atau proyek baru", isCorrect: true, rationale: "Pembebasan resmi (release) memungkinkan SDM dialokasikan secara efisien ke pekerjaan lain tanpa membebani biaya proyek yang telah selesai." },
      { text: "Untuk menghapus hak cuti tahunan mereka", isCorrect: false, rationale: "Hak cuti tidak ada hubungannya dengan penyelesaian proyek." },
      { text: "Sebagai bentuk hukuman karena sistem banyak terdapat bug", isCorrect: false, rationale: "Pembubaran adalah siklus natural, bukan sanksi." },
      { text: "Agar manajer proyek bisa memotong bonus termin akhir", isCorrect: false, rationale: "Manajemen bonus diatur dalam kontrak, bukan alasan teknis pembubaran tim." }
    ],
    hint: "Hal ini berkaitan dengan efisiensi alokasi Sumber Daya Manusia (SDM) perusahaan."
  },
  {
    id: 60,
    level: 3,
    category: "Keseluruhan Proyek",
    question: "Tujuan akhir dari diterapkannya metodologi Manajemen Proyek Sistem Informasi (MPSI) yang baik di sebuah perusahaan adalah...",
    options: [
      { text: "Menjamin proyek selesai tepat waktu, sesuai anggaran, memenuhi ruang lingkup, dan memberikan kepuasan bagi pelanggan", isCorrect: true, rationale: "Keberhasilan manajemen proyek tidak hanya dinilai dari Triple Constraint (Time, Cost, Scope) tetapi juga kepuasan stakeholder/klien." },
      { text: "Memastikan semua karyawan bekerja lembur setiap hari", isCorrect: false, rationale: "Manajemen yang baik justru menghindari lembur yang tidak efisien." },
      { text: "Memperbanyak tumpukan dokumen kertas di ruang arsip", isCorrect: false, rationale: "Dokumentasi adalah sarana, bukan tujuan akhir." },
      { text: "Menghabiskan seluruh sisa anggaran tahunan divisi IT", isCorrect: false, rationale: "Proyek harus efisien secara biaya, bukan menghabiskan sisa dana." }
    ],
    hint: "Pikirkan pencapaian keseimbangan konstrain emas (Triple Constraints) ditambah aspek kepuasan."
  }
];

const MATERI_KILAT = [
  {
    title: "Level 1: Konsep Dasar & Inisiasi",
    points: [
      "Proyek bersifat temporer (sementara) dan dibatasi oleh Triple Constraints (Waktu, Biaya, Ruang Lingkup).",
      "PM-CMM menekankan bahwa faktor 'Manusia' adalah elemen paling penting dalam keberhasilan proyek.",
      "Project Charter: Dokumen legal awal yang mengesahkan proyek dan menunjuk Manajer Proyek.",
      "Stakeholder Register: Mendata seluruh pihak yang mempengaruhi atau dipengaruhi proyek."
    ]
  },
  {
    title: "Level 2: Perencanaan & Waktu",
    points: [
      "WBS (Work Breakdown Structure): Hierarki dekomposisi ruang lingkup proyek. Didukung oleh WBS Dictionary.",
      "Critical Path (Jalur Kritis): Jalur terpanjang di diagram jaringan, tidak memiliki kelonggaran waktu (Float = 0).",
      "Crashing: Kompresi jadwal dengan menambah biaya/sumber daya.",
      "Fast Tracking: Kompresi jadwal dengan memparalelkan pekerjaan.",
      "Scope Creep: Penambahan fitur tidak resmi dari klien. Gold Plating: Penambahan fitur sepihak dari tim developer."
    ]
  },
  {
    title: "Level 3: Biaya, Risiko & Penutupan",
    points: [
      "CPI < 1.0 berarti pemborosan biaya (Over Budget). SPI < 1.0 berarti terlambat (Behind Schedule).",
      "Risk Register: Dokumen pendataan semua risiko proyek dan rencana penanganannya.",
      "Cost of Quality (COQ): Biaya untuk mencegah dan mendeteksi kecacatan produk.",
      "Fase Closing: Serah terima resmi ke klien (Sign-Off), pembubaran tim, dan pencatatan Lessons Learned."
    ]
  }
];

const COURSES = [
  { id: 'mpsi', name: 'Manajemen Proyek Sistem Informasi', code: 'MPSI', active: true },
  { id: 'soon1', name: 'Mata Kuliah Baru', code: 'SOON', active: false },
  { id: 'soon2', name: 'Mata Kuliah Baru', code: 'SOON', active: false },
  { id: 'soon3', name: 'Mata Kuliah Baru', code: 'SOON', active: false }
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

  const startQuiz = () => {
    setView('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const renderNavbar = (activeTab) => (
    <header className="navbar">
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
    if (isCorrect) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS_DATABASE.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setView('result');
    }
  };

  if (view === 'materi') {
    return (
      <div className="app-container">
        {renderNavbar('materi')}

        <main className="quiz-main">
          <div className="materi-card">
            <div className="materi-header">
              <h2>Ringkasan Materi Ujian</h2>
              <p>Poin-poin penting yang wajib Anda pahami sebelum memulai ujian.</p>
            </div>
            
            {MATERI_KILAT.map((materi, idx) => (
              <div key={idx} className="materi-section">
                <h3>{materi.title}</h3>
                <ul className="materi-list">
                  {materi.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="hero-actions" style={{marginTop: '40px', alignItems: 'center'}}>
              <button className="btn-primary" onClick={startQuiz}>Sudah Paham, Mulai Ujian ➔</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (view === 'quiz') {
    const currentQuestion = QUESTIONS_DATABASE[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUESTIONS_DATABASE.length) * 100;
    
    return (
      <div className="app-container">
        <header className="navbar">
          <div className="nav-left">
            <img src="/cumlaude_logo.png" alt="Cumlaude Area Logo" className="navbar-logo" />
            <div className="nav-titles">
              <span className="navbar-tagline">Simulasi Ujian MPSI</span>
            </div>
          </div>
          <button className="btn-outline" onClick={() => setView('dashboard')}>Kembali</button>
        </header>
        
        <main className="quiz-main">
          <div className="quiz-card">
            <div className="quiz-header">
              <span className="category-badge">{currentQuestion.category}</span>
              <span className="question-tracker">Soal {currentQuestionIndex + 1} / {QUESTIONS_DATABASE.length}</span>
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
                  {currentQuestionIndex === QUESTIONS_DATABASE.length - 1 ? 'Selesai' : 'Lanjut ➔'}
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
    const percentage = Math.round((score / QUESTIONS_DATABASE.length) * 100);
    return (
      <div className="app-container flex-center">
        <div className="result-card">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '20px'}}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>
          <h1>Ujian Selesai!</h1>
          <div className="score-display">
            <span className={percentage >= 60 ? 'score-pass' : 'score-fail'}>{percentage}</span>
            <small>/ 100</small>
          </div>
          <p>Anda menjawab benar <strong>{score}</strong> dari <strong>{QUESTIONS_DATABASE.length}</strong> soal.</p>
          <div className="hero-actions" style={{justifyContent: 'center', marginTop: '30px'}}>
            <button className="btn-outline" onClick={() => setView('dashboard')}>Ke Dashboard</button>
            <button className="btn-primary" onClick={startQuiz}>Ulangi Ujian</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Navbar */}
      {renderNavbar('dashboard')}

      {/* Main Content */}
      <main className="main-content">
        {/* Selection Panel (Mata Kuliah & Jenis Ujian) */}
        <div className="selection-panel">
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

        <div className="hero-section">
          <div className="hero-content">
            <span className="badge">Sistem Simulasi UTS MPSI Resmi</span>
            <h2 className="hero-title">Optimalkan Nilai UTS Manajemen Proyek</h2>
            <p className="hero-desc">
              Uji pemahaman Anda terhadap PMBOK Edisi 5, modul BSI, perhitungan biaya Earned Value, dekomposisi WBS, dan penataan organisasi sistem informasi melalui 60 soal terstandarisasi.
            </p>
          </div>
          <div className="hero-actions">
            <button className="btn-outline" onClick={() => setView('materi')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              Materi Kilat
            </button>
            <button className="btn-primary" onClick={startQuiz}>
              Mulai Ujian
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Total Database Soal</span>
            <strong className="stat-value">60 Soal</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Durasi Penuh UTS</span>
            <strong className="stat-value green-text">60 Menit</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Tingkatan Kesulitan</span>
            <strong className="stat-value purple-text">3 Level</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Aturan Kelulusan</span>
            <strong className="stat-value orange-text">Skor &gt;= 60</strong>
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
          <div className="level-card">
            <div className="level-head">
              <h4>Level 1 - Inisiasi</h4>
              <span className="level-count">20 Soal</span>
            </div>
            <p>Konsep Dasar, Project Charter, Stakeholder, dan Ruang Lingkup.</p>
            <button className="btn-level outline" onClick={startQuiz}>Mulai Level 1</button>
          </div>
          
          <div className={"level-card " + (!unlockAll ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 2 - Eksekusi</h4>
              <span className="level-count">20 Soal</span>
            </div>
            <p>Waktu, Penjadwalan, CPM/PERT, dan Manajemen Kualitas.</p>
            <button className="btn-level outline" disabled={!unlockAll} onClick={startQuiz}>
              {!unlockAll ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Terkunci
                </span>
              ) : 'Mulai Level 2'}
            </button>
          </div>

          <div className={"level-card " + (!unlockAll ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 3 - Penutupan</h4>
              <span className="level-count">20 Soal</span>
            </div>
            <p>Biaya, Earned Value, Risiko, dan Penutupan Proyek.</p>
            <button className="btn-level outline" disabled={!unlockAll} onClick={startQuiz}>
              {!unlockAll ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Terkunci
                </span>
              ) : 'Mulai Level 3'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
