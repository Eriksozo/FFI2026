/* ============================================================
   FFI — effects engine
   Scroll reveals · staggered cards · hero parallax glow ·
   count-up prices · sticky CTA bar.  Vanilla, dependency-free.
   Safe to load in the browser once (guards against double init).
   ============================================================ */
(function () {
  if (window.__ffiEffects) return;
  window.__ffiEffects = true;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    /* force a reflow once webfonts finish loading so Bebas line-wrapping
       recomputes box heights (prevents title/subtitle overlap) */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        document.querySelectorAll('.hero-title, .hero-head, .h-section').forEach(function (el) {
          void el.offsetHeight;
        });
      });
    }

    /* ---- 1. mark elements to reveal ---- */
    var revealSelectors = [
      '.eyebrow', '.h-lead', '.h-section', '.h-sub',
      '.body-text', '.video-wrap', '.btn', '.seal',
      '.icon-list', '.about-img', '.footer-logo'
    ];
    revealSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (el.closest('.sticky-bar')) return;
        el.classList.add('reveal');
      });
    });

    /* staggered grids — add reveal + incremental delay to each child */
    document.querySelectorAll('.bonus-grid, .plans').forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child, i) {
        child.classList.add('reveal');
        child.style.transitionDelay = (i * 90) + 'ms';
      });
    });
    /* compare cards slide in from the sides */
    document.querySelectorAll('.compare').forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child, i) {
        child.classList.add('reveal', i === 0 ? 'reveal--left' : 'reveal--right');
      });
    });
    /* two-column blocks: image zooms, text rises */
    document.querySelectorAll('.cols, .about-card').forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child) {
        child.classList.add('reveal');
      });
    });

    if (reduce) return; // reveals already visible via CSS guard

    /* ---- 2. intersection observer ---- */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          if (e.target.classList.contains('price-big')) countUp(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    document.querySelectorAll('.price-big').forEach(function (el) { io.observe(el); });
    document.querySelectorAll('.h-section, .about-card h2').forEach(function (el) {
      el.classList.add('reveal'); io.observe(el);
    });

    /* ---- 3. count-up on price numbers ---- */
    function countUp(el) {
      if (el.dataset.counted) return;
      el.dataset.counted = '1';
      var raw = el.textContent;
      var m = raw.match(/^(\D*)([\d.]+)(.*)$/);
      if (!m) return;
      var prefix = m[1], target = parseInt(m[2].replace(/\D/g, ''), 10), suffix = m[3];
      if (!isFinite(target) || target <= 0) return;
      var dur = 1100, start = null;
      el.classList.add('is-counting');
      function frame(t) {
        if (start === null) start = t;
        var p = Math.min((t - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(frame);
        else { el.textContent = raw; el.classList.remove('is-counting'); }
      }
      requestAnimationFrame(frame);
    }

    /* ---- 4. hero parallax glow ---- */
    var hero = document.querySelector('.hero-glow');
    if (hero) {
      window.addEventListener('mousemove', function (e) {
        var x = (e.clientX / window.innerWidth - 0.5) * 26;
        var y = (e.clientY / window.innerHeight - 0.5) * 26;
        hero.style.setProperty('--glow-x', x.toFixed(1) + 'px');
        hero.style.setProperty('--glow-y', y.toFixed(1) + 'px');
      }, { passive: true });
    }

    /* ---- 5. sticky CTA bar ---- */
    var bar = document.querySelector('.sticky-bar');
    var footer = document.querySelector('.footer');
    if (bar) {
      var onScroll = function () {
        var past = window.scrollY > (window.innerHeight * 0.85);
        var nearFooter = false;
        if (footer) {
          var fr = footer.getBoundingClientRect();
          nearFooter = fr.top < window.innerHeight + 40;
        }
        bar.classList.toggle('visible', past && !nearFooter);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* ===================================================================
       ADVANCED VISUAL FX
       =================================================================== */

    /* 6. scroll progress bar */
    var prog = document.createElement('div');
    prog.className = 'scroll-progress';
    document.body.appendChild(prog);
    var updateProg = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? window.scrollY / h : 0;
      prog.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    };
    window.addEventListener('scroll', updateProg, { passive: true });
    window.addEventListener('resize', updateProg, { passive: true });
    updateProg();

    /* 7. aurora background */
    var aurora = document.createElement('div');
    aurora.className = 'aurora';
    aurora.innerHTML = '<i></i><i></i><i></i>';
    document.body.appendChild(aurora);

    /* 8. cursor glow */
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    var gx = window.innerWidth / 2, gy = window.innerHeight / 2, glx = gx, gly = gy;
    window.addEventListener('mousemove', function (e) { gx = e.clientX; gy = e.clientY; }, { passive: true });
    (function gloop() {
      glx += (gx - glx) * 0.12; gly += (gy - gly) * 0.12;
      glow.style.transform = 'translate3d(' + glx + 'px,' + gly + 'px,0)';
      requestAnimationFrame(gloop);
    })();

    /* 9. hero floating particles */
    var hero = document.querySelector('.hero-glow');
    if (hero) {
      var pc = document.createElement('div');
      pc.className = 'particles';
      var n = window.innerWidth < 600 ? 14 : 26;
      var html = '';
      for (var i = 0; i < n; i++) {
        var left = Math.random() * 100;
        var dur = 7 + Math.random() * 9;
        var delay = Math.random() * 10;
        var size = 3 + Math.random() * 5;
        html += '<span style="left:' + left.toFixed(1) + '%;width:' + size.toFixed(1) + 'px;height:' + size.toFixed(1) +
                'px;animation-duration:' + dur.toFixed(1) + 's;animation-delay:-' + delay.toFixed(1) + 's"></span>';
      }
      pc.innerHTML = html;
      hero.insertBefore(pc, hero.firstChild);
    }

    /* 10. card spotlight + 3D tilt */
    var tiltCards = document.querySelectorAll('.bonus-card, .plan, .compare-card');
    tiltCards.forEach(function (card) {
      card.classList.add('fx-spot', 'fx-tilt');
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        var rx = (0.5 - py) * 7;
        var ry = (px - 0.5) * 9;
        card.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-6px)';
      });
      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
      });
    });

    /* 11. magnetic buttons */
    document.querySelectorAll('.btn').forEach(function (btn) {
      if (btn.closest('.sticky-bar')) return;
      btn.classList.add('fx-magnetic');
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var mx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        var my = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        btn.style.transform = 'translate(' + (mx * 7).toFixed(1) + 'px,' + (my * 6).toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });
  });
})();
