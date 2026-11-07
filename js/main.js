/**
 * Ron Karlo Lanzanas - Interactive Portfolio JavaScript
 */

// Categorized Project Dataset
const categoriesData = [
  {
    catId: "software",
    catName: "Software & Web Platforms",
    catSubtitle: "Desktop applications, interactive games, and live web apps",
    icon: "fa-solid fa-code",
    projects: [
      {
        id: "codeshark",
        num: "PROJECT № 01",
        badge: "SOFTWARE / GAME",
        title: "CodeShark",
        tag: "Desktop Typing Game & Software Engineering Project",
        developers: "Lanzanas, Ron Karlo • Cacao, John Carlo • Jacobo, Elijah Gabriel",
        image: "project_codeshark.jpg",
        viewUrl: "https://drive.google.com/drive/folders/1fra4YcWejXfrocQfoYDBPHqZmjQgm9KX",
        externalUrl: "https://drive.google.com/drive/folders/1fra4YcWejXfrocQfoYDBPHqZmjQgm9KX",
        ctaText: "Download CodeShark (Google Drive)",
        secondaryCtaText: "Open Project Folder",
        problem: "Creating an engaging, gamified desktop learning tool where programming students practice coding syntax, typing speed (WPM), accuracy, and problem solving in solo and local multiplayer modes.",
        tech: "GameMaker Studio, GML (GameMaker Language), Sound Design, Local Multiplayer Socket / Peer Architecture, UI State Machine.",
        outcome: "Designed and engineered a complete interactive game featuring single player modes, local multiplayer lobby, WPM tracking, and sound system."
      },
      {
        id: "techweek",
        num: "PROJECT № 02",
        badge: "LIVE WEB APP",
        title: "TechWEEK 2026",
        tag: "Interactive Event Platform / Web App",
        developers: "Lanzanas, Ron Karlo",
        image: "project_techweek.jpg",
        viewUrl: "TECHWEEK2026/index.html",
        externalUrl: "https://rklanzanas.github.io/TechWEEK2026/",
        ctaText: "Launch TechWEEK 2026",
        secondaryCtaText: "Visit GitHub Pages",
        problem: "Developing an intuitive, responsive digital portal for TechWEEK 2026 allowing attendees to browse schedules, speaker profiles, event countdowns, and tech exhibits seamlessly across devices.",
        tech: "HTML5, CSS3 Grid/Flexbox, JavaScript ES6+, GitHub Pages, Mobile-First Architecture.",
        outcome: "Built an engaging conference experience with smooth routing, responsive countdown timer, and high performance."
      }
    ]
  },
  {
    catId: "print",
    catName: "Print & Poster Design",
    catSubtitle: "Commercial typography, promotional flyers & campaign collateral",
    icon: "fa-solid fa-print",
    projects: [
      {
        id: "brandposter",
        num: "PROJECT № 03",
        badge: "TYPOGRAPHY",
        title: "Typography Brand Poster",
        tag: "Visual Design & Commercial Typography",
        developers: null,
        image: "project_brandposter.jpg",
        viewUrl: "Typo Graphy Brand Poster/LANZANAS-TYPYGRAPHYBRANDPOSTER (1).pdf",
        externalUrl: "https://drive.google.com/drive/folders/1lrCuKs9CGftHbQurxaTx-kVqz_ZQq4kb",
        ctaText: "View Brand Poster (PDF)",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Executing striking typographical hierarchy and expressive layout principles to create a commercial brand poster that captures attention instantly.",
        tech: "Adobe Illustrator, Photoshop, Custom Typographic Grids, Vector Geometry, High-DPI Print Calibration.",
        outcome: "Delivered a high-impact poster featuring structured contrast, refined letter spacing, and balanced negative space ready for professional print."
      },
      {
        id: "flyers",
        num: "PROJECT № 04",
        badge: "MARKETING",
        title: "Print Media Proposal Flyers",
        tag: "Commercial Marketing & Industrial Print",
        developers: null,
        image: "project_flyers.jpg",
        images: [
          { src: "project_flyers.jpg", label: "Daily Silog Flyer" },
          { src: "project_poster.jpg", label: "Campaign Poster" },
          { src: "project_proposal.jpg", label: "Service Proposal" }
        ],
        viewUrl: "PRINT MEDIA PROPOSAL/FLYERS - LANZANAS (1).pdf",
        externalUrl: "https://drive.google.com/drive/folders/1J-9IeKmebmB4cYySkS48hi-PY39KIcDz",
        ctaText: "View Proposal Flyers (PDF)",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Designing persuasive promotional flyers that effectively communicate technical and commercial service offerings to diverse target audiences.",
        tech: "CMYK Prepress, Bleed and Crop Settings, Content Framing, Direct-Action Copy Layouts.",
        outcome: "Engineered high-readability printed collateral formatted to commercial print specifications with punchy visual impact."
      },
      {
        id: "poster",
        num: "PROJECT № 05",
        badge: "CAMPAIGN",
        title: "Commercial Service Campaign Poster",
        tag: "Advertising & Large-Format Print",
        developers: null,
        image: "project_poster.jpg",
        images: [
          { src: "project_poster.jpg", label: "Campaign Poster" },
          { src: "project_flyers.jpg", label: "Daily Silog Flyer" },
          { src: "project_proposal.jpg", label: "Service Proposal" }
        ],
        viewUrl: "PRINT MEDIA PROPOSAL/POSTER - LANZANAS (2).pdf",
        externalUrl: "https://drive.google.com/drive/folders/1J-9IeKmebmB4cYySkS48hi-PY39KIcDz",
        ctaText: "View Campaign Poster (PDF)",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Creating an authoritative large-format poster layout presenting complex service capabilities in a structured, legible layout from a distance.",
        tech: "Large Format Layouts, Structural Grids, Clean Typographic Sections, Vector Infographics.",
        outcome: "Produced an attention-grabbing commercial poster showcasing service workflows with maximum clarity."
      }
    ]
  },
  {
    catId: "editorial",
    catName: "Editorial & Publications",
    catSubtitle: "Multi-page magazines, spread architecture & content curation",
    icon: "fa-solid fa-book-open",
    projects: [
      {
        id: "magazine",
        num: "PROJECT № 06",
        badge: "EDITORIAL",
        title: "Editorial Magazine",
        tag: "Editorial Layout & Multi-Page Publishing",
        developers: null,
        image: "project_magazines.jpg",
        images: [
          { src: "magazine_page_1.jpg", label: "Page 01 • Front Cover" },
          { src: "magazine_page_2.jpg", label: "Page 02 • About Myself" },
          { src: "magazine_page_3.jpg", label: "Page 03 • Achievement & Goal" },
          { src: "magazine_page_4.jpg", label: "Page 04 • Lifestyle & Vibe" }
        ],
        viewUrl: "MAGAZINE/MIDTERM_LANZANAS_3CS5-MAGAZINE (3).pdf",
        externalUrl: "https://drive.google.com/drive/folders/1PNCZUu9ZT264zIeaBlzkTodKmhLmihIw",
        ctaText: "Read Complete Magazine (PDF)",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Curating and sequencing diverse articles, features, and photographic assets into a cohesive, multi-page editorial magazine spread with structured flow.",
        tech: "Editorial Grids, Master Pages, Typographic Pairings, Color Grading, Print-Ready Prepress Output.",
        outcome: "Created a modern publication emphasizing clean margins, rhythm, narrative pull, and flawless readability across all pages."
      }
    ]
  },
  {
    catId: "branding",
    catName: "Brand Identity & Logos",
    catSubtitle: "Visual moodboards, vector logomarks & identity systems",
    icon: "fa-solid fa-shapes",
    projects: [
      {
        id: "observa",
        num: "PROJECT № 07",
        badge: "LOGO / MOODBOARD",
        title: "Observa Logo",
        tag: "Identity System / Concept & Color Palette",
        developers: null,
        image: "project_moodboard.png",
        images: [
          { src: "project_moodboard.png", label: "Observa Moodboard" },
          { src: "project_swiftly.png", label: "Swiftly Moodboard" },
          { src: "project_paciencia.png", label: "Paciencia Moodboard" }
        ],
        viewUrl: "project_moodboard.png",
        externalUrl: "https://drive.google.com/drive/folders/1sjS6uuDCsiKj2qzE2xXuQlMMLHkb7JYN",
        ctaText: "View Full-Resolution Image",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Translating architectural and human observation concepts into a cohesive brand universe with distinct textures, palettes, and vector iconography.",
        tech: "Creative Direction, Color Theory, Vector Brand Marks, Texture Synthesis, Concept Curation.",
        outcome: "Formulated a distinctive visual system establishing the atmospheric tone and visual anchor for the Observa brand."
      },
      {
        id: "swiftly",
        num: "PROJECT № 08",
        badge: "LOGO / MOODBOARD",
        title: "Swiftly Logo",
        tag: "Motion & Velocity Identity Design",
        developers: null,
        image: "project_swiftly.png",
        images: [
          { src: "project_swiftly.png", label: "Swiftly Moodboard" },
          { src: "project_moodboard.png", label: "Observa Moodboard" },
          { src: "project_paciencia.png", label: "Paciencia Moodboard" }
        ],
        viewUrl: "project_swiftly.png",
        externalUrl: "https://drive.google.com/drive/folders/1sjS6uuDCsiKj2qzE2xXuQlMMLHkb7JYN",
        ctaText: "View Full-Resolution Image",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Expressing energy, forward movement, and aerodynamic modernism in an identity concept tailored for fast-paced digital platforms.",
        tech: "Kinetic Layouts, Typography Contrast, Modern Color Palettes, Brand Guidelines, Visual Prototyping.",
        outcome: "Synthesized dynamic graphic assets emphasizing speed, agility, and streamlined visual harmony."
      },
      {
        id: "paciencia",
        num: "PROJECT № 09",
        badge: "LOGO / MOODBOARD",
        title: "Paciencia Logo",
        tag: "Minimalist Identity & Earth Tone Aesthetics",
        developers: null,
        image: "project_paciencia.png",
        images: [
          { src: "project_paciencia.png", label: "Paciencia Moodboard" },
          { src: "project_moodboard.png", label: "Observa Moodboard" },
          { src: "project_swiftly.png", label: "Swiftly Moodboard" }
        ],
        viewUrl: "project_paciencia.png",
        externalUrl: "https://drive.google.com/drive/folders/1sjS6uuDCsiKj2qzE2xXuQlMMLHkb7JYN",
        ctaText: "View Full-Resolution Image",
        secondaryCtaText: "Open Google Drive Folder",
        problem: "Cultivating a calming, mindful aesthetic emphasizing warmth, durability, and organic minimalism for sustainable lifestyle branding.",
        tech: "Earth-Tone Palettes, Organic Textures, Balanced Spacing, Serene Typographic Structure.",
        outcome: "Formulated a grounded, timeless visual identity evoking resilience, craft, and understated elegance."
      }
    ]
  }
];

