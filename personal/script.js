/* ==========================================================================
   script.js —— 个人主页渲染与交互
   ========================================================================== */
(function () {
  'use strict';

  var C = (typeof CONTENT !== 'undefined' && CONTENT) ? CONTENT : {};
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function txt(sel, v) { if (!v) return; $$(sel).forEach(function (n) { n.textContent = v; }); }
  function safeUrl(u) {
    if (!u) return '';
    var s = String(u).trim();
    return /^(https?:|mailto:|tel:|\/|\.\/|#)/i.test(s) ? s : '';
  }
  function link(href, cls, label) {
    var a = el('a', cls, label);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }

  /* ---------- 1. 文字 ---------- */
  txt('[data-config="name"]',    C.name);
  txt('[data-config="nameEn"]',  C.nameEn);
  txt('[data-config="eyebrow"]', C.eyebrow);
  txt('[data-config="lede"]',    C.lede);
  txt('[data-config="aboutTitle"]',   C.aboutTitle);
  txt('[data-config="aboutLede"]',    C.aboutLede);
  txt('[data-config="aboutP1"]',      C.aboutP1);
  txt('[data-config="aboutP2"]',      C.aboutP2);
  txt('[data-config="skillsTitle"]',  C.skillsTitle);
  txt('[data-config="skillsLede"]',   C.skillsLede);
  txt('[data-config="timelineTitle"]',C.timelineTitle);
  txt('[data-config="timelineLede"]', C.timelineLede);
  txt('[data-config="worksTitle"]',   C.worksTitle);
  txt('[data-config="worksLede"]',    C.worksLede);
  txt('[data-config="reposTitle"]',   C.reposTitle);
  txt('[data-config="reposLede"]',    C.reposLede);
  txt('[data-config="outdoorTitle"]', C.outdoorTitle);
  txt('[data-config="outdoorLede"]',  C.outdoorLede);
  txt('[data-config="contactTitle"]', C.contactTitle);
  txt('[data-config="contactLede"]',  C.contactLede);

  /* headline 是唯一允许含 <br> 的字段,来自我们自己的 content.js */
  var head = $('[data-config="headline"]');
  if (head && C.headline) head.innerHTML = C.headline;

  document.title = (C.name ? C.name + ' · ' : '') + (C.nameEn || '个人主页');

  /* ---------- 2. 首屏数字 ---------- */
  var stats = $('#stats');
  if (stats && C.stats) {
    C.stats.filter(function (s) { return s && s.num; }).forEach(function (s, i) {
      var li = el('li', 'stat');
      li.style.transitionDelay = (i * 60) + 'ms';
      li.appendChild(el('b', 'stat__n', s.num));
      li.appendChild(el('span', 'stat__l', s.label));
      stats.appendChild(li);
    });
  }

  /* ---------- 3. 身份标签 ---------- */
  var roles = $('#roles');
  if (roles && C.roleList) {
    C.roleList.filter(Boolean).forEach(function (r) { roles.appendChild(el('li', null, r)); });
  }

  /* ---------- 4. 特质 ---------- */
  var traits = $('#traits');
  if (traits && C.traits) {
    C.traits.filter(function (t) { return t && t.title; }).forEach(function (t) {
      var d = el('div', 'trait reveal');
      d.appendChild(el('span', 'trait__i', t.icon || '•'));
      d.appendChild(el('strong', 'trait__t', t.title));
      if (t.desc) d.appendChild(el('span', 'trait__d', t.desc));
      traits.appendChild(d);
    });
  }

  /* ---------- 5. 技能 ---------- */
  var skills = $('#skills');
  if (skills && C.skills) {
    C.skills.filter(function (s) { return s && s.name; }).forEach(function (s) {
      var li = el('li', 'sk reveal');
      var top = el('div', 'sk__top');
      top.appendChild(el('span', 'sk__n', s.name));
      if (s.tag) top.appendChild(el('span', 'sk__tag', s.tag));
      var pct = Math.max(0, Math.min(100, Number(s.level) || 0));
      top.appendChild(el('span', 'sk__p', pct + '%'));
      li.appendChild(top);

      var track = el('div', 'sk__track');
      var bar = el('i', 'sk__bar');
      bar.style.width = pct + '%';
      track.appendChild(bar);
      li.appendChild(track);

      if (s.detail) li.appendChild(el('span', 'sk__d', s.detail));
      skills.appendChild(li);
    });
  }

  /* ---------- 6. 经历时间线 ---------- */
  var path = $('#path');
  if (path && C.timeline) {
    C.timeline.filter(function (t) { return t && t.title; }).forEach(function (t) {
      var li = el('li', 'pt reveal');
      li.appendChild(el('span', 'pt__dot'));
      if (t.period) li.appendChild(el('span', 'pt__when', t.period));
      var b = el('div', 'pt__card');
      b.appendChild(el('h3', 'pt__t', t.title));
      if (t.desc) b.appendChild(el('p', 'pt__d', t.desc));
      if (t.tags && t.tags.length) {
        var box = el('div', 'chips');
        t.tags.filter(Boolean).forEach(function (x) { box.appendChild(el('span', 'chip', x)); });
        b.appendChild(box);
      }
      li.appendChild(b);
      path.appendChild(li);
    });
  }

  /* ---------- 7. 作品:主推 + 其余 ---------- */
  var works = (C.works || []).filter(function (w) { return w && w.title; });
  var featured = works.filter(function (w) { return w.featured; })[0] || works[0];
  var rest = works.filter(function (w) { return w !== featured; });

  var feat = $('#feat');
  if (feat && featured) {
    var f = el('article', 'fcard reveal');

    if (featured.image) {
      var fimg = el('div', 'fcard__img');
      var fi = el('img');
      fi.src = featured.image;
      fi.alt = featured.title;
      fi.loading = 'lazy';
      fimg.appendChild(fi);
      f.appendChild(fimg);
    }

    var fb = el('div', 'fcard__body');
    if (featured.kicker) fb.appendChild(el('span', 'fcard__k', featured.kicker));
    fb.appendChild(el('h3', 'fcard__t', featured.title));
    if (featured.desc) fb.appendChild(el('p', 'fcard__d', featured.desc));
    if (featured.tags && featured.tags.length) {
      var fchips = el('div', 'chips');
      featured.tags.filter(Boolean).forEach(function (x) { fchips.appendChild(el('span', 'chip', x)); });
      fb.appendChild(fchips);
    }
    var furl = safeUrl(featured.link);
    if (furl) fb.appendChild(link(furl, 'fcard__link', '查看项目源码'));
    f.appendChild(fb);
    feat.appendChild(f);
  }

  var worksBox = $('#works');
  if (worksBox) {
    rest.forEach(function (w) {
      var card = el('article', 'wcard reveal');

      if (w.image) {
        var th = el('div', 'wcard__img');
        var im = el('img');
        im.src = w.image;
        im.alt = w.title;
        im.loading = 'lazy';
        im.addEventListener('error', function () {
          if (th.parentNode) th.parentNode.removeChild(th);
        });
        th.appendChild(im);
        card.appendChild(th);
      }

      var body = el('div', 'wcard__body');
      if (w.kicker) body.appendChild(el('span', 'wcard__k', w.kicker));
      body.appendChild(el('h3', 'wcard__t', w.title));
      if (w.desc) body.appendChild(el('p', 'wcard__d', w.desc));
      if (w.tags && w.tags.length) {
        var chips = el('div', 'chips');
        w.tags.filter(Boolean).forEach(function (x) { chips.appendChild(el('span', 'chip', x)); });
        body.appendChild(chips);
      }
      var u = safeUrl(w.link);
      if (u) body.appendChild(link(u, 'wcard__link', '查看详情'));
      card.appendChild(body);
      worksBox.appendChild(card);
    });
  }

  /* ---------- 8. 开源仓库 ---------- */
  var repoBox = $('#repos');
  if (repoBox && C.repos) {
    C.repos.filter(function (r) { return r && r.name; }).forEach(function (r) {
      var li = el('li', 'repo reveal');
      var top = el('div', 'repo__top');
      top.appendChild(el('span', 'repo__n', r.name));
      if (typeof r.stars === 'number' && r.stars > 0) {
        top.appendChild(el('span', 'repo__s', '★ ' + r.stars));
      }
      li.appendChild(top);
      if (r.lang) li.appendChild(el('span', 'repo__l', r.lang));
      if (r.desc) li.appendChild(el('p', 'repo__d', r.desc));
      var ru = safeUrl(r.link);
      if (ru) li.appendChild(link(ru, 'repo__a', '仓库 →'));
      repoBox.appendChild(li);
    });
  }

  /* ---------- 9. 荣誉 ---------- */
  var honBox = $('#honors');
  if (honBox && C.honors) {
    C.honors.filter(function (h) { return h && h.title; }).forEach(function (h) {
      var d = el('div', 'hon reveal');
      d.appendChild(el('span', 'hon__m', '🏅'));
      d.appendChild(el('strong', 'hon__t', h.title));
      if (h.meta) d.appendChild(el('span', 'hon__meta', h.meta));
      honBox.appendChild(d);
    });
  }

  /* ---------- 10. 户外 ---------- */
  var outBox = $('#outdoor');
  if (outBox && C.outdoor) {
    C.outdoor.filter(function (o) { return o && o.title; }).forEach(function (o) {
      var d = el('div', 'out reveal');
      d.appendChild(el('span', 'out__i', o.icon || '•'));
      d.appendChild(el('strong', 'out__t', o.title));
      if (o.desc) d.appendChild(el('span', 'out__d', o.desc));
      outBox.appendChild(d);
    });
  }

  /* ---------- 11. 相册 + 灯箱 ---------- */
  var gal = $('#gallery');
  if (gal && C.gallery) {
    C.gallery.filter(function (g) { return g && g.src; }).forEach(function (g) {
      var fig = el('figure', 'shot reveal');
      var im = el('img');
      im.src = g.src;
      im.alt = g.caption || '照片';
      im.loading = 'lazy';
      fig.appendChild(im);
      if (g.caption) fig.appendChild(el('figcaption', null, g.caption));
      gal.appendChild(fig);
    });
  }

  var lb = $('#lightbox'), lbImg = $('#lightboxImg');
  function closeLb() {
    if (!lb) return;
    lb.hidden = true;
    document.body.style.overflow = '';
  }
  if (lb && lbImg && gal) {
    gal.addEventListener('click', function (e) {
      var im = e.target.closest('img');
      if (!im) return;
      lbImg.src = im.src;
      lbImg.alt = im.alt;
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.id === 'lightboxX') closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lb.hidden) closeLb();
    });
  }

  /* ---------- 12. 联系 ---------- */
  var mail = String(C.email || '').trim();
  var mailBtn = $('#mailBtn'), mailAddr = $('#mailAddr');
  if (mailBtn && mail) {
    mailBtn.href = 'mailto:' + mail;
    if (mailAddr) mailAddr.textContent = mail;
  } else if (mailBtn) {
    mailBtn.hidden = true;
  }

  var phone = String(C.phone || '').trim();
  var phoneLink = $('#phoneLink'), phoneNum = $('#phoneNum');
  if (phoneLink && phoneNum && phone) {
    phoneLink.href = 'tel:' + phone;
    phoneNum.textContent = phone;
  } else if (phoneLink) {
    phoneLink.hidden = true;
  }

  var linkBox = $('#links');
  if (linkBox && C.links) {
    C.links.filter(function (l) { return l && l.label && safeUrl(l.url); }).forEach(function (l) {
      linkBox.appendChild(link(safeUrl(l.url), 'link', l.label));
    });
  }

  var yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ======================================================================
     交互
     ====================================================================== */
  var bar = $('#topbar');
  function onScroll() {
    if (bar) bar.classList.toggle('is-stuck', window.scrollY > 10);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* 移动菜单 */
  var burger = $('#burger'), menu = $('#menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* 当前区块高亮 */
  var links = $$('#menu a[href^="#"]');
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if ('IntersectionObserver' in window && secs.length) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = '#' + en.target.id;
        links.forEach(function (a) { a.classList.toggle('is-on', a.getAttribute('href') === id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    secs.forEach(function (s) { spy.observe(s); });
  }

  /* 鼠标跟随光斑 */
  var spot = $('#bgSpot');
  if (spot && window.matchMedia && window.matchMedia('(pointer:fine)').matches) {
    var tx = window.innerWidth / 2, ty = window.innerHeight / 3;
    var cx = tx, cy = ty, raf = 0;
    function loop() {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      spot.style.transform = 'translate3d(' + (cx - 320) + 'px,' + (cy - 320) + 'px,0)';
      raf = window.requestAnimationFrame(loop);
    }
    window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
    loop();
    window.addEventListener('pagehide', function () { window.cancelAnimationFrame(raf); });
  } else if (spot) {
    spot.style.display = 'none';
  }

  /* 进场动画 */
  var reveals = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (n) { n.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var n = en.target;
        n.style.transitionDelay = (Number(n.dataset.delay) || 0) + 'ms';
        n.classList.add('is-in');
        io.unobserve(n);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    reveals.forEach(function (n) { io.observe(n); });
  }

  /* 深浅色 */
  var tbtn = $('#themeBtn');
  var KEY = 'wuyuehao-theme';
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t === 'light' ? '#f4f5f9' : '#05060a');
  }
  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (err) { saved = null; }
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }
  if (tbtn) {
    tbtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try { window.localStorage.setItem(KEY, next); } catch (err) {}
    });
  }
})();
