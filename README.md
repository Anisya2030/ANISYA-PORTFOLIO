# Anisya — Personal Portfolio & Academic Dossier
### Portofolio Personal & Berkas Akademik

> **Live Bilingual Portfolio for Internship, Job Applications, and International Postgraduate Scholarships**  
> *Undergraduate Informatics Student • Universitas Harapan Bangsa, Indonesia*

---

## 1. Overview & Vision / Gambaran Umum

This repository hosts the personal brand and academic portfolio website of **Anisya**, an undergraduate Informatics student at **Universitas Harapan Bangsa (UHB)**, Central Java, Indonesia.

Website ini menyajikan dua tujuan strategis:
1. **Professional Industry Portfolio:** Dirancang untuk aplikasi magang industri, posisi rekayasa perangkat lunak (software engineering), pengembangan aplikasi web/mobile, dan penerapan machine learning.
2. **Academic Research Dossier:** Disusun untuk memenuhi standar evaluasi komite seleksi magister internasional serta beasiswa bergengsi global (seperti LPDP, Erasmus Mundus, Fulbright, MEXT, Chevening, dan GKS).

Website kini dilengkapi dengan **sistem dwibahasa (Bilingual: Bahasa Indonesia & English)** dengan Bahasa Indonesia sebagai bahasa utama.

---

## 2. Updated Color System & Visual Hierarchy

The website follows a high-contrast **Modern Editorial × Minimalist Corporate** light aesthetic:

### Color Palette:
- **Pure White:** `#FFFFFF` — Latar bersih untuk kejelasan hierarki konten.
- **Ice Blue:** `#E8EFF5` — Nuansa sejuk korporat untuk memisahkan bagian bio dan pengalaman.
- **Dusty Blue:** `#A7C0D5` — Aksen sekunder untuk badge kategori dan border elemen.
- **Steel Blue:** `#527A9C` — Warna aksen primer berkarakter untuk tombol, status, dan penekanan visual.
- **Warm Sand:** `#D9BFA7` — Aksen hangat editorial untuk garis aksen dan penanda nomor proyek.
- **Charcoal:** `#303B48` — Teks utama berbobot tinggi untuk keterbacaan optimal.
- **Warm White:** `#F8F7F3` — Latar hangat untuk keahlian teknis dan riset.

### Strategic Section Background Mapping:
| Section | Background Color | Visual Treatment |
|---|---|---|
| **A. Hero** | **Pure White** (`#FFFFFF`) | High-contrast headline, dual career pillars, portrait frame. |
| **B. About Me** | **Ice Blue** (`#E8EFF5`) | Editorial quote box with Steel Blue border, academic snapshot. |
| **C. Education** | **Pure White** (`#FFFFFF`) | Timeline layout highlighting UHB & SMAN 1 Bawang. |
| **D. Technical Skills** | **Warm White** (`#F8F7F3`) | 8 structured cards with Warm Sand icons and skill chips. |
| **E. Selected Projects** | **Pure White** (`#FFFFFF`) | Distinct cards with Ice Blue image banners & Steel Blue badges. |
| **F. Experience** | **Ice Blue** (`#E8EFF5`) | Showcase of PT Geo Dipa Energi (Persero) – Unit Dieng. |
| **G. Research** | **Warm White** (`#F8F7F3`) | Hybrid CNN-LSTM EEG & XAI thesis showcase + domain pills. |
| **H. Achievements** | **Pure White** (`#FFFFFF`) | Extracurricular, leadership, CS club, and arts cards. |
| **I. Contact** | **Steel Blue** (`#527A9C`) | High-contrast section with pure white form card and white typography. |
| **Footer** | **Charcoal** (`#303B48`) | Grounded anchor with copyright and navigation links. |

---

## 3. Bilingual Language Switching (ID / EN)

- **Primary Language:** Bahasa Indonesia (`ID`).
- **Secondary Language:** English (`EN`).
- **Interactive Switcher:** Terletak di navigation bar (tersedia di desktop maupun mobile).
- **Cakupan Penerjemahan Komprehensif:**
  - Label navigasi & footer.
  - Teks pembuka dan pilar karir Hero section.
  - Narasi biografi Profil Saya (About Me).
  - Riwayat Pendidikan dan mata kuliah relevan.
  - Kategori keahlian teknis.
  - Seluruh 6 proyek pilihan (judul, kategori, deskripsi, hingga modal detail eksekutif).
  - Pengalaman magang industri PT Geo Dipa Energi.
  - Minat riset dan fokus metodologi tugas akhir EEG.
  - Aktivitas dan prestasi organisasi.
  - Bagian kontak, placeholder formulir, tombol, dan kutipan penutup.
- Preferensi bahasa tersimpan secara persisten menggunakan `localStorage`.

---

## 4. Professional Experience

- **PT Geo Dipa Energi (Persero) – Unit Dieng** ditampilkan secara terfokus sebagai pengalaman magang profesional dalam format kartu showcase yang mencakup:
  - Status magang sedang berlangsung (*Ongoing Internship*).
  - Periode: 05 Oktober – 05 Desember 2026.
  - Departemen: *Project Management Unit*.
  - 3 pilar eksposur utama: Dukungan TI Korporat Energi Terbarukan, Koordinasi PMU, dan Komunikasi Profesional.

---

## 5. Directory Structure

```text
ANISYA-PORTFOLIO/
├── index.html                     # Bilingual single-page application
├── README.md                      # Documentation & deployment guide
└── assets/
    ├── css/
    │   └── style.css              # Updated color palette, bilingual rules & hierarchy
    ├── js/
    │   └── script.js              # Bilingual data, language switcher, filters & modals
    ├── images/
    │   ├── profile-placeholder.svg # Editorial monogram & architectural silhouette
    │   ├── project-01.svg          # Indonesian Emotion Classification diagram
    │   ├── project-02.svg          # Skincare Recommendation System (SAW + ML)
    │   ├── project-03.svg          # Laundry Management System (REST API)
    │   ├── project-04.svg          # SITUGAS Mobile reminder Flutter UI mockup
    │   ├── project-05.svg          # Library Management System (Laravel)
    │   ├── project-06.svg          # Breast Cancer Classification (WDBC/SMOTE)
    │   └── research-eeg.svg        # Hybrid CNN-LSTM EEG & Pareidolia XAI Pipeline
    └── documents/
        └── CV_Anisya.pdf          # Curriculum Vitae document for direct download
```

---

## 6. How to Run Locally

### Option A: Using Laragon
Buka browser dan akses:
```text
http://localhost/ANISYA-PORTFOLIO/   or   http://anisya-portfolio.test/
```

### Option B: Using Built-in Python Server
```bash
python -m http.server 8000
```
Buka `http://localhost:8000` di peramban web.

---

## 7. How to Deploy to GitHub Pages

1. Commit perubahan terbaru:
   ```bash
   git add .
   git commit -m "feat: implement bilingual support, revised color hierarchy, and updated experience section"
   ```
2. Hubungkan ke repositori GitHub:
   ```bash
   git remote add origin https://github.com/<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Di GitHub: **Settings** > **Pages** > **Source**: Deploy from a branch (`main` / root).