// Flattened list for quick lookup
const allProjects = [];
categoriesData.forEach(cat => {
  cat.projects.forEach(p => {
    allProjects.push({ ...p, categoryId: cat.catId });
  });
});

let currentActiveId = "codeshark";

// Render Category Blocks
function renderCategories() {
  const container = document.getElementById('categoriesContainer');
  if (!container) return;
  container.innerHTML = '';

  categoriesData.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'category-group';
    section.id = `cat-${cat.catId}`;

    section.innerHTML = `
      <div class="category-header">
        <div class="category-title-wrap">
          <div class="category-icon-box">
            <i class="${cat.icon}"></i>
          </div>
          <div>
            <h3 class="category-name">${cat.catName}</h3>
            <p class="category-subtitle">${cat.catSubtitle}</p>
          </div>
        </div>
        <div class="category-nav-controls">
          <button class="carousel-arrow-btn" onclick="scrollCategoryCarousel('${cat.catId}', -1)" aria-label="Previous">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button class="carousel-arrow-btn" onclick="scrollCategoryCarousel('${cat.catId}', 1)" aria-label="Next">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div class="category-carousel-wrapper">
        <div class="category-carousel" id="carousel-${cat.catId}">
          ${cat.projects.map(p => `
            <div class="project-card ${p.id === currentActiveId ? 'active-project' : ''}" id="card-${p.id}" onclick="handleCardClick('${p.id}')">
              <div class="project-card-thumb">
                <span class="project-badge-tag">${p.badge}</span>
                
                <!-- Direct redirect link icon on thumbnail -->
                <a href="${p.viewUrl}" target="_blank" rel="noopener noreferrer" class="project-open-hint" title="Direct View Link" onclick="event.stopPropagation()">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <img src="${p.image}" alt="${p.title}" loading="lazy">
              </div>

              <div class="project-card-body">
                <div>
                  <h4 class="project-card-title">${p.title}</h4>
                  <p class="project-card-tag">${p.tag}</p>
                  ${p.developers ? `<p class="project-card-devs"><i class="fa-solid fa-users"></i> ${p.developers}</p>` : ''}
                </div>

                <div class="card-action-bar">
                  <span class="card-view-text">Click to inspect</span>
                  <button type="button" class="card-popout-btn" onclick="openProjectModal('${p.id}'); event.stopPropagation();">
                    <span>View Fully</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.appendChild(section);
  });
}

