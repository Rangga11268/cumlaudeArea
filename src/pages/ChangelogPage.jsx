import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ChangelogPage = ({ setView, theme, toggleTheme }) => (
  <div className="app-container fade-in">
    <Navbar activeTab="changelog" setView={setView} theme={theme} toggleTheme={toggleTheme} />

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
                <span className="changelog-version">v1.5.0</span>
                <span className="changelog-date">21 Mei 2026</span>
                <span className="changelog-tag current">Terbaru</span>
              </div>
              <ul className="changelog-details">
                <li><strong>Modularisasi Kode Sumber:</strong> Memisahkan komponen dan halaman dari file monolitik CumlaudeArea.jsx menjadi modul-modul terpisah (Navbar, Footer, CalculatorView, CustomExamCreator, WeakTopicsAlert, MateriPage, QuizPage, ResultPage, DashboardPage, ChangelogPage) untuk kemudahan pengelolaan.</li>
                <li><strong>Perbaikan Dark Mode Menyeluruh:</strong> Mengganti seluruh warna hardcoded (#0f172a, #64748b, dll.) pada inline styles dengan CSS variable (var(--text-strong), var(--text-muted)) agar dark mode bekerja secara konsisten di semua halaman dan komponen.</li>
                <li><strong>Penghapusan Papan Peringkat (Leaderboard):</strong> Menghapus fitur papan peringkat simulasi mahasiswa karena data yang digunakan bersifat fiktif dan tidak menambah nilai edukasi.</li>
              </ul>
            </div>

            <div className="changelog-item">
              <div className="changelog-meta">
                <span className="changelog-version">v1.4.1</span>
                <span className="changelog-date">21 Mei 2026</span>
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

export default ChangelogPage;
