/**
 * ANISYA — PERSONAL PORTFOLIO & ACADEMIC DOSSIER
 * Interactive Scripting (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Projects Data Source for Detail Modal
  // --------------------------------------------------------------------------
  const projectsData = {
    'proj-01': {
      number: '01',
      title: 'Indonesian Emotion Classification',
      category: 'Machine Learning / NLP',
      subtitle: 'Natural Language Processing & Indonesian Sentiment/Emotion Mining',
      image: 'assets/images/project-01.svg',
      description: 'A text classification project designed to identify emotions in Indonesian-language text using machine learning algorithms.',
      overview: 'This project addresses the linguistic nuances of Indonesian colloquial and formal texts to classify affective states (e.g., joy, sadness, anger, fear). It implements end-to-end NLP pipelines from tokenization and morphological stemming to vectorization and multi-model benchmarking.',
      methods: [
        'Text preprocessing utilizing NLTK and Sastrawi for formal and informal Indonesian morphological stemming and stopword removal.',
        'Term Frequency-Inverse Document Frequency (TF-IDF) feature matrix extraction with n-gram parameter optimization.',
        'Comparative classification using Logistic Regression, Support Vector Machine (SVM with linear and RBF kernels), and Multinomial Naive Bayes.',
        'Cross-validation and hyperparameter grid search tuning to mitigate overfitting on imbalanced text samples.'
      ],
      result: 'Achieved a tuned model classification accuracy of 65.25% on the test dataset, demonstrating robust baseline discriminative capability across emotionally nuanced Indonesian phrasing.',
      technologies: ['Python', 'Scikit-learn', 'NLTK', 'Sastrawi', 'Pandas', 'NumPy'],
      status: 'Academic Project • Universitas Harapan Bangsa',
      githubNotice: 'Academic repository placeholder. Contact author for full experimental codebase and dataset access.'
    },
    'proj-02': {
      number: '02',
      title: 'Skincare Recommendation System',
      category: 'Machine Learning / Decision Support System',
      subtitle: 'Hybrid Multi-Criteria Decision Support & Predictive Modeling',
      image: 'assets/images/project-02.svg',
      description: 'A skincare recommendation system combining a Decision Support System and machine learning to support skin-type identification and skincare recommendations.',
      overview: 'Formulated to bridge algorithmic decision-making and dermatological cosmetic considerations. The system harmonizes user-specific skin condition metrics, ingredient sensitivity weighting, and predictive models to generate personalized product rankings.',
      methods: [
        'Data preprocessing, handling missing ingredient properties, and feature normalization across cosmetic product datasets.',
        'Implementation of the Simple Additive Weighting (SAW) method to establish transparent, multi-criteria preference matrices based on skin characteristics.',
        'Machine learning-based classification to predict product compatibility scores.',
        'Integration of recommendation rules ensuring safety constraints against known comedogenic or irritating ingredients.'
      ],
      result: 'Successfully evaluated multi-criteria ranking accuracy with consistent concordance between user dermatological profiles and top-3 recommended skincare regimens.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'SAW (Decision Support)', 'NumPy'],
      status: 'Applied Academic Project',
      githubNotice: 'Project documentation and methodology report available upon academic inquiry.'
    },
    'proj-03': {
      number: '03',
      title: 'Laundry Management System',
      category: 'Web Development',
      subtitle: 'Enterprise Operation Management & RESTful Administrative Architecture',
      image: 'assets/images/project-03.svg',
      description: 'A web-based laundry management application designed to manage operational data and simplify administrative processes.',
      overview: 'A full-featured operational dashboard built to manage daily transactions, customer tracking, order statuses, weight-based tariff calculations, and administrative reporting for commercial laundry businesses.',
      methods: [
        'Robust CRUD architecture adhering to Model-View-Controller (MVC) design principles in Laravel.',
        'Relational database modeling with SQLite for lightweight, isolated deployment and zero-configuration operational reliability.',
        'Design and implementation of structured REST API endpoints for seamless data transactions and external system integration.',
        'Comprehensive automated and manual API testing and payload validation using Postman collection test suites.'
      ],
      result: 'Streamlined order lifecycle logging from intake, washing, ironing to customer pickup notification, eliminating manual spreadsheet bottlenecks.',
      technologies: ['Laravel', 'PHP', 'SQLite', 'Postman', 'Bootstrap', 'JavaScript'],
      status: 'Software Development Project',
      githubNotice: 'Source code repository hosted privately for academic evaluation.'
    },
    'proj-04': {
      number: '04',
      title: 'SITUGAS – Academic Task Reminder',
      category: 'Mobile Development',
      subtitle: 'Cross-Platform Student Productivity & Coursework Reminder Application',
      image: 'assets/images/project-04.svg',
      description: 'A mobile application concept designed to help university students organize and monitor their academic assignments.',
      overview: 'Engineered specifically for undergraduate university workflows to resolve missed assignment deadlines and fragmented communication. The application provides an intuitive task tracking lifecycle with scheduled notifications and course categorization.',
      methods: [
        'Cross-platform mobile user interface developed using Google Flutter and Dart.',
        'Reactive application state management implemented using the Provider pattern for deterministic UI state updates.',
        'Secure communication with a centralized MySQL database via a lightweight PHP REST API layer.',
        'Local persistent storage and notification scheduler alerting students prior to imminent submission deadlines.'
      ],
      result: 'Tested in simulation environments with high UI responsiveness, clean state synchronization across multi-course task queries, and low memory consumption.',
      technologies: ['Flutter', 'Dart', 'MySQL', 'PHP API', 'Provider State Management'],
      status: 'Mobile Concept & Prototype',
      githubNotice: 'Flutter codebase and API contracts available in author academic portfolio archive.'
    },
    'proj-05': {
      number: '05',
      title: 'Library Management System',
      category: 'Web Development',
      subtitle: 'Academic Book Cataloging & Library Administration System',
      image: 'assets/images/project-05.svg',
      description: 'A web-based library information system developed to support book data management and library administration.',
      overview: 'Developed to modernize traditional university or institutional library workflows. It encompasses book cataloging, member registration, circulation tracking, and overdue penalty monitoring through an elegant web portal.',
      methods: [
        'Comprehensive CRUD functionality for catalog items, circulation loans, author indexing, and borrower classifications.',
        'Relational schema design implemented with MySQL, featuring foreign key constraints and transactional integrity.',
        'Backend business logic implemented in PHP utilizing the Laravel framework for security and routing efficiency.',
        'Clean, accessible, and responsive administration user interface crafted with Bootstrap.'
      ],
      result: 'Provides complete administrative control with instant query searching across book ISBN, author, and availability status.',
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'HTML5', 'CSS3'],
      status: 'Information System Project',
      githubNotice: 'Academic implementation codebase available for review.'
    },
    'proj-06': {
      number: '06',
      title: 'Breast Cancer Classification',
      category: 'Machine Learning',
      subtitle: 'Diagnostic Feature Analysis with SMOTE Class Balancing & Fuzzy KNN',
      image: 'assets/images/project-06.svg',
      description: 'A machine learning project focused on breast cancer classification using the Wisconsin Diagnostic Breast Cancer dataset.',
      overview: 'Focuses on medical diagnostic classification where dataset class imbalances and borderline diagnostic ambiguities pose critical challenges. The study applies advanced re-sampling and fuzzy neighborhood metrics to enhance malignant vs. benign discrimination.',
      methods: [
        'Data preprocessing, feature scaling via z-score standardization, and collinearity reduction on the Wisconsin Diagnostic Breast Cancer (WDBC) dataset.',
        'Class imbalance mitigation through Synthetic Minority Over-sampling Technique (SMOTE) to eliminate classifier bias.',
        'Classification using Fuzzy K-Nearest Neighbors (Fuzzy KNN), calculating fuzzy class membership values rather than crisp distance heuristics.',
        'Rigorous model evaluation through Confusion Matrix, Precision, Recall, F1-Score, and ROC-AUC curve analysis.'
      ],
      result: 'Demonstrated superior sensitivity and diagnostic classification stability, effectively reducing false negative rates in high-stakes medical categorization.',
      technologies: ['Python', 'Scikit-learn', 'SMOTE', 'Fuzzy KNN', 'NumPy', 'Matplotlib'],
      status: 'Machine Learning Research Project',
      githubNotice: 'Jupyter Notebook and diagnostic evaluation logs accessible upon request.'
    }
  };

  // --------------------------------------------------------------------------
  // 2. Sticky Navbar & Scroll Styling
  // --------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-editorial');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar shadow & compacting
    if (scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  // Back to top action
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
  // 3. Scrollspy Active Navigation Indicator
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
  // 4. Subtle Reveal On Scroll Animation
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
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 5. Projects Category Filtering
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
  // 6. Project Details Modal Dynamic Population
  // --------------------------------------------------------------------------
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

  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = projectsData[projId];

      if (!data) return;

      if (modalIndex) modalIndex.textContent = `PROJECT ${data.number}`;
      if (modalCategory) modalCategory.textContent = data.category;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
      if (modalImage) {
        modalImage.src = data.image;
        modalImage.alt = `${data.title} Architecture`;
      }
      if (modalOverview) modalOverview.textContent = data.overview;
      
      if (modalMethodsList) {
        modalMethodsList.innerHTML = '';
        data.methods.forEach(method => {
          const li = document.createElement('li');
          li.textContent = method;
          modalMethodsList.appendChild(li);
        });
      }

      if (modalResult) modalResult.textContent = data.result;

      if (modalTechnologies) {
        modalTechnologies.innerHTML = '';
        data.technologies.forEach(tech => {
          const span = document.createElement('span');
          span.className = 'tech-tag';
          span.textContent = tech;
          modalTechnologies.appendChild(span);
        });
      }

      if (modalStatus) modalStatus.textContent = data.status;

      if (modalGithubBtn) {
        modalGithubBtn.onclick = () => {
          alert(`GitHub Repository: ${data.githubNotice}`);
        };
      }

      projectDetailModal?.show();
    });
  });

  // Handle GitHub placeholder clicks on project cards
  document.querySelectorAll('.btn-project-github').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = projectsData[projId];
      const message = data 
        ? `[GitHub Repository Placeholder]\n\nProject: ${data.title}\n\n${data.githubNotice}`
        : 'Academic project repository placeholder. Replace with actual URL in HTML.';
      alert(message);
    });
  });

  // --------------------------------------------------------------------------
  // 7. Copy Email Clipboard Interaction
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailTextEl = document.getElementById('emailTextValue');

  copyEmailBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailToCopy = emailTextEl ? emailTextEl.textContent.trim() : 'anisya.student@example.com';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for non-HTTPS local setups
        const tempInput = document.createElement('input');
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      const originalHtml = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '<i class="bi bi-check2 text-success"></i> Copied!';
      copyEmailBtn.classList.add('border-success');

      setTimeout(() => {
        copyEmailBtn.innerHTML = originalHtml;
        copyEmailBtn.classList.remove('border-success');
      }, 2400);
    } catch (err) {
      console.error('Failed to copy: ', err);
      prompt('Copy email manually:', emailToCopy);
    }
  });

  // --------------------------------------------------------------------------
  // 8. Download CV Notification
  // --------------------------------------------------------------------------
  const cvDownloadButtons = document.querySelectorAll('.btn-download-cv');
  cvDownloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Let standard anchor download proceed, but show subtle feedback
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
  // 9. Contact Inquiry Form (Client-Side Validation & Mailto Trigger)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolioContactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const senderName = document.getElementById('senderName')?.value.trim();
    const senderEmail = document.getElementById('senderEmail')?.value.trim();
    const senderPurpose = document.getElementById('senderPurpose')?.value.trim();
    const senderMessage = document.getElementById('senderMessage')?.value.trim();

    if (!senderName || !senderEmail || !senderMessage) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Format mailto link so user can immediately send an email from their email client
    const recipient = 'anisya.student@example.com';
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${senderPurpose}] from ${senderName}`);
    const body = encodeURIComponent(
      `Hello Anisya,\n\nName: ${senderName}\nEmail: ${senderEmail}\nPurpose: ${senderPurpose}\n\nMessage:\n${senderMessage}\n\n---\nSent via Anisya Personal Portfolio Website`
    );

    // Show visual confirmation on page
    if (formSuccessAlert) {
      formSuccessAlert.classList.remove('d-none');
      contactForm.reset();
    }

    // Trigger mailto after brief delay
    setTimeout(() => {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }, 600);
  });
});
