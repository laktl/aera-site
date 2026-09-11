(() => {
  'use strict';

  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const THEME_KEY = 'aera-theme';

  const systemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const getOverride = () => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (err) {
      return null;
    }
  };

  const setOverride = (theme) => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (err) {
      /* storage unavailable — theme still applies for this session */
    }
  };

  const applyTheme = (theme) => {
    if (theme) {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
  };

  let override = getOverride();
  applyTheme(override);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = override || systemTheme();
      override = current === 'dark' ? 'light' : 'dark';
      setOverride(override);
      applyTheme(override);
    });
  }

  const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSchemeChange = () => {
    if (!getOverride()) {
      applyTheme(null);
    }
  };
  if (darkSchemeQuery.addEventListener) {
    darkSchemeQuery.addEventListener('change', handleSchemeChange);
  }

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const updateNavState = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
  }

  /* ---------- Centered anchor scrolling ---------- */
  const focusTargetFor = (hash) => {
    const section = document.querySelector(hash);
    if (!section) return null;
    if (hash === '#top') return section.querySelector('.hero__text') || section;
    return section.querySelector('h1, h2') || section;
  };

  const moveFocusTo = (el) => {
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    el.addEventListener(
      'blur',
      () => el.removeAttribute('tabindex'),
      { once: true }
    );
  };

  const scrollToCentered = (hash, { smooth = true, focus = true } = {}) => {
    const el = focusTargetFor(hash);
    if (!el) return;

    let top;
    if (hash === '#future') {
      // "Дальше" / "Скачать" take you all the way to the bottom of the page.
      top = document.documentElement.scrollHeight - window.innerHeight;
    } else {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2 + window.scrollY;
      top = elCenter - window.innerHeight / 2;
    }
    top = Math.max(0, top);

    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
    if (!focus) return;

    // Defer the focus move until the scroll settles so it can't interrupt
    // the in-flight smooth-scroll animation.
    if (smooth && 'onscrollend' in window) {
      window.addEventListener('scrollend', () => moveFocusTo(el), { once: true });
    } else {
      setTimeout(() => moveFocusTo(el), smooth ? 500 : 0);
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#' || !document.querySelector(hash)) return;
      e.preventDefault();
      scrollToCentered(hash, { smooth: !prefersReducedMotion, focus: true });
      history.pushState(null, '', hash);
    });
  });

  // Land centered on the relevant block on first paint too — whether the
  // page opens plain (hero) or via a shared link to a specific section.
  // The extra delay lets the browser's own fragment-scroll retries (which
  // can still fire late while images are settling) finish first, so ours
  // is the last word on the final scroll position.
  window.addEventListener('load', () => {
    const hash = window.location.hash || '#top';
    if (!document.querySelector(hash)) return;
    setTimeout(() => {
      requestAnimationFrame(() => scrollToCentered(hash, { smooth: false, focus: false }));
    }, 120);
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Live search demo ---------- */
  const demoSearchInput = document.getElementById('demoSearchInput');
  if (demoSearchInput) {
    const demoTracks = Array.from(document.querySelectorAll('.demo-track'));
    const demoEmpty = document.getElementById('demoSearchEmpty');

    demoSearchInput.addEventListener('input', () => {
      const query = demoSearchInput.value.trim().toLowerCase();
      let anyVisible = false;

      demoTracks.forEach((track) => {
        const title = (track.dataset.title || '').toLowerCase();
        const artist = (track.dataset.artist || '').toLowerCase();
        const matches = !query || title.includes(query) || artist.includes(query);
        track.classList.toggle('is-hidden', !matches);
        if (matches) anyVisible = true;
      });

      if (demoEmpty) demoEmpty.hidden = anyVisible;
    });
  }
})();