// When a card is clicked, update detail pane AND open pop-out modal to view fully
function handleCardClick(id) {
  selectProject(id);
  openProjectModal(id);
}

// Select project and update active card highlight
function selectProject(id) {
  const p = allProjects.find(item => item.id === id);
  if (!p) return;
  currentActiveId = id;

  // Update card active highlights
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.remove('active-project');
  });
  const currentCard = document.getElementById(`card-${p.id}`);
  if (currentCard) {
    currentCard.classList.add('active-project');
  }
}

let currentModalDeck = [];
let currentDeckFrontIndex = 0;

function renderFannedDeck() {
  const deckContainer = document.getElementById('fannedDeckCards');
  const counterEl = document.getElementById('fannedDeckCounter');
  if (!deckContainer || !currentModalDeck.length) return;

  const total = currentModalDeck.length;
  deckContainer.innerHTML = '';

  // Playing-card fan geometry: cards spread in an arc like a hand of cards,
  // with the selected front card raised and highlighted on top
  currentModalDeck.forEach((item, idx) => {
    const card = document.createElement('div');
    const isFront = idx === currentDeckFrontIndex;
    card.className = `fanned-card ${isFront ? 'is-front' : ''}`;

    const mid = (total - 1) / 2;
    const rel = idx - mid;
    const isMobile = window.innerWidth <= 640;
    const angle = rel * (isMobile ? 9 : 11); // fan angle per card
    const shiftX = rel * (isMobile ? 20 : 34); // responsive horizontal spread
    const shiftY = Math.abs(rel) * (isMobile ? 6 : 8) - (isFront ? (isMobile ? 10 : 14) : 0);
    const scale = isFront ? 1.05 : 0.94;
    const zIndex = isFront ? 30 : 10 + idx;

    card.style.transform = `translate(${shiftX}px, ${shiftY}px) rotate(${angle}deg) scale(${scale})`;
    card.style.zIndex = zIndex;

    const cornerIndices = ['A♠', 'K♠', 'Q♠', 'J♣', '10♠'];
    const badgeCorner = cornerIndices[idx % cornerIndices.length];

    card.innerHTML = `
      <span class="fanned-card-corner">${idx + 1} • ${badgeCorner}</span>
      <img src="${item.src}" alt="${item.label}">
      <span class="fanned-card-label">${item.label}</span>
    `;

    card.onclick = (e) => {
      e.stopPropagation();
      if (currentDeckFrontIndex === idx) {
        // Cycle to next card when clicking the front card
        currentDeckFrontIndex = (currentDeckFrontIndex + 1) % total;
      } else {
        currentDeckFrontIndex = idx;
      }
      renderFannedDeck();
    };

    deckContainer.appendChild(card);
  });

  if (counterEl) {
    const currentItem = currentModalDeck[currentDeckFrontIndex];
    counterEl.textContent = `${currentDeckFrontIndex + 1} / ${total} • ${currentItem.label}`;
  }
}

