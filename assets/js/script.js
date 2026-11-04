/**
 * ANISYA — PERSONAL PORTFOLIO & ACADEMIC DOSSIER
 * Bilingual & Interactive Scripting (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Bilingual Projects Data Source
  // --------------------------------------------------------------------------
  const projectsData = {
    'proj-01': {
      number: '01',
      image: 'assets/images/project-01.svg',
      technologies: ['Python', 'Scikit-learn', 'NLTK', 'Sastrawi', 'Pandas', 'NumPy'],
      id: {
        title: 'Klasifikasi Emosi Teks Bahasa Indonesia',
        category: 'Machine Learning / NLP',
        subtitle: 'Pemrosesan Bahasa Alami & Penambangan Emosi Teks Bahasa Indonesia',
        description: 'Proyek klasifikasi teks yang dirancang untuk mengidentifikasi emosi pada teks berbahasa Indonesia menggunakan algoritma machine learning.',
        overview: 'Proyek ini berfokus pada analisis linguistik teks bahasa Indonesia (baik formal maupun percakapan) untuk mengklasifikasikan status afektif emosi (seperti senang, sedih, marah, dan takut). Menerapkan pipeline NLP terintegrasi mulai dari prapemrosesan teks, stemming morfologis, ekstraksi fitur TF-IDF, hingga benchmarking algoritma klasifikasi.',
        methods: [
          'Pra-pemrosesan teks memanfaatkan library NLTK dan Sastrawi untuk morphological stemming bahasa Indonesia serta pembersihan stopword.',
          'Ekstraksi fitur Term Frequency-Inverse Document Frequency (TF-IDF) dengan optimasi parameter n-gram.',
          'Pemodelan komparatif menggunakan Logistic Regression, Support Vector Machine (SVM dengan kernel linear & RBF), dan Multinomial Naive Bayes.',
          'Evaluasi model dengan k-fold cross validation dan hyperparameter grid search tuning guna meminimalkan overfitting.'
        ],
        result: 'Mencapai akurasi model hasil tuning sebesar 65,25% pada dataset pengujian, menunjukkan performa diskriminatif yang kokoh dalam membedakan nuansa emosional teks berbahasa Indonesia.',
        status: 'Proyek Akademik • Universitas Harapan Bangsa',
        githubNotice: 'Repositori akademik. Hubungi penyusun untuk akses eksperimen, log model, dan dataset lengkap.'
      },
      en: {
        title: 'Indonesian Emotion Classification',
        category: 'Machine Learning / NLP',
        subtitle: 'Natural Language Processing & Indonesian Sentiment/Emotion Mining',
        description: 'A text classification project designed to identify emotions in Indonesian-language text using machine learning algorithms.',
        overview: 'This project addresses the linguistic nuances of Indonesian colloquial and formal texts to classify affective states (e.g., joy, sadness, anger, fear). It implements end-to-end NLP pipelines from tokenization and morphological stemming to vectorization and multi-model benchmarking.',
        methods: [
          'Text preprocessing utilizing NLTK and Sastrawi for formal and informal Indonesian morphological stemming and stopword removal.',
          'Term Frequency-Inverse Document Frequency (TF-IDF) feature matrix extraction with n-gram parameter optimization.',
          'Comparative classification using Logistic Regression, Support Vector Machine (SVM with linear and RBF kernels), and Multinomial Naive Bayes.',
          'Cross-validation and hyperparameter grid search tuning to mitigate overfitting on imbalanced text samples.'
        ],
        result: 'Achieved a tuned model classification accuracy of 65.25% on the test dataset, demonstrating robust baseline discriminative capability across emotionally nuanced Indonesian phrasing.',
        status: 'Academic Project • Universitas Harapan Bangsa',
        githubNotice: 'Academic repository placeholder. Contact author for full experimental codebase and dataset access.'
      }
    },
    'proj-02': {
      number: '02',
      image: 'assets/images/project-02.svg',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'SAW (Decision Support)', 'NumPy'],
      id: {
        title: 'Sistem Rekomendasi Skincare',
        category: 'ML / Sistem Pendukung Keputusan',
        subtitle: 'Sistem Pendukung Keputusan Multi-Kriteria & Prediksi Kecocokan Produk',
        description: 'Sistem rekomendasi perawatan kulit yang menggabungkan Sistem Pendukung Keputusan (DSS) dan machine learning untuk mendukung identifikasi jenis kulit serta rekomendasi produk.',
        overview: 'Dikembangkan untuk menjembatani pengambilan keputusan algoritmik dengan karakteristik dermatologis individual. Sistem mengharmonisasikan metrik kondisi kulit pengguna, pembobotan sensitivitas bahan aktif, dan pemodelan prediktif guna menghasilkan peringkat produk yang dipersonalisasi.',
        methods: [
          'Pra-pemrosesan dataset produk perawatan kulit, penanganan nilai hilang (missing values), dan normalisasi matriks kriteria.',
          'Implementasi metode Simple Additive Weighting (SAW) untuk menghasilkan matriks preferensi multi-kriteria yang transparan dan dapat dipertanggungjawabkan.',
          'Integrasi machine learning berbasis klasifikasi untuk memprediksi kompatibilitas jenis kulit terhadap formulasi produk.',
          'Penyusunan aturan constraint guna memastikan rekomendasi bebas dari bahan pemicu komedo atau iritasi kulit sensitif.'
        ],
        result: 'Menghasilkan rekomendasi produk dengan konkordansi tinggi antara profil dermatologis pengguna dan 3 rekomendasi produk teratas (Top-3 recommendations).',
        status: 'Proyek Akademik Terapan',
        githubNotice: 'Dokumentasi teknis dan laporan metodologi sistem tersedia melalui kontak akademik penyusun.'
      },
      en: {
        title: 'Skincare Recommendation System',
        category: 'ML / Decision Support System',
        subtitle: 'Hybrid Multi-Criteria Decision Support & Predictive Modeling',
        description: 'A skincare recommendation system combining a Decision Support System and machine learning to support skin-type identification and skincare recommendations.',
        overview: 'Formulated to bridge algorithmic decision-making and dermatological considerations. The system harmonizes user-specific skin condition metrics, ingredient sensitivity weighting, and predictive models to generate personalized product rankings.',
        methods: [
          'Data preprocessing, handling missing ingredient properties, and feature normalization across cosmetic product datasets.',
          'Implementation of the Simple Additive Weighting (SAW) method to establish transparent, multi-criteria preference matrices based on skin characteristics.',
          'Machine learning-based classification to predict product compatibility scores.',
          'Integration of recommendation rules ensuring safety constraints against known comedogenic or irritating ingredients.'
        ],
        result: 'Successfully evaluated multi-criteria ranking accuracy with consistent concordance between user dermatological profiles and top-3 recommended skincare regimens.',
        status: 'Applied Academic Project',
        githubNotice: 'Project documentation and methodology report available upon academic inquiry.'
      }
    },
    'proj-03': {
      number: '03',
      image: 'assets/images/project-03.svg',
      technologies: ['Laravel', 'PHP', 'SQLite', 'Postman', 'Bootstrap', 'JavaScript'],
      id: {
        title: 'Sistem Manajemen Laundry',
        category: 'Pengembangan Web',
        subtitle: 'Arsitektur Pengelolaan Operasional Bisnis & Integrasi RESTful API',
        description: 'Aplikasi manajemen laundry berbasis web yang dirancang untuk mengelola data operasional dan menyederhanakan proses administrasi.',
        overview: 'Platform pengelolaan operasional lengkap yang dibangun untuk mencatat transaksi harian, pelacakan status pesanan pelanggan, kalkulasi tarif berbasis berat/layanan, serta pelaporan keuangan administratif bisnis binatu.',
        methods: [
          'Arsitektur operasi CRUD yang kokoh berpedoman pada pola desain Model-View-Controller (MVC) dalam framework Laravel.',
          'Pemodelan basis data relasional menggunakan SQLite untuk portabilitas deployment yang ringan, terisolasi, dan andal.',
          'Perancangan dan implementasi endpoint REST API terstruktur untuk kemudahan integrasi transaksi eksternal.',
          'Pengujian dan validasi payload API secara komprehensif menggunakan collection test suite pada Postman.'
        ],
        result: 'Mengoptimalkan siklus pencatatan pesanan dari penerimaan, pencucian, penyetrikaan, hingga notifikasi pengambilan pakaian secara sistematis tanpa ketergantungan dokumen fisik.',
        status: 'Proyek Rekayasa Perangkat Lunak',
        githubNotice: 'Repositori kode sumber dikelola secara privat untuk kepentingan evaluasi portofolio.'
      },
      en: {
        title: 'Laundry Management System',
        category: 'Web Development',
        subtitle: 'Enterprise Operation Management & RESTful Administrative Architecture',
        description: 'A web-based laundry management application designed to manage operational data and simplify administrative processes.',
        overview: 'A full-featured operational dashboard built to manage daily transactions, customer tracking, order statuses, weight-based tariff calculations, and administrative reporting for commercial laundry businesses.',
        methods: [
          'Robust CRUD architecture adhering to Model-View-Controller (MVC) design principles in Laravel.',
          'Relational database modeling with SQLite for lightweight, isolated deployment and zero-configuration operational reliability.',
          'Design and implementation of structured REST API endpoints for seamless data transactions and external system integration.',
          'Comprehensive automated and manual API testing and payload validation using Postman collection test suites.'
        ],
        result: 'Streamlined order lifecycle logging from intake, washing, ironing to customer pickup notification, eliminating manual spreadsheet bottlenecks.',
        status: 'Software Development Project',
        githubNotice: 'Source code repository hosted privately for academic evaluation.'
      }
    },
    'proj-04': {
      number: '04',
      image: 'assets/images/project-04.svg',
      technologies: ['Flutter', 'Dart', 'MySQL', 'PHP API', 'Provider State Management'],
      id: {
        title: 'SITUGAS – Pengingat Tugas Akademik',
        category: 'Pengembangan Mobile',
        subtitle: 'Aplikasi Produktivitas Mahasiswa & Pengingat Batas Waktu Kuliah Lintas Platform',
        description: 'Konsep aplikasi mobile yang dirancang untuk membantu mahasiswa mengorganisasi dan memantau tugas-tugas akademik perkuliahan.',
        overview: 'Dirancang khusus menjawab kendala mahasiswa dalam melacak batas waktu penyerahan tugas perkuliahan yang tersebar di berbagai mata kuliah. Menghadirkan pelacakan siklus tugas yang intuitif, kategori mata kuliah, serta notifikasi penjadwalan.',
        methods: [
          'Pengembangan antarmuka pengguna mobile lintas platform (Android/iOS) menggunakan Google Flutter dan bahasa pemrograman Dart.',
          'Penerapan manajemen state reaktif menggunakan Provider pattern untuk pembaruan antarmuka yang efisien dan deterministik.',
          'Komunikasi data aman dengan basis data terpusat MySQL melalui REST API berbasis PHP.',
          'Penyimpanan lokal persisten serta scheduler pengingat otomatis menjelang tenggat waktu penyerahan tugas.'
        ],
        result: 'Diuji dalam lingkungan simulasi perangkat dengan respon antarmuka yang gegas, konsumsi memori yang efisien, dan sinkronisasi tugas yang presisi.',
        status: 'Konsep & Prototipe Aplikasi Mobile',
        githubNotice: 'Arsip kode Flutter dan spesifikasi kontrak API dapat ditinjau melalui kontak penyusun.'
      },
      en: {
        title: 'SITUGAS – Academic Task Reminder',
        category: 'Mobile Development',
        subtitle: 'Cross-Platform Student Productivity & Coursework Reminder Application',
        description: 'A mobile application concept designed to help university students organize and monitor their academic assignments.',
        overview: 'Engineered specifically for undergraduate university workflows to resolve missed assignment deadlines and fragmented communication. The application provides an intuitive task tracking lifecycle with scheduled notifications and course categorization.',
        methods: [
          'Cross-platform mobile user interface developed using Google Flutter and Dart.',
          'Reactive application state management implemented using the Provider pattern for deterministic UI state updates.',
          'Secure communication with a centralized MySQL database via a lightweight PHP REST API layer.',
          'Local persistent storage and notification scheduler alerting students prior to imminent submission deadlines.'
        ],
        result: 'Tested in simulation environments with high UI responsiveness, clean state synchronization across multi-course task queries, and low memory consumption.',
        status: 'Mobile Concept & Prototype',
        githubNotice: 'Flutter codebase and API contracts available in author academic portfolio archive.'
      }
    },
    'proj-05': {
      number: '05',
      image: 'assets/images/project-05.svg',
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'HTML5', 'CSS3'],
      id: {
        title: 'Sistem Informasi Perpustakaan',
        category: 'Pengembangan Web',
        subtitle: 'Sistem Informasi Katalog Buku & Administrasi Sirkulasi Perpustakaan',
        description: 'Sistem informasi perpustakaan berbasis web yang dikembangkan untuk mendukung pengelolaan data buku dan administrasi perpustakaan.',
        overview: 'Dibangun untuk memodernisasi tata kelola sirkulasi buku pada lingkungan institusi pendidikan. Mencakup modul pencatatan katalog buku, pendaftaran anggota, peminjaman dan pengembalian buku, serta penghitungan denda keterlambatan secara otomatis.',
        methods: [
          'Fungsionalitas CRUD terpadu untuk data inventaris buku, riwayat sirkulasi, klasifikasi pengarang, dan keanggotaan peminjam.',
          'Perancangan skema relasional pada basis data MySQL dengan foreign key constraints dan integritas referensial.',
          'Pengembangan logika bisnis backend dengan PHP memanfaatkan keunggulan routing dan sekuritas Laravel framework.',
          'Antarmuka administrasi responsif dan user-friendly yang dibangun menggunakan Bootstrap framework.'
        ],
        result: 'Mempermudah proses inventarisasi dan pencarian buku secara instan berdasarkan ISBN, judul, atau nama pengarang dengan status ketersediaan real-time.',
        status: 'Proyek Sistem Informasi Web',
        githubNotice: 'Implementasi kode sumber dapat diakses untuk kepentingan verifikasi akademik.'
      },
      en: {
        title: 'Library Management System',
        category: 'Web Development',
        subtitle: 'Academic Book Cataloging & Library Administration System',
        description: 'A web-based library information system developed to support book data management and library administration.',
        overview: 'Developed to modernize traditional university or institutional library workflows. It encompasses book cataloging, member registration, circulation tracking, and overdue penalty monitoring through an elegant web portal.',
        methods: [
          'Comprehensive CRUD functionality for catalog items, circulation loans, author indexing, and borrower classifications.',
          'Relational schema design implemented with MySQL, featuring foreign key constraints and transactional integrity.',
          'Backend business logic implemented in PHP utilizing the Laravel framework for security and routing efficiency.',
          'Clean, accessible, and responsive administration user interface crafted with Bootstrap.'
        ],
        result: 'Provides complete administrative control with instant query searching across book ISBN, author, and availability status.',
        status: 'Information System Project',
        githubNotice: 'Academic implementation codebase available for review.'
      }
    },
    'proj-06': {
      number: '06',
      image: 'assets/images/project-06.svg',
      technologies: ['Python', 'Scikit-learn', 'SMOTE', 'Fuzzy KNN', 'NumPy', 'Matplotlib'],
      id: {
        title: 'Klasifikasi Kanker Payudara (WDBC)',
        category: 'Machine Learning',
        subtitle: 'Analisis Fitur Diagnostik Medis dengan Penyeimbangan Kelas SMOTE & Fuzzy K-NN',
        description: 'Proyek machine learning yang berfokus pada klasifikasi kanker payudara menggunakan Wisconsin Diagnostic Breast Cancer dataset.',
        overview: 'Meneliti tantangan pada dataset diagnostik medis di mana ketidakseimbangan kelas (class imbalance) serta batas keputusan yang ambigu dapat memicu kesalahan klasifikasi yang fatal. Studi ini menerapkan teknik oversampling sintetis dan tetangga terdekat berbasis fuzzy untuk meningkatkan sensitivitas diagnosis.',
        methods: [
          'Pra-pemrosesan data, standarisasi fitur numerik melalui z-score scaling, serta reduksi multikolinearitas data WDBC.',
          'Penanganan ketimpangan kelas menggunakan Synthetic Minority Over-sampling Technique (SMOTE) untuk menghilangkan bias klasifikasi.',
          'Klasifikasi menggunakan Fuzzy K-Nearest Neighbors (Fuzzy KNN) yang menghitung derajat keanggotaan fuzzy sampel daripada penentuan jarak biner yang kaku.',
          'Evaluasi kinerja menyeluruh menggunakan Confusion Matrix, Precision, Recall, F1-Score, dan analisis kurva ROC-AUC.'
        ],
        result: 'Menunjukkan peningkatan sensitivitas deteksi dan kestabilan diagnostik yang lebih tinggi, efektif menurunkan angka false negatives pada klasifikasi medis berisiko tinggi.',
        status: 'Proyek Riset Machine Learning',
        githubNotice: 'Jupyter Notebook eksperimen dan log metrik evaluasi dapat diakses atas permintaan akademik.'
      },
      en: {
        title: 'Breast Cancer Classification',
        category: 'Machine Learning',
        subtitle: 'Diagnostic Feature Analysis with SMOTE Class Balancing & Fuzzy KNN',
        description: 'A machine learning project focused on breast cancer classification using the Wisconsin Diagnostic Breast Cancer dataset.',
        overview: 'Focuses on medical diagnostic classification where dataset class imbalances and borderline diagnostic ambiguities pose critical challenges. The study applies advanced re-sampling and fuzzy neighborhood metrics to enhance malignant vs. benign discrimination.',
        methods: [
          'Data preprocessing, feature scaling via z-score standardization, and collinearity reduction on the Wisconsin Diagnostic Breast Cancer (WDBC) dataset.',
          'Class imbalance mitigation through Synthetic Minority Over-sampling Technique (SMOTE) to eliminate classifier bias.',
          'Classification using Fuzzy K-Nearest Neighbors (Fuzzy KNN), calculating fuzzy class membership values rather than crisp distance heuristics.',
          'Rigorous model evaluation through Confusion Matrix, Precision, Recall, F1-Score, and ROC-AUC curve analysis.'
        ],
        result: 'Demonstrated superior sensitivity and diagnostic classification stability, effectively reducing false negative rates in high-stakes medical categorization.',
        status: 'Machine Learning Research Project',
        githubNotice: 'Jupyter Notebook and diagnostic evaluation logs accessible upon request.'
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. Language State Management
  // --------------------------------------------------------------------------
  let currentLang = localStorage.getItem('anisya_portfolio_lang') || 'id';

  function getCurrentLang() {
    return currentLang;
  }

  function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') lang = 'id';
    currentLang = lang;
    localStorage.setItem('anisya_portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Update active state on all language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Update dynamic placeholders on form elements
    updateFormPlaceholders(lang);

    // If modal is currently open, refresh its content in the newly chosen language
    refreshOpenModal(lang);
  }

  function updateFormPlaceholders(lang) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const messageInput = document.getElementById('senderMessage');
    const purposeSelect = document.getElementById('senderPurpose');

    if (nameInput) {
      nameInput.placeholder = lang === 'id' 
        ? 'misal: Dr. Budi Santoso / Tim Rekruter' 
        : 'e.g. Dr. Jane Smith / Recruiter';
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

    // Update options inside purpose select
    if (purposeSelect) {
      const options = purposeSelect.options;
      if (options.length >= 4) {
        if (lang === 'id') {
          options[0].text = 'Peluang Rekayasa Perangkat Lunak / Magang';
          options[1].text = 'Kolaborasi Riset Akademik / Sinyal EEG';
          options[2].text = 'Studi Pascasarjana / Informasi Beasiswa';
          options[3].text = 'Pertanyaan Profesional Umum';
        } else {
          options[0].text = 'Software Engineering / Internship Opportunity';
          options[1].text = 'Academic / EEG Research Collaboration';
          options[2].text = 'Postgraduate Studies / Scholarship Inquiry';
          options[3].text = 'General Professional Inquiry';
        }
      }
    }
  }

  // Bind language switcher clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Initialize language on load
  setLanguage(currentLang);

  // --------------------------------------------------------------------------
  // 3. Sticky Navbar & Back to Top Action
  // --------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-editorial');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (scrollY > 400) {
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

  // Mobile menu close on nav link click
  const navLinks = document.querySelectorAll('.nav-link-editorial');
  const navbarCollapse = document.getElementById('navbarEditorialContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Scrollspy Active Navigation Indicator
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 140;

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
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

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
  // 7. Dynamic Project Details Modal (Bilingual)
  // --------------------------------------------------------------------------
  let currentlyViewedProjectId = null;
  const projectDetailModalEl = document.getElementById('projectDetailModal');
  const projectDetailModal = projectDetailModalEl ? new bootstrap.Modal(projectDetailModalEl) : null;

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

    if (modalGithubBtn) {
      modalGithubBtn.onclick = () => {
        const alertPrefix = lang === 'id' ? 'Repositori GitHub' : 'GitHub Repository';
        alert(`[${alertPrefix}]\n\n${content.githubNotice}`);
      };
    }
  }

  function refreshOpenModal(lang) {
    if (currentlyViewedProjectId && projectDetailModalEl?.classList.contains('show')) {
      renderProjectModal(currentlyViewedProjectId, lang);
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

  // Project card GitHub notice
  document.querySelectorAll('.btn-project-github').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const project = projectsData[projId];
      const lang = getCurrentLang();
      const content = project ? (project[lang] || project.id) : null;

      if (content) {
        const alertPrefix = lang === 'id' ? 'Repositori GitHub' : 'GitHub Repository Placeholder';
        alert(`[${alertPrefix}]\n\n${content.title}\n\n${content.githubNotice}`);
      } else {
        alert(lang === 'id' 
          ? 'Repositori kode akademik tersedia melalui kontak penyusun.' 
          : 'Academic project repository placeholder. Replace with actual URL in HTML.');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. Copy Email to Clipboard
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailTextEl = document.getElementById('emailTextValue');

  copyEmailBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailToCopy = emailTextEl ? emailTextEl.textContent.trim() : 'anisya.student@example.com';
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
  // 9. Download CV Toast Notification
  // --------------------------------------------------------------------------
  const cvDownloadButtons = document.querySelectorAll('.btn-download-cv');
  cvDownloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const feedbackToast = document.getElementById('cvFeedbackToast');
      if (feedbackToast) {
        feedbackToast.classList.add('show');
        setTimeout(() => {
          feedbackToast.classList.remove('show');
        }, 4000);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 10. Contact Inquiry Form (Validation & Mailto Trigger)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolioContactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const lang = getCurrentLang();

    const senderName = document.getElementById('senderName')?.value.trim();
    const senderEmail = document.getElementById('senderEmail')?.value.trim();
    const senderPurpose = document.getElementById('senderPurpose')?.value.trim();
    const senderMessage = document.getElementById('senderMessage')?.value.trim();

    if (!senderName || !senderEmail || !senderMessage) {
      alert(lang === 'id' 
        ? 'Mohon lengkapi semua kolom yang wajib diisi (Nama, Email, Pesan).'
        : 'Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const recipient = 'anisya.student@example.com';
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${senderPurpose}] from ${senderName}`);
    const body = encodeURIComponent(
      `Hello Anisya,\n\nName: ${senderName}\nEmail: ${senderEmail}\nSubject: ${senderPurpose}\n\nMessage:\n${senderMessage}\n\n---\nSent via Anisya Personal Portfolio Website`
    );

    if (formSuccessAlert) {
      formSuccessAlert.classList.remove('d-none');
      contactForm.reset();
    }

    setTimeout(() => {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }, 600);
  });
});
