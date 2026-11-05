// ---------- 복사 ----------
function copyPrompt(btn){
  const pre = btn.closest('.prompt').querySelector('pre');
  const text = pre.textContent;
  const onSuccess = () => {
    btn.textContent = '✓ 복사됨'; btn.classList.add('done');
    const toast = document.getElementById('toast');
    if (toast) toast.classList.add('show');
    setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('done'); if (toast) toast.classList.remove('show'); }, 1800);
  };
  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); onSuccess(); } catch (e) { alert('복사에 실패했습니다. 직접 선택해 복사해 주세요.'); }
    document.body.removeChild(ta);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(fallbackCopy);
  } else { fallbackCopy(); }
}

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ---------- 프롬프트 박스 HTML ----------
function promptBox(p, opts){
  opts = opts || {};
  const lv = p.level ? `<span class="lv">${esc(p.level)}</span>` : '';
  const label = opts.noTitle ? (lv || '프롬프트') : `${esc(p.title)} ${lv}`;
  const tip = (!opts.noTip && p.tip) ? `<div class="ptip">💡 ${esc(p.tip)}</div>` : '';
  return `<div class="prompt"${opts.id ? ` id="${opts.id}"` : ''}>
    <div class="prompt-head"><span class="label">${label}</span><button class="copy-btn" onclick="copyPrompt(this)">복사</button></div>
    <pre>${esc(p.text)}</pre>${tip}
  </div>`;
}

// 강의 페이지의 <div data-prompt="p01"></div> 자리에 프롬프트 박스를 채움
function renderPromptSlots(){
  document.querySelectorAll('[data-prompt]').forEach(el => {
    const p = PROMPTS.find(x => x.id === el.dataset.prompt);
    if (!p) return;
    el.outerHTML = promptBox(p, { id: 'pr-' + p.id });
  });
}

// ---------- 내비게이션 ----------
function renderNav(currentId){
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const tabs = SESSIONS.map(s =>
    `<a class="nav-btn${s.id === currentId ? ' active' : ''}" href="${s.href}">${s.tab}</a>`
  ).join('');
  const lib = `<a class="nav-btn lib${currentId === 'lib' ? ' active' : ''}" href="prompts.html">✨ 프롬프트·함수 라이브러리</a>`;
  const current = SESSIONS.find(s => s.id === currentId);
  const anchors = (current ? current.anchors : []).map(a => `<a class="anchor" href="${a.href}">${a.label}</a>`).join('');
  nav.innerHTML = `
    <div class="wrap">
      <div class="nav-row">
        <a class="nav-btn back" href="index.html">← 홈</a>
        <span class="nav-divider"></span>
        ${tabs}
        <span class="nav-divider"></span>
        ${lib}
      </div>
      ${anchors ? `<div class="nav-row sub"><span class="nav-label">바로가기</span>${anchors}</div>` : ''}
    </div>`;
  const setH = () => document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
  setH(); window.addEventListener('resize', setH);
  const act = nav.querySelector('.nav-btn.active');
  if (act && act.scrollIntoView) { try { act.scrollIntoView({ block: 'nearest', inline: 'center' }); } catch (e) {} }
}

// 스크롤 위치에 맞춰 바로가기 강조
function watchAnchors(){
  const links = Array.from(document.querySelectorAll('.anchor'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map();
  links.forEach(a => { const t = document.querySelector(a.getAttribute('href')); if (t) map.set(t, a); });
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { links.forEach(l => l.classList.remove('on')); map.get(e.target).classList.add('on'); } });
  }, { rootMargin: '-30% 0px -60% 0px' });
  map.forEach((_, t) => io.observe(t));
}

function footerHTML(extra){
  return `<div class="wrap"><strong>${COURSE.name}</strong> · ${COURSE.org} ${extra ? '· ' + extra : ''} &nbsp;|&nbsp; 강사 ${COURSE.instructor} &nbsp;|&nbsp; © ${COURSE.year}</div>`;
}

// ---------- 메인 ----------
function renderSessionGrid(){
  const grid = document.getElementById('session-grid');
  if (!grid) return;
  const cards = SESSIONS.map(s => {
    const small = s.id === 0 ? 'OPENING' : (s.id === SESSIONS.length - 1 ? 'CLOSING' : 'PART');
    const no = String(s.id).padStart(2, '0');
    const tag = s.time || (s.id === 0 ? '오리엔테이션' : '정리');
    const n = PROMPTS.filter(p => p.part === s.id).length;
    const count = n ? `실습 프롬프트 <b>${n}</b>개` : '개념 이해 · 정리';
    return `
    <a class="part-card" href="${s.href}">
      <div class="part-top"><div class="part-no"><small>${small}</small>${no}</div><span class="tool-tag">${tag}</span></div>
      <h3>${s.title}</h3>
      <p class="desc">${s.desc}</p>
      <div class="part-foot"><span class="count${n ? '' : ' concept'}">${count}</span><span class="go">강의안 보기 →</span></div>
    </a>`;
  }).join('');
  const lib = `
    <a class="part-card lib" href="prompts.html">
      <div class="part-top"><div class="part-no"><small>LIBRARY</small>${PROMPTS.length + FORMULAS.length + FUNCS.length}</div><span class="tool-tag">프롬프트 · 수식 · 함수</span></div>
      <h3>프롬프트·함수 라이브러리</h3>
      <p class="desc">강의에서 쓰는 프롬프트 ${PROMPTS.length}개, 수식 ${FORMULAS.length}개, 함수 카드를 한곳에 모았습니다. 검색하고, 걸러서, 버튼 한 번으로 복사하세요.</p>
      <div class="part-foot"><span class="count">프롬프트 <b>${PROMPTS.length}</b> · 수식 <b>${FORMULAS.length}</b> · 함수 <b>14</b></span><span class="go">모아보기 →</span></div>
    </a>`;
  grid.innerHTML = cards + lib;
}