function cycleFannedCard(step, e) {
  if (e) e.stopPropagation();
  if (!currentModalDeck.length) return;
  const total = currentModalDeck.length;
  currentDeckFrontIndex = (currentDeckFrontIndex + step + total) % total;
  renderFannedDeck();
}

// Open Pop-Out Modal with Full Project Details & View Button
function openProjectModal(id) {
  const p = allProjects.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('projectModal');
  document.getElementById('modalBadge').textContent = p.badge;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalTag').textContent = p.tag;
  document.getElementById('modalProblem').textContent = p.problem;
  document.getElementById('modalTech').textContent = p.tech;
  document.getElementById('modalOutcome').textContent = p.outcome;

  const modalDevsBox = document.getElementById('modalDevsBox');
  const modalDevs = document.getElementById('modalDevs');
  if (modalDevsBox && modalDevs) {
    if (p.developers) {
      modalDevsBox.style.display = 'block';
      modalDevs.textContent = p.developers;
    } else {
      modalDevsBox.style.display = 'none';
    }
  }

  const modalWrapper = document.getElementById('modalImageWrapper');
  const modalImg = document.getElementById('modalImg');
  const modalDeck = document.getElementById('modalFannedDeck');

  if (p.images && p.images.length > 1 && modalDeck && modalWrapper) {
    modalImg.style.display = 'none';
    modalDeck.style.display = 'flex';
    modalWrapper.classList.add('deck-active');
    currentModalDeck = p.images;
    currentDeckFrontIndex = p.images.length - 1; // rightmost card in front just like the playing cards reference
    renderFannedDeck();
  } else {
    if (modalDeck) modalDeck.style.display = 'none';
    if (modalWrapper) modalWrapper.classList.remove('deck-active');
    modalImg.style.display = 'block';
    modalImg.src = p.image;
    modalImg.alt = p.title;
  }

  const actionBtn = document.getElementById('modalActionBtn');
  actionBtn.href = p.viewUrl;
  actionBtn.innerHTML = `<span>${p.ctaText}</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;

  const driveBtn = document.getElementById('modalDriveBtn');
  driveBtn.href = p.externalUrl;
  driveBtn.innerHTML = `<span>${p.secondaryCtaText}</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Pop-Out Modal
function closeProjectModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.closest('.modal-close-btn') && !e.target.classList.contains('btn-outline')) {
    return;
  }
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Carousel scroll by category
function scrollCategoryCarousel(catId, direction) {
  const carousel = document.getElementById(`carousel-${catId}`);
  if (!carousel) return;
  carousel.scrollBy({
    left: direction * 330,
    behavior: 'smooth'
  });
}

