/* ============================================================
   MIKE DENZ — denzmike.com · El Templo
   Toda la configuración editable está en este primer bloque.
   ============================================================ */

/* ---------- CONFIGURACIÓN ---------- */

/* Videobook: pega aquí tu enlace de Vimeo cuando lo tengas
   (vale la URL entera "https://vimeo.com/123456789" o solo el número).
   Alternativas: un ID de YouTube en youtube, o un archivo propio en mp4. */
const VIDEO = {
  vimeo: '',
  youtube: '',
  mp4: ''
};

/* Salas ocultas temporalmente. Mientras 'videobook' esté en esta lista,
   la sala y su enlace del menú desaparecen, y el botón principal del
   Inicio lleva a la Galería. Cuando tengas el vídeo: pega el enlace en
   VIDEO (arriba) y deja la lista vacía → const SALAS_OCULTAS = [];  */
const SALAS_OCULTAS = ['videobook'];

/* Galería: edita esta lista con tus archivos reales dentro de /img.
   group = en qué bloque se muestra: 'book' (Book / Casting),
   'movimiento' (Movimiento) o 'editorial' (Editorial, al final).
   cap = descripción interna de la foto (no se muestra: solo se usa
   como texto alternativo para accesibilidad).
   Para quitar una foto de la web, borra su línea.
   Si una foto no existe en el servidor, su hueco desaparece solo. */
const GALLERY = [
  { src: 'img/galeria-02.jpg', group: 'book',       cap: { es: 'Retrato natural',    en: 'Natural portrait' } },
  { src: 'img/galeria-03.jpg', group: 'book',       cap: { es: 'Retrato — sonrisa',  en: 'Portrait — smile' } },
  { src: 'img/galeria-04.jpg', group: 'book',       cap: { es: 'Perfil',             en: 'Profile' } },
  { src: 'img/galeria-06.jpg', group: 'book',       cap: { es: 'Risa',               en: 'Laughter' } },
  { src: 'img/galeria-07.jpg', group: 'book',       cap: { es: 'Cuerpo entero',      en: 'Full body' } },
  { src: 'img/galeria-12.jpg', group: 'movimiento', cap: { es: 'Danza',              en: 'Dance' } },
  { src: 'img/galeria-13.jpg', group: 'movimiento', cap: { es: 'Danza',              en: 'Dance' } },
  { src: 'img/galeria-08.jpg', group: 'editorial',  cap: { es: 'Editorial',          en: 'Editorial' } },
  { src: 'img/galeria-09.jpg', group: 'editorial',  cap: { es: 'Editorial',          en: 'Editorial' } },
  { src: 'img/galeria-10.jpg', group: 'editorial',  cap: { es: 'Editorial',          en: 'Editorial' } },
  { src: 'img/galeria-11.jpg', group: 'editorial',  cap: { es: 'Editorial',          en: 'Editorial' } },
  { src: 'img/galeria-05.jpg', group: 'editorial',  cap: { es: 'Medio cuerpo',       en: 'Half body' } }
];

/* Plataformas de casting (opcional). Descomenta y rellena:
   se añaden solas a las placas de Contacto. */
const CASTING = [
  // { label: 'e-talenta',   url: 'https://www.e-talenta.eu/...' },
  // { label: 'Yatecasting', url: 'https://www.yatecasting.com/...' }
];

