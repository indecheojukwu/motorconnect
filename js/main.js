/* Motor Connect Africa — shared JS */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile hamburger ---- */
  const ham = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  if (ham && drawer) {
    ham.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      ham.innerHTML = open
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ---- Mobile sub-menus ---- */
  document.querySelectorAll('.mob-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      const icon = btn.querySelector('.mob-chev');
      if (sub && sub.classList.contains('mob-sub')) {
        sub.classList.toggle('open');
        if (icon) icon.style.transform = sub.classList.contains('open') ? 'rotate(90deg)' : '';
      }
    });
  });

  /* ---- Search tabs ---- */
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.search-tabs').querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ---- Filter tabs ---- */
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.listings-filter-tabs');
      if (parent) parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ---- Category pills (articles page) ---- */
  document.querySelectorAll('.category-pill').forEach(p => {
    p.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(x => x.classList.remove('active'));
      p.classList.add('active');
    });
  });

  /* ---- Favourite toggle ---- */
  document.querySelectorAll('.vehicle-fav').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.toggle('active');
      btn.querySelector('i').className = btn.classList.contains('active')
        ? 'bi bi-heart-fill' : 'bi bi-heart';
    });
  });

  /* ---- Gallery thumbs ---- */
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  /* ---- View toggle (grid/list) ---- */
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ---- Package selector ---- */
  document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  /* ---- Dealer profile tabs ---- */
  window.showTab = (name, btn) => {
    ['listings','reviews','about'].forEach(t => {
      const el = document.getElementById('tab-' + t);
      if (el) el.style.display = t === name ? 'block' : 'none';
    });
    document.querySelectorAll('.tab-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  };

  /* ---- Models alpha filter ---- */
  window.filterAlpha = (letter, btn) => {
    document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    document.querySelectorAll('.make-section').forEach(sec => {
      sec.style.display = (letter === 'all' || sec.dataset.make === letter) ? 'block' : 'none';
    });
  };
});
