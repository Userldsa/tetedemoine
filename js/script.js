// ── Affix (shrink header on scroll) ──────────────────────────────────
(function() {
  var header = document.getElementById('top');
  if (!header) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('affix');
      document.body.classList.add('affix-on');
    } else {
      header.classList.remove('affix');
      document.body.classList.remove('affix-on');
    }
  });
})();

// ── Nav dropdown menu ─────────────────────────────────────────────────
(function() {
  var openBtn  = document.getElementById('menu-open-btn');
  var dropdown = document.getElementById('nav-dropdown');
  var closeBtn = document.getElementById('nav-dd-close');
  if (!openBtn || !dropdown) return;

  openBtn.addEventListener('click', function() {
    var isOpen = dropdown.classList.contains('open');
    dropdown.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      dropdown.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (dropdown.classList.contains('open') &&
        !dropdown.contains(e.target) &&
        !openBtn.contains(e.target)) {
      dropdown.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

// ── Scroll to top button ──────────────────────────────────────────────
(function() {
  var btn = document.createElement('a');
  btn.href = '#';
  btn.setAttribute('aria-label', 'Наверх');
  btn.style.cssText = 'position:fixed;bottom:46%;right:0;width:40px;height:40px;background:#a92021;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;z-index:1010;border:1px solid rgba(255,255,255,.2);border-radius:0;text-decoration:none;';
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11V3M3 7l4-4 4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(btn);
  window.addEventListener('scroll', function() { btn.style.opacity = window.scrollY > 250 ? '1' : '0'; });
  btn.addEventListener('click', function(e) { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
})();
