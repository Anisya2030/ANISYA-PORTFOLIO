# Anisya — Personal Portfolio & Academic Dossier
### Portofolio Personal & Berkas Akademik

> **Modern Editorial × Minimalist Corporate Portfolio**  
> *Undergraduate Informatics Student • Universitas Harapan Bangsa, Indonesia*  
> Local Development: `http://localhost/ANISYA-PORTFOLIO/`

---

## 1. Overview & Objectives / Gambaran Umum & Tujuan

Website portofolio profesional pribadi ini dibangun untuk menampilkan profil, rekam jejak akademik, keahlian teknis, proyek pilihan, pengalaman profesional, minat riset, publikasi ilmiah, sertifikasi terverifikasi, dan kontak resmi **Anisya**, mahasiswa S1 Informatika di **Universitas Harapan Bangsa (UHB)**, Jawa Tengah, Indonesia.

Website ini melayani dua tujuan utama:
1. **Professional Industry Portfolio:** Untuk melamar magang industri, posisi rekayasa perangkat lunak (software engineering), pengembangan aplikasi web/mobile, dan analitika data/AI.
2. **Academic Research Dossier:** Untuk aplikasi studi lanjut magister internasional (Master's Degree) dan beasiswa internasional (seperti LPDP, Erasmus Mundus, Fulbright, MEXT, Chevening).

---

## 2. Struktur 10 Section Utama & Background Selang-Seling

Sesuai ketentuan, website menerapkan **sistem warna background selang-seling** menggunakan palet pastel yang lembut, elegan, dan kontras tinggi tanpa elemen gelap yang dominan:

| No | Section ID | Nama Section | Warna Background | Hex Code | Deskripsi & Konten |
|:---:|:---|:---|:---|:---:|:---|
| **1** | `#home` | **Hero / Introduction** | Pure White | `#FFFFFF` | Identitas Anisya, headline mahasiswa Informatika, status IPK 3.70, dan aksi navigasi. |
| **2** | `#about` | **Tentang Saya** | Soft Light Blue | `#EAF3F8` | Narasi biografis profesional, etos pembelajaran, dedikasi akademik, dan arah karir. |
| **3** | `#education` | **Pendidikan** | Pure White | `#FFFFFF` | S1 Informatika UHB (IPK 3.70/4.00, 2023–Sekarang) & SMA Negeri 1 Bawang. Tanpa rincian SKS/transkrip. |
| **4** | `#skills` | **Keahlian Teknis** | Warm Ivory | `#F8F5EF` | 4 kategori terstruktur: Programming & Web, Database, Data Science & AI, Tools & Design. |
| **5** | `#projects` | **Proyek Pilihan** | Pure White | `#FFFFFF` | 6 proyek terverifikasi (NLP, SAW & ML, Laravel, Flutter, Library, Breast Cancer). |
| **6** | `#experience` | **Pengalaman Profesional** | Soft Light Blue | `#EAF3F8` | PT Geo Dipa Energi (Persero) — Unit Dieng (Project Management Unit Intern). |
| **7** | `#research` | **Minat Riset** | Pure White | `#FFFFFF` | Riset berjalan Face Pareidolia, EEG signal analysis, Hybrid CNN-LSTM, SHAP (OpenNeuro DS005642). |
| **8** | `#publications` | **Publikasi Ilmiah** | Light Beige | `#F3EEE5` | Artikel jurnal terakreditasi JITEKI Vol. 12 No. 1, 2026. Anisya sebagai Penulis Keempat (4th Author). |
| **9** | `#certifications` | **Sertifikasi & Pengembangan Diri** | Warm Ivory | `#F8F5EF` | 9 sertifikat terverifikasi (Language, Technical, Professional Development) dengan pratinjau watermark. |
| **10** | `#contact` | **Hubungi Saya** | Soft Light Blue | `#EAF3F8` | Email profesional (`nisnisya284@gmail.com`), GitHub, Domisili Banjarnegara, dan form kontak. |

---

## 3. Publikasi Ilmiah (Scientific Publication)

Bagian publikasi ilmiah menampilkan kontribusi nyata penelitian artikel jurnal:
- **Judul Artikel:** *"Reproducible Biomedical NER and Proxy Relation Extraction for Drug–Adverse Event Analysis in Breast Cancer"*
- **Jurnal:** *Jurnal Informatika dan Telekomunikasi Terapan (JITEKI)* — Vol. 12, Issue 1, 2026, halaman 1–17.
- **Posisi Penulis:** **Penulis Keempat (4th Author)**.
- **Urutan Penulis Resmi:**
  1. Deny Nugroho Triwibowo
  2. Hadi Jayusman
  3. Rachman Hidayat
  4. **Anisya**
  5. Annastasya Nabila Elsa Wulandari
- **Tautan Publikasi:** [https://journal.uad.ac.id/index.php/JITEKI/article/view/31594](https://journal.uad.ac.id/index.php/JITEKI/article/view/31594)

---

## 4. Keamanan Sertifikat (Certificate Security)

Untuk menjaga privasi dan keaslian dokumen resmi pemilik portofolio, diterapkan sistem perlindungan berlapis:
1. **Blokir Akses URL Publik:** Folder `assets/certificates/` dilindungi oleh file `.htaccess` (`Require all denied` / `Deny from all`). Percobaan akses langsung ke berkas PDF via peramban akan menghasilkan respon **HTTP 403 Forbidden**.
2. **Tidak Ada Tautan Unduh Langsung:** Dihapus seluruh tombol *Download Certificate*, *Download PDF*, maupun tautan langsung ke berkas asli pada halaman website publik.
3. **Pratinjau Gambar Ber-Watermark:** Setiap sertifikat dikonversi menjadi gambar pratinjau (`assets/images/certificates/`) dengan watermark diagonal semi-transparan `ANISYA | PORTFOLIO` serta penyamaran (blur) pada area sensitif seperti nomor registrasi dan QR code.
4. **Modal Detail Kredensial:** Modal interaktif hanya menampilkan informasi metadata (nama sertifikat, penerbit, tahun, skor, dan ringkasan kompetensi) bersama gambar pratinjau terproteksi.

---

## 5. Berkas CV Profesional (Bilingual ATS-Friendly CV)

Dua berkas CV profesional format PDF yang memenuhi standar ATS (Applicant Tracking System) tersedia di folder `assets/documents/`:
- **Versi Bahasa Indonesia:** `assets/documents/Cv_Anisya ID.pdf`
- **Versi Bahasa Inggris:** `assets/documents/Cv_Anisya EN.pdf`

**Ketentuan Data pada CV:**
- Maksimal 2 halaman, layout rapi dan elegan.
- Memuat kontak lengkap:
  - Email: `nisnisya284@gmail.com`
  - WhatsApp: `+62 857-1438-4350` *(Hanya dicantumkan pada CV, tidak pada website publik)*
  - GitHub: `https://github.com/Anisya2030`
  - Domisili: Banjarnegara, Jawa Tengah, Indonesia
- IPK Kumulatif: **3.70 / 4.00** di Universitas Harapan Bangsa.
- Memuat posisi Penulis Keempat pada artikel publikasi ilmiah JITEKI.
- Bebas dari referensi Rocket Chicken, paduan suara, maupun klaim berlebihan.
- Tombol **Unduh CV** pada navigasi website secara dinamis mengunduh file sesuai bahasa yang sedang aktif (ID $\rightarrow$ `Cv_Anisya ID.pdf`, EN $\rightarrow$ `Cv_Anisya EN.pdf`).

---

## 6. Fitur Dwibahasa (Bilingual ID / EN)

- **Bahasa Utama:** Bahasa Indonesia (`ID`).
- **Bahasa Alternatif:** English (`EN`).
- **Mekanisme:** Pemilihan bahasa melalui tombol `ID | EN` pada navigasi yang secara instan memperbarui atribut `lang`, visibilitas teks, placeholder formulir, opsi pilihan, dan konten modal tanpa memuat ulang halaman (zero reload). Pilihan pengguna disimpan di `localStorage`.

---

## 7. Struktur Direktori Project

```text
ANISYA-PORTFOLIO/
├── index.html                           # Single-page portfolio (10 sections)
├── README.md                            # Dokumentasi lengkap proyek
└── assets/
    ├── certificates/                    # Berkas PDF asli (Akses publik diblokir via .htaccess)
    │   ├── .htaccess                    # Rule proteksi HTTP 403 Forbidden
    │   ├── language/
    │   ├── technical/
    │   └── professional-development/
    ├── css/
    │   └── style.css                    # Styling Modern Editorial & alternating backgrounds
    ├── documents/                       # Berkas CV resmi (assets/documents/)
    │   ├── Cv_Anisya ID.pdf             # CV Bahasa Indonesia (2 halaman, ATS)
    │   └── Cv_Anisya EN.pdf             # CV English (2 halaman, ATS)
    ├── images/
    │   ├── profile-placeholder.svg
    │   ├── project-01.svg s.d. 06.svg
    │   ├── research-eeg.svg
    │   └── certificates/                # Pratinjau gambar ber-watermark ANISYA | PORTFOLIO
    └── js/
        └── script.js                    # Logika dwibahasa, modal data, & filter
```

---

## 8. Verifikasi & Pengujian Lokal

Website telah diverifikasi melalui server Apache lokal Laragon:
- **URL Lokal:** `http://localhost/ANISYA-PORTFOLIO/`
- **Uji Akses Sertifikat PDF:** Respon server **403 Forbidden** (Berhasil terlindungi).
- **Uji Unduh CV:** Respon server **200 OK** untuk kedua berkas CV.
- **Uji Konsol JavaScript:** **0 Errors** pada Google Chrome Headless DevTools Protocol.
- **Uji Urutan Section:** 10 section berurutan dengan warna latar selang-seling tepat.
