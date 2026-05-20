# 🎓 Cumlaude Area: Platform Simulasi Ujian & Materi Kilat

Cumlaude Area adalah aplikasi web interaktif berbasis **React & Vite** yang dirancang khusus untuk membantu mahasiswa, khususnya dari **Bina Sarana Informatika (BSI)**, mempersiapkan diri menghadapi ujian akademik. 

Saat ini, aplikasi menyediakan simulasi lengkap untuk **UTS Manajemen Proyek Sistem Informasi (MPSI)** dengan 60 soal terstandarisasi, serta dirancang dengan arsitektur yang mudah dikembangkan (*scalable*) untuk mendukung mata kuliah lain serta ujian akhir semester (UAS) di masa mendatang.

---

## ✨ Fitur Utama

### 📖 1. Simulasi UTS MPSI Lengkap (60 Soal)
- **3 Tingkat Level Progressif**:
  - **Level 1 (Inisiasi - 20 Soal)**: Konsep dasar MPSI, Project Charter, Stakeholder, dan Ruang Lingkup.
  - **Level 2 (Eksekusi - 20 Soal)**: Manajemen waktu, penjadwalan (CPM/PERT), dan manajemen kualitas.
  - **Level 3 (Penutupan - 20 Soal)**: Manajemen biaya (Earned Value Analysis), risiko, dan penutupan proyek.
- **Sistem Kunci Level**: Level berikutnya terkunci secara otomatis hingga level sebelumnya diselesaikan, dengan opsi *toggle* **"Buka Semua Level"** untuk keleluasaan belajar.
- **Penjelasan & Pembahasan Langsung**: Setiap jawaban yang dipilih langsung menampilkan pembahasan (*rationale*) yang edukatif.
- **Skor & Status Kelulusan**: Menampilkan skor akhir berskala 100 dengan indikator kelulusan dinamis (Kriteria Kelulusan: Skor >= 60).

### ⚡ 2. Materi Kilat & Flashcards Belajar
- Ringkasan materi esensial mengenai PMBOK Edisi 5, rumus perhitungan Earned Value, dekomposisi WBS, dan konsep CPM/PERT.
- Navigasi dua arah (*seamless navigation*) langsung dari navbar utama ke halaman ringkasan materi.

### 🚀 3. Arsitektur Siap Masa Depan (Scalable UI)
- **Tab UTS & UAS**: Antarmuka sudah dilengkapi pemilih tipe ujian UTS dan UAS (UAS berlabel *Coming Soon*).
- **Grid Pemilih Mata Kuliah**: Dashboard memiliki selektor mata kuliah yang siap menampung berbagai mata kuliah baru lainnya di masa depan (*Coming Soon placeholders*).

### 🎨 4. Desain Premium & UI/UX Bersih
- **Desain Khusus**: Menggunakan skema warna korporat/akademik yang premium berupa abu-abu kebiruan lembut (`#f8fafc` / `#eff6ff`) dan warna biru royal (`#2563eb`).
- **Logo & Favicon Kustom**: Dilengkapi logo horizontal "Cumlaude Area" di navbar dan favicon toga tersendiri.
- **Bebas Emoji OS**: Seluruh ikon emoji bawaan OS telah digantikan dengan **ikon vektor SVG kustom** yang seragam dan profesional.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React.js](https://react.dev/) (menggunakan build tool [Vite](https://vitejs.dev/))
- **Styling**: Vanilla CSS (kustomisasi penuh tanpa framework CSS eksternal seperti Tailwind untuk kontrol visual maksimal)
- **Icons**: Vektor SVG Kustom inline (bebas dependensi ikon eksternal)
- **Version Control**: Git & GitHub

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda. Kemudian ikuti langkah-langkah berikut:

1. **Clone Repository**:
   ```bash
   git clone https://github.com/Rangga11268/cumlaudeArea.git
   cd cumlaudeArea
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara lokal di alamat `http://localhost:5173`.

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

---

## 📂 Struktur Direktori Proyek

```text
cumlaudeArea/
├── public/
│   ├── cumlaude_logo.png   # Logo utama aplikasi
│   ├── favicon.png         # Favicon tab browser
│   └── ...
├── src/
│   ├── App.jsx             # Entry component
│   ├── CumlaudeArea.jsx    # Logika utama kuis, database soal, & materi
│   ├── index.css           # Sistem desain & styling CSS premium
│   ├── main.jsx            # Entry point React
│   └── ...
├── index.html              # Template HTML utama
├── package.json            # Daftar dependensi & script proyek
└── README.md               # Dokumentasi proyek (file ini)
```

---

## ✍️ Kontributor & Informasi Pembuat

Aplikasi ini didevelop secara penuh oleh:
- **Nama**: Darell Rangga
- **Website Portofolio**: [darellrangga.me](https://www.darellrangga.me/)
- **Email Kontak**: [darrelrangga@gmail.com](mailto:darrelrangga@gmail.com)

*Empowering IT Leaders to Achieve More.*