/* ---------- DICCIONARIO ES / EN ---------- */
const I18N = {
  es: {
    'a11y.skip': 'Ir al contenido',
    'nav.home': 'Inicio', 'nav.videobook': 'Videobook', 'nav.galeria': 'Galería',
    'nav.curriculum': 'Trayectoria', 'nav.contacto': 'Contacto',
    'home.eyebrow': 'Actor — Madrid · Asturias',
    'home.cta': 'Ver videobook',
    'home.cta.gal': 'Ver galería',
    'home.cta2': 'Galería',
    'vb.eyebrow': 'Material de casting', 'vb.h1a': 'Video', 'vb.h1b': 'book',
    'vb.note': 'Añade tu enlace de Vimeo en js/app.js',
    'vb.title': 'Videobook · 2026',
    'vb.meta': 'Escenas y monólogo — castellano / english',
    'gal.eyebrow': 'La exposición', 'gal.h1a': 'Gale', 'gal.h1b': 'ría',
    'gal.lead': 'Retratos y cuerpo entero.',
    'gal.outro': 'Fin de la exposición.',
    'gal.g1': 'Book', 'gal.g2': 'Danza', 'gal.g3': 'Editorial',
    'cv.eyebrow': 'La trayectoria', 'cv.h1a': 'Trayec', 'cv.h1b': 'toria',
    'cv.statement': 'Formación continua, escena y cámara. Interpretación en castellano e inglés.',
    'cv.m1': 'Residencia', 'cv.m2': 'Idiomas', 'cv.m2v': 'Español · Inglés C1 · Francés B2',
    'cv.m4': 'Edad aparente', 'cv.m4v': '18 – 25 años', 'cv.m5': 'Altura',
    'cv.m6': 'Ojos', 'cv.m6v': 'Marrones', 'cv.m7': 'Pelo', 'cv.m7v': 'Castaño',
    'cv.pdf': 'Descargar CV',
    'cv.b1': 'Audiovisual', 'cv.b2': 'Teatro', 'cv.b3': 'Formación', 'cv.b4': 'Danza y Movimiento', 'cv.b5': 'Habilidades',
    'cv.c1': 'Dir. Mike Denz (Cortometraje independiente)',
    'cv.c2': 'Dir. Pablo García — CISLAN · Cortometraje',
    'cv.c3': 'Dir. Patricia Caso, Mario Villar — Teatro Joven Avilés',
    'cv.c4': 'Dir. Cristina Puertas — Factoría Cultural',
    'cv.r1': 'Protagonista', 'cv.r2': 'Secundario', 'cv.r3': 'Reparto principal', 'cv.r4': 'Secundario',
    'cv.r6': 'Protagonista (Argán)',
    'cv.f1': 'Entrenamiento actoral · Actors Studio', 'cv.f2': 'Masterclass internacional',
    'cv.f3': 'Técnica Chéjov', 'cv.f4': 'Formación base de teatro · Factoría Cultural',
    'cv.f5': 'Interpretación e improvisación', 'cv.f6': 'Interpretación ante la cámara',
    'cv.f7': 'Verso · Fundación Siglo de Oro',
    'cv.s1': 'Danza Contemporánea', 'cv.s1n': 'Nivel avanzado y docencia',
    'cv.s2': 'Danza Urbana / Commercial', 'cv.s2n': 'Nivel avanzado y docencia',
    'cv.s3': 'Ballet Clásico', 'cv.s3n': 'Nivel intermedio',
    'cv.s4': 'Escalada', 'cv.s5': 'Carnet de conducir', 'cv.s6': 'Acrobacia / Control corporal',
    'ct.eyebrow': 'Hablemos', 'ct.h1a': 'Con', 'ct.h1b': 'tacto',
    'ct.lead': 'Disponible para casting, cine y escena.',
    'ct.copy': 'El clic copia la dirección', 'ct.copied': 'Copiada —',
    'ct.k1': 'Teléfono', 'ct.k2': 'Residencia',
    'ct.rights': 'Mike Denz — Actor · MMXXVI',
    'lb.prev': 'Ant', 'lb.next': 'Sig'
  },
  en: {
    'a11y.skip': 'Skip to content',
    'nav.home': 'Home', 'nav.videobook': 'Showreel', 'nav.galeria': 'Gallery',
    'nav.curriculum': 'Résumé', 'nav.contacto': 'Contact',
    'home.eyebrow': 'Actor — Madrid · Asturias',
    'home.cta': 'Watch showreel',
    'home.cta.gal': 'View gallery',
    'home.cta2': 'Gallery',
    'vb.eyebrow': 'Casting material', 'vb.h1a': 'Show', 'vb.h1b': 'reel',
    'vb.note': 'Add your Vimeo link in js/app.js',
    'vb.title': 'Showreel · 2026',
    'vb.meta': 'Scenes & monologue — Spanish / English',
    'gal.eyebrow': 'The exhibition', 'gal.h1a': 'Gall', 'gal.h1b': 'ery',
    'gal.lead': 'Portraits and full body.',
    'gal.outro': 'End of the exhibition.',
    'gal.g1': 'Book', 'gal.g2': 'Dance', 'gal.g3': 'Editorial',
    'cv.eyebrow': 'The trajectory', 'cv.h1a': 'Rés', 'cv.h1b': 'umé',
    'cv.statement': 'Ongoing training, stage and camera. Performing in Spanish and English.',
    'cv.m1': 'Based in', 'cv.m2': 'Languages', 'cv.m2v': 'Spanish · English C1 · French B2',
    'cv.m4': 'Playing age', 'cv.m4v': '18 – 25 years', 'cv.m5': 'Height',
    'cv.m6': 'Eyes', 'cv.m6v': 'Brown', 'cv.m7': 'Hair', 'cv.m7v': 'Brown',
    'cv.pdf': 'Download CV',
    'cv.b1': 'Film & TV', 'cv.b2': 'Theatre', 'cv.b3': 'Training', 'cv.b4': 'Dance & Movement', 'cv.b5': 'Skills',
    'cv.c1': 'Dir. Mike Denz (Independent short film)',
    'cv.c2': 'Dir. Pablo García — CISLAN · Short film',
    'cv.c3': 'Dir. Patricia Caso, Mario Villar — Teatro Joven Avilés',
    'cv.c4': 'Dir. Cristina Puertas — Factoría Cultural',
    'cv.r1': 'Lead', 'cv.r2': 'Supporting', 'cv.r3': 'Principal cast', 'cv.r4': 'Supporting',
    'cv.r6': 'Lead (Argan)',
    'cv.f1': 'Acting training · Actors Studio', 'cv.f2': 'International masterclass',
    'cv.f3': 'Chekhov technique', 'cv.f4': 'Core theatre training · Factoría Cultural',
    'cv.f5': 'Acting & improvisation', 'cv.f6': 'On-camera acting',
    'cv.f7': 'Verse · Fundación Siglo de Oro',
    'cv.s1': 'Contemporary dance', 'cv.s1n': 'Advanced level and teaching',
    'cv.s2': 'Urban / Commercial dance', 'cv.s2n': 'Advanced level and teaching',
    'cv.s3': 'Classical ballet', 'cv.s3n': 'Intermediate level',
    'cv.s4': 'Climbing', 'cv.s5': 'Driving licence', 'cv.s6': 'Acrobatics / Body control',
    'ct.eyebrow': 'Let’s talk', 'ct.h1a': 'Con', 'ct.h1b': 'tact',
    'ct.lead': 'Available for casting, film and stage.',
    'ct.copy': 'Click copies the address', 'ct.copied': 'Copied —',
    'ct.k1': 'Phone', 'ct.k2': 'Based in',
    'ct.rights': 'Mike Denz — Actor · MMXXVI',
    'lb.prev': 'Prev', 'lb.next': 'Next'
  }
};

