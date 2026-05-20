import React, { useState, useEffect } from 'react';

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
    "category": "MPSI UTS - Pertemuan 1 (Pendalaman)",
    "question": "Dalam manajemen proyek, singkatan 5M yang menjadi unsur sumber daya proyek adalah...",
    "options": [
      {
        "text": "Man, Material, Machine, Method, Money",
        "isCorrect": true,
        "rationale": "Unsur 5M mencakup Man (Manusia), Material (Bahan), Machine (Peralatan), Method (Metode Kerja), dan Money (Anggaran)."
      },
      {
        "text": "Management, Market, Money, Material, Man",
        "isCorrect": false,
        "rationale": "Market adalah eksternal bisnis, bukan resource internal proyek."
      },
      {
        "text": "Method, Machine, Market, Management, Money",
        "isCorrect": false,
        "rationale": "Management adalah teknik pengelolaan, bukan resource langsung."
      },
      {
        "text": "Man, Machine, Material, Media, Money",
        "isCorrect": false,
        "rationale": "Media bukan bagian dari unsur 5M proyek standar BSI."
      },
      {
        "text": "Management, Material, Machine, Media, Market",
        "isCorrect": false,
        "rationale": "Salah."
      }
    ],
    "hint": "Merupakan lima pilar resource fisik dan finansial dalam proyek.",
    "level": 1,
    "id": 6,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1 (Pendalaman)",
    "question": "Ciri utama dari operasional rutin perusahaan yang membedakannya secara mendasar dengan kegiatan proyek adalah...",
    "options": [
      {
        "text": "Bersifat sementara dan unik",
        "isCorrect": false,
        "rationale": "Ini adalah ciri proyek."
      },
      {
        "text": "Berulang-ulang dan berkelanjutan",
        "isCorrect": true,
        "rationale": "Operasional rutin bersifat repetitif, terus-menerus, dan stabil volume kerjanya."
      },
      {
        "text": "Memiliki jadwal awal dan akhir yang kaku",
        "isCorrect": false,
        "rationale": "Ini adalah ciri proyek."
      },
      {
        "text": "Dibatasi oleh triple constraints",
        "isCorrect": false,
        "rationale": "Ini adalah ciri proyek."
      },
      {
        "text": "Membutuhkan tim lintas fungsional",
        "isCorrect": false,
        "rationale": "Operasional biasanya dikerjakan dalam departemen silo."
      }
    ],
    "hint": "Operasional tidak pernah berhenti saat tujuan jangka pendek tercapai.",
    "level": 1,
    "id": 7,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1 (Pendalaman)",
    "question": "Komponen sistem informasi yang berupa brainware merujuk pada...",
    "options": [
      {
        "text": "Perangkat keras server",
        "isCorrect": false,
        "rationale": "Itu adalah Hardware."
      },
      {
        "text": "Program aplikasi database",
        "isCorrect": false,
        "rationale": "Itu adalah Software."
      },
      {
        "text": "Prosedur penggunaan sistem",
        "isCorrect": false,
        "rationale": "Itu adalah Prosedur/Metode."
      },
      {
        "text": "Jaringan internet",
        "isCorrect": false,
        "rationale": "Itu adalah Infrastruktur."
      },
      {
        "text": "Manusia atau pengguna yang terlibat dalam sistem",
        "isCorrect": true,
        "rationale": "Brainware adalah SDM yang mengoperasikan, mengelola, atau menggunakan sistem informasi tersebut."
      }
    ],
    "hint": "Fokus pada unsur manusia dalam segitiga pilar TI.",
    "level": 1,
    "id": 8,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1 (Pendalaman)",
    "question": "Berdasarkan modul MPSI, yang dimaksud dengan keberhasilan suatu proyek sistem informasi diukur dari...",
    "options": [
      {
        "text": "Tercapainya sasaran waktu, biaya, ruang lingkup, dan kepuasan pelanggan",
        "isCorrect": true,
        "rationale": "Keberhasilan diukur dari tercapainya Triple Constraints ditambah dengan kepuasan stakeholders/pelanggan."
      },
      {
        "text": "Banyaknya programmer yang dilibatkan",
        "isCorrect": false,
        "rationale": "Banyaknya staf justru meningkatkan kompleksitas komunikasi."
      },
      {
        "text": "Bagusnya spesifikasi komputer server",
        "isCorrect": false,
        "rationale": "Hardware canggih tidak menjamin keselarasan bisnis proyek."
      },
      {
        "text": "Jumlah baris kode program yang ditulis",
        "isCorrect": false,
        "rationale": "Kuantitas kode tidak mencerminkan kualitas fungsional sistem."
      },
      {
        "text": "Keuntungan finansial perusahaan pembuat secara sepihak",
        "isCorrect": false,
        "rationale": "Kepuasan klien tetap merupakan parameter keberhasilan utama."
      }
    ],
    "hint": "Kunci keberhasilan proyek tidak hanya mencakup dimensi waktu/biaya, tapi juga kualitas & kepuasan.",
    "level": 1,
    "id": 9,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 1 (Pendalaman)",
    "question": "Mengapa rekayasa perangkat lunak dikategorikan sebagai bagian penting dalam MPSI?",
    "options": [
      {
        "text": "Karena perangkat lunak adalah wujud fisik paling dominan dalam representasi sistem informasi",
        "isCorrect": true,
        "rationale": "Sistem informasi modern direpresentasikan secara dominan melalui modul-modul perangkat lunak (software) fungsional."
      },
      {
        "text": "Karena perangkat lunak tidak membutuhkan biaya pemeliharaan",
        "isCorrect": false,
        "rationale": "Perangkat lunak membutuhkan biaya pemeliharaan yang cukup tinggi."
      },
      {
        "text": "Karena perangkat lunak tidak memiliki masa kedaluwarsa",
        "isCorrect": false,
        "rationale": "Sistem operasi dan bahasa pemrograman terus berkembang (usang)."
      },
      {
        "text": "Karena perangkat lunak mudah dibuat tanpa perencanaan",
        "isCorrect": false,
        "rationale": "Tanpa perencanaan, pengembangan perangkat lunak rentan mengalami kegagalan fatal."
      },
      {
        "text": "Karena perangkat lunak hanya diurus oleh manajer proyek",
        "isCorrect": false,
        "rationale": "Programmer dan analis adalah pembuat utamanya."
      }
    ],
    "hint": "Sistem informasi modern digerakkan oleh kode program logis.",
    "level": 1,
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2 (Pendalaman)",
    "question": "Di dalam PMBOK 5th Edition, total terdapat berapa Knowledge Area (Bidang Pengetahuan) manajemen proyek?",
    "options": [
      {
        "text": "5 Bidang Pengetahuan",
        "isCorrect": false,
        "rationale": "5 adalah jumlah Process Groups, bukan Knowledge Areas."
      },
      {
        "text": "9 Bidang Pengetahuan",
        "isCorrect": false,
        "rationale": "9 adalah jumlah di PMBOK edisi lama."
      },
      {
        "text": "10 Bidang Pengetahuan",
        "isCorrect": true,
        "rationale": "Ada 10 Bidang Pengetahuan: Integration, Scope, Time, Cost, Quality, Human Resource, Communications, Risk, Procurement, dan Stakeholder Management."
      },
      {
        "text": "12 Bidang Pengetahuan",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "47 Bidang Pengetahuan",
        "isCorrect": false,
        "rationale": "47 adalah jumlah proses di PMBOK 5."
      }
    ],
    "hint": "Merupakan klasifikasi rumpun keilmuan manajemen proyek PMBOK 5.",
    "level": 1,
    "id": 16,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2 (Pendalaman)",
    "question": "Kelompok proses yang bertujuan untuk memantau kemajuan proyek secara berkala dan mengidentifikasi penyimpangan rencana adalah...",
    "options": [
      {
        "text": "Initiating Process Group",
        "isCorrect": false,
        "rationale": "Untuk memulai dan mengotorisasi proyek."
      },
      {
        "text": "Planning Process Group",
        "isCorrect": false,
        "rationale": "Untuk merencanakan baseline."
      },
      {
        "text": "Executing Process Group",
        "isCorrect": false,
        "rationale": "Untuk pengerjaan fisik produk."
      },
      {
        "text": "Monitoring & Controlling Process Group",
        "isCorrect": true,
        "rationale": "Grup proses ini mengawasi, meninjau, dan meregulasi kemajuan serta kinerja proyek agar sesuai rencana."
      },
      {
        "text": "Closing Process Group",
        "isCorrect": false,
        "rationale": "Untuk penutupan proyek."
      }
    ],
    "hint": "Fokus pada kata kunci 'memantau' (monitoring) dan 'mengidentifikasi penyimpangan' (controlling).",
    "level": 1,
    "id": 17,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2 (Pendalaman)",
    "question": "Bidang pengetahuan yang bertindak sebagai pemersatu, pengoordinasi, dan pengintegrasi seluruh area manajemen proyek lainnya adalah...",
    "options": [
      {
        "text": "Project Scope Management",
        "isCorrect": false,
        "rationale": "Mengelola batasan fitur."
      },
      {
        "text": "Project Cost Management",
        "isCorrect": false,
        "rationale": "Mengelola anggaran belanja."
      },
      {
        "text": "Project Integration Management",
        "isCorrect": true,
        "rationale": "Integration Management berfungsi mengidentifikasi, menetapkan, menyatukan, dan mengoordinasikan berbagai proses manajemen proyek."
      },
      {
        "text": "Project Quality Management",
        "isCorrect": false,
        "rationale": "Mengelola mutu pekerjaan."
      },
      {
        "text": "Project Communication Management",
        "isCorrect": false,
        "rationale": "Mengelola distribusi informasi."
      }
    ],
    "hint": "Area ini mencakup pembuatan Project Charter dan Project Management Plan.",
    "level": 1,
    "id": 18,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2 (Pendalaman)",
    "question": "Berikut ini yang merupakan bagian dari 5 kelompok proses (Process Group) manajemen proyek, KECUALI...",
    "options": [
      {
        "text": "Initiating",
        "isCorrect": false,
        "rationale": "Merupakan kelompok proses pertama."
      },
      {
        "text": "Planning",
        "isCorrect": false,
        "rationale": "Merupakan kelompok proses kedua."
      },
      {
        "text": "Executing",
        "isCorrect": false,
        "rationale": "Merupakan kelompok proses ketiga."
      },
      {
        "text": "Designing",
        "isCorrect": true,
        "rationale": "Designing adalah fase rekayasa teknis sistem/SDLC, bukan kelompok proses manajerial proyek PMBOK."
      },
      {
        "text": "Closing",
        "isCorrect": false,
        "rationale": "Merupakan kelompok proses kelima."
      }
    ],
    "hint": "Kelompok proses PMBOK bersifat manajerial, bukan langkah teknis software design.",
    "level": 1,
    "id": 19,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 2 (Pendalaman)",
    "question": "Proses penutupan kontrak pengadaan dan serah terima akhir deliverables proyek dikelola dalam kelompok proses...",
    "options": [
      {
        "text": "Initiating",
        "isCorrect": false,
        "rationale": "Fase awal otorisasi proyek."
      },
      {
        "text": "Planning",
        "isCorrect": false,
        "rationale": "Fase penyusunan rencana baseline."
      },
      {
        "text": "Executing",
        "isCorrect": false,
        "rationale": "Fase pelaksanaan tugas coding/testing."
      },
      {
        "text": "Monitoring",
        "isCorrect": false,
        "rationale": "Fase pengawasan berkala."
      },
      {
        "text": "Closing",
        "isCorrect": true,
        "rationale": "Kelompok proses Penutupan (Closing) menangani serah terima resmi produk dan penutupan administratif kontrak vendor."
      }
    ],
    "hint": "Fase akhir yang menutup semua aktivitas.",
    "level": 1,
    "id": 20,
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
    "id": 21,
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
    "id": 22,
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
    "id": 23,
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
    "id": 24,
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
    "id": 25,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3 (Pendalaman)",
    "question": "Dua proses utama yang terjadi di dalam kelompok proses Inisiasi (Initiating) proyek adalah...",
    "options": [
      {
        "text": "Develop Project Charter dan Identify Stakeholders",
        "isCorrect": true,
        "rationale": "Inisiasi mencakup pembuatan dokumen legalitas awal (Charter) dan pendataan pemangku kepentingan (Identify Stakeholders)."
      },
      {
        "text": "Develop PMP dan Define Scope",
        "isCorrect": false,
        "rationale": "Ini terjadi di fase Planning."
      },
      {
        "text": "Create WBS dan Estimate Costs",
        "isCorrect": false,
        "rationale": "Ini terjadi di fase Planning."
      },
      {
        "text": "Direct & Manage Project Work dan Monitor Risks",
        "isCorrect": false,
        "rationale": "Ini terjadi masing-masing di Executing dan Monitoring."
      },
      {
        "text": "Close Project dan Close Procurements",
        "isCorrect": false,
        "rationale": "Ini terjadi di fase Closing."
      }
    ],
    "hint": "Sesuai dengan 2 proses legalisasi dan identifikasi awal di fase inisiasi.",
    "level": 2,
    "id": 26,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3 (Pendalaman)",
    "question": "Siapakah yang memiliki otoritas tertinggi untuk memberikan persetujuan akhir (sign-off) dan mendanai suatu Project Charter?",
    "options": [
      {
        "text": "Project Manager",
        "isCorrect": false,
        "rationale": "PM ditunjuk oleh charter, tidak mengesahkan dirinya sendiri."
      },
      {
        "text": "Programmer",
        "isCorrect": false,
        "rationale": "Staf pelaksana teknis."
      },
      {
        "text": "System Analyst",
        "isCorrect": false,
        "rationale": "Perancang sistem."
      },
      {
        "text": "Project Sponsor",
        "isCorrect": true,
        "rationale": "Sponsor adalah penyedia dana/investasi utama yang melegalkan Project Charter."
      },
      {
        "text": "Database Administrator",
        "isCorrect": false,
        "rationale": "Pengelola database."
      }
    ],
    "hint": "Pihak eksternal atau internal pemegang anggaran proyek.",
    "level": 2,
    "id": 27,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3 (Pendalaman)",
    "question": "Mengapa Manajer Proyek (PM) harus ditunjuk sejak awal pada fase inisiasi proyek?",
    "options": [
      {
        "text": "Agar PM dapat menulis kode program sejak hari pertama",
        "isCorrect": false,
        "rationale": "Menulis program adalah tugas programmer."
      },
      {
        "text": "Agar PM memiliki wewenang resmi mengalokasikan sumber daya organisasi sejak awal",
        "isCorrect": true,
        "rationale": "Develop Project Charter menunjuk PM secara resmi untuk memberikan wewenang alokasi dana dan staf ke aktivitas proyek."
      },
      {
        "text": "Agar PM bisa langsung membayar gaji tim pengembang",
        "isCorrect": false,
        "rationale": "Gaji dibayar rutin oleh bagian keuangan perusahaan."
      },
      {
        "text": "Agar PM dapat membeli server database sendiri",
        "isCorrect": false,
        "rationale": "Pembelian server harus melalui bagian pengadaan."
      },
      {
        "text": "Agar PM dapat menyusun laporan keuangan tahunan perusahaan",
        "isCorrect": false,
        "rationale": "Tugas akuntan korporasi."
      }
    ],
    "hint": "Hal ini berkaitan dengan kekuatan wewenang formal (authority) seorang PM.",
    "level": 2,
    "id": 28,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3 (Pendalaman)",
    "question": "Dokumen penunjuk arah atau 'Work Result Guideline' yang digunakan saat eksekusi proyek bertujuan untuk...",
    "options": [
      {
        "text": "Menghitung variansi anggaran bulanan",
        "isCorrect": false,
        "rationale": "Tugas analisis EVM."
      },
      {
        "text": "Memandu tim agar hasil pekerjaan sesuai dengan target rencana baseline",
        "isCorrect": true,
        "rationale": "Pedoman ini memastikan tim eksekusi menghasilkan deliverables sesuai target mutu/biaya/waktu yang disepakati."
      },
      {
        "text": "Mencatar daftar hadir rapat mingguan",
        "isCorrect": false,
        "rationale": "Minutes of meeting."
      },
      {
        "text": "Menyusun diagram jaringan kerja CPM",
        "isCorrect": false,
        "rationale": "Tugas perencanaan jadwal."
      },
      {
        "text": "Mengidentifikasi risiko baru yang muncul",
        "isCorrect": false,
        "rationale": "Tugas monitoring risiko."
      }
    ],
    "hint": "Panduan pengerjaan deliverables agar tidak menyimpang.",
    "level": 2,
    "id": 29,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 3 (Pendalaman)",
    "question": "Dalam fase penutupan (Closing), serah terima arsip dokumentasi proyek bertujuan untuk...",
    "options": [
      {
        "text": "Menyembunyikan kegagalan proyek dari publik",
        "isCorrect": false,
        "rationale": "Tindakan tidak etis."
      },
      {
        "text": "Menjadi aset proses organisasi (OPA) dan basis pembelajaran proyek di masa depan",
        "isCorrect": true,
        "rationale": "Pengarsipan dokumen, lessons learned, dan riwayat proyek berguna sebagai modal aset (OPA) proyek serupa berikutnya."
      },
      {
        "text": "Memotong anggaran bonus tim pengembang",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "Menghapus hak cipta atas program yang dibuat",
        "isCorrect": false,
        "rationale": "Hak cipta tetap diatur secara legal."
      },
      {
        "text": "Menghindari penagihan pajak pemerintah",
        "isCorrect": false,
        "rationale": "Salah."
      }
    ],
    "hint": "Merupakan pengayaan basis data historis perusahaan (Organizational Process Assets).",
    "level": 2,
    "id": 30,
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
    "id": 31,
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
    "id": 32,
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
    "id": 33,
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
    "id": 34,
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
    "id": 35,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4 (Pendalaman)",
    "question": "Komponen dalam Project Charter yang menjabarkan tentang alasan strategis mengapa proyek tersebut perlu dijalankan bagi bisnis organisasi disebut...",
    "options": [
      {
        "text": "Problem Statement",
        "isCorrect": false,
        "rationale": "Menjabarkan masalah secara kuantitatif."
      },
      {
        "text": "Business Case",
        "isCorrect": true,
        "rationale": "Business Case menjabarkan kelayakan ekonomi, justifikasi bisnis, dan ROI strategis mengapa proyek didanai."
      },
      {
        "text": "Goal Statement",
        "": false,
        "rationale": "Menjabarkan target kuantitatif."
      },
      {
        "text": "Timeline",
        "isCorrect": false,
        "rationale": "Menjabarkan lini waktu fase selesai."
      },
      {
        "text": "Scope",
        "isCorrect": false,
        "rationale": "Menjabarkan batasan kerja masuk/keluar."
      }
    ],
    "hint": "Menjawab pertanyaan: Apa keuntungan finansial/non-finansial proyek ini bagi perusahaan?",
    "level": 2,
    "id": 36,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4 (Pendalaman)",
    "question": "Pernyataan target kuantitatif yang ingin dicapai oleh proyek, seperti peningkatan efisiensi sistem sebesar 30%, dimasukkan dalam komponen...",
    "options": [
      {
        "text": "Problem Statement",
        "isCorrect": false,
        "rationale": "Definisi masalah awal."
      },
      {
        "text": "Business Case",
        "isCorrect": false,
        "rationale": "Justifikasi ekonomi proyek."
      },
      {
        "text": "Goal Statement",
        "isCorrect": true,
        "rationale": "Goal Statement merumuskan sasaran/target terukur yang harus diraih proyek."
      },
      {
        "text": "Timeline",
        "isCorrect": false,
        "rationale": "Perkiraan jadwal fase."
      },
      {
        "text": "Team Members",
        "isCorrect": false,
        "rationale": "Daftar nama pelaksana."
      }
    ],
    "hint": "Fokus pada pernyataan 'target' pencapaian (Goal).",
    "level": 2,
    "id": 37,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4 (Pendalaman)",
    "question": "Daftar nama personil inti beserta peran dan tanggung jawabnya masing-masing di dalam struktur organisasi proyek dicatat pada komponen...",
    "options": [
      {
        "text": "Problem Statement",
        "isCorrect": false,
        "rationale": "Masalah bisnis."
      },
      {
        "text": "Goal Statement",
        "isCorrect": false,
        "rationale": "Target sasaran."
      },
      {
        "text": "Timeline",
        "isCorrect": false,
        "rationale": "Lini waktu."
      },
      {
        "text": "Scope",
        "isCorrect": false,
        "rationale": "Batasan kerja."
      },
      {
        "text": "Team Members",
        "isCorrect": true,
        "rationale": "Komponen Team Members mendaftarkan profil staff beserta perannya dalam struktur proyek."
      }
    ],
    "hint": "Berisi daftar sumber daya manusia tim proyek.",
    "level": 2,
    "id": 38,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4 (Pendalaman)",
    "question": "Laporan penutupan proyek secara menyeluruh (Final Report) diserahkan oleh Manajer Proyek kepada...",
    "options": [
      {
        "text": "Programmer Junior",
        "isCorrect": false,
        "rationale": "Programmer junior tidak menerima laporan baseline."
      },
      {
        "text": "Kepala Gudang",
        "isCorrect": false,
        "rationale": "Tidak terkait manajemen proyek."
      },
      {
        "text": "Project Sponsor / Key Stakeholders",
        "isCorrect": true,
        "rationale": "Final Report diserahkan kepada Sponsor dan Stakeholders utama sebagai bukti formal pertanggungjawaban PM bahwa proyek telah rampung."
      },
      {
        "text": "Masyarakat Umum",
        "isCorrect": false,
        "rationale": "Bersifat rahasia perusahaan."
      },
      {
        "text": "Vendor Pengadaan Server",
        "isCorrect": false,
        "rationale": "Hanya pihak ketiga penyedia barang."
      }
    ],
    "hint": "Pihak yang mendanai dan menyetujui keberadaan proyek sejak awal.",
    "level": 2,
    "id": 39,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 4 (Pendalaman)",
    "question": "Pengertian 'Scope' dalam penyusunan Project Charter merujuk pada...",
    "options": [
      {
        "text": "Perkiraan biaya total pengerjaan proyek",
        "isCorrect": false,
        "rationale": "Itu adalah Cost/Budget."
      },
      {
        "text": "Batasan fitur-fitur dan pekerjaan yang termasuk maupun tidak termasuk dalam proyek",
        "isCorrect": true,
        "rationale": "Scope (ruang lingkup) memperjelas batasan fitur sistem informasi agar kerja tim terfokus."
      },
      {
        "text": "Daftar resiko yang mungkin terjadi selama pengkodean",
        "isCorrect": false,
        "rationale": "Itu adalah Risk."
      },
      {
        "text": "Nama-nama komputer server yang akan dibeli",
        "isCorrect": false,
        "rationale": "Itu adalah hardware pengadaan."
      },
      {
        "text": "SOP penanganan crash database",
        "isCorrect": false,
        "rationale": "Itu adalah prosedur mitigasi operasional."
      }
    ],
    "hint": "Mengunci apa saja yang dikerjakan (in-scope) dan yang dilarang dikerjakan (out-of-scope).",
    "level": 2,
    "id": 40,
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
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
    "id": 44,
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
    "id": 45,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5 (Pendalaman)",
    "question": "Metode estimasi biaya proyek dengan cara menggunakan biaya aktual dari proyek serupa di masa lalu sebagai basis estimasi proyek saat ini disebut...",
    "options": [
      {
        "text": "Analogous Estimating",
        "isCorrect": true,
        "rationale": "Analogous Estimating (top-down) mengandalkan data historis proyek terdahulu yang mirip untuk mengestimasi biaya proyek baru secara cepat."
      },
      {
        "text": "Bottom-Up Estimating",
        "isCorrect": false,
        "rationale": "Menghitung secara detail dari komponen WBS terkecil."
      },
      {
        "text": "Parametric Modeling",
        "isCorrect": false,
        "rationale": "Menggunakan hubungan matematika/statistik variabel kerja."
      },
      {
        "text": "Computerized Estimating",
        "isCorrect": false,
        "rationale": "Menggunakan software estimasi saja."
      },
      {
        "text": "Expert Judgment",
        "isCorrect": false,
        "rationale": "Mengandalkan opini subyektif dari ahli."
      }
    ],
    "hint": "Disebut juga dengan metode estimasi Top-Down atau analogi.",
    "level": 3,
    "id": 46,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5 (Pendalaman)",
    "question": "Dalam teknik estimasi biaya, kelebihan utama dari metode 'Bottom-Up Estimating' dibandingkan metode lainnya adalah...",
    "options": [
      {
        "text": "Proses estimasi sangat cepat selesai",
        "isCorrect": false,
        "rationale": "Sebaliknya, metode ini memakan waktu paling lama."
      },
      {
        "text": "Biaya pengerjaan sangat murah",
        "isCorrect": false,
        "rationale": "Metode estimasi tidak memengaruhi biaya fisik proyek."
      },
      {
        "text": "Membutuhkan data proyek masa lalu paling sedikit",
        "isCorrect": false,
        "rationale": "Membutuhkan detail WBS yang sangat rinci."
      },
      {
        "text": "Tingkat akurasi hasil estimasi yang sangat tinggi",
        "isCorrect": true,
        "rationale": "Bottom-Up sangat akurat karena menjumlahkan estimasi mikro dari setiap paket kerja terkecil di WBS."
      },
      {
        "text": "Tidak memerlukan persetujuan sponsor",
        "isCorrect": false,
        "rationale": "Semua baseline biaya memerlukan persetujuan sponsor."
      }
    ],
    "hint": "Karena dihitung secara mendetail dari bawah (bottom) ke atas (up).",
    "level": 3,
    "id": 47,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5 (Pendalaman)",
    "question": "Jika nilai Planned Value (PV) proyek adalah Rp 100 Juta dan Earned Value (EV) adalah Rp 80 Juta, berapakah nilai Schedule Variance (SV) proyek tersebut?",
    "options": [
      {
        "text": "Rp 20 Juta",
        "isCorrect": false,
        "rationale": "SV bernilai negatif karena EV < PV."
      },
      {
        "text": "-Rp 20 Juta",
        "isCorrect": true,
        "rationale": "Rumus SV = EV - PV. Maka Rp 80 Juta - Rp 100 Juta = -Rp 20 Juta. Nilai minus mengindikasikan status terlambat (behind schedule)."
      },
      {
        "text": "Rp 180 Juta",
        "isCorrect": false,
        "rationale": "Ini adalah penjumlahan, bukan pengurangan."
      },
      {
        "text": "Rp 1.25",
        "isCorrect": false,
        "rationale": "Ini adalah rasio pembagian, bukan variance."
      },
      {
        "text": "0.8",
        "isCorrect": false,
        "rationale": "Ini nilai SPI (EV / PV = 80/100 = 0.8)."
      }
    ],
    "hint": "Gunakan rumus selisih jadwal: SV = EV - PV.",
    "level": 3,
    "id": 48,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5 (Pendalaman)",
    "question": "Nilai Earned Value (EV) dalam konsep manajemen biaya proyek merepresentasikan...",
    "options": [
      {
        "text": "Anggaran yang direncanakan untuk dihabiskan",
        "isCorrect": false,
        "rationale": "Itu adalah Planned Value (PV)."
      },
      {
        "text": "Biaya nyata yang telah dikeluarkan secara tunai",
        "isCorrect": false,
        "rationale": "Itu adalah Actual Cost (AC)."
      },
      {
        "text": "Nilai atau harga dari pekerjaan yang telah selesai dikerjakan secara nyata",
        "isCorrect": true,
        "rationale": "Earned Value (EV) mengukur nilai moneter pekerjaan yang telah benar-benar dituntaskan sampai tanggal pelaporan."
      },
      {
        "text": "Proyeksi kerugian total proyek di akhir tahun",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "Dana cadangan darurat (reserves) proyek",
        "isCorrect": false,
        "rationale": "Itu adalah Contingency Reserve."
      }
    ],
    "hint": "Nilai hasil pekerjaan (earned) yang dicapai.",
    "level": 3,
    "id": 49,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 5 (Pendalaman)",
    "question": "Metode evaluasi investasi proyek yang menghitung waktu yang dibutuhkan agar nilai arus kas masuk menyamai nilai investasi awal disebut...",
    "options": [
      {
        "text": "Net Present Value",
        "isCorrect": false,
        "rationale": "NPV mengukur nilai bersih kas saat ini."
      },
      {
        "text": "Return On Investment",
        "isCorrect": false,
        "rationale": "ROI mengukur rasio pengembalian modal."
      },
      {
        "text": "Payback Period",
        "isCorrect": true,
        "rationale": "Payback Period mengukur durasi waktu pengembalian modal investasi awal."
      },
      {
        "text": "Internal Rate of Return",
        "isCorrect": false,
        "rationale": "IRR mengukur tingkat pengembalian internal."
      },
      {
        "text": "Earned Value Management",
        "isCorrect": false,
        "rationale": "EVM digunakan untuk memantau kemajuan biaya proyek berjalan."
      }
    ],
    "hint": "Fokus pada lamanya 'periode' (waktu) pengembalian modal.",
    "level": 3,
    "id": 50,
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
    "id": 51,
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
    "id": 52,
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
    "id": 53,
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
        "rationale": "Matriks membagi wewenang antara PM and Manajer Fungsional."
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
    "id": 54,
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
    "id": 55,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6 (Pendalaman)",
    "question": "Manajer Proyek harus memiliki keterampilan interpersonal yang baik karena tugas utamanya sebagian besar berfokus pada...",
    "options": [
      {
        "text": "Menulis kode program database",
        "isCorrect": false,
        "rationale": "Itu adalah tugas programmer."
      },
      {
        "text": "Melakukan testing bug sistem",
        "isCorrect": false,
        "rationale": "Itu adalah tugas QA."
      },
      {
        "text": "Komunikasi, koordinasi, dan negosiasi dengan berbagai stakeholder",
        "isCorrect": true,
        "rationale": "Sebanyak 90% waktu seorang PM habis untuk melakukan komunikasi dan koordinasi dengan stakeholders."
      },
      {
        "text": "Membeli perangkat keras komputer",
        "isCorrect": false,
        "rationale": "Itu adalah tugas bagian pengadaan."
      },
      {
        "text": "Merancang arsitektur jaringan LAN",
        "isCorrect": false,
        "rationale": "Itu adalah tugas network engineer."
      }
    ],
    "hint": "Manajer proyek memimpin manusia, bukan menulis baris kode program secara teknis.",
    "level": 3,
    "id": 56,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6 (Pendalaman)",
    "question": "Struktur organisasi di mana staf dikelompokkan berdasarkan keahlian khusus mereka (seperti divisi IT, divisi Keuangan) dan melapor pada kepala divisi tersebut adalah...",
    "options": [
      {
        "text": "Organisasi Proyek Fungsional",
        "isCorrect": true,
        "rationale": "Merupakan ciri khas Organisasi Fungsional Tradisional di mana tim diatur per departemen fungsional."
      },
      {
        "text": "Organisasi Proyek Murni",
        "isCorrect": false,
        "rationale": "Tim dipisahkan penuh dari divisi asal dan melapor ke PM."
      },
      {
        "text": "Organisasi Proyek Matriks Kuat",
        "isCorrect": false,
        "rationale": "PM memiliki otoritas lebih tinggi dari manajer fungsional."
      },
      {
        "text": "Organisasi Proyek Matriks Lemah",
        "isCorrect": false,
        "rationale": "Manajer fungsional memegang kendali utama, tetapi tetap melibatkan koordinator proyek."
      },
      {
        "text": "Organisasi Proyek Mandiri",
        "isCorrect": false,
        "rationale": "Bukan istilah standar."
      }
    ],
    "hint": "Merupakan struktur korporat vertikal klasik.",
    "level": 3,
    "id": 57,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6 (Pendalaman)",
    "question": "Kelemahan utama dari Struktur Organisasi Proyek Murni bagi anggota tim proyek adalah...",
    "options": [
      {
        "text": "Manajer proyek tidak memiliki otoritas sama sekali",
        "isCorrect": false,
        "rationale": "Sebaliknya, PM memiliki otoritas penuh."
      },
      {
        "text": "Jalur komunikasi tim sangat lambat",
        "isCorrect": false,
        "rationale": "Jalur komunikasi tim justru sangat cepat karena mereka otonom."
      },
      {
        "text": "Rasa cemas akan nasib pekerjaan setelah proyek selesai dan dibubarkan (no home)",
        "isCorrect": true,
        "rationale": "Kelemahan OP Murni adalah ketidakpastian karir staf pasca proyek selesai karena mereka tidak memiliki divisi fungsional asal untuk pulang (no home)."
      },
      {
        "text": "Beban kerja harian yang terlalu santai",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "Sulit berkoordinasi dalam tim internal proyek",
        "isCorrect": false,
        "rationale": "Koordinasi internal justru sangat mudah."
      }
    ],
    "hint": "Berkaitan dengan status karir (kecemasan dibubarkan/no home).",
    "level": 3,
    "id": 58,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6 (Pendalaman)",
    "question": "Struktur organisasi yang mencoba menggabungkan kelebihan organisasi fungsional dan organisasi proyek murni disebut...",
    "options": [
      {
        "text": "Organisasi Proyek Matriks",
        "isCorrect": true,
        "rationale": "Organisasi Matriks adalah hibrida yang menumpangkan struktur berorientasi proyek ke atas struktur fungsional vertikal."
      },
      {
        "text": "Organisasi Proyek Tradisional",
        "isCorrect": false,
        "rationale": "Merupakan organisasi fungsional murni."
      },
      {
        "text": "Organisasi Proyek Vertikal",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "Organisasi Proyek Horizontal",
        "isCorrect": false,
        "rationale": "Salah."
      },
      {
        "text": "Organisasi Proyek Otonom",
        "isCorrect": false,
        "rationale": "Sama dengan OP Murni."
      }
    ],
    "hint": "Organisasi ini memiliki rantai komando ganda (menyamping dan tegak).",
    "level": 3,
    "id": 59,
    "course": "mpsi",
    "examType": "uts"
  },
  {
    "category": "MPSI UTS - Pertemuan 6 (Pendalaman)",
    "question": "Yang merupakan peran utama dari anggota tim proyek (Project Team Members) dalam siklus hidup proyek adalah...",
    "options": [
      {
        "text": "Mendanai seluruh anggaran belanja proyek",
        "isCorrect": false,
        "rationale": "Tugas Project Sponsor."
      },
      {
        "text": "Menyetujui baseline rencana secara sepihak",
        "isCorrect": false,
        "rationale": "Tugas Key Stakeholder / Sponsor."
      },
      {
        "text": "Melaksanakan tugas-tugas teknis proyek sesuai pembagian peran (coding, testing, dll)",
        "isCorrect": true,
        "rationale": "Anggota tim proyek berkontribusi keahlian spesifik mereka untuk merampungkan paket-paket kerja proyek."
      },
      {
        "text": "Menandatangani kontrak pengadaan legal eksternal",
        "isCorrect": false,
        "rationale": "Tugas divisi legal / pengadaaan korporat."
      },
      {
        "text": "Membubarkan proyek saat mengalami kendala",
        "isCorrect": false,
        "rationale": "Tugas sponsor."
      }
    ],
    "hint": "Mereka adalah ujung tombak pengerjaan deliverables fisik proyek.",
    "level": 3,
    "id": 60,
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
    "id": 61,
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
    "id": 62,
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
    "id": 63,
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
    "id": 64,
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
    "id": 65,
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
    "id": 66,
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
    "id": 67,
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
    "id": 68,
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
    "id": 69,
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
    "id": 70,
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
    "id": 71,
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
    "id": 72,
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
    "id": 73,
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
    "id": 74,
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
    "id": 75,
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

  // States for interactive features
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [expandedReview, setExpandedReview] = useState({});
  const [unlockedLevels, setUnlockedLevels] = useState(() => {
    const saved = localStorage.getItem(`unlockedLevels_${selectedCourse}_${selectedExamType}`);
    return saved ? JSON.parse(saved) : [1];
  });

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
    
    // Scale timer based on question count: 1 minute (60 seconds) per question
    const qCount = QUESTIONS_DATABASE.filter(
      q => q.course === selectedCourse && q.examType === selectedExamType && (level !== null ? q.level === level : true)
    ).length;
    setTimeLeft(qCount * 60);
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

  const toggleFlashcard = (idx) => {
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleReview = (idx) => {
    setExpandedReview(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Cumulative statistics calculations
  const passedCount = examHistory.filter(item => item.passed).length;
  const passingRate = examHistory.length > 0 ? Math.round((passedCount / examHistory.length) * 100) : 0;
  const avgScore = examHistory.length > 0 ? Math.round(examHistory.reduce((acc, item) => acc + item.percentage, 0) / examHistory.length) : 0;

  if (view === 'materi') {
    const activeMateri = selectedExamType === 'uts' ? MATERI_KILAT_UTS : MATERI_KILAT_UAS;
    return (
      <div className="app-container fade-in">
        {renderNavbar('materi')}

        <main className="quiz-main">
          <div className="materi-card glass-panel">
            <div className="materi-header">
              <h2>Flashcards Belajar Interaktif</h2>
              <p>Pilih dan klik kartu untuk membalik dan melihat ringkasan materi penting.</p>
            </div>
            
            <div className="flashcards-container">
              {activeMateri.map((materi, idx) => (
                <div key={idx} className="flashcard-wrapper" onClick={() => toggleFlashcard(idx)}>
                  <div className={`flashcard ${flippedCards[idx] ? 'flipped' : ''}`}>
                    <div className="flashcard-face flashcard-front">
                      <h3>{materi.title}</h3>
                      <p style={{ marginTop: '15px', color: '#3b82f6', fontWeight: '500' }}>Klik untuk Membalik ➔</p>
                    </div>
                    <div className="flashcard-face flashcard-back">
                      <h4>{materi.title}</h4>
                      <ul>
                        {materi.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
      <div className="app-container flex-center fade-in">
        <div className="result-card glass-panel scale-up" style={{ width: '100%', maxWidth: '680px' }}>
          
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

          <h1>{percentage >= 60 ? 'Selamat, Anda Lulus!' : 'Coba Lagi, Tetap Semangat!'}</h1>
          <p style={{ marginTop: '10px' }}>
            Anda menjawab benar <strong>{score}</strong> dari <strong>{activeQuestions.length}</strong> soal.
          </p>

          <div className="hero-actions" style={{justifyContent: 'center', marginTop: '30px', flexDirection: 'row'}}>
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
          
          <div className={"level-card glass-card " + (isLvl2Locked ? "locked" : "")}>
            <div className="level-head">
              <h4>Level 2 - Eksekusi</h4>
              <span className="level-count">{lvl2Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Inisiasi, Sasaran Proyek, Project Charter, dan Scope.' 
                : 'Siklus Hidup Proyek (PLC) dan Penerapan SDLC.'}
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
              <h4>Level 3 - Penutupan</h4>
              <span className="level-count">{lvl3Count} Soal</span>
            </div>
            <p>
              {selectedExamType === 'uts' 
                ? 'Estimasi Biaya (Analogous, Bottom-Up, Parametric), EVM, dan Struktur Organisasi.' 
                : 'Project Management Plan (PMP), Scope Baseline, dan 4W+1H.'}
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
      </main>
      <Footer />
    </div>
  );
}
