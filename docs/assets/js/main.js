(() => {
  const nav = document.getElementById('site-nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-solid', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const reveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveal.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveal.forEach((el) => io.observe(el));
  } else {
    reveal.forEach((el) => el.classList.add('is-visible'));
  }

  const toast = document.getElementById('copy-toast');
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      const label = btn.querySelector('.copy-label');
      const original = label?.textContent;
      if (label) label.textContent = 'Copied';
      if (toast) {
        toast.classList.add('is-visible');
        setTimeout(() => toast.classList.remove('is-visible'), 1600);
      }
      setTimeout(() => {
        if (label && original) label.textContent = original;
      }, 2000);
    });
  });

  const calendarToggle = document.getElementById('gather-toggle');
  const calendarPanel = document.getElementById('gather-calendar');
  if (calendarToggle && calendarPanel) {
    const chevron = calendarToggle.querySelector('[data-chevron]');
    const labelClosed = calendarToggle.querySelector('[data-label-closed]');
    const labelOpen = calendarToggle.querySelector('[data-label-open]');
    calendarToggle.addEventListener('click', () => {
      const isOpen = calendarPanel.classList.toggle('hidden') === false;
      calendarToggle.setAttribute('aria-expanded', String(isOpen));
      if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : '';
      if (labelClosed) labelClosed.classList.toggle('hidden', isOpen);
      if (labelOpen) labelOpen.classList.toggle('hidden', !isOpen);
      if (isOpen) {
        calendarPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