const ARIA = {
  es: {
    toLight: 'Cambiar a modo claro', toDark: 'Cambiar a modo oscuro',
    menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
    play: 'Reproducir videobook', lang: 'Switch to English',
    themeLight: 'Modo claro', themeDark: 'Modo oscuro'
  },
  en: {
    toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
    menuOpen: 'Open menu', menuClose: 'Close menu',
    play: 'Play showreel', lang: 'Cambiar a español',
    themeLight: 'Light mode', themeDark: 'Dark mode'
  }
};

/* ============================================================
   NÚCLEO
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Almacenamiento seguro (Safari privado, iframes, etc.) */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin persistencia */ } }
  };

  let lang  = store.get('md_lang')  === 'en' ? 'en' : 'es';
  let theme = store.get('md_theme') === 'light' ? 'light' : 'dark';

  const LEAVE_MS = reduced ? 0 : 430;

  /* ---------- Tema ---------- */
  const themeBtns = [$('#themeToggle'), $('#themeToggleM')].filter(Boolean);

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    store.set('md_theme', theme);
    const a = ARIA[lang];
    themeBtns.forEach(function (b) {
      b.setAttribute('aria-label', theme === 'dark' ? a.toLight : a.toDark);
    });
    const m = $('#themeToggleM');
    if (m) m.textContent = theme === 'dark' ? a.themeLight : a.themeDark;
  }
  themeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme();
    });
  });

  /* ---------- Idioma ---------- */
  const langBtns = [$('#langToggle'), $('#langToggleM')].filter(Boolean);

  function applyLang() {
    document.documentElement.lang = lang;
    store.set('md_lang', lang);
    const dict = I18N[lang];
    $$('[data-i18n]').forEach(function (el) {
      const k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.textContent = dict[k];
    });
    const a = ARIA[lang];
    langBtns.forEach(function (b) {
      b.textContent = lang === 'es' ? 'EN' : 'ES';
      b.setAttribute('aria-label', a.lang);
    });
    const nt = $('#navToggle');
    if (nt) nt.setAttribute('aria-label', nt.classList.contains('is-open') ? a.menuClose : a.menuOpen);
    const pb = $('#posterBtn');
    if (pb) pb.setAttribute('aria-label', a.play);
    const hint = $('#mailHint');
    if (hint && !hint.classList.contains('is-copied')) hint.textContent = I18N[lang]['ct.copy'];
    applyTheme(); /* refresca etiquetas dependientes del idioma */
  }
  langBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      lang = lang === 'es' ? 'en' : 'es';
      applyLang();
    });
  });

  /* ---------- Cabecera al hacer scroll ---------- */
  const head = $('#siteHead');
  function onScroll() { head.classList.toggle('is-scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menú móvil ---------- */
  const navToggle = $('#navToggle');
  const navVeil = $('#navVeil');

  function setMenu(open) {
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? ARIA[lang].menuClose : ARIA[lang].menuOpen);
    navVeil.classList.toggle('is-open', open);
    navVeil.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('is-locked', open);
  }
  navToggle.addEventListener('click', function () {
    setMenu(!navVeil.classList.contains('is-open'));
  });

  /* ---------- Salas ocultas (ver SALAS_OCULTAS arriba) ---------- */
  SALAS_OCULTAS.forEach(function (r) {
    $$('.sala[data-route="' + r + '"], .room-link[data-route="' + r + '"]').forEach(function (el) { el.remove(); });
  });
  if (SALAS_OCULTAS.indexOf('videobook') !== -1) {
    /* El botón principal del Inicio lleva a la Galería y se quita el enlace duplicado */
    const cta = $('.magnet-btn');
    if (cta) {
      cta.setAttribute('href', '#galeria');
      cta.setAttribute('data-route', 'galeria');
      const lbl = $('.lbl', cta);
      if (lbl) lbl.setAttribute('data-i18n', 'home.cta.gal');
    }
    const ghost = $('.ghost-link');
    if (ghost) ghost.remove();
  }

  /* ---------- Numeración romana automática (se recompone sola) ---------- */
  (function numerals() {
    const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
    $$('.sala').forEach(function (sala, i) {
      $$('.room-link[data-route="' + sala.dataset.route + '"] .rn').forEach(function (el) { el.textContent = ROMAN[i]; });
      const num = $('.eyebrow .num', sala);
      if (num) num.textContent = ROMAN[i];
    });
  })();

  /* ---------- Router de salas ---------- */
  const salas = {};
  $$('.sala').forEach(function (s) { salas[s.dataset.route] = s; });
  const DEFAULT_ROUTE = 'home';
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  let current = null;
  let animating = false;
  let pending = null;
  const filament = $('#filament');

  function routeFromHash() {
    const h = location.hash.replace('#', '');
    return salas[h] ? h : DEFAULT_ROUTE;
  }

  function markNav(route) {
    $$('[data-route]').forEach(function (el) {
      if (el.classList.contains('room-link')) {
        if (el.dataset.route === route) el.setAttribute('aria-current', 'page');
        else el.removeAttribute('aria-current');
      }
    });
  }

  function show(route, first) {
    const next = salas[route];
    next.hidden = false;
    void next.offsetWidth; /* reflow: fija el estado inicial antes de animar */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { next.classList.add('is-in'); });
    });
    current = route;
    markNav(route);
    if (!first && !reduced) {
      filament.classList.remove('is-running');
      void filament.offsetWidth;
      filament.classList.add('is-running');
    }
  }

  function navigate(route) {
    if (route === current) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (animating) { pending = route; return; }
    animating = true;

    const from = salas[current];
    from.classList.add('is-out');

    window.setTimeout(function () {
      from.classList.remove('is-in', 'is-out');
      from.hidden = true;
      try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
      catch (e) { window.scrollTo(0, 0); }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      show(route, false);
      window.setTimeout(function () {
        animating = false;
        if (pending) { const p = pending; pending = null; navigate(p); }
      }, 60);
    }, LEAVE_MS);
  }

  /* Clics en cualquier enlace de sala */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-route]');
    if (!link) return;
    e.preventDefault();
    const route = link.dataset.route;
    setMenu(false);
    if ('#' + route !== location.hash) {
      location.hash = route; /* dispara hashchange → navigate */
    } else {
      navigate(route);
    }
  });
  window.addEventListener('hashchange', function () { navigate(routeFromHash()); });

  /* ---------- Velo de entrada ---------- */
  const veil = $('#entryVeil');
  function openTemple() {
    show(routeFromHash(), true);
    onScroll();
  }
  if (reduced) {
    veil.classList.add('is-lifted');
    openTemple();
  } else {
    const minWait = new Promise(function (r) { setTimeout(r, 950); });
    const fonts = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    Promise.all([minWait, fonts]).then(function () {
      veil.classList.add('is-lifted');
      setTimeout(openTemple, 150);
    });
  }

  /* ---------- Botón magnético ---------- */
  (function magnet() {
    if (!finePointer || reduced) return;
    const wrap = $('.magnet');
    if (!wrap) return;
    const btn = $('.magnet-btn', wrap);
    const lbl = $('.lbl', btn);
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    function loop() {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      btn.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)';
      lbl.style.transform = 'translate(' + (cx * 0.35).toFixed(2) + 'px,' + (cy * 0.35).toFixed(2) + 'px)';
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf = requestAnimationFrame(loop);
      else raf = null;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }

    wrap.addEventListener('pointermove', function (e) {
      const r = wrap.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * 0.34;
      ty = (e.clientY - (r.top + r.height / 2)) * 0.34;
      kick();
    });
    wrap.addEventListener('pointerleave', function () { tx = 0; ty = 0; kick(); });
  })();

  /* ---------- Videobook ---------- */
  (function altar() {
    const player = $('#player');
    const poster = $('#posterBtn');
    const note = $('#playerNote');
    if (!player || !poster) return;

    poster.addEventListener('click', function () {
      const vimeoId = VIDEO.vimeo ? (String(VIDEO.vimeo).match(/\d{6,}/) || [null])[0] : null;
      if (vimeoId) {
        const f = document.createElement('iframe');
        f.src = 'https://player.vimeo.com/video/' + vimeoId +
                '?autoplay=1&title=0&byline=0&portrait=0&dnt=1';
        f.allow = 'autoplay; fullscreen; picture-in-picture';
        f.allowFullscreen = true;
        f.title = 'Videobook — Mike Denz';
        player.innerHTML = '';
        player.appendChild(f);
      } else if (VIDEO.youtube) {
        const f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + VIDEO.youtube +
                '?autoplay=1&rel=0&modestbranding=1&color=white';
        f.allow = 'autoplay; fullscreen; picture-in-picture';
        f.allowFullscreen = true;
        f.title = 'Videobook — Mike Denz';
        player.innerHTML = '';
        player.appendChild(f);
      } else if (VIDEO.mp4) {
        const v = document.createElement('video');
        v.src = VIDEO.mp4;
        v.controls = true; v.autoplay = true; v.playsInline = true;
        player.innerHTML = '';
        player.appendChild(v);
      } else if (note) {
        note.classList.add('is-shown');
        setTimeout(function () { note.classList.remove('is-shown'); }, 2800);
      }
    });
  })();

  /* ---------- Galería + lightbox ---------- */
  const expo = $('#expoWrap');
  const seer = ('IntersectionObserver' in window) && !reduced
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('is-seen');
            seer.unobserve(en.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -6%' })
    : null;

  GALLERY.forEach(function (item) {
    const box = $('.expo[data-group="' + (item.group || 'book') + '"]', expo);
    if (!box) return;
    const fig = document.createElement('figure');
    fig.className = 'obra';
    fig.tabIndex = 0;
    fig.setAttribute('role', 'button');
    fig.innerHTML =
      '<div class="frame">' +
        '<img src="' + item.src + '" alt="Mike Denz — ' + item.cap.es + '" loading="lazy" decoding="async">' +
      '</div>';

    const img = $('img', fig);
    img.addEventListener('error', function () { fig.remove(); });

    fig.addEventListener('click', function () { openLightbox(fig); });
    fig.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(fig); }
    });

    box.appendChild(fig);
    if (seer) seer.observe(fig); else fig.classList.add('is-seen');
  });

  /* Si un grupo se queda sin fotos, se quita también su subtítulo */
  $$('.expo[data-group]', expo).forEach(function (box) {
    if (box.children.length) return;
    const h = box.previousElementSibling;
    if (h && h.classList.contains('expo-group')) h.remove();
    box.remove();
  });

  /* Lightbox */
  const lb = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCount = $('#lbCount');
  let lbList = [];
  let lbIndex = 0;
  let lbReturnFocus = null;

  function pad2(n) { return String(n).padStart(2, '0'); }

  function renderLb() {
    const img = $('img', lbList[lbIndex]);
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCount.textContent = pad2(lbIndex + 1) + ' / ' + pad2(lbList.length);
  }
  function openLightbox(fig) {
    lbList = $$('.obra', expo);
    lbIndex = lbList.indexOf(fig);
    if (lbIndex < 0) return;
    lbReturnFocus = fig;
    renderLb();
    lb.classList.add('is-open');
    document.body.classList.add('is-locked');
    $('#lbClose').focus();
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    if (lbReturnFocus) lbReturnFocus.focus();
  }
  function stepLb(d) {
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    lbImg.style.opacity = '0';
    setTimeout(function () { renderLb(); lbImg.style.opacity = ''; }, 180);
  }

  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', function () { stepLb(-1); });
  $('#lbNext').addEventListener('click', function () { stepLb(1); });
  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('stage')) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (lb.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') stepLb(-1);
      if (e.key === 'ArrowRight') stepLb(1);
    } else if (e.key === 'Escape' && navVeil.classList.contains('is-open')) {
      setMenu(false);
    }
  });

  /* Gesto de barrido en el lightbox */
  let swipeX = null;
  lb.addEventListener('pointerdown', function (e) { swipeX = e.clientX; });
  lb.addEventListener('pointerup', function (e) {
    if (swipeX == null) return;
    const dx = e.clientX - swipeX;
    if (Math.abs(dx) > 44) stepLb(dx > 0 ? -1 : 1);
    swipeX = null;
  });

  /* ---------- Placas de casting (Contacto) ---------- */
  (function castingPlaques() {
    if (!CASTING.length) return;
    const plaques = $('#plaques');
    const last = plaques.lastElementChild; /* Residencia queda al final */
    CASTING.forEach(function (c) {
      const a = document.createElement('a');
      a.className = 'plaque';
      a.href = c.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = '<span class="k">Casting</span><span class="v">' + c.label + '</span>';
      plaques.insertBefore(a, last);
    });
  })();

  /* ---------- Correo: clic copia la dirección ---------- */
  (function mailCopy() {
    const mail = $('#mailXl');
    const hint = $('#mailHint');
    if (!mail || !hint) return;
    mail.addEventListener('click', function () {
      if (!navigator.clipboard) return; /* el mailto sigue su curso */
      navigator.clipboard.writeText('mikedenz.actor@gmail.com').then(function () {
        hint.classList.add('is-copied');
        hint.textContent = I18N[lang]['ct.copied'] + ' mikedenz.actor@gmail.com';
        setTimeout(function () {
          hint.classList.remove('is-copied');
          hint.textContent = I18N[lang]['ct.copy'];
        }, 2600);
      }).catch(function () { /* silencio: el mailto ya se abre */ });
    });
  })();

  /* ---------- CV: guardar como PDF (impresión) ---------- */
  (function cvPdf() {
    const btn = $('#cvPrint');
    let oldTitle = null;

    function before() {
      if (current !== 'curriculum') return;
      if (oldTitle === null) oldTitle = document.title;
      document.title = 'CV_MikeDenz_' + new Date().getFullYear(); /* nombre del archivo */
      document.body.classList.add('print-cv');
    }
    function after() {
      document.body.classList.remove('print-cv');
      if (oldTitle !== null) { document.title = oldTitle; oldTitle = null; }
    }
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    if (btn) btn.addEventListener('click', function () { before(); window.print(); });
  })();

  /* ---------- Estado inicial ---------- */
  applyLang(); /* aplica idioma + tema guardados */

})();