// Quick jump to category
function jumpToCategory(catId) {
  const target = document.getElementById(`cat-${catId}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.querySelectorAll('.cat-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === catId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Theme toggling
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('portfolio-theme', 'light');
      }
    });
  }
}

// Active Nav Link Spy
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });
}

// Contact Form Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('formEmail').value;
  showToast(`Thank you! Your inquiry from ${email} has been received.`);
  e.target.reset();
}

// Copy Institutional Email
function copyEmail() {
  navigator.clipboard.writeText('rmlanzanas@ccc.edu.ph');
  showToast("Email rmlanzanas@ccc.edu.ph copied to clipboard!");
}

// Toast Notification
function showToast(text) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

// Scroll-Reveal Animation across Page Sections & Cards (Synced with Scroll Direction)
function initScrollAnimations() {
  const revealSelectors = [
    '.hero-text-content',
    '.hero-image-wrapper',
    '.section-header',
    '.about-content',
    '.about-stat',
    '.cv-card-identity',
    '.cv-block',
    '.skill-category-card',
    '.category-quick-nav',
    '.category-header',
    '.project-card',
    '.testimonial-card',
    '.contact-info-col',
    '.contact-form-card',
    '.footer-brand-wrap',
    '.footer-col'
  ];

  let lastScrollTop = window.pageYOffset || 0;
  window.addEventListener('scroll', () => {
    const st = window.pageYOffset || 0;
    const scrollingDown = st >= lastScrollTop;
    document.documentElement.style.setProperty('--reveal-offset', scrollingDown ? '24px' : '-24px');
    lastScrollTop = st;
  }, { passive: true });

  const elements = document.querySelectorAll(revealSelectors.join(', '));
  elements.forEach((el) => {
    el.classList.add('scroll-reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const siblingIndex = Array.from(el.parentElement ? el.parentElement.children : []).indexOf(el);
        const delayMs = Math.min(Math.max(0, siblingIndex) * 55, 180);
        el.style.transitionDelay = `${delayMs}ms`;
        el.classList.add('is-visible');
      } else {
        el.style.transitionDelay = '0ms';
        el.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.06,
    rootMargin: '0px 0px -20px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Reactive Moving Background Objects (Smoothly Synced with Content Scroll & Cursor)
function initReactiveBackgroundObjects() {
  const objects = document.querySelectorAll('.bg-floating-obj');
  const cursorOrb = document.getElementById('bgCursorOrb');
  if (!objects.length && !cursorOrb) return;

  let mouseX = window.innerWidth * 0.5;
  let mouseY = window.innerHeight * 0.35;
  let currentX = mouseX;
  let currentY = mouseY;
  let targetScrollY = window.pageYOffset || 0;
  let currentScrollY = targetScrollY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('scroll', () => {
    targetScrollY = window.pageYOffset || 0;
  }, { passive: true });

  function animateBackground() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    currentScrollY += (targetScrollY - currentScrollY) * 0.14;

    if (cursorOrb) {
      cursorOrb.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;
    }

    const offsetX = currentX - window.innerWidth * 0.5;
    const offsetY = currentY - window.innerHeight * 0.5;

    objects.forEach((obj, idx) => {
      const depth = parseFloat(obj.getAttribute('data-depth') || '0.2');
      const moveX = offsetX * depth * 0.28;
      // Smoothly travel in the exact direction of page content without any wrap jumps
      const scrollShift = -(currentScrollY * depth * 0.38);
      const moveY = offsetY * depth * 0.28 + scrollShift;
      const rotZ = (currentScrollY * depth * 0.06) * (idx % 2 === 0 ? 1 : -1);

      obj.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0) rotateZ(${rotZ.toFixed(2)}deg)`;
    });

    requestAnimationFrame(animateBackground);
  }

  requestAnimationFrame(animateBackground);
}

// Mobile Navigation Drawer (iPhone / Android / Tablet)
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navLinksMenu');
  if (!menuBtn || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove('mobile-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('mobile-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('mobile-open') && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollSpy();
  renderCategories();
  selectProject('codeshark');
  initScrollAnimations();
  initReactiveBackgroundObjects();
});
