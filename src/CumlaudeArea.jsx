import React, { useState } from 'react';

// ==========================================
// DATABASE 60 SOAL MANAJEMEN PROYEK (MPSI)
// ==========================================
const QUESTIONS_DATABASE = [
  {
    "category": "MPSI UTS - Pertemuan 1",
    "question": "Bercorak dinamis, non rutin, relatif pendek, periodenya berubah-ubah, jadwalnya telah ditentukan, membutuhkan macam-macam disiplin ilmu serta keperluan sumberdaya berubah-ubah baik macam ataupun volumenya adalah ciri dari...",
    "options": [
      {
        "text": "Kegiatan Administrasi",
        "isCorrect": false,
        "rationale": "Administrasi bersifat rutin dan berulang."
      },
      {
        "text": "Kegiatan Operasional",
        "isCorrect": false,
        "rationale": "Operasional bersifat rutin, terus-menerus, dan memiliki volume yang relatif stabil."
      },
      {
        "text": "Kegiatan Pemasaran",
        "isCorrect": false,
        "rationale": "Pemasaran adalah aktivitas fungsional berkelanjutan."
      },
      {
        "text": "Kegiatan Keuangan",
        "isCorrect": false,
        "rationale": "Keuangan berhubungan dengan pengelolaan kas rutin."
      },
      {
        "text": "Kegiatan Proyek",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI Pertemuan 1, ciri-ciri tersebut merupakan corak khas dari kegiatan Proyek."
      }
    ],
    "hint": "Pikirkan tentang sifat temporer dan dinamis yang membedakannya dengan operasional rutin.",
    "level": 1,
    "id": 1,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1",
    "question": "Sudah jelas macam pekerjaan yang harus ditangani. Dalam kondisi seperti ini biasanya tidak ada proses tender sehingga tidak ada suasana kompetitif dalam perebutan proyek. Adalah tipe proyek dari...",
    "options": [
      {
        "text": "Proyek yang berasal dari klien yang ditawarkan ke suatu konsultan",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI Pertemuan 1, penawaran langsung dari klien ke konsultan tertentu meniadakan proses tender kompetitif."
      },
      {
        "text": "Ide proyek muncul karena ada tawaran dana dari instansi",
        "isCorrect": false,
        "rationale": "Tawaran dana biasanya tetap melewati seleksi proposal kompetitif."
      },
      {
        "text": "Proyek muncul karena adanya tawaran lelang",
        "isCorrect": false,
        "rationale": "Lelang pastinya melibatkan proses tender kompetitif."
      },
      {
        "text": "Proyek berasal dari dalam perusahaan sendiri",
        "isCorrect": false,
        "rationale": "Proyek internal bersifat swakelola, bukan tipe penawaran eksternal."
      },
      {
        "text": "Proyek berasal dari lembaga keuangan",
        "isCorrect": false,
        "rationale": "Proyek lembaga keuangan biasanya memiliki syarat pengadaan yang ketat."
      }
    ],
    "hint": "Tipe ini merupakan penunjukan langsung oleh klien kepada pihak konsultan tepercaya.",
    "level": 1,
    "id": 2,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1",
    "question": "Usaha sementara yang dilakukan untuk menciptakan produk atau hasil yang unik...",
    "options": [
      {
        "text": "Unik",
        "isCorrect": false,
        "rationale": "Unik adalah karakteristik hasil proyek, bukan aktivitasnya."
      },
      {
        "text": "Sementara",
        "isCorrect": false,
        "rationale": "Sementara (temporer) adalah karakteristik durasi proyek, bukan nama aktivitasnya."
      },
      {
        "text": "Project",
        "isCorrect": true,
        "rationale": "Definisi formal proyek menurut PMBOK adalah usaha sementara (temporary endeavor) untuk menghasilkan produk, layanan, atau hasil yang unik."
      },
      {
        "text": "Teknik",
        "isCorrect": false,
        "rationale": "Teknik adalah cara pelaksanaan pekerjaan."
      },
      {
        "text": "Planning",
        "isCorrect": false,
        "rationale": "Planning adalah salah satu tahapan dalam kelompok proses manajemen proyek."
      }
    ],
    "hint": "Definisi ini diambil langsung dari standar PMBOK yang diadopsi modul BSI.",
    "level": 1,
    "id": 3,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1",
    "question": "Tidak ada proses tender sehingga tidak ada suasana kompetitif dalam perebutan proyek adalah ciri dari...",
    "options": [
      {
        "text": "Proyek yang berasal dari klien yang ditawarkan ke suatu konsultan",
        "isCorrect": false,
        "rationale": "Ini adalah tipe proyek dari klien ke konsultan tertentu, bukan proyek internal."
      },
      {
        "text": "Proyek muncul karena ada tawaran dana dari instansi",
        "isCorrect": false,
        "rationale": "Tawaran instansi biasanya kompetitif."
      },
      {
        "text": "Proyek muncul karena adanya tawaran lelang",
        "isCorrect": false,
        "rationale": "Lelang pasti melibatkan tender kompetitif."
      },
      {
        "text": "Proyek berasal dari dalam perusahaan sendiri",
        "isCorrect": true,
        "rationale": "Proyek internal (swakelola) dikerjakan langsung oleh tim internal perusahaan tanpa melalui proses tender eksternal."
      },
      {
        "text": "Proyek investasi",
        "isCorrect": false,
        "rationale": "Proyek investasi komersial biasanya memerlukan studi kelayakan dan tender ketat."
      }
    ],
    "hint": "Ciri ini merujuk pada pengerjaan swakelola di mana pemilik proyek dan pelaksana berada di bawah perusahaan yang sama.",
    "level": 1,
    "id": 4,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1",
    "question": "Representasi dari sistem informasi...",
    "options": [
      {
        "text": "Hardware",
        "isCorrect": false,
        "rationale": "Hardware adalah perangkat keras pendukung sistem."
      },
      {
        "text": "Brainware",
        "isCorrect": false,
        "rationale": "Brainware adalah manusia yang mengoperasikan sistem."
      },
      {
        "text": "Perangkat Mesin",
        "isCorrect": false,
        "rationale": "Perangkat mesin adalah aspek mekanis industri."
      },
      {
        "text": "Perangkat Lunak",
        "isCorrect": true,
        "rationale": "Perangkat lunak (software) bertindak sebagai representasi logis dari sistem informasi yang menerjemahkan aturan bisnis menjadi kode program."
      },
      {
        "text": "Perangkat Keras",
        "isCorrect": false,
        "rationale": "Sama dengan Hardware."
      }
    ],
    "hint": "Merupakan komponen logik (program) dari suatu sistem informasi.",
    "level": 1,
    "id": 5,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2",
    "question": "Terdiri dari \u2026. Process Group Project",
    "options": [
      {
        "text": "3",
        "isCorrect": false,
        "rationale": "Terlalu sedikit untuk meng-cover seluruh siklus proyek."
      },
      {
        "text": "4",
        "isCorrect": false,
        "rationale": "Meskipun mirip dengan siklus PDCA, standar PMBOK membaginya lebih detail."
      },
      {
        "text": "5",
        "isCorrect": true,
        "rationale": "Kelompok proses manajemen proyek terdiri dari 5 grup: Initiating, Planning, Executing, Monitoring & Controlling, dan Closing."
      },
      {
        "text": "10",
        "isCorrect": false,
        "rationale": "10 adalah jumlah Knowledge Areas (Bidang Pengetahuan) dalam PMBOK 5th Edition."
      },
      {
        "text": "47",
        "isCorrect": false,
        "rationale": "47 adalah jumlah total proses manajemen proyek di dalam PMBOK 5th Edition."
      }
    ],
    "hint": "Kelompok proses ini merentang dari inisiasi hingga penutupan proyek.",
    "level": 1,
    "id": 6,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2",
    "question": "Menjabarkan scope statement menjadi suatu susunan deliverable yang mudah di-manage, serta dikelompokkan berdasarkan deliverable utama disebut sebagai...",
    "options": [
      {
        "text": "create project charter",
        "isCorrect": false,
        "rationale": "Project Charter dibuat saat fase inisiasi untuk melegalkan proyek."
      },
      {
        "text": "create document plan",
        "isCorrect": false,
        "rationale": "Ini istilah umum pembuatan rencana dokumen."
      },
      {
        "text": "create WBS",
        "isCorrect": true,
        "rationale": "Create WBS (Work Breakdown Structure) adalah proses memecah ruang lingkup proyek secara hierarkis menjadi komponen yang lebih kecil dan terkelola."
      },
      {
        "text": "create scope",
        "isCorrect": false,
        "rationale": "Create scope tidak menjabarkan secara hierarkis seperti WBS."
      },
      {
        "text": "create risk",
        "isCorrect": false,
        "rationale": "Create risk tidak berhubungan dengan dekomposisi ruang lingkup kerja."
      }
    ],
    "hint": "Pikirkan tentang struktur pohon pemecahan kerja yang bertingkat-tingkat.",
    "level": 1,
    "id": 7,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2",
    "question": "Memonitor risiko yang sudah teridentifikasi dan mengidentifikasi munculnya risiko baru dan mengontrol dampaknya adalah...",
    "options": [
      {
        "text": "control risk",
        "isCorrect": true,
        "rationale": "Control Risks adalah proses memantau risiko yang teridentifikasi, mengidentifikasi risiko baru, mengevaluasi efektivitas respons risiko harian."
      },
      {
        "text": "control procurement",
        "isCorrect": false,
        "rationale": "Control Procurement mengontrol hubungan pengadaan barang/jasa vendor."
      },
      {
        "text": "control communication",
        "isCorrect": false,
        "rationale": "Control Communication memantau distribusi informasi proyek."
      },
      {
        "text": "control scope",
        "isCorrect": false,
        "rationale": "Control Scope memantau perubahan ruang lingkup agar tidak melebar."
      },
      {
        "text": "control human resource",
        "isCorrect": false,
        "rationale": "Control Human Resource tidak termasuk dalam standar penamaan proses PMBOK 5."
      }
    ],
    "hint": "Proses ini fokus pada pengawasan ancaman dan peluang yang belum terjadi (risiko).",
    "level": 1,
    "id": 8,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2",
    "question": "Bidang Pengetahuan yang mengatur sumber daya manusia...",
    "options": [
      {
        "text": "Project Quality Management",
        "isCorrect": false,
        "rationale": "Mengurusi standar kualitas proyek."
      },
      {
        "text": "Project Human Resources Management",
        "isCorrect": true,
        "rationale": "Project HR Management mencakup proses mengorganisasikan, mengelola, dan memimpin tim proyek."
      },
      {
        "text": "Project Risk Management",
        "isCorrect": false,
        "rationale": "Mengurusi analisis dan mitigasi risiko proyek."
      },
      {
        "text": "Project Procurement Management",
        "isCorrect": false,
        "rationale": "Mengurusi pengadaan barang dan jasa dari luar organisasi."
      },
      {
        "text": "Project Communication Management",
        "isCorrect": false,
        "rationale": "Mengurusi distribusi informasi proyek."
      }
    ],
    "hint": "Bidang pengetahuan ini disingkat HR (Human Resources).",
    "level": 1,
    "id": 9,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2",
    "question": "Bidang Pengetahuan Integrasi memiliki \u2026",
    "options": [
      {
        "text": "3 Process",
        "isCorrect": false,
        "rationale": "Terlalu sedikit, Integrasi mencakup seluruh siklus hidup proyek."
      },
      {
        "text": "4 Process",
        "isCorrect": false,
        "rationale": "Salah, ada lebih banyak proses integrasi."
      },
      {
        "text": "5 Process",
        "isCorrect": false,
        "rationale": "Mencakup lebih dari 5 proses di PMBOK 5."
      },
      {
        "text": "6 Process",
        "isCorrect": true,
        "rationale": "Project Integration Management memiliki 6 proses utama berdasarkan PMBOK 5: Charter, PMP, Executing, Monitoring, Integrated Change Control, dan Close Project."
      },
      {
        "text": "7 Process",
        "isCorrect": false,
        "rationale": "Dalam PMBOK Edisi 6 ada 7 proses, namun Modul MPSI BSI menggunakan referensi PMBOK Edisi 5 dengan 6 proses."
      }
    ],
    "hint": "Ingat referensi PMBOK Edisi 5 yang diajarkan pada modul MPSI.",
    "level": 1,
    "id": 10,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3",
    "question": "Proses pada Initiating Project sebanyak \u2026",
    "options": [
      {
        "text": "2 proses",
        "isCorrect": true,
        "rationale": "Proses pada tahap inisiasi (Initiating) terdiri dari 2 proses: Develop Project Charter dan Identify Stakeholders."
      },
      {
        "text": "3 proses",
        "isCorrect": false,
        "rationale": "Salah, hanya ada 2 proses di fase inisiasi."
      },
      {
        "text": "4 proses",
        "isCorrect": false,
        "rationale": "Salah, 4 proses ada di bidang komunikasi/risiko."
      },
      {
        "text": "5 proses",
        "isCorrect": false,
        "rationale": "Salah, inisiasi adalah kelompok proses paling sedikit."
      },
      {
        "text": "6 proses",
        "isCorrect": false,
        "rationale": "Salah, 6 proses biasanya ada di bidang waktu atau biaya."
      }
    ],
    "hint": "Fase paling awal ini hanya memuat proses legalisasi dan pengenalan pemangku kepentingan.",
    "level": 2,
    "id": 11,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3",
    "question": "Mewujudkan perencanaan proyek yang telah dibuat pada manajemen proyek merupakan\u2026.",
    "options": [
      {
        "text": "Tujuan penutupan proyek",
        "isCorrect": false,
        "rationale": "Penutupan untuk mengakhiri kontrak dan membubarkan tim."
      },
      {
        "text": "Tujuan merencanakan proyek",
        "isCorrect": false,
        "rationale": "Merencanakan adalah untuk menyusun baseline kerja."
      },
      {
        "text": "Tujuan pelaksanaan proyek",
        "isCorrect": true,
        "rationale": "Tujuan pelaksanaan proyek (Executing) adalah mengoordinasikan staf dan sumber daya guna merealisasikan (mewujudkan) rencana manajemen proyek."
      },
      {
        "text": "Mekanisme penutupan proyek",
        "isCorrect": false,
        "rationale": "Mekanisme penutupan berisi prosedur administratif akhir."
      },
      {
        "text": "Fungsi perencanaan proyek",
        "isCorrect": false,
        "rationale": "Fungsi perencanaan adalah memberikan estimasi awal."
      }
    ],
    "hint": "Fase ini merupakan realisasi atau eksekusi fisik dari rencana yang sudah matang.",
    "level": 2,
    "id": 12,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3",
    "question": "Sebutan lain dari project charter yaitu",
    "options": [
      {
        "text": "Formulir Meeting",
        "isCorrect": false,
        "rationale": "Formulir meeting mencatat risalah rapat (minutes)."
      },
      {
        "text": "Project Definition",
        "isCorrect": true,
        "rationale": "Project Charter sering disebut juga dengan Project Definition atau Project Specification yang mendefinisikan batasan umum proyek."
      },
      {
        "text": "Project Management Plan",
        "isCorrect": false,
        "rationale": "PMP adalah rencana rinci, bukan charter awal."
      },
      {
        "text": "Formulir Permintaan Perubahan",
        "isCorrect": false,
        "rationale": "Digunakan untuk mengajukan perubahan (change request)."
      },
      {
        "text": "Work Result Guideline",
        "isCorrect": false,
        "rationale": "Panduan hasil kerja untuk fase eksekusi."
      }
    ],
    "hint": "Sebutan ini berarti 'definisi proyek' secara garis besar.",
    "level": 2,
    "id": 13,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3",
    "question": "Dokumen pendukung pada tahap executing adalah",
    "options": [
      {
        "text": "Project Charter",
        "isCorrect": false,
        "rationale": "Project Charter mendukung fase inisiasi (Initiating)."
      },
      {
        "text": "Work Result Guideline",
        "isCorrect": true,
        "rationale": "Work Result Guideline digunakan untuk memandu hasil pekerjaan proyek agar tetap sesuai dengan standar operasional yang diinginkan saat eksekusi."
      },
      {
        "text": "Project Management Plan",
        "isCorrect": false,
        "rationale": "PMP diselesaikan pada fase perencanaan (Planning)."
      },
      {
        "text": "Formulir Permintaan Perubahan",
        "isCorrect": false,
        "rationale": "Merupakan output dari pengawasan (Monitoring & Controlling)."
      },
      {
        "text": "Formulir Meeting",
        "isCorrect": false,
        "rationale": "Formulir umum untuk mencatat hasil pertemuan saja."
      }
    ],
    "hint": "Dokumen ini berfungsi sebagai 'pedoman hasil kerja' saat program sedang di-coding dan diuji.",
    "level": 2,
    "id": 14,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3",
    "question": "Tujuan closing proyek adalah \u2026",
    "options": [
      {
        "text": "Menentukan tujuan proyek secara rinci",
        "isCorrect": false,
        "rationale": "Ini dilakukan pada fase perencanaan."
      },
      {
        "text": "Merevisikan aktivitas-aktivitas",
        "isCorrect": false,
        "rationale": "Ini dilakukan pada fase monitoring & controlling."
      },
      {
        "text": "Mengontrol pelaksanaan proyek",
        "isCorrect": false,
        "rationale": "Ini adalah pengawasan berkala."
      },
      {
        "text": "Mengeksekusi kegiatan-kegiatan",
        "isCorrect": false,
        "rationale": "Ini adalah fase pelaksanaan (executing)."
      },
      {
        "text": "Mengakhiri penugasan anggota tim proyek",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI, salah satu tujuan administratif penutupan (closing) adalah melepas (mengakhiri penugasan) anggota tim secara resmi."
      }
    ],
    "hint": "Hal ini berkaitan dengan pembubaran dan pelepasan sumber daya manusia proyek.",
    "level": 2,
    "id": 15,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4",
    "question": "Masalah ditangkap dalam bentuk pengukuran disebut dengan ...",
    "options": [
      {
        "text": "Problem Statement",
        "isCorrect": true,
        "rationale": "Problem Statement mendokumentasikan masalah bisnis secara kuantitatif berdasarkan pengukuran nyata."
      },
      {
        "text": "Business Case",
        "isCorrect": false,
        "rationale": "Business Case menjabarkan justifikasi investasi keuangan proyek."
      },
      {
        "text": "Goal Statement",
        "isCorrect": false,
        "rationale": "Goal Statement adalah rumusan target pencapaian proyek."
      },
      {
        "text": "Timeline",
        "isCorrect": false,
        "rationale": "Timeline merinci jadwal pencapaian fase-fase."
      },
      {
        "text": "Team Members",
        "isCorrect": false,
        "rationale": "Team Members adalah daftar personil tim."
      }
    ],
    "hint": "Merupakan pernyataan masalah terukur.",
    "level": 2,
    "id": 16,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4",
    "question": "Final Report merupakan dokumen proyek yang terdapat pada phase",
    "options": [
      {
        "text": "Initiating",
        "isCorrect": false,
        "rationale": "Fase awal, belum ada laporan akhir."
      },
      {
        "text": "Planning",
        "isCorrect": false,
        "rationale": "Fase penyusunan rencana."
      },
      {
        "text": "Executing",
        "isCorrect": false,
        "rationale": "Fase pengerjaan fisik."
      },
      {
        "text": "Monitoring",
        "isCorrect": false,
        "rationale": "Fase pengawasan berkala."
      },
      {
        "text": "Closing",
        "isCorrect": true,
        "rationale": "Final Report (Laporan Akhir) adalah dokumen rangkuman kinerja proyek yang disusun pada kelompok proses Penutupan (Closing)."
      }
    ],
    "hint": "Kata 'Final' menunjukkan laporan ini diserahkan pada garis akhir penyelesaian proyek.",
    "level": 2,
    "id": 17,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4",
    "question": "Kapan setiap Fase proyek akan selesai merupakan komponen  project charter dari",
    "options": [
      {
        "text": "Problem Statement",
        "isCorrect": false,
        "rationale": "Menjabarkan deskripsi masalah terukur."
      },
      {
        "text": "Business Case",
        "isCorrect": false,
        "rationale": "Menjelaskan kelayakan investasi finansial."
      },
      {
        "text": "Goal Statement",
        "isCorrect": false,
        "rationale": "Menjelaskan target pencapaian proyek."
      },
      {
        "text": "Timeline",
        "isCorrect": true,
        "rationale": "Timeline (Lini Waktu) dalam Project Charter menjelaskan target tanggal estimasi penyelesaian setiap fase proyek."
      },
      {
        "text": "Team Members",
        "isCorrect": false,
        "rationale": "Menyebutkan anggota tim pelaksana."
      }
    ],
    "hint": "Komponen ini mengidentifikasi rentang waktu (jadwal kasar) pencapaian fase proyek.",
    "level": 2,
    "id": 18,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4",
    "question": "Apa yang ada dan apa yang keluar dari proyek adalah bagian dari \u2026",
    "options": [
      {
        "text": "Problem Statement",
        "isCorrect": false,
        "rationale": "Merupakan definisi masalah."
      },
      {
        "text": "Business Case",
        "isCorrect": false,
        "rationale": "Justifikasi bisnis investasi."
      },
      {
        "text": "Goal Statement",
        "isCorrect": false,
        "rationale": "Pernyataan target utama."
      },
      {
        "text": "Scope",
        "isCorrect": true,
        "rationale": "Scope (ruang lingkup) mendefinisikan batasan kerja: apa yang masuk (in-scope) dan apa yang keluar/tidak termasuk (out-of-scope)."
      },
      {
        "text": "Team Members",
        "isCorrect": false,
        "rationale": "Rincian personil pelaksana."
      }
    ],
    "hint": "Menentukan batas-batas pekerjaan agar tim tidak mengerjakan hal yang tidak disepakati.",
    "level": 2,
    "id": 19,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4",
    "question": "Project Charter dibuat pada tahap \u2026.",
    "options": [
      {
        "text": "Clossing Project",
        "isCorrect": false,
        "rationale": "Fase penutupan proyek."
      },
      {
        "text": "Planning Project",
        "isCorrect": false,
        "rationale": "Fase perencanaan proyek."
      },
      {
        "text": "Executing Project",
        "isCorrect": false,
        "rationale": "Fase pelaksanaan proyek."
      },
      {
        "text": "Controlling Project",
        "isCorrect": false,
        "rationale": "Fase pengawasan proyek."
      },
      {
        "text": "Initiating Project",
        "isCorrect": true,
        "rationale": "Project Charter dirancang dan disetujui pada kelompok proses Inisiasi (Initiating) sebagai langkah formal memulai proyek."
      }
    ],
    "hint": "Tahap paling awal sebelum detail rencana proyek (PMP) disusun.",
    "level": 2,
    "id": 20,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5",
    "question": "Tahapan-tahapan Cost estimation tools & techniques ada berapa\u2026",
    "options": [
      {
        "text": "ada 7 tahapan",
        "isCorrect": false,
        "rationale": "Terlalu banyak untuk model estimasi dasar BSI."
      },
      {
        "text": "ada 6 tahapan",
        "isCorrect": false,
        "rationale": "Salah, bukan 6 tahapan."
      },
      {
        "text": "ada 5 tahapan",
        "isCorrect": false,
        "rationale": "Salah, bukan 5 tahapan."
      },
      {
        "text": "ada 4 tahapan",
        "isCorrect": false,
        "rationale": "Salah, bukan 4 tahapan."
      },
      {
        "text": "ada 3 tahapan",
        "isCorrect": true,
        "rationale": "Sesuai halaman 43 Modul BSI, teknik estimasi biaya MPSI terdiri dari 3 metode: Analogous, Bottom-Up, dan Parametric Modeling."
      }
    ],
    "hint": "Metode ini meliputi Analogous, Bottom-Up, dan Parametric Modeling.",
    "level": 3,
    "id": 21,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5",
    "question": "Jika terjadi masalah dalam kinerja proyek jikalau persyaratannya\u2026",
    "options": [
      {
        "text": "CPI dan SPI >= 100%",
        "isCorrect": false,
        "rationale": "Ini berarti proyek hemat biaya dan berjalan cepat (bagus)."
      },
      {
        "text": "CPI dan SPI <= 100%",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI, performa bermasalah jika indeks kinerja biaya (CPI) dan jadwal (SPI) kurang dari atau sama dengan 100% (1.0)."
      },
      {
        "text": "CPI dan SPI = 100%",
        "isCorrect": false,
        "rationale": "Ini berarti proyek berjalan tepat sesuai anggaran dan jadwal."
      },
      {
        "text": "CPI dan SPI < 100",
        "isCorrect": false,
        "rationale": "Kurang tepat secara penulisan opsi asli modul."
      },
      {
        "text": "CPI dan SPI / 100%",
        "isCorrect": false,
        "rationale": "Opsi pembagian acak, salah."
      }
    ],
    "hint": "Proyek bermasalah jika efisiensinya di bawah atau pas 100% (nilai indeks <= 1.0).",
    "level": 3,
    "id": 22,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5",
    "question": "biaya total langsung maupun tidak langsung yang digunakan dalam rangka menyelesaikan pekerjaan",
    "options": [
      {
        "text": "Actual Cost (AC)",
        "isCorrect": true,
        "rationale": "Actual Cost (AC) adalah akumulasi biaya total yang dihabiskan untuk menyelesaikan pekerjaan selama periode tertentu."
      },
      {
        "text": "Planned Value (PV)",
        "isCorrect": false,
        "rationale": "Planned Value (PV) adalah rencana anggaran terjadwal."
      },
      {
        "text": "Schedule Variance ( SV)",
        "isCorrect": false,
        "rationale": "SV adalah selisih jadwal (EV - PV)."
      },
      {
        "text": "Earned Value (EV)",
        "isCorrect": false,
        "rationale": "Earned Value (EV) adalah nilai hasil kerja nyata yang dicapai."
      },
      {
        "text": "Cost Variance ( CV)",
        "isCorrect": false,
        "rationale": "CV adalah selisih biaya (EV - AC)."
      }
    ],
    "hint": "Biaya 'nyata' atau aktual yang dikeluarkan.",
    "level": 3,
    "id": 23,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5",
    "question": "Rencana porsi total estimasi biaya yang sudah disetujui untuk dikeluarkan pada sebuah aktivitas",
    "options": [
      {
        "text": "Actual Cost (AC)",
        "isCorrect": false,
        "rationale": "Biaya aktual yang telah dikeluarkan."
      },
      {
        "text": "Planned Value (PV)",
        "isCorrect": true,
        "rationale": "Planned Value (PV) adalah anggaran disetujui yang direncanakan habis untuk suatu aktivitas dalam periode tertentu."
      },
      {
        "text": "Schedule Variance ( SV)",
        "isCorrect": false,
        "rationale": "Merupakan nilai variansi jadwal."
      },
      {
        "text": "Earned Value (EV)",
        "isCorrect": false,
        "rationale": "Nilai hasil pekerjaan yang sudah tuntas."
      },
      {
        "text": "Cost Variance ( CV)",
        "isCorrect": false,
        "rationale": "Merupakan nilai variansi biaya."
      }
    ],
    "hint": "Rencana pengeluaran biaya terjadwal (Planned Value).",
    "level": 3,
    "id": 24,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5",
    "question": "Analisis Periode Pengembalian disebut \u2026",
    "options": [
      {
        "text": "Payback Period",
        "isCorrect": true,
        "rationale": "Analisis Periode Pengembalian dalam evaluasi finansial disebut Payback Period (periode balik modal)."
      },
      {
        "text": "Net Present Value",
        "isCorrect": false,
        "rationale": "NPV mengukur nilai bersih investasi saat ini."
      },
      {
        "text": "Return On Investment",
        "isCorrect": false,
        "rationale": "ROI mengukur persentase pengembalian modal."
      },
      {
        "text": "Internal Rate of Return",
        "isCorrect": false,
        "rationale": "IRR mengukur tingkat pengembalian internal bunga."
      },
      {
        "text": "Cost Variance",
        "isCorrect": false,
        "rationale": "Selisih biaya proyek."
      }
    ],
    "hint": "Berapa lama modal investasi proyek dapat kembali (payback).",
    "level": 3,
    "id": 25,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6",
    "question": "Project Human Resources Management bisa disebut juga \u2026",
    "options": [
      {
        "text": "Manajemen Risiko",
        "isCorrect": false,
        "rationale": "Mengelola ketidakpastian proyek."
      },
      {
        "text": "Manajemen Pemangku Kepentingan",
        "isCorrect": false,
        "rationale": "Mengelola hubungan stakeholder."
      },
      {
        "text": "Manajemen Komunikasi",
        "isCorrect": false,
        "rationale": "Mengelola distribusi informasi."
      },
      {
        "text": "Manajemen Pengadaan",
        "isCorrect": false,
        "rationale": "Mengelola pembelian luar."
      },
      {
        "text": "Manajemen Sumber Daya Manusia",
        "isCorrect": true,
        "rationale": "Project HR Management diterjemahkan sebagai Manajemen Sumber Daya Manusia."
      }
    ],
    "hint": "Fokus pada pengelolaan tenaga kerja manusia (HR).",
    "level": 3,
    "id": 26,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6",
    "question": "Sumber daya/resource, yakni manusia, material, mesin-mesin, dan metode kerja merupakan bagian dari...",
    "options": [
      {
        "text": "proses",
        "isCorrect": false,
        "rationale": "Proses adalah tahapan kerja."
      },
      {
        "text": "Manajemen",
        "isCorrect": false,
        "rationale": "Manajemen adalah metode pengelolaan."
      },
      {
        "text": "Proyek",
        "isCorrect": true,
        "rationale": "Sumber daya berupa 5M (Man, Material, Machine, Method, Money) merupakan komponen vital pembangun Proyek."
      },
      {
        "text": "Inisiasi",
        "isCorrect": false,
        "rationale": "Inisiasi adalah tahap permulaan proyek."
      },
      {
        "text": "Anggaran",
        "isCorrect": false,
        "rationale": "Anggaran adalah sumber finansial."
      }
    ],
    "hint": "Seluruh elemen input ini dikombinasikan untuk mensukseskan suatu wadah usaha sementara.",
    "level": 3,
    "id": 27,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6",
    "question": "Manager proyek adalah",
    "options": [
      {
        "text": "Seseorang yang ditunjuk atau ditetapkan untuk bertanggungjawab terhadap kegiatan harian pengelolaan proyek untuk kepentingan proyek",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI, PM adalah penanggung jawab utama operasional harian pengelolaan proyek."
      },
      {
        "text": "Punya sertifikasi",
        "isCorrect": false,
        "rationale": "Sertifikasi adalah kelebihan kualifikasi, bukan definisi dasar PM."
      },
      {
        "text": "Punya pengalaman minimal 2 tahun dalam menangani proyek",
        "isCorrect": false,
        "rationale": "Pengalaman adalah kriteria rekrutmen."
      },
      {
        "text": "Seorang yang menginisiasi tim",
        "isCorrect": false,
        "rationale": "Inisiator tim adalah sponsor proyek."
      },
      {
        "text": "Mempunyai pendidikan khusus",
        "isCorrect": false,
        "rationale": "Pendidikan khusus menunjang kompetensi, bukan definisi PM."
      }
    ],
    "hint": "Merupakan orang nomor satu dalam mengawal jalannya proyek sehari-hari.",
    "level": 3,
    "id": 28,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6",
    "question": "Struktur organisasi ini merupakan bagian tersendiri dari organisasi fungsional perusahaan, dimana manajer mempunyai otoritas penuh",
    "options": [
      {
        "text": "OP. Fungsional",
        "isCorrect": false,
        "rationale": "Fungsional memberikan otoritas penuh pada manajer fungsional divisi."
      },
      {
        "text": "OP. Matriks",
        "isCorrect": false,
        "rationale": "Matriks membagi wewenang antara PM dan Manajer Fungsional."
      },
      {
        "text": "OP. Area",
        "isCorrect": false,
        "rationale": "Bukan jenis struktur organisasi proyek standar BSI."
      },
      {
        "text": "OP. Murni",
        "isCorrect": true,
        "rationale": "Organisasi Proyek (OP) Murni memisahkan tim proyek secara mandiri, memberikan otoritas mutlak/penuh kepada Manajer Proyek."
      },
      {
        "text": "OP. Strategis",
        "isCorrect": false,
        "rationale": "OP Strategis tidak dikenal dalam materi struktur proyek BSI."
      }
    ],
    "hint": "Organisasi Proyek ini mandiri dan terpisah (murni).",
    "level": 3,
    "id": 29,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6",
    "question": "Struktur organisasi jenis ini dikelompokkan menurut fungsinya, memiliki struktur dengan konsep otoritas dan hierarki vertikal",
    "options": [
      {
        "text": "OP. Fungsional",
        "isCorrect": true,
        "rationale": "OP Fungsional mengelompokkan staf berdasarkan fungsi spesialisasi (HR, IT, Keuangan) dengan jalur komando hierarki vertikal."
      },
      {
        "text": "OP. Matriks",
        "isCorrect": false,
        "rationale": "Matriks menggabungkan fungsional dan proyek secara menyilang."
      },
      {
        "text": "OP. Murni",
        "isCorrect": false,
        "rationale": "Murni berorientasi proyek secara penuh, bukan fungsi divisi."
      },
      {
        "text": "OP. Area",
        "isCorrect": false,
        "rationale": "Bukan struktur dasar."
      },
      {
        "text": "OP. Strategis",
        "isCorrect": false,
        "rationale": "Bukan struktur dasar."
      }
    ],
    "hint": "Tim dikelompokkan sesuai fungsi divisi asalnya (Keuangan, IT, dll).",
    "level": 3,
    "id": 30,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UAS - Pertemuan 9",
    "question": "Di beberapa perusahaan nama lain untuk departemen pengadaan adalah",
    "options": [
      {
        "text": "Departemen Administrasi",
        "isCorrect": false,
        "rationale": "Administrasi mengelola surat menyurat kantor."
      },
      {
        "text": "Departemen Pembelian",
        "isCorrect": true,
        "rationale": "Departemen Pengadaan (Procurement) sering kali dinamakan Departemen Pembelian (Purchasing Department) di perusahaan."
      },
      {
        "text": "Departemen Penjualan",
        "isCorrect": false,
        "rationale": "Penjualan mengurusi sales produk ke pasar."
      },
      {
        "text": "Departemen Inventori",
        "isCorrect": false,
        "rationale": "Inventori mengurusi pergudangan dan stok barang."
      },
      {
        "text": "Departemen Pemasaran",
        "isCorrect": false,
        "rationale": "Pemasaran mengurusi iklan dan promosi."
      }
    ],
    "hint": "Aktivitas utama departemen ini adalah 'membeli' (purchasing) barang/jasa.",
    "level": 1,
    "id": 31,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 9",
    "question": "Bidang Pengetahuan yang mengatur pengadaan barang",
    "options": [
      {
        "text": "Project Quality Management",
        "isCorrect": false,
        "rationale": "Mengelola kualitas produk."
      },
      {
        "text": "Project Human Resources Management",
        "isCorrect": false,
        "rationale": "Mengelola SDM tim proyek."
      },
      {
        "text": "Project Risk Management",
        "isCorrect": false,
        "rationale": "Mengelola risiko ketidakpastian."
      },
      {
        "text": "Project Procurement Management",
        "isCorrect": true,
        "rationale": "Project Procurement Management adalah bidang yang mengatur pembelian/pengadaan barang dan jasa dari luar."
      },
      {
        "text": "Project Communication Management",
        "isCorrect": false,
        "rationale": "Mengelola alur informasi komunikasi."
      }
    ],
    "hint": "Pengadaan dalam bahasa Inggris disebut Procurement.",
    "level": 1,
    "id": 32,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 9",
    "question": "Risiko sehubungan dengan batasan yang dibebankan oleh manajemen atau pasar, Item-item risiko berdasarkan \u2026",
    "options": [
      {
        "text": "Ukuran produk",
        "isCorrect": false,
        "rationale": "Berkaitan dengan volume program atau database."
      },
      {
        "text": "Pengaruh bisnis",
        "isCorrect": true,
        "rationale": "Risiko dari batasan manajemen atau pasar termasuk ke dalam kategori Pengaruh Bisnis (Business Influence)."
      },
      {
        "text": "Karakteristik pelanggan",
        "isCorrect": false,
        "rationale": "Berkaitan dengan sikap dan sifat klien."
      },
      {
        "text": "Definisi proses",
        "isCorrect": false,
        "rationale": "Berkaitan dengan standar SOP proyek."
      },
      {
        "text": "Lingkungan pengembangan",
        "isCorrect": false,
        "rationale": "Berkaitan dengan software/hardware IDE tim developer."
      }
    ],
    "hint": "Risiko ini mempengaruhi bisnis secara makro.",
    "level": 1,
    "id": 33,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 9",
    "question": "Proses formal untuk mendapatkan barang dan jasa dikenal sebagai...",
    "options": [
      {
        "text": "Inisiasi",
        "isCorrect": false,
        "rationale": "Fase awal otorisasi proyek."
      },
      {
        "text": "Perencanaan",
        "isCorrect": false,
        "rationale": "Fase penyusunan rencana baseline."
      },
      {
        "text": "Pengadaan",
        "isCorrect": true,
        "rationale": "Sesuai modul MPSI halaman 70, proses formal untuk mendapatkan barang dan jasa dikenal sebagai Pengadaan (Procurement)."
      },
      {
        "text": "Pelaksanaan",
        "isCorrect": false,
        "rationale": "Executing, pengerjaan produk."
      },
      {
        "text": "Penutupan",
        "isCorrect": false,
        "rationale": "Closing, pengakhiran proyek."
      }
    ],
    "hint": "Tindakan formal membeli barang atau jasa eksternal.",
    "level": 1,
    "id": 34,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 9",
    "question": "Jumlah proses pada Project Risk Manajemen adalah",
    "options": [
      {
        "text": "6 Proses",
        "isCorrect": true,
        "rationale": "Manajemen Risiko Proyek terdiri dari 6 proses utama berdasarkan PMBOK 5: Plan Risk Management, Identify Risks, Perform Qualitative Risk Analysis, Perform Quantitative Risk Analysis, Plan Risk Responses, dan Control Risks."
      },
      {
        "text": "8 Proses",
        "isCorrect": false,
        "rationale": "Terlalu banyak untuk bidang risiko PMBOK 5."
      },
      {
        "text": "10 Proses",
        "isCorrect": false,
        "rationale": "10 adalah jumlah Knowledge Areas, bukan proses risiko."
      },
      {
        "text": "11 Proses",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "12 Proses",
        "isCorrect": false,
        "rationale": "Salah."
      }
    ],
    "hint": "Bidang risiko ini memiliki 6 tahapan dari perencanaan hingga pengawasan.",
    "level": 1,
    "id": 35,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 10",
    "question": "Pelaksanaan SDLC dilakukan pada tahap \u2026",
    "options": [
      {
        "text": "Initiating",
        "isCorrect": false,
        "rationale": "Inisiasi hanya untuk melegalkan proyek."
      },
      {
        "text": "Planning",
        "isCorrect": false,
        "rationale": "Perencanaan hanya untuk mendesain baseline jadwal/biaya."
      },
      {
        "text": "Executing",
        "isCorrect": true,
        "rationale": "Fase rekayasa sistem/software (SDLC) seperti coding, pengujian, dan penataan program dilaksanakan pada tahap pelaksanaan proyek (Executing)."
      },
      {
        "text": "Monitor & Controlling",
        "isCorrect": false,
        "rationale": "Hanya untuk mengawasi deviasi."
      },
      {
        "text": "Closing",
        "isCorrect": false,
        "rationale": "Hanya untuk serah terima produk."
      }
    ],
    "hint": "Fase eksekusi (Executing) adalah tempat dilakukannya pemrograman nyata.",
    "level": 2,
    "id": 36,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 10",
    "question": "Perancangan sistem berkonsentrasi pada bagaimana sistem dibangun untuk memenuhi kebutuhan pada fase :",
    "options": [
      {
        "text": "Analisis",
        "isCorrect": false,
        "rationale": "Analisis berkonsentrasi pada pengumpulan kebutuhan (what)."
      },
      {
        "text": "Design",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI, perancangan sistem berkonsentrasi pada bagaimana sistem dibangun (how) untuk memenuhi kebutuhan pada fase Design."
      },
      {
        "text": "Implementasi",
        "isCorrect": false,
        "rationale": "Implementasi berkonsentrasi pada coding dan pemasangan."
      },
      {
        "text": "Planning",
        "isCorrect": false,
        "rationale": "Planning berkonsentrasi pada estimasi proyek."
      },
      {
        "text": "Maintenance",
        "isCorrect": false,
        "rationale": "Maintenance berkonsentrasi pada pemeliharaan pasca rilis."
      }
    ],
    "hint": "Fase di mana arsitektur logika dan fisik dirancang.",
    "level": 2,
    "id": 37,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 10",
    "question": "Istilah dari siklus hidup proyek adalah \u2026",
    "options": [
      {
        "text": "DAD",
        "isCorrect": false,
        "rationale": "DAD adalah Data Flow Diagram / diagram aliran data."
      },
      {
        "text": "PERT",
        "isCorrect": false,
        "rationale": "PERT adalah teknik penjadwalan estimasi 3 titik."
      },
      {
        "text": "SDLC",
        "isCorrect": false,
        "rationale": "SDLC adalah siklus hidup rekayasa perangkat lunak."
      },
      {
        "text": "PLC",
        "isCorrect": true,
        "rationale": "PLC stands for Project Life Cycle (Siklus Hidup Proyek)."
      },
      {
        "text": "PDM",
        "isCorrect": false,
        "rationale": "PDM adalah Precedence Diagramming Method untuk jadwal jaringan."
      }
    ],
    "hint": "Merupakan singkatan dari Project Life Cycle.",
    "level": 2,
    "id": 38,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 10",
    "question": "Sistem lama dihentikan langsung diganti sistem baru",
    "options": [
      {
        "text": "Percontohan",
        "isCorrect": false,
        "rationale": "Percontohan (pilot) memasang sistem di satu unit dulu sebagai contoh."
      },
      {
        "text": "Serentak",
        "isCorrect": true,
        "rationale": "Metode konversi serentak (direct cutover) menghentikan sistem lama seketika dan langsung mengaktifkan sistem baru."
      },
      {
        "text": "Bertahap",
        "isCorrect": false,
        "rationale": "Bertahap (phased) memasang sistem per modul secara perlahan."
      },
      {
        "text": "Paralel",
        "isCorrect": false,
        "rationale": "Paralel menjalankan sistem lama dan baru bersamaan selama masa transisi."
      },
      {
        "text": "Offline",
        "isCorrect": false,
        "rationale": "Offline bukan metode konversi resmi."
      }
    ],
    "hint": "Disebut juga dengan konversi langsung (direct cutover/serentak).",
    "level": 2,
    "id": 39,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 10",
    "question": "Analisis batasan waktu penyusunan sistem adalah dimensi kelayakan \u2026",
    "options": [
      {
        "text": "Teknis",
        "isCorrect": false,
        "rationale": "Analisis teknologi hardware/software."
      },
      {
        "text": "Pengembalian Teknik",
        "isCorrect": false,
        "rationale": "Analisis keuntungan teknis."
      },
      {
        "text": "Non-ekonomis",
        "isCorrect": false,
        "rationale": "Analisis keuntungan kualitatif non-keuangan."
      },
      {
        "text": "Hukum",
        "isCorrect": false,
        "rationale": "Analisis batasan hukum dan regulasi."
      },
      {
        "text": "Jadwal",
        "isCorrect": true,
        "rationale": "Kelayakan jadwal (schedule feasibility) menganalisis batasan waktu penyusunan sistem."
      }
    ],
    "hint": "Berhubungan erat dengan jadwal (timeline/schedule) pengerjaan.",
    "level": 2,
    "id": 40,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 14",
    "question": "Project Management Plan dibuat oleh...........ditandatangani oleh............dan menjadi dasar (baseline) rencana Project.",
    "options": [
      {
        "text": "Project Manager,Key Stakeholder",
        "isCorrect": true,
        "rationale": "PMP dirancang oleh Project Manager, ditandatangani Key Stakeholder sebagai otorisasi resmi baseline proyek."
      },
      {
        "text": "Multi value, Manager",
        "isCorrect": false,
        "rationale": "Opsi distractor acak BSI."
      },
      {
        "text": "Owner, stakeholder",
        "isCorrect": false,
        "rationale": "Kurang tepat, PM yang merancang secara spesifik."
      },
      {
        "text": "Stakeholder, manager",
        "isCorrect": false,
        "rationale": "Terbalik posisinya."
      },
      {
        "text": "Manajer, project baseline",
        "isCorrect": false,
        "rationale": "Project baseline bukan pihak penanda tangan."
      }
    ],
    "hint": "PM menyusun, Pemangku Kepentingan Utama menandatangani.",
    "level": 3,
    "id": 41,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 14",
    "question": "Berisi Project Scope Statement, WBS, dan WBS Dictionary, adalah \u2026",
    "options": [
      {
        "text": "Scope baseline",
        "isCorrect": true,
        "rationale": "Tiga elemen utama (Scope Statement, WBS, WBS Dictionary) menyusun Scope Baseline (acuan dasar ruang lingkup)."
      },
      {
        "text": "Estimasi baseline",
        "isCorrect": false,
        "rationale": "Bukan istilah resmi PMBOK."
      },
      {
        "text": "Cost baseline",
        "isCorrect": false,
        "rationale": "Cost baseline mengunci anggaran biaya proyek."
      },
      {
        "text": "Schedule baseline",
        "isCorrect": false,
        "rationale": "Schedule baseline mengunci linier waktu jadwal proyek."
      },
      {
        "text": "Plan",
        "isCorrect": false,
        "rationale": "Plan terlalu umum."
      }
    ],
    "hint": "Mengunci batasan ruang lingkup (scope) fitur proyek.",
    "level": 3,
    "id": 42,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 14",
    "question": "kita mencoba menyederhanakan isi dari Project Management Plan, isinya berupa \u2026",
    "options": [
      {
        "text": "4 W dan 1 H",
        "isCorrect": true,
        "rationale": "Penyederhanaan PMP merujuk pada rumusan taktis 4W + 1H (What, Why, When, Who, How)."
      },
      {
        "text": "3 W dan 2 H",
        "isCorrect": false,
        "rationale": "Salah rumus."
      },
      {
        "text": "2 W dan 3 H",
        "isCorrect": false,
        "rationale": "Salah rumus."
      },
      {
        "text": "1 W dan 4 H",
        "isCorrect": false,
        "rationale": "Salah rumus."
      },
      {
        "text": "5 W",
        "isCorrect": false,
        "rationale": "Meskipun umum, BSI menggunakan 4W + 1H."
      }
    ],
    "hint": "Rumusan taktis pertanyaan dasar proyek: Apa, Mengapa, Kapan, Siapa, dan Bagaimana.",
    "level": 3,
    "id": 43,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 14",
    "question": "Project Management Plan ditandatangani oleh \u2026",
    "options": [
      {
        "text": "Manajer Proyek",
        "isCorrect": false,
        "rationale": "PM membuat dokumen, persetujuan legal ditandatangani pihak pemberi persetujuan."
      },
      {
        "text": "Key Stakeholder",
        "isCorrect": true,
        "rationale": "Sesuai modul BSI, PMP ditandatangani oleh Key Stakeholder agar sah sebagai acuan dasar proyek."
      },
      {
        "text": "Programmer",
        "isCorrect": false,
        "rationale": "Programmer bertugas menulis kode program."
      },
      {
        "text": "Analys System",
        "isCorrect": false,
        "rationale": "System Analyst merancang spesifikasi sistem."
      },
      {
        "text": "Team Proyek",
        "isCorrect": false,
        "rationale": "Tim proyek mengeksekusi rencana, bukan menandatanganinya secara hukum."
      }
    ],
    "hint": "Pihak pemegang keputusan tertinggi (pemangku kepentingan utama).",
    "level": 3,
    "id": 44,
    "course": "mpsi",
    "examType": "uas"
  },
  {
    "category": "MPSI UAS - Pertemuan 14",
    "question": "Berisi Project Scope Statement, WBS, dan WBS Dictionary",
    "options": [
      {
        "text": "Schedule Baseline",
        "isCorrect": false,
        "rationale": "Mengunci jadwal waktu."
      },
      {
        "text": "Scope Baseline",
        "isCorrect": true,
        "rationale": "Ketiga dokumen ini menyusun Scope Baseline."
      },
      {
        "text": "Cost Baseline",
        "isCorrect": false,
        "rationale": "Mengunci anggaran biaya."
      },
      {
        "text": "Time Baseline",
        "isCorrect": false,
        "rationale": "Bukan istilah resmi PMBOK (istilah resminya Schedule Baseline)."
      },
      {
        "text": "Quality Baseline",
        "isCorrect": false,
        "rationale": "Mengunci standar kualitas."
      }
    ],
    "hint": "Sama dengan pertanyaan nomor 2 dari materi pertemuan 14.",
    "level": 3,
    "id": 45,
    "course": "mpsi",
    "examType": "uas"
  }
];

