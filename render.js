/* ==========================================================================
   render.js —— 极简排版渲染器(两个网站共用)
   设计原则:文字为主,照片为辅。不使用卡片、光晕、网格等装饰。
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
  function txt(sel, v) { if (v == null || v === '') return; $$(sel).forEach(function (n) { n.textContent = v; }); }
  function safeUrl(u) {
    if (!u) return '';
    var s = String(u).trim();
    return /^(https?:|mailto:|tel:|\/|\.\/|#)/i.test(s) ? s : '';
  }
  function outbound(href, cls, label) {
    var a = el('a', cls, label);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }
  /* 一行 "标签:内容" —— 极简列表的基本单元 */
  function row(label, node) {
    var r = el('div', 'row');
    r.appendChild(el('span', 'row__k', label));
    var v = el('div', 'row__v');
    if (typeof node === 'string') v.appendChild(document.createTextNode(node));
    else v.appendChild(node);
    r.appendChild(v);
    return r;
  }
  function tags(list) {
    var box = el('div', 'tags');
    (list || []).filter(Boolean).forEach(function (t) { box.appendChild(el('span', null, t)); });
    return box;
  }

  /* ---------- 标题与文本 ---------- */
  txt('[data-config="name"]',      C.name);
  txt('[data-config="nameEn"]',    C.nameEn);
  txt('[data-config="eyebrow"]',   C.eyebrow);
  txt('[data-config="tagline"]',   C.tagline);
  txt('[data-config="intro"]',     C.intro);
  txt('[data-config="studentId"]', C.studentId);
  txt('[data-config="aboutSub"]',  C.aboutSub);
  txt('[data-config="aboutP1"]',   C.aboutP1);
  txt('[data-config="aboutP2"]',   C.aboutP2);
  txt('[data-config="traitsSub"]', C.traitsSub);
  txt('[data-config="skillsSub"]', C.skillsSub);
  txt('[data-config="timelineSub"]', C.timelineSub);
  txt('[data-config="worksSub"]',  C.worksSub);
  txt('[data-config="reposSub"]',  C.reposSub);
  txt('[data-config="reposNote"]', C.reposNote);
  txt('[data-config="honorsSub"]', C.honorsSub);
  txt('[data-config="outdoorSub"]', C.outdoorSub);
  txt('[data-config="outdoorP1"]', C.outdoorP1);
  txt('[data-config="gallerySub"]', C.gallerySub);
  txt('[data-config="contactSub"]', C.contactSub);
  txt('[data-config="contactLead"]', C.contactLead);

  var t = (C.name ? C.name + ' · ' : '') + (C.nameEn || '个人主页');
  document.title = t;

  /* ---------- 导航:按页面实际存在的区块自动生成 ---------- */
  var navBox = $('#nav');
  if (navBox) {
    var NAV = [['#about', '关于'], ['#traits', '自我评价'], ['#skills', '技能'],
               ['#timeline', '经历'], ['#works', '作品'], ['#repos', '开源'],
               ['#honors', '荣誉'], ['#outdoor', '户外'], ['#gallery', '相册'],
               ['#contact', '联系']];
    NAV.forEach(function (pair) {
      if (!$(pair[0])) return;
      var a = el('a', null, pair[1]);
      a.href = pair[0];
      navBox.appendChild(a);
    });
  }

  /* ---------- 头像(小图,辅) ---------- */
  var av = $('#avatar');
  if (av && C.avatar) {
    av.src = C.avatar;
    av.alt = C.name || '照片';
  } else if (av) {
    var wrap = av.closest('.hero__photo');
    if (wrap) wrap.style.display = 'none';
  }
  txt('[data-config="avatarCaption"]', C.avatarCaption);

  /* ---------- 首屏要点(纯文字列表) ---------- */
  var facts = $('#facts');
  if (facts && C.facts) {
    C.facts.filter(Boolean).forEach(function (f) {
      facts.appendChild(el('li', null, f));
    });
  }

  /* ---------- 关于 ---------- */
  var about = $('#aboutBody');
  if (about && C.aboutP1) {
    about.appendChild(el('p', null, C.aboutP1));
    if (C.aboutP2) about.appendChild(el('p', null, C.aboutP2));
  }

  /* ---------- 自我评价 ---------- */
  var traits = $('#traitsBody');
  if (traits && C.traits) {
    C.traits.filter(function (x) { return x && x.title; }).forEach(function (x) {
      traits.appendChild(row(x.title, x.desc || ''));
    });
  }

  /* ---------- 技能(文字行 + 细进度线) ---------- */
  var skills = $('#skills');
  if (skills && C.skills) {
    C.skills.filter(function (s) { return s && s.name; }).forEach(function (s) {
      var li = el('li', 'skill');
      var top = el('div', 'skill__top');
      top.appendChild(el('span', 'skill__n', s.name));
      var pct = Math.max(0, Math.min(100, Number(s.level) || 0));
      top.appendChild(el('span', 'skill__p', pct + '%'));
      li.appendChild(top);
      if (s.detail) li.appendChild(el('span', 'skill__d', s.detail));
      var track = el('div', 'skill__track');
      var bar = el('i', 'skill__bar');
      bar.style.width = pct + '%';
      track.appendChild(bar);
      li.appendChild(track);
      skills.appendChild(li);
    });
  }

  /* ---------- 项目经历 ---------- */
  var tl = $('#timeline');
  if (tl && C.timeline) {
    C.timeline.filter(function (x) { return x && x.title; }).forEach(function (x) {
      var li = el('li', 'tl');
      li.appendChild(el('span', 'tl__when', x.period || ''));
      var body = el('div', 'tl__body');
      body.appendChild(el('h3', 'tl__t', x.title));
      if (x.desc) body.appendChild(el('p', 'tl__d', x.desc));
      if (x.tags && x.tags.length) body.appendChild(tags(x.tags));
      li.appendChild(body);
      tl.appendChild(li);
    });
  }

  /* ---------- 作品 ---------- */
  var works = $('#works');
  if (works && C.works) {
    C.works.filter(function (w) { return w && w.title; }).forEach(function (w) {
      var li = el('li', 'work');
      var head = el('div', 'work__head');
      head.appendChild(el('h3', 'work__t', w.title));
      if (w.year) head.appendChild(el('span', 'work__y', w.year));
      li.appendChild(head);
      if (w.desc) li.appendChild(el('p', 'work__d', w.desc));
      if (w.tags && w.tags.length) li.appendChild(tags(w.tags));

      var acts = el('div', 'work__acts');
      var u1 = safeUrl(w.link);
      if (u1) acts.appendChild(outbound(u1, 'lnk', w.linkText || '查看'));
      var u2 = safeUrl(w.link2);
      if (u2) acts.appendChild(outbound(u2, 'lnk', w.link2Text || '查看'));
      if (acts.children.length) li.appendChild(acts);

      if (w.note) li.appendChild(el('p', 'note', w.note));
      works.appendChild(li);
    });
  }

  /* ---------- 开源项目 ---------- */
  var repos = $('#repos');
  if (repos && C.repos) {
    C.repos.filter(function (r) { return r && r.name; }).forEach(function (r) {
      var li = el('li', 'repo');
      var line = el('div', 'repo__line');
      var a = outbound(safeUrl(r.link) || '#', 'repo__n', r.name);
      line.appendChild(a);
      if (typeof r.stars === 'number' && r.stars > 0) {
        line.appendChild(el('span', 'repo__s', '★ ' + r.stars));
      }
      if (r.lang) line.appendChild(el('span', 'repo__l', r.lang));
      li.appendChild(line);
      if (r.desc) li.appendChild(el('p', 'repo__d', r.desc));
      repos.appendChild(li);
    });
  }

  /* ---------- 荣誉 ---------- */
  var honors = $('#honorsBody');
  if (honors && C.honors) {
    C.honors.filter(function (h) { return h && h.title; }).forEach(function (h) {
      honors.appendChild(row(h.title, h.meta || ''));
    });
  }

  /* ---------- 户外 ---------- */
  var outdoor = $('#outdoorBody');
  if (outdoor && C.outdoor) {
    C.outdoor.filter(function (o) { return o && o.title; }).forEach(function (o) {
      outdoor.appendChild(row(o.title, o.desc || ''));
    });
  }

  /* ---------- 相册(文末,辅) ---------- */
  var gallery = $('#gallery');
  if (gallery && C.gallery) {
    C.gallery.filter(function (g) { return g && g.src; }).forEach(function (g) {
      var fig = el('figure', 'shot');
      var im = el('img');
      im.src = g.src;
      im.alt = g.caption || '照片';
      im.loading = 'lazy';
      im.decoding = 'async';
      fig.appendChild(im);
      if (g.caption) fig.appendChild(el('figcaption', null, g.caption));
      gallery.appendChild(fig);
    });
  }

  var lb = $('#lightbox'), lbImg = $('#lightboxImg');
  function closeLb() { if (!lb) return; lb.hidden = true; document.body.style.overflow = ''; }
  if (lb && lbImg && gallery) {
    gallery.addEventListener('click', function (e) {
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

  /* ---------- 联系 ---------- */
  var mail = String(C.email || '').trim();
  var mailNode = $('#mail');
  if (mailNode) {
    if (mail) {
      mailNode.href = 'mailto:' + mail;
      mailNode.textContent = mail;
    } else {
      var mr = mailNode.closest('.row');
      if (mr) mr.style.display = 'none';
    }
  }

  var phone = String(C.phone || '').trim();
  var phoneRow = $('#phoneRow'), phoneNode = $('#phone');
  if (phoneRow && phoneNode) {
    if (phone) {
      phoneNode.href = 'tel:' + phone;
      phoneNode.textContent = phone;
    } else {
      phoneRow.style.display = 'none';
    }
  }

  var links = $('#links');
  if (links && C.links) {
    C.links.filter(function (l) { return l && l.label && safeUrl(l.url); }).forEach(function (l) {
      var li = el('li');
      li.appendChild(outbound(safeUrl(l.url), null, l.label));
      links.appendChild(li);
    });
  }

  var yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- 主题切换(默认跟随系统) ---------- */
  var KEY = 'wyh-theme';
  var tbtn = $('#themeBtn');
  function applyTheme(v) {
    document.documentElement.setAttribute('data-theme', v);
  }
  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (err) { saved = null; }
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }
  if (tbtn) {
    tbtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { window.localStorage.setItem(KEY, next); } catch (err) {}
      var m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute('content', next === 'dark' ? '#14161a' : '#fdfdfc');
    });
  }
})();
