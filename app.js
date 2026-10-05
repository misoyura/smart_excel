// 프롬프트 복사 버튼 (차시 상세 페이지)
function copyPrompt(btn){
  const pre = btn.closest('.prompt').querySelector('pre');
  const text = pre.textContent;
  const onSuccess = () => {
    btn.textContent = '✓ 복사됨';btn.classList.add('done');
    const toast = document.getElementById('toast');toast.classList.add('show');
    setTimeout(() => {btn.textContent='복사';btn.classList.remove('done');toast.classList.remove('show');},2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(onSuccess).catch(fallbackCopy);
  } else { fallbackCopy(); }
  function fallbackCopy(){
    const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');onSuccess();}catch(e){alert('복사에 실패했습니다. 직접 선택해 복사해 주세요.');}
    document.body.removeChild(ta);
  }
}

// 차시 상세 페이지 상단 네비게이션 (전체 차시 탭 + 섹션 바로가기)을 SESSIONS 데이터로 렌더링
function renderNav(currentId){
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const tabs = SESSIONS.map(s =>
    `<a class="nav-btn${s.id === currentId ? ' active' : ''}" href="${s.href}">${s.id}차시</a>`
  ).join('\n      ');

  const current = SESSIONS.find(s => s.id === currentId);
  const anchors = (current ? current.anchors : []).map(a =>
    `<a class="anchor" href="${a.href}">${a.label}</a>`
  ).join('\n      ');

  nav.innerHTML = `
    <div class="wrap">
      <div class="nav-row">
        <a class="nav-btn back" href="index.html">← 목록으로</a>
        <span class="nav-divider"></span>
        ${tabs}
      </div>
      <div class="nav-row sub">
        <span class="nav-label">바로가기</span>
        ${anchors}
      </div>
    </div>`;
}

// 메인 페이지 강의 목차 카드 그리드를 SESSIONS 데이터로 렌더링
function renderSessionGrid(){
  const grid = document.getElementById('session-grid');
  if (!grid) return;

  const cards = SESSIONS.map(s => `
    <a class="session-card" href="${s.href}">
      <span class="badge">${s.id}차시</span>
      <h3>${s.title}</h3>
      <p class="desc">${s.desc}</p>
      <span class="go">강의안 보기</span>
    </a>`).join('');

  const nextId = SESSIONS.length + 1;
  const soonCard = `
    <div class="session-card soon">
      <span class="badge">${nextId}차시</span>
      <h3>준비 중입니다</h3>
      <p class="desc">다음 차시는 순차적으로 업데이트될 예정입니다.</p>
    </div>`;

  grid.innerHTML = cards + soonCard;
}

// 차시 상세 페이지 공통 초기화: 로고·강사·네비게이션·푸터를 데이터로 채움
function initSessionPage(currentId){
  document.querySelectorAll('.logo').forEach(el => el.textContent = COURSE.name);

  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = `${currentId}차시 · 강사 ${COURSE.instructor}`;

  renderNav(currentId);

  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `
    <div class="wrap">
      <strong>${COURSE.name}</strong> · ${currentId}차시 강의안 &nbsp;|&nbsp; 강사 ${COURSE.instructor} &nbsp;|&nbsp; © ${COURSE.year}
    </div>`;
}

// 메인 페이지 공통 초기화: 로고·강사·목차 카드·푸터를 데이터로 채움
function initIndexPage(){
  document.querySelectorAll('.logo').forEach(el => el.textContent = COURSE.name);

  const meta = document.querySelector('.hero .meta');
  if (meta) meta.innerHTML = `강사 <b>${COURSE.instructor}</b>`;

  renderSessionGrid();

  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `
    <div class="wrap">
      <strong>${COURSE.name}</strong> · 강사 ${COURSE.instructor} &nbsp;|&nbsp; © ${COURSE.year}
    </div>`;
}