const MATERI_KILAT_UTS = [
  {
    "title": "Level 1 (Pertemuan 1 & 2): Konsep Dasar & Kelompok Proses",
    "points": [
      "Proyek bersifat dinamis, non-rutin, relatif pendek, memiliki jadwal tetap, dan kebutuhan sumber daya berubah-ubah (5M).",
      "Proyek internal (swakelola) dikerjakan langsung tanpa melalui proses tender/lelang kompetitif.",
      "5 Kelompok Proses (Process Groups): Initiating, Planning, Executing, Monitoring & Controlling, dan Closing, dengan total 47 proses PMBOK Edisi 5.",
      "Project Integration Management memiliki 6 proses utama berdasarkan PMBOK Edisi 5.",
      "Create WBS adalah menjabarkan scope statement menjadi susunan deliverable hierarkis yang mudah dikelola."
    ]
  },
  {
    "title": "Level 2 (Pertemuan 3 & 4): Inisiasi, Project Charter & Scope",
    "points": [
      "Inisiasi memiliki 2 proses utama: Develop Project Charter (Project Definition) dan Identify Stakeholders.",
      "Tujuan pelaksanaan proyek (Executing) adalah mengoordinasikan staf dan sumber daya guna merealisasikan rencana manajemen proyek.",
      "Work Result Guideline digunakan untuk memandu hasil pekerjaan proyek agar tetap sesuai standar saat eksekusi.",
      "Problem Statement mendokumentasikan masalah bisnis secara kuantitatif berdasarkan pengukuran nyata.",
      "Timeline (lini waktu) dalam Project Charter menjelaskan target tanggal penyelesaian setiap fase proyek.",
      "Scope (ruang lingkup) mendefinisikan batasan kerja: apa yang masuk (in-scope) dan apa yang keluar/tidak termasuk (out-of-scope)."
    ]
  },
  {
    "title": "Level 3 (Pertemuan 5 & 6): Estimasi Biaya & SDM Proyek",
    "points": [
      "Teknik estimasi biaya MPSI terdiri dari 3 metode: Analogous (Top-Down), Bottom-Up, dan Parametric Modeling.",
      "Performa bermasalah jika indeks kinerja biaya (CPI) dan jadwal (SPI) kurang dari atau sama dengan 100% (1.0).",
      "Actual Cost (AC) adalah biaya total yang dihabiskan. Planned Value (PV) adalah anggaran disetujui yang direncanakan untuk aktivitas.",
      "Organisasi Proyek (OP) Murni memisahkan tim proyek secara mandiri, memberikan otoritas mutlak kepada Manajer Proyek.",
      "OP Fungsional mengelompokkan staf berdasarkan fungsi spesialisasi divisi dengan jalur komando hierarki vertikal."
    ]
  }
];