function initIndexPage(){
  document.querySelectorAll('.logo').forEach(el => el.textContent = COURSE.name);
  const n = document.getElementById('stat-prompts'); if (n) n.textContent = PROMPTS.length;
  renderSessionGrid();
  const f = document.getElementById('site-footer'); if (f) f.innerHTML = footerHTML();
}

// ---------- 강의(파트) 페이지 ----------
function initSessionPage(currentId){
  const s = SESSIONS.find(x => x.id === currentId);
  document.querySelectorAll('.logo').forEach(el => el.textContent = COURSE.name);
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow && s) eyebrow.textContent = `${s.tab}${s.time ? ' · ' + s.time : ''} · 강사 ${COURSE.instructor}`;
  renderNav(currentId);
  renderPromptSlots();
  watchAnchors();

  // 이전/다음 이동
  const pager = document.getElementById('pager');
  if (pager) {
    const prev = SESSIONS.find(x => x.id === currentId - 1);
    const next = SESSIONS.find(x => x.id === currentId + 1);
    pager.innerHTML =
      (prev ? `<a class="prev" href="${prev.href}"><small>← 이전</small><b>${prev.tab} · ${prev.title}</b></a>` : '<span></span>') +
      (next ? `<a class="next" href="${next.href}"><small>다음 →</small><b>${next.tab} · ${next.title}</b></a>` : `<a class="next" href="prompts.html"><small>다음 →</small><b>✨ 프롬프트·함수 라이브러리</b></a>`);
  }
  const f = document.getElementById('site-footer'); if (f) f.innerHTML = footerHTML(s ? s.tab : '');
}

// ---------- 프롬프트·함수 라이브러리 ----------
// 수식/함수 예시를 복사 가능한 초록 박스로 만든다 (copyPrompt가 .prompt pre 를 복사)
function formulaBox(label, lv, text){
  const tag = lv ? `<span class="lv">${esc(lv)}</span>` : '';
  return `<div class="prompt formula">
    <div class="prompt-head"><span class="label">${esc(label)} ${tag}</span><button class="copy-btn" onclick="copyPrompt(this)">복사</button></div>
    <pre>${esc(text)}</pre>
  </div>`;
}

