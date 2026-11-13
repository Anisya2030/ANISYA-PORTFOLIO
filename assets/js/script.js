/**
 * ANISYA — PERSONAL PORTFOLIO & ACADEMIC DOSSIER
 * Bilingual & Interactive Scripting (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Bilingual Projects Data Source (6 Selected Projects)
  // --------------------------------------------------------------------------
    const projectsData = {
    'proj-01': {
      number: '01',
      platform: 'github',
      url: 'https://github.com/Anisya2030/Klasifikasi-emotion-indobert',
      image: 'assets/images/project-01.svg',
      technologies: ['Python', 'IndoBERT', 'PyTorch', 'Transformers', 'Flask', 'NLP'],
      id: {
        title: 'Emotion Classification using IndoBERT',
        category: 'Machine Learning / NLP',
        subtitle: 'Klasifikasi Emosi Teks Berbahasa Indonesia Menggunakan Fine-Tuned IndoBERT',
        description: 'Proyek klasifikasi emosi multi-kelas berbasis Natural Language Processing memanfaatkan pretrained model IndoBERT untuk mendeteksi emosi dari teks berbahasa Indonesia.',
        overview: 'Proyek ini mengimplementasikan fine-tuning arsitektur IndoBERT (Indonesian BERT) untuk klasifikasi emosi multi-kelas pada teks berbahasa Indonesia. Mengintegrasikan pipeline tokenisasi BERT, penanganan teks informal, dan antarmuka web Flask untuk inferensi langsung.',
        methods: [
          'Fine-tuning pretrained model IndoBERT Base pada dataset teks berbahasa Indonesia.',
          'Tokenisasi kontekstual dan normalisasi teks menggunakan Hugging Face Transformers.',
          'Optimasi training loop dengan AdamW optimizer dan learning rate scheduler.',
          'Deployment antarmuka web interaktif menggunakan Flask untuk pengujian prediksi emosi.'
        ],
        result: 'Mencapai akurasi dan pemahaman semantik kontekstual yang tinggi dalam mengenali nuansa emosi kompleks pada teks bahasa Indonesia.',
        status: 'Proyek Akademik — Universitas Harapan Bangsa'
      },
      en: {
        title: 'Emotion Classification using IndoBERT',
        category: 'Machine Learning / NLP',
        subtitle: 'Indonesian Emotion Text Classification using Fine-Tuned IndoBERT',
        description: 'A multi-class emotion classification project utilizing IndoBERT transformer architecture to detect nuanced affective states from Indonesian text corpora.',
        overview: 'Implements fine-tuning of the IndoBERT (Indonesian BERT) transformer model for multi-class emotion classification on Indonesian text. Incorporates contextual tokenization, informal text handling, and a Flask web interface for live inference.',
        methods: [
          'Fine-tuning pretrained IndoBERT Base on curated Indonesian emotional text datasets.',
          'Contextual tokenization and textual normalization using Hugging Face Transformers.',
          'Training loop optimization with AdamW optimizer and linear learning rate scheduling.',
          'Interactive web interface deployment with Flask for real-time model inference.'
        ],
        result: 'Achieved high accuracy and superior contextual semantic understanding across complex Indonesian emotional nuances.',
        status: 'Academic Project — Universitas Harapan Bangsa'
      }
    },
    'proj-02': {
      number: '02',
      platform: 'github',
      url: 'https://github.com/Anisya2030/SKINCARE-RECOMMENDATION',
      image: 'assets/images/project-02.svg',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'SAW (Decision Support)', 'Flask', 'NumPy'],
      id: {
        title: 'Skincare Recommendation System (SAW + ML)',
        category: 'ML / Sistem Pendukung Keputusan',
        subtitle: 'Sistem Rekomendasi Produk Skincare Berbasis Metode SAW dan Machine Learning',
        description: 'Sistem rekomendasi skincare yang menggabungkan Sistem Pendukung Keputusan Multi-Kriteria (SAW) dan Machine Learning untuk kecocokan tipe kulit.',
        overview: 'Dikembangkan untuk merekomendasikan produk perawatan kulit secara objektif berdasarkan jenis kulit, keluhan spesifik, dan analisis kandungan bahan aktif. Menggabungkan klasifikasi ML dengan pembobotan Simple Additive Weighting (SAW).',
        methods: [
          'Pra-pemrosesan dataset produk perawatan kulit, ekstraksi fitur kandungan, dan pembersihan data.',
          'Implementasi algoritma Simple Additive Weighting (SAW) untuk normalisasi matriks keputusan.',
          'Integrasi klasifikasi Machine Learning untuk pemetaan kecocokan jenis kulit pengguna.',
          'Pengembangan antarmuka web dengan Flask untuk memudahkan pengguna memilih kriteria.'
        ],
        result: 'Menghasilkan rekomendasi produk dengan skor preferensi terurut dan kecocokan formulasi bahan aktif yang tinggi.',
        status: 'Proyek Akademik Terapan'
      },
      en: {
        title: 'Skincare Recommendation System (SAW + ML)',
        category: 'ML / Decision Support System',
        subtitle: 'Skincare Recommendation System Based on SAW Multi-Criteria & Machine Learning',
        description: 'A skincare recommendation system combining multi-criteria Decision Support System (SAW) with Machine Learning to identify optimal product compatibility.',
        overview: 'Engineered to objectively recommend skincare products based on individual skin profiles, specific concerns, and ingredient efficacy. Bridges ML skin typing with Simple Additive Weighting (SAW) ranking.',
        methods: [
          'Skincare product dataset preprocessing, active ingredient feature parsing, and curation.',
          'Implementation of Simple Additive Weighting (SAW) algorithm for normalized decision matrices.',
          'Integration of Machine Learning classification for accurate skin-type compatibility mapping.',
          'Interactive Flask web interface facilitating user preference configuration and result visualization.'
        ],
        result: 'Generated prioritized product recommendations with high ingredient concordance and user suitability.',
        status: 'Applied Academic Project'
      }
    },
    'proj-03': {
      number: '03',
      platform: 'colab',
      url: 'https://colab.research.google.com/drive/1IorItsqvGfk2LoEbla_WM6Vg66e79SUH?usp=sharing',
      image: 'assets/images/project-03.svg',
      technologies: ['Python', 'Google Colab', 'Scikit-learn', 'SMOTE', 'Fuzzy KNN', 'Pandas'],
      id: {
        title: 'Breast Cancer Classification',
        category: 'Machine Learning / Bioinformatika',
        subtitle: 'Pemodelan Klasifikasi Kanker Payudara dengan Penanganan Imbalanced Data',
        description: 'Notebook eksperimen Machine Learning untuk klasifikasi diagnostik kanker payudara menggunakan teknik penyeimbangan SMOTE dan Fuzzy KNN.',
        overview: 'Eksperimen riset komputasi medis yang mengatasi ketidakseimbangan kelas pada dataset diagnostik biopsi. Mengombinasikan Synthetic Minority Over-sampling Technique (SMOTE) dan Fuzzy K-Nearest Neighbors (Fuzzy KNN) pada Google Colab.',
        methods: [
          'Eksplorasi data, standarisasi fitur numerik, dan analisis korelasi fitur diagnostik.',
          'Penanganan ketimpangan distribusi kelas menggunakan algoritma SMOTE.',
          'Pemodelan klasifikasi menggunakan Fuzzy K-Nearest Neighbors (Fuzzy KNN).',
          'Evaluasi menyeluruh mencakup Confusion Matrix, Precision, Recall, dan F1-Score.'
        ],
        result: 'Meningkatkan sensitivitas deteksi kelas minoritas (malignant) dengan performa generalisasi diagnostik yang optimal.',
        status: 'Riset Komputasi Medis — Google Colab'
      },
      en: {
        title: 'Breast Cancer Classification',
        category: 'Machine Learning / Bioinformatics',
        subtitle: 'Breast Cancer Diagnostic Modeling with SMOTE Imbalanced Data Balancing & Fuzzy KNN',
        description: 'Machine Learning research notebook for breast cancer diagnostic classification utilizing SMOTE minority oversampling and Fuzzy KNN.',
        overview: 'Medical computing research addressing diagnostic dataset class imbalance where non-representative sample distributions introduce clinical bias. Employs synthetic oversampling paired with fuzzy-set membership algorithms in Google Colab.',
        methods: [
          'Data preprocessing, z-score feature normalization, and multicollinearity screening.',
          'Class imbalance mitigation utilizing Synthetic Minority Over-sampling Technique (SMOTE).',
          'Classification leveraging Fuzzy K-Nearest Neighbors (Fuzzy KNN) computing fuzzy boundary memberships.',
          'Rigorous diagnostic evaluation via Confusion Matrix, Precision, Recall, and F1-Score metrics.'
        ],
        result: 'Demonstrated superior sensitivity and diagnostic classification stability on minority clinical samples.',
        status: 'Medical ML Research — Google Colab'
      }
    },
    'proj-04': {
      number: '04',
      platform: 'colab',
      url: 'https://colab.research.google.com/drive/1ngJJY6xwp2Zw8SUfLvfp3O6glDNXh5wS?usp=sharing',
      image: 'assets/images/project-04.svg',
      technologies: ['Python', 'Google Colab', 'TensorFlow/Keras', 'EfficientNetB0', 'CNN', 'Medical Imaging'],
      id: {
        title: 'COVID-19 Classification using EfficientNetB0',
        category: 'Deep Learning / Computer Vision',
        subtitle: 'Klasifikasi Citra Radiologi Paru-Paru Menggunakan Arsitektur Transfer Learning EfficientNetB0',
        description: 'Proyek Deep Learning untuk klasifikasi citra X-ray dada guna mendeteksi COVID-19, Normal, dan Pneumonia menggunakan transfer learning EfficientNetB0.',
        overview: 'Penelitian Computer Vision medis berbasis Deep Learning pada Google Colab untuk mengklasifikasikan citra sinar-X dada (chest X-ray). Mengadopsi arsitektur transfer learning EfficientNetB0 yang efisien dengan akurasi dan konvergensi optimal.',
        methods: [
          'Pra-pemrosesan citra medis, augmentasi data (rotasi, zoom, flip), dan normalisasi piksel.',
          'Transfer learning menggunakan base model EfficientNetB0 dengan pre-trained weights ImageNet.',
          'Fine-tuning dense classification layers dengan regularization Dropout dan Batch Normalization.',
          'Evaluasi kinerja multi-kelas dengan kurva Loss/Accuracy, ROC-AUC, dan Confusion Matrix.'
        ],
        result: 'Mencapai akurasi klasifikasi citra yang tinggi dalam membedakan pola infeksi radiologi COVID-19 dari kondisi paru lainnya.',
        status: 'Riset Deep Learning Medis — Google Colab'
      },
      en: {
        title: 'COVID-19 Classification using EfficientNetB0',
        category: 'Deep Learning / Computer Vision',
        subtitle: 'Chest Radiograph Image Classification via EfficientNetB0 Transfer Learning Architecture',
        description: 'Deep Learning research project classifying chest X-ray radiographs into COVID-19, Normal, and Viral Pneumonia utilizing EfficientNetB0 transfer learning.',
        overview: 'Medical Computer Vision study implemented in Google Colab classifying chest X-ray radiographs into diagnostic categories. Leverages EfficientNetB0 compound scaling architecture for optimal parameter efficiency and fast convergence.',
        methods: [
          'Medical image augmentation (rotation, zoom, affine shifts) and pixel normalization.',
          'Transfer learning architecture leveraging ImageNet pre-trained EfficientNetB0 convolutional backbone.',
          'Fine-tuning dense classification heads with Dropout regularization and Batch Normalization.',
          'Comprehensive multi-class evaluation utilizing Loss/Accuracy learning curves, ROC-AUC, and Confusion Matrix.'
        ],
        result: 'Achieved high classification accuracy in discriminating radiologic COVID-19 pulmonary infiltrates from normal lung parenchyma.',
        status: 'Medical Deep Learning Research — Google Colab'
      }
    },
    'proj-05': {
      number: '05',
      platform: 'github',
      url: 'https://github.com/Anisya2030/Flutter-Kasir',
      image: 'assets/images/project-05.svg',
      technologies: ['Flutter', 'Dart', 'Supabase', 'REST API', 'Cross-Platform'],
      id: {
        title: 'Flutter-Kasir',
        category: 'Aplikasi Mobile / POS',
        subtitle: 'Aplikasi Kasir Point of Sale (POS) Mobile Berbasis Flutter & Supabase',
        description: 'Aplikasi POS mobile modern untuk pencatatan transaksi ritel, pengelolaan stok produk, keranjang belanja, dan sinkronisasi cloud dengan Supabase.',
        overview: 'Aplikasi kasir (Point of Sale) cross-platform yang dibangun dengan Flutter untuk mendukung efisiensi operasional UMKM ritel. Mendukung katalog produk, keranjang belanja real-time, pencatatan transaksi, dan penyimpanan data cloud terintegrasi Supabase.',
        methods: [
          'Perancangan arsitektur antarmuka mobile yang intuitif dan responsif menggunakan Flutter framework.',
          'Pengelolaan state aplikasi untuk manajemen keranjang transaksi dan kalkulasi total otomatis.',
          'Integrasi backend database dan autentikasi cloud menggunakan Supabase.',
          'Pengujian fitur CRUD inventori produk dan riwayat transaksi kasir.'
        ],
        result: 'Menghadirkan aplikasi kasir mobile yang ringan, cepat, dan siap digunakan dengan sinkronisasi data cloud yang andal.',
        status: 'Proyek Aplikasi Mobile'
      },
      en: {
        title: 'Flutter-Kasir',
        category: 'Mobile Application / POS',
        subtitle: 'Mobile Point of Sale (POS) Application Built with Flutter & Supabase',
        description: 'A cross-platform mobile POS application streamlining retail transactions, stock management, live shopping cart calculation, and cloud sync via Supabase.',
        overview: 'Cross-platform Point of Sale mobile client engineered with Flutter to enhance operational agility for retail merchants. Features dynamic product catalogs, real-time cart state management, checkout logs, and Supabase cloud persistence.',
        methods: [
          'Intuitive and responsive mobile UI architecture built with Flutter reactive widgets.',
          'Application state management governing transactional cart calculation and receipt generation.',
          'Cloud database integration and backend authentication powered by Supabase.',
          'End-to-end CRUD verification across product catalogs and historical transaction archives.'
        ],
        result: 'Delivered an agile, production-ready mobile cashier system with robust cloud synchronization.',
        status: 'Mobile Application Project'
      }
    },
    'proj-06': {
      number: '06',
      platform: 'github',
      url: 'https://github.com/Anisya2030/sistem-manajemen-perpustakaan',
      image: 'assets/images/project-06.svg',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Blade', 'MVC Architecture'],
      id: {
        title: 'Library Management System',
        category: 'Pengembangan Web',
        subtitle: 'Sistem Informasi Manajemen Perpustakaan Berbasis Web dengan Laravel',
        description: 'Platform manajemen perpustakaan digital untuk otomasi katalog buku, sirkulasi peminjaman, perhitungan denda keterlambatan, dan manajemen anggota.',
        overview: 'Sistem informasi tata kelola perpustakaan berbasis web yang mengotomasi operasional harian perpustakaan: inventarisasi koleksi buku, registrasi keanggotaan, pencatatan peminjaman/pengembalian, serta kalkulasi denda otomatis.',
        methods: [
          'Pemodelan basis data relasional MySQL ternormalisasi untuk entitas buku, anggota, dan transaksi sirkulasi.',
          'Implementasi pola arsitektur Model-View-Controller (MVC) menggunakan framework Laravel.',
          'Penerapan hak akses pengguna berbasis peran (Role-Based Access Control) antara Admin dan Siswa/Anggota.',
          'Pengembangan fitur pencarian terindeks dan filter kategori buku untuk kemudahan temu balik informasi.'
        ],
        result: 'Mempercepat proses sirkulasi peminjaman, mencegah kehilangan inventaris, dan mempermudah pelaporan berkala.',
        status: 'Proyek Rekayasa Perangkat Lunak'
      },
      en: {
        title: 'Library Management System',
        category: 'Web Development',
        subtitle: 'Digital Library Cataloging & Book Circulation Platform Built with Laravel',
        description: 'A web-based library management platform incorporating book cataloging, circulation tracking, overdue fine calculation, and role-based access.',
        overview: 'An administrative information system managing complete digital library workflows: collection cataloging, member registration, circulation tracking, and automated overdue penalty calculations.',
        methods: [
          'Normalized MySQL relational database modeling capturing book copies, categories, and borrow records.',
          'Application of the Laravel MVC architectural design pattern for clean codebase separation.',
          'Role-based access control (RBAC) differentiating administrative privileges from student reader accounts.',
          'Development of indexed query filters for real-time book title and author searches.'
        ],
        result: 'Decreased circulation logging turnaround time and provided transparent audit trails for book inventories.',
        status: 'Software Engineering Project'
      }
    },
    'proj-07': {
      number: '07',
      platform: 'github',
      url: 'https://github.com/Anisya2030/web-api-laundry',
      image: 'assets/images/project-07.svg',
      technologies: ['Laravel', 'PHP', 'RESTful API', 'MySQL', 'Postman'],
      id: {
        title: 'Laundry Management System',
        category: 'Web Development / API',
        subtitle: 'Web Service & RESTful API Manajemen Operasional Layanan Laundry',
        description: 'Sistem backend API untuk otomasi alur transaksi laundry, pelacakan status bertahap, perhitungan berat dan tarif, serta integrasi Postman.',
        overview: 'Backend web service RESTful API berbasis Laravel untuk manajemen operasional bisnis laundry. Menyediakan endpoint lengkap untuk registrasi pesanan, perhitungan tarif berbasis berat/paket layanan, tracking status cucian bertahap, dan riwayat transaksi.',
        methods: [
          'Perancangan RESTful API endpoint dengan standar status code HTTP dan JSON response terstruktur.',
          'Validasi data request terpusat untuk integritas transaksi penerimaan cucian hingga pembayaran.',
          'Pelacakan siklus status pesanan bertahap (baru, proses cuci, setrika, siap ambil, selesai).',
          'Dokumentasi dan pengujian otomatisasi endpoint memanfaatkan Postman Collection terintegrasi.'
        ],
        result: 'Menghasilkan arsitektur backend yang tangguh, modular, dan siap diintegrasikan dengan aplikasi mobile maupun web client.',
        status: 'Proyek Backend & Web Service'
      },
      en: {
        title: 'Laundry Management System',
        category: 'Web Development / API',
        subtitle: 'Laundry Operations Management Web Service & RESTful API Architecture',
        description: 'A backend RESTful API automating laundry transactional intake, multistage wash-dry-iron tracking, weight-based billing, and Postman collections.',
        overview: 'Laravel-powered backend web service supporting automated laundry service lifecycles: intake logging, weight-based tiered billing, progressive stage tracking (received, washing, ironing, ready, collected), and receipt auditing.',
        methods: [
          'RESTful endpoint engineering adhering to standardized HTTP status conventions and structured JSON envelopes.',
          'Centralized request validation ensuring data integrity across customer orders and billing calculations.',
          'Stateful order progression tracking spanning weigh-in, washing, ironing, and pickup.',
          'Complete API schema documentation and automated endpoint testing via bundled Postman Collection.'
        ],
        result: 'Delivered an agile, robust backend service ready for seamless client frontend and mobile application consumption.',
        status: 'Backend & Web Service Project'
      }
    },
    'proj-08': {
      number: '08',
      platform: 'github',
      url: 'https://github.com/Anisya2030/campuscare-api',
      image: 'assets/images/project-08.svg',
      technologies: ['Laravel', 'PHP', 'RESTful API', 'MySQL', 'Eloquent ORM'],
      id: {
        title: 'CampusCare API',
        category: 'Web Development / API',
        subtitle: 'RESTful API Sistem Pengaduan, Verifikasi, & Penanganan Aspirasi Kampus',
        description: 'Backend API untuk sistem pengaduan fasilitas dan aspirasi mahasiswa, mencakup alur verifikasi laporan, penugasan unit, dukungan komunitas, dan progres penyelesaian.',
        overview: 'RESTful API berbasis Laravel yang dirancang untuk mendukung tata kelola pelaporan masalah, aspirasi, dan fasilitas di lingkungan kampus. Menyediakan endpoint untuk pencatatan keluhan (complaint), verifikasi/penolakan oleh staf, pemberian dukungan (supporters), penugasan penanganan ke unit pelaksana, pelacakan progres tindak lanjut, hingga umpan balik (feedback) dan statistik dashboard.',
        methods: [
          'Arsitektur RESTful API dengan Laravel mengelola resource complaints, assignments, updates, feedbacks, dan dashboard stats.',
          'Alur verifikasi status laporan (pending, verified, rejected) untuk memastikan validitas pengaduan.',
          'Fitur dukungan mahasiswa (support/supporters) untuk mengukur urgensi fasilitas yang dilaporkan.',
          'Sistem tracking progres penanganan bertahap hingga penyelesaian akhir disertai pengumpulan feedback.'
        ],
        result: 'Menyediakan fondasi backend transparan, terstruktur, dan teruji untuk platform layanan pengaduan kampus modern.',
        status: 'Proyek Backend & RESTful API'
      },
      en: {
        title: 'CampusCare API',
        category: 'Web Development / API',
        subtitle: 'Campus Complaint & Aspiration Management RESTful API Architecture',
        description: 'Backend RESTful API for campus facility complaints and student aspirations, featuring report verification, unit task assignments, peer support, and resolution tracking.',
        overview: 'A specialized Laravel RESTful API architected for transparent campus issue reporting and civic resolution. Manages formal complaints, administrative verification or rejection workflows, community supporter tallies, departmental task assignments, progressive resolution updates, user feedback loops, and executive dashboard metrics.',
        methods: [
          'Engineered RESTful resource endpoints managing complaints, assignments, progress updates, feedbacks, and stats.',
          'Administrative review workflow implementing verified and rejected state transitions for complaint triage.',
          'Student endorsement system (supporters count) reflecting community urgency for facility remediations.',
          'Step-by-step progress update logging leading to final resolution completion and constituent feedback collection.'
        ],
        result: 'Established an accountable, verifiable, and decoupled backend foundation for digital campus governance.',
        status: 'Backend & RESTful API Project'
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. Language State Management & Dynamic CV Switching
  // --------------------------------------------------------------------------
  let currentlyViewedProjectId = null;

  // Default language is strictly Indonesian ('id') unless explicitly saved
  let currentLang = 'id';
  try {
    const saved = localStorage.getItem('anisya_portfolio_lang');
    if (saved === 'id' || saved === 'en') {
      currentLang = saved;
    } else {
      currentLang = 'id';
      localStorage.setItem('anisya_portfolio_lang', 'id');
    }
  } catch (e) {
    console.warn('localStorage not accessible, defaulting to id:', e);
    currentLang = 'id';
  }

  function getCurrentLang() {
    return currentLang;
  }

  function updateCvDownloadLinks(lang) {
    const isEn = lang === 'en';
    const cvFile = isEn ? 'assets/documents/Cv_Anisya EN.pdf' : 'assets/documents/Cv_Anisya ID.pdf';
    const cvName = isEn ? 'Cv_Anisya EN.pdf' : 'Cv_Anisya ID.pdf';
    document.querySelectorAll('.btn-download-cv').forEach(btn => {
      btn.setAttribute('href', cvFile);
      btn.setAttribute('download', cvName);
    });
  }

  function updateFormPlaceholders(lang) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const messageInput = document.getElementById('senderMessage');
    const purposeSelect = document.getElementById('senderPurpose');

    if (nameInput) {
      nameInput.placeholder = lang === 'id'
        ? 'misal: Harry Potter / Tim Rekrut'
        : 'e.g. Harry Potter / Recruitment Team';
    }

    if (emailInput) {
      emailInput.placeholder = lang === 'id'
        ? 'misal: kontak@instansi.id'
        : 'e.g. contact@institution.org';
    }

    if (messageInput) {
      messageInput.placeholder = lang === 'id'
        ? 'Tuliskan pesan Anda di sini...'
        : 'Write your message here...';
    }

    if (purposeSelect) {
      const options = purposeSelect.options;
      if (options.length >= 4) {
        if (lang === 'id') {
          options[0].text = 'Peluang Rekayasa Perangkat Lunak / Magang';
          options[0].value = 'Peluang Rekayasa Perangkat Lunak / Magang';
          options[1].text = 'Kolaborasi Riset Akademik / Sinyal EEG';
          options[1].value = 'Kolaborasi Riset Akademik / Sinyal EEG';
          options[2].text = 'Studi Pascasarjana / Informasi Beasiswa';
          options[2].value = 'Studi Pascasarjana / Informasi Beasiswa';
          options[3].text = 'Pertanyaan Profesional Umum';
          options[3].value = 'Pertanyaan Profesional Umum';
        } else {
          options[0].text = 'Software Engineering / Internship Opportunity';
          options[0].value = 'Software Engineering / Internship Opportunity';
          options[1].text = 'Academic / EEG Research Collaboration';
          options[1].value = 'Academic / EEG Research Collaboration';
          options[2].text = 'Postgraduate Studies / Scholarship Inquiry';
          options[2].value = 'Postgraduate Studies / Scholarship Inquiry';
          options[3].text = 'General Professional Inquiry';
          options[3].value = 'General Professional Inquiry';
        }
      }
    }
  }

  function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') lang = 'id';
    currentLang = lang;
    try {
      localStorage.setItem('anisya_portfolio_lang', lang);
    } catch (e) {
      // Ignore storage errors in private browsing
    }
    document.documentElement.lang = lang;

    // Update active pill button state on both desktop and mobile
    document.querySelectorAll('.lang-pill-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Update CV download links to match active language
    updateCvDownloadLinks(lang);

    // Update form elements placeholders
    updateFormPlaceholders(lang);

    // Refresh project modal if open
    if (currentlyViewedProjectId && projectDetailModalEl?.classList.contains('show')) {
      renderProjectModal(currentlyViewedProjectId, lang);
    }
  }

  // Bind language switcher clicks (both desktop and mobile)
  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Sticky Navbar & Back to Top Action
  // --------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-editorial');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 25) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (scrollY > 350) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Mobile menu close on nav link or mobile CV click
  const navLinks = document.querySelectorAll('.nav-link-editorial');
  const navbarCollapse = document.getElementById('navbarEditorialContent');
  const mobileNavDownloadCvBtn = document.getElementById('mobileNavDownloadCvBtn');

  function closeMobileNavbar() {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileNavbar);
  });

  mobileNavDownloadCvBtn?.addEventListener('click', closeMobileNavbar);

  // Close mobile nav when clicking outside navbar
  document.addEventListener('click', (e) => {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const isInsideNavbar = e.target.closest('#mainNavbar');
      if (!isInsideNavbar) {
        closeMobileNavbar();
      }
    }
  });

  // --------------------------------------------------------------------------
  // 4. Scrollspy Active Navigation Indicator (10 Sections)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();

  // --------------------------------------------------------------------------
  // 5. Subtle Reveal on Scroll Animation
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px 40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  const revealInViewport = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
        el.classList.add('revealed');
      }
    });
  };
  revealInViewport();
  setTimeout(revealInViewport, 300);
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add('revealed'));
  }, 1200);

  // --------------------------------------------------------------------------
  // 6. Projects Category Filtering
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-grid-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = '';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Certifications Category Filtering (Preview Gallery)
  // --------------------------------------------------------------------------
  const certFilterButtons = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-grid-item');

  certFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      certCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 8. Project Details Modal (Bilingual)
  // --------------------------------------------------------------------------
  const projectDetailModalEl = document.getElementById('projectDetailModal');
  let projectDetailModal = null;
  try {
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal && projectDetailModalEl) {
      projectDetailModal = new bootstrap.Modal(projectDetailModalEl);
    }
  } catch (e) {
    console.warn('Bootstrap project modal init warning:', e);
  }

  const modalIndex = document.getElementById('modalProjectIndex');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalSubtitle = document.getElementById('modalProjectSubtitle');
  const modalImage = document.getElementById('modalProjectImage');
  const modalOverview = document.getElementById('modalProjectOverview');
  const modalMethodsList = document.getElementById('modalProjectMethods');
  const modalResult = document.getElementById('modalProjectResult');
  const modalTechnologies = document.getElementById('modalProjectTech');
  const modalStatus = document.getElementById('modalProjectStatus');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  function renderProjectModal(projId, lang) {
    const project = projectsData[projId];
    if (!project) return;
    const content = project[lang] || project.id;

    if (modalIndex) modalIndex.textContent = `PROJECT ${project.number}`;
    if (modalCategory) modalCategory.textContent = content.category;
    if (modalTitle) modalTitle.textContent = content.title;
    if (modalSubtitle) modalSubtitle.textContent = content.subtitle;

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.alt = `${content.title} Diagram`;
    }

    if (modalOverview) modalOverview.textContent = content.overview;

    if (modalMethodsList) {
      modalMethodsList.innerHTML = '';
      content.methods.forEach(method => {
        const li = document.createElement('li');
        li.textContent = method;
        modalMethodsList.appendChild(li);
      });
    }

    if (modalResult) modalResult.textContent = content.result;

    if (modalTechnologies) {
      modalTechnologies.innerHTML = '';
      project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        modalTechnologies.appendChild(span);
      });
    }

    if (modalStatus) modalStatus.textContent = content.status;

    const modalAction = document.getElementById('modalActionBtn') || modalGithubBtn;
    const modalActionIcon = document.getElementById('modalActionIcon');
    const modalActionText = document.getElementById('modalActionText');

    if (modalAction) {
      if (project.platform === 'colab') {
        modalAction.setAttribute('href', project.url);
        modalAction.setAttribute('target', '_blank');
        modalAction.setAttribute('rel', 'noopener noreferrer');
        modalAction.className = 'btn btn-sm btn-project-colab text-white';
        if (modalActionIcon) modalActionIcon.className = 'bi bi-code-square me-1';
        if (modalActionText) {
          modalActionText.textContent = lang === 'id' ? 'Buka di Google Colab' : 'Open in Google Colab';
        }
      } else if (project.platform === 'github') {
        modalAction.setAttribute('href', project.url);
        modalAction.setAttribute('target', '_blank');
        modalAction.setAttribute('rel', 'noopener noreferrer');
        modalAction.className = 'btn btn-sm btn-editorial-primary text-white';
        if (modalActionIcon) modalActionIcon.className = 'bi bi-github me-1';
        if (modalActionText) {
          modalActionText.textContent = lang === 'id' ? 'Lihat di GitHub' : 'View on GitHub';
        }
      }
    }
  }

  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      currentlyViewedProjectId = projId;
      renderProjectModal(projId, getCurrentLang());
      projectDetailModal?.show();
    });
  });

  // --------------------------------------------------------------------------
  // 9. Copy Email to Clipboard (Verified Email: nisnisya284@gmail.com)
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailTextEl = document.getElementById('emailTextValue');

  copyEmailBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailToCopy = emailTextEl ? emailTextEl.textContent.trim() : 'nisnisya284@gmail.com';
    const lang = getCurrentLang();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      const originalHtml = copyEmailBtn.innerHTML;
      const copiedText = lang === 'id' ? 'Tersalin!' : 'Copied!';
      copyEmailBtn.innerHTML = `<i class="bi bi-check2 text-success"></i> ${copiedText}`;
      copyEmailBtn.classList.add('border-success');

      setTimeout(() => {
        copyEmailBtn.innerHTML = originalHtml;
        copyEmailBtn.classList.remove('border-success');
      }, 2400);
    } catch (err) {
      console.error('Failed to copy: ', err);
      prompt(lang === 'id' ? 'Salin alamat email manual:' : 'Copy email manually:', emailToCopy);
    }
  });

  // --------------------------------------------------------------------------
  // 10. CV Download Notification Toast
  // --------------------------------------------------------------------------
  const cvButtons = document.querySelectorAll('.btn-download-cv');
  cvButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const toastEl = document.getElementById('cvFeedbackToast');
      if (toastEl && typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
        toast.show();
      }
    });
  });

  // --------------------------------------------------------------------------
  // 11. Contact Form Submission (Formspree Asynchronous Integration)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolioContactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const formErrorAlert = document.getElementById('formErrorAlert');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide any previously displayed alert messages
    if (formSuccessAlert) formSuccessAlert.classList.add('d-none');
    if (formErrorAlert) formErrorAlert.classList.add('d-none');

    // Browser HTML5 validation
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    // Set UI to loading state & prevent duplicate submission
    const textSpan = contactSubmitBtn?.querySelector('.btn-text-content');
    const loadSpan = contactSubmitBtn?.querySelector('.btn-loading-content');
    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      if (textSpan && loadSpan) {
        textSpan.classList.add('d-none');
        loadSpan.classList.remove('d-none');
      }
    }

    try {
      const endpoint = contactForm.getAttribute('action') || 'https://formspree.io/f/mqpprqey';
      const formData = new FormData(contactForm);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Successful submission: clear inputs and display success message
        contactForm.reset();
        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('d-none');
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        // Server returned an error status (e.g. 4xx, 5xx)
        if (formErrorAlert) {
          formErrorAlert.classList.remove('d-none');
          formErrorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    } catch (error) {
      // Network or connection failure
      console.error('Contact Formspree submission error:', error);
      if (formErrorAlert) {
        formErrorAlert.classList.remove('d-none');
        formErrorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      // Restore submit button state
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = false;
        if (textSpan && loadSpan) {
          textSpan.classList.remove('d-none');
          loadSpan.classList.add('d-none');
        }
      }
    }
  });

  // Initialize language on startup (defaults to 'id')
  setLanguage(currentLang);
});