const MATERI_KILAT_UAS = [
  {
    "title": "Level 1 (Pertemuan 9): Pengadaan & Risiko Proyek",
    "points": [
      "Departemen Pengadaan (Procurement) sering kali dinamakan Departemen Pembelian (Purchasing Department) di perusahaan.",
      "Project Procurement Management adalah bidang yang mengatur pembelian/pengadaan barang dan jasa dari luar secara formal.",
      "Risiko sehubungan dengan batasan yang dibebankan oleh manajemen atau pasar termasuk ke dalam kategori Pengaruh Bisnis (Business Influence).",
      "Manajemen Risiko Proyek terdiri dari 6 proses utama berdasarkan PMBOK Edisi 5."
    ]
  },
  {
    "title": "Level 2 (Pertemuan 10): Siklus Hidup & Penerapan SDLC",
    "points": [
      "Fase rekayasa sistem/software (SDLC) seperti coding, pengujian, dan penataan program dilaksanakan pada tahap pelaksanaan proyek (Executing).",
      "Perancangan sistem berkonsentrasi pada bagaimana sistem dibangun (how) untuk memenuhi kebutuhan pada fase Design.",
      "PLC stands for Project Life Cycle (Siklus Hidup Proyek).",
      "Metode konversi serentak (direct cutover) menghentikan sistem lama seketika dan langsung mengaktifkan sistem baru.",
      "Kelayakan jadwal (schedule feasibility) menganalisis batasan waktu penyusunan sistem."
    ]
  },
  {
    "title": "Level 3 (Pertemuan 14): Project Management Plan (PMP)",
    "points": [
      "PMP dirancang oleh Project Manager, ditandatangani Key Stakeholder sebagai otorisasi resmi baseline proyek.",
      "Tiga dokumen utama (Scope Statement, WBS, WBS Dictionary) menyusun Scope Baseline (acuan dasar ruang lingkup).",
      "Penyederhanaan PMP merujuk pada rumusan taktis 4W + 1H (What, Why, When, Who, How)."
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
  { id: 'uas', name: 'UAS (Ujian Akhir Semester)', active: true }
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

  const activeQuestions = QUESTIONS_DATABASE.filter(
    q => q.course === selectedCourse && q.examType === selectedExamType && (selectedLevel !== null ? q.level === selectedLevel : true)
  );

  const totalExamQuestions = QUESTIONS_DATABASE.filter(
    q => q.course === selectedCourse && q.examType === selectedExamType
  ).length;

  const lvl1Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 1).length;
  const lvl2Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 2).length;
  const lvl3Count = QUESTIONS_DATABASE.filter(q => q.course === selectedCourse && q.examType === selectedExamType && q.level === 3).length;

  const startQuiz = (level = null) => {
    setSelectedLevel(level);
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
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setView('result');
    }
  };

  if (view === 'materi') {
    const activeMateri = selectedExamType === 'uts' ? MATERI_KILAT_UTS : MATERI_KILAT_UAS;
    return (
      <div className="app-container">
        {renderNavbar('materi')}

        <main className="quiz-main">
          <div className="materi-card">
            <div className="materi-header">
              <h2>Ringkasan Materi Ujian</h2>
              <p>Poin-poin penting yang wajib Anda pahami sebelum memulai ujian.</p>
            </div>
            
            {activeMateri.map((materi, idx) => (
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
    return (
      <div className="app-container flex-center">
        <div className="result-card">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '20px'}}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>
          <h1>Ujian Selesai!</h1>
          <div className="score-display">
            <span className={percentage >= 60 ? 'score-pass' : 'score-fail'}>{percentage}</span>
            <small>/ 100</small>
          </div>
          <p>Anda menjawab benar <strong>{score}</strong> dari <strong>{activeQuestions.length}</strong> soal.</p>
          <div className="hero-actions" style={{justifyContent: 'center', marginTop: '30px'}}>
            <button className="btn-outline" onClick={() => setView('dashboard')}>Ke Dashboard</button>
            <button className="btn-primary" onClick={() => startQuiz(selectedLevel)}>Ulangi Ujian</button>
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
          <div className="stat-card">
            <span className="stat-label">Total Database Soal</span>
            <strong className="stat-value">{totalExamQuestions} Soal</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Durasi Penuh {selectedExamType.toUpperCase()}</span>
            <strong className="stat-value green-text">{selectedExamType === 'uts' ? '60' : '30'} Menit</strong>
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
              <span className="level-count">{lvl1Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Konsep Dasar, Proyek, dan Kelompok Proses.' 
                : 'Departemen Pengadaan, Procurement, dan Risiko Proyek.'}
            </p>
            <button className="btn-level outline" onClick={() => startQuiz(1)}>Mulai Level 1</button>
          </div>
          
          <div className={"level-card " + (!unlockAll ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 2 - Eksekusi</h4>
              <span className="level-count">{lvl2Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Inisiasi, Sasaran Proyek, Project Charter, dan Scope.' 
                : 'Siklus Hidup Proyek (PLC) dan Penerapan SDLC.'}
            </p>
            <button className="btn-level outline" disabled={!unlockAll} onClick={() => startQuiz(2)}>
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
              <span className="level-count">{lvl3Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Estimasi Biaya (Analogous, Bottom-Up, Parametric), EVM, dan Struktur Organisasi.' 
                : 'Project Management Plan (PMP), Scope Baseline, dan 4W+1H.'}
            </p>
            <button className="btn-level outline" disabled={!unlockAll} onClick={() => startQuiz(3)}>
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