function initPromptsPage(){
  document.querySelectorAll('.logo').forEach(el => el.textContent = COURSE.name);
  renderNav('lib');

  const strip = document.getElementById('formula-strip');
  if (strip) strip.innerHTML = '<b>프롬프트 공식</b>' + FORMULA.map(x => `<span>${x}</span>`).join('<i>+</i>');

  const list = document.getElementById('plist');
  const tabsEl = document.getElementById('tabs');
  const filters = document.getElementById('filters');
  const search = document.getElementById('q');
  const count = document.getElementById('count');

  const TABS = [
    { key: 'prompt',  label: '프롬프트', unit: '개의 프롬프트', total: PROMPTS.length },
    { key: 'formula', label: '수식',     unit: '개의 수식',     total: FORMULAS.length },
    { key: 'func',    label: '함수 카드', unit: '장의 함수 카드', total: FUNCS.length }
  ];
  let tab = 'prompt';
  let filter = 'all';   // 프롬프트·수식: 파트 번호 / 함수: 분류 이름

  // 검색 대상 텍스트
  const hay = {
    prompt:  p => [p.title, p.use, p.text, p.level, p.tip].join(' '),
    formula: f => [f.title, f.where, f.funcs, f.note, f.text].join(' '),
    func:    f => [f.name, f.group, f.analogy, f.syntax, f.where, f.mistake, f.text].join(' ')
  };
  const data = { prompt: PROMPTS, formula: FORMULAS, func: FUNCS };
  const matches = (key, item, q) => !q || hay[key](item).toLowerCase().includes(q);
  const inFilter = (key, item) => {
    if (filter === 'all') return true;
    if (key === 'func') return item.group === filter;
    return String(item.part) === String(filter);
  };

  function renderTabs(q){
    tabsEl.innerHTML = TABS.map(t => {
      const n = data[t.key].filter(x => matches(t.key, x, q)).length;
      return `<button class="tbtn${t.key === tab ? ' on' : ''}" data-tab="${t.key}" role="tab" aria-selected="${t.key === tab}">${t.label}<b>${n}</b></button>`;
    }).join('');
  }

  function renderFilters(q){
    let opts;
    if (tab === 'func') {
      opts = [['all', `전체 ${FUNCS.filter(x => matches('func', x, q)).length}`]]
        .concat(FUNC_GROUPS.map(g => [g, `${g} · ${FUNCS.filter(x => x.group === g && matches('func', x, q)).length}`]));
    } else {
      const arr = data[tab];
      const parts = tab === 'prompt' ? [1, 2, 3, 4, 5] : [2, 3];
      opts = [['all', `전체 ${arr.filter(x => matches(tab, x, q)).length}`]]
        .concat(parts.map(p => [String(p), `PART ${p} · ${arr.filter(x => x.part === p && matches(tab, x, q)).length}`]));
    }
    filters.innerHTML = opts.map(o => `<button class="fbtn${String(o[0]) === String(filter) ? ' on' : ''}" data-f="${o[0]}">${o[1]}</button>`).join('');
  }

  function promptCard(p){
    return `<article class="pcard" id="${p.id}">
      <div class="pcard-top">
        <div class="tags"><span class="ptag">${PART_NAMES[p.part]}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.use)}</p>
      </div>
      ${promptBox(p, { noTitle: true })}
      <div class="pcard-foot"><span>${p.level ? esc(p.level) : '&nbsp;'}</span><a href="${p.href}">강의안에서 보기 →</a></div>
    </article>`;
  }

  function formulaCard(f){
    return `<article class="pcard" id="${f.id}">
      <div class="pcard-top">
        <div class="tags"><span class="ptag">${PART_NAMES[f.part]}</span><span class="ptag where">📍 ${esc(f.where)}</span></div>
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.note)}</p>
      </div>
      ${formulaBox('수식', f.funcs, f.text)}
      <div class="pcard-foot"><span>복사 후 해당 셀에 붙여넣기</span><a href="${f.href}">강의안에서 보기 →</a></div>
    </article>`;
  }

  function funcCard(f){
    return `<article class="pcard fcard" id="${f.id}">
      <div class="pcard-top">
        <div class="tags"><span class="ptag grp">${esc(f.group)}</span>${f.main ? '<span class="ptag main">주인공</span>' : ''}</div>
        <h3 class="fname">${esc(f.name)}</h3>
        <p>${esc(f.analogy)}</p>
      </div>
      <dl class="fdl">
        <div><dt>형식</dt><dd><code>${esc(f.syntax)}</code></dd></div>
        <div><dt>오늘의 예</dt><dd>${esc(f.where)}</dd></div>
        <div class="bad"><dt>흔한 실수</dt><dd>${esc(f.mistake)}</dd></div>
      </dl>
      ${formulaBox('예시 수식', '', f.text)}
      <div class="pcard-foot"><span>강의 수식에서 발췌</span><a href="session_2.html#cards">함수 카드 표에서 보기 →</a></div>
    </article>`;
  }

  function render(){
    const q = search.value.trim().toLowerCase();
    renderTabs(q);
    renderFilters(q);
    const t = TABS.find(x => x.key === tab);
    const items = data[tab].filter(x => matches(tab, x, q) && inFilter(tab, x));
    count.textContent = `${items.length}${t.unit}`;
    const strip = document.getElementById('formula-strip');
    if (strip) strip.style.display = tab === 'prompt' ? '' : 'none';
    if (!items.length) { list.innerHTML = '<div class="empty">검색 결과가 없습니다. 다른 단어로 찾아보세요.</div>'; return; }
    const card = tab === 'prompt' ? promptCard : (tab === 'formula' ? formulaCard : funcCard);
    list.innerHTML = tab === 'func'
      ? `<div class="fgrid">${items.map(card).join('')}</div>`
      : items.map(card).join('');
  }

  tabsEl.addEventListener('click', e => {
    const b = e.target.closest('.tbtn'); if (!b) return;
    tab = b.dataset.tab; filter = 'all'; render();
  });
  filters.addEventListener('click', e => {
    const b = e.target.closest('.fbtn'); if (!b) return;
    filter = b.dataset.f; render();
  });
  search.addEventListener('input', render);

  // 주소 해시(#p05 · #f03 · #fn05 · #formula · #func)로 바로 열기
  const h = (location.hash || '').slice(1);
  if (/^fn\d/.test(h) || h === 'func') tab = 'func';
  else if (/^f\d/.test(h) || h === 'formula') tab = 'formula';
  render();
  if (h) {
    const el = document.getElementById(h);
    if (el) { const go = () => el.scrollIntoView(); if (document.readyState === 'complete') setTimeout(go, 50); else window.addEventListener('load', () => setTimeout(go, 50)); }
  }

  const f = document.getElementById('site-footer'); if (f) f.innerHTML = footerHTML('프롬프트·함수 라이브러리');
}
