/* ==========================================================================
   script.js —— 把 content.js 里的内容渲染到页面上
   一般不用改这个文件。想改内容请打开 content.js
   ========================================================================== */
(function () {
  'use strict';

  var C = (typeof CONTENT !== 'undefined' && CONTENT) ? CONTENT : {};
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- 小工具 ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function fill(selector, value) {
    if (!value) return;
    $$(selector).forEach(function (n) { n.textContent = value; });
  }

  function safeUrl(url) {
    if (!url) return '';
    var u = String(url).trim();
    return /^(https?:|mailto:|tel:|\/|\.\/|#)/i.test(u) ? u : '';
  }

  /* ======================================================================
     1. 文字内容
     ====================================================================== */
  fill('[data-config="name"]',      C.name);
  fill('[data-config="greeting"]',  C.greeting);
  fill('[data-config="role"]',      C.role);
  fill('[data-config="tagline"]',   C.tagline);
  fill('[data-config="aboutSub"]',  C.aboutSub);
  fill('[data-config="aboutP1"]',   C.aboutP1);
  fill('[data-config="aboutP2"]',   C.aboutP2);
  fill('[data-config="skillsSub"]', C.skillsSub);
  fill('[data-config="worksSub"]',  C.worksSub);
  fill('[data-config="gallerySub"]',C.gallerySub);
  fill('[data-config="contactSub"]',C.contactSub);
  fill('[data-config="contactLead"]', C.contactLead);

  document.title = (C.name ? C.name + ' · ' : '') + '个人主页';

  /* ======================================================================
     2. 头像
     ====================================================================== */
  var avatar = $('#heroAvatar');
  if (avatar && C.avatar) avatar.src = C.avatar;

  /* ======================================================================
     3. 首屏小标签
     ====================================================================== */
  var metaList = $('#heroMeta');
  if (metaList && C.meta) {
    C.meta.filter(Boolean).forEach(function (t) { metaList.appendChild(el('li', null, t)); });
  }

  /* ======================================================================
     4. 关于 —— 右侧事实列表
     ====================================================================== */
  var facts = $('#aboutFacts');
  if (facts && C.facts) {
    C.facts.filter(function (f) { return f && f.label; }).forEach(function (f) {
      var row = el('div');
      row.appendChild(el('dt', null, f.label));
      row.appendChild(el('dd', null, f.value || '—'));
      facts.appendChild(row);
    });
  }

  /* ======================================================================
     5. 技能
     ====================================================================== */
  var skills = $('#skills');
  if (skills && C.skills) {
    C.skills.filter(function (s) { return s && s.name; }).forEach(function (s) {
      var li = el('li', 'skill reveal');
      var top = el('div', 'skill__top');
      top.appendChild(el('span', 'skill__name', s.name));
      var pct = Math.max(0, Math.min(100, Number(s.level) || 0));
      top.appendChild(el('span', 'skill__pct', pct + '%'));
      li.appendChild(top);

      var track = el('div', 'skill__track');
      var bar = el('div', 'skill__bar');
      bar.style.setProperty('--w', pct + '%');
      track.appendChild(bar);
      li.appendChild(track);
      skills.appendChild(li);
    });
  }

  /* ======================================================================
     6. 作品
     ====================================================================== */
  var works = $('#works');
  if (works && C.works) {
    C.works.filter(function (w) { return w && w.title; }).forEach(function (w) {
      var card = el('article', 'work reveal');

      if (w.image) {
        var thumb = el('div', 'work__thumb');
        var img = el('img');
        img.src = w.image;
        img.alt = w.title;
        img.loading = 'lazy';
        img.decoding = 'async';
        thumb.appendChild(img);
        card.appendChild(thumb);
      }

      var body = el('div', 'work__body');
      body.appendChild(el('h3', 'work__title', w.title));
      if (w.desc) body.appendChild(el('p', 'work__desc', w.desc));

      if (w.tags && w.tags.length) {
        var tagBox = el('div', 'work__tags');
        w.tags.filter(Boolean).forEach(function (t) { tagBox.appendChild(el('span', null, t)); });
        body.appendChild(tagBox);
      }

      var href = safeUrl(w.link);
      if (href) {
        var a = el('a', 'work__link', '查看详情');
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        body.appendChild(a);
      }

      card.appendChild(body);
      works.appendChild(card);
    });
  }

  /* ======================================================================
     7. 相册 + 灯箱
     ====================================================================== */
  var gallery = $('#gallery');
  if (gallery && C.gallery) {
    C.gallery.filter(function (g) { return g && g.src; }).forEach(function (g) {
      var fig = el('figure', 'shot reveal');
      var img = el('img');
      img.src = g.src;
      img.alt = g.caption || '照片';
      img.loading = 'lazy';
      img.decoding = 'async';
      fig.appendChild(img);
      if (g.caption) fig.appendChild(el('figcaption', null, g.caption));
      gallery.appendChild(fig);
    });
  }

  var lightbox = $('#lightbox');
  var lightboxImg = $('#lightboxImg');
  var lightboxClose = $('#lightboxClose');

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  if (lightbox && lightboxImg && gallery) {
    gallery.addEventListener('click', function (e) {
      var img = e.target.closest('img');
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }

  /* ======================================================================
     8. 联系方式
     ====================================================================== */
  var mailBtn = $('#contactMail');
  var mail = String(C.email || '').trim();
  if (mailBtn) {
    if (mail) {
      mailBtn.href = 'mailto:' + mail;
      mailBtn.textContent = '给我发邮件 · ' + mail;
    } else {
      mailBtn.hidden = true;
    }
  }

  var links = $('#contactLinks');
  if (links && C.links) {
    C.links.filter(function (l) { return l && l.label && safeUrl(l.url); }).forEach(function (l) {
      var a = el('a', null, l.label);
      a.href = safeUrl(l.url);
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      links.appendChild(a);
    });
  }

  /* ======================================================================
     9. 年份
     ====================================================================== */
  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* ======================================================================
     10. 导航:滚动吸附 / 移动菜单 / 当前区块
     ====================================================================== */
  var nav = $('#nav');
  var toggle = $('#navToggle');
  var menu = $('#navMenu');

  function onScroll() {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('is-open')) return;
      if (e.target.closest('#navMenu') || e.target.closest('#navToggle')) return;
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* 高亮当前区块 */
  var navLinks = $$('#navMenu a[href^="#"]');
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ======================================================================
     11. 进场动画
     ====================================================================== */
  var reveals = $$('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (n) { n.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var n = entry.target;
      var delay = Number(n.dataset.delay) || 0;
      window.setTimeout(function () { n.classList.add('is-visible'); }, delay);
      io.unobserve(n);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  reveals.forEach(function (n) { io.observe(n); });

  /* ======================================================================
     12. 深浅色切换(记住选择)
     ====================================================================== */
  var themeBtn = $('#themeToggle');
  var KEY = 'site-theme';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'light' ? '#f7f8fc' : '#0b1120');
  }

  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (err) { saved = null; }

  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try { window.localStorage.setItem(KEY, next); } catch (err) {}
    });
  }
})();
