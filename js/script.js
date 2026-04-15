// ── Affix (sticky header shrink) ──────────────────────────────────────
(function() {
  var header = document.getElementById('top');
  var spacer = document.querySelector('.espace-affix');
  if (!header) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('affix');
    } else {
      header.classList.remove('affix');
    }
  });
})();

// ── Menu overlay ──────────────────────────────────────────────────────
(function() {
  var overlay    = document.getElementById('menu-overlay');
  var openBtn    = document.getElementById('menu-open-btn');
  var closeBtn   = document.getElementById('menu-close-btn');
  var body       = document.body;
  if (!overlay || !openBtn) return;

  openBtn.addEventListener('click', function() {
    overlay.classList.add('open');
    body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', function() {
    overlay.classList.remove('open');
    body.style.overflow = '';
    // close all subs
    document.querySelectorAll('.menu-overlay-sub').forEach(function(s){
      s.classList.remove('open');
    });
  });

  // Level-1 items with submenu
  document.querySelectorAll('.menu-overlay-item[data-sub]').forEach(function(item) {
    item.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault();
      var subId = item.getAttribute('data-sub');
      var sub = document.getElementById(subId);
      if (!sub) return;
      var isOpen = sub.classList.contains('open');
      // close all
      document.querySelectorAll('.menu-overlay-sub').forEach(function(s){
        s.classList.remove('open');
      });
      if (!isOpen) sub.classList.add('open');
    });
  });
})();

// ── Scroll to top button ──────────────────────────────────────────────
(function() {
  var btn = document.createElement('a');
  btn.href = '#';
  btn.className = 'scrollToTop';
  btn.setAttribute('aria-label', 'Наверх');
  btn.style.cssText = 'position:fixed;bottom:46%;right:0;width:40px;height:40px;background:#a92021;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;z-index:1010;border:1px solid rgba(255,255,255,.2);border-radius:0;text-decoration:none;';
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11V3M3 7l4-4 4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(btn);
  window.addEventListener('scroll', function() {
    btn.style.opacity = window.scrollY > 250 ? '1' : '0';
  });
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
})();
