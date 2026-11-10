// 강의 공통 정보 · 차시(파트) 목록 · 프롬프트 라이브러리
// - 새 파트를 추가하려면: session_N.html 작성 후 SESSIONS 배열에 항목 추가
// - 프롬프트는 PROMPTS 한 곳에서만 관리합니다. 강의 페이지(<div data-prompt="p01">)와
//   프롬프트 라이브러리(prompts.html)가 모두 이 데이터를 읽어 표시합니다.

const COURSE = {
  name: "ChatGPT와 함께하는 스마트 엑셀",
  short: "스마트 엑셀",
  instructor: "김유라",
  org: "신구대학교 재학생 특강",
  tagline: "AI에게 묻고, Excel에서 실행하고, 결과를 검증하다",
  year: 2026,
};

const SESSIONS = [
  {
    id: 0, tab: "오프닝", title: "이 데이터, 믿어도 될까요?",
    subtitle: "오늘의 흐름 · 역할 분담 · 함수 지도 · 함수 쉽게 보기 · 실습 파일 살펴보기",
    desc: "눈으로는 같아 보이는 데이터가 Excel에서는 왜 다르게 계산될까? 오늘의 4가지 결과물, AI·사람·Excel의 역할, 핵심 함수 5개를 쉬운 예시로 미리 만나봅니다.",
    time: "", href: "session_0.html",
    anchors: [
      { href: "#hook", label: "이 데이터 믿어도 될까" },
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#roles", label: "역할 분담" },
      { href: "#map", label: "함수 지도" },
      { href: "#funcs", label: "함수 쉽게 보기" },
      { href: "#file", label: "실습 파일" },
    ],
  },
  {
    id: 1, tab: "PART 1", title: "AI로 데이터 문제 진단",
    subtitle: "미션 1 │ 분석하기 전에, 데이터부터 점검한다",
    desc: "좋은 프롬프트의 5요소로 AI에게 100행 데이터의 1차 진단을 맡기고, Excel 필터로 직접 검증합니다.",
    time: "20분", href: "session_1.html",
    anchors: [
      { href: "#intro", label: "미션 개요" },
      { href: "#eyes", label: "사람 눈 점검" },
      { href: "#five", label: "프롬프트 5요소" },
      { href: "#diag", label: "AI 진단" },
      { href: "#candidate", label: "정답 후보" },
      { href: "#verify", label: "Excel 검증" },
      { href: "#result", label: "미션 완료" },
    ],
  },
  {
    id: 2, tab: "PART 2", title: "AI 수식 생성·검증",
    subtitle: "미션 2 │ 수식으로 문제를 찾아내자",
    desc: "IF · XLOOKUP · SUMIFS 수식을 AI에게 요청하고, 09 테스트 시트에서 먼저 검증한 뒤 05 실전 데이터에 적용합니다.",
    time: "40분", href: "session_2.html",
    anchors: [
      { href: "#intro", label: "미션 개요" },
      { href: "#prep", label: "작업 준비" },
      { href: "#testfirst", label: "테스트 먼저" },
      { href: "#fmap", label: "함수 지도" },
      { href: "#formula", label: "프롬프트 공식" },
      { href: "#if", label: "IF" },
      { href: "#xlookup", label: "XLOOKUP" },
      { href: "#error", label: "오류 코드" },
      { href: "#dup", label: "중복 찾기" },
      { href: "#sumifs", label: "SUMIFS" },
      { href: "#verify3", label: "검증 3단계" },
      { href: "#cards", label: "함수 카드 11" },
    ],
  },
  {
    id: 3, tab: "PART 3", title: "데이터 정제 및 구조 표준화",
    subtitle: "미션 3 │ 분석하기 전에 데이터를 정리하자",
    desc: "정제 기준을 정하고, 불필요한 행·중복 제거부터 형식 통일, 코드 표준화, 매출액 재계산까지 05_정제데이터를 완성합니다.",
    time: "30분", href: "session_3.html",
    anchors: [
      { href: "#intro", label: "미션 개요" },
      { href: "#why", label: "왜 정제가 먼저?" },
      { href: "#ask", label: "AI에게 기준 묻기" },
      { href: "#criteria", label: "기준 결정표" },
      { href: "#clean1", label: "정제①" },
      { href: "#clean2", label: "정제②" },
      { href: "#clean3", label: "정제③" },
      { href: "#cf", label: "조건부 서식" },
      { href: "#todo", label: "확인필요 목록" },
      { href: "#result", label: "정제 전→후" },
    ],
  },
  {
    id: 4, tab: "PART 4", title: "매출 분석 & 피벗테이블",
    subtitle: "미션 4 │ 정리된 데이터로 매출을 분석하자",
    desc: "표로 변환하고 피벗테이블을 만들어 지점·월별 매출을 집계한 뒤, AI의 분석 문장을 사실/해석/추측으로 구분합니다.",
    time: "20분", href: "session_4.html",
    anchors: [
      { href: "#intro", label: "미션 개요" },
      { href: "#table", label: "표로 변환" },
      { href: "#ask", label: "AI에게 피벗 묻기" },
      { href: "#pivot", label: "피벗 만들기" },
      { href: "#metric", label: "지표 확장" },
      { href: "#fact", label: "사실/해석/추측" },
      { href: "#result", label: "결과 확인" },
    ],
  },
  {
    id: 5, tab: "PART 5", title: "데이터 시각화 & 요약 보고서",
    subtitle: "미션 5 │ 숫자를 보고서로 바꾸자",
    desc: "AI에게 차트를 추천받아 피벗 차트를 만들고, 검증한 숫자만으로 요약 보고서를 작성한 뒤 FACT CHECK 합니다.",
    time: "15분", href: "session_5.html",
    anchors: [
      { href: "#intro", label: "미션 개요" },
      { href: "#chart-ask", label: "차트 추천" },
      { href: "#chart", label: "차트 제작" },
      { href: "#summary", label: "요약 보고서" },
      { href: "#visual", label: "인포그래픽·PPT" },
      { href: "#fact", label: "FACT CHECK" },
      { href: "#final", label: "최종 산출물" },
    ],
  },
  {
    id: 6, tab: "마무리", title: "오늘의 업무 방식",
    subtitle: "AI는 후보, Excel은 근거, 최종 판단은 나",
    desc: "문제 정의 → AI 질문 → 테스트 → Excel 실행 → 검증 → 최종 판단. 가져갈 프롬프트 공식 카드를 정리합니다.",
    time: "", href: "session_6.html",
    anchors: [
      { href: "#way", label: "업무 방식" },
      { href: "#card", label: "가져갈 카드" },
      { href: "#one", label: "오늘의 한 문장" },
    ],
  },
];

// level: 슬라이드에 표기된 실습 난이도 ("" 이면 표기 없음)
const PROMPTS = [
  {
    id: "p01", part: 1, level: "Level 1 · 그대로 복사",
    title: "데이터 진단 맡기기",
    use: "02_매출원본 파일을 업로드한 뒤 붙여넣습니다. AI에게 100행 데이터의 1차 진단을 맡깁니다.",
    href: "session_1.html#diag",
    tip: "AI의 답은 '정답 후보'입니다. 행 번호가 1~2칸 어긋날 수 있으니 반드시 Excel 필터로 직접 확인하세요.",
    text: `너는 Excel 데이터 품질을 점검하는 데이터 분석 전문가야.
첨부한 파일의 「02_매출원본」 시트를 분석해줘.
열 구성: 주문일자, 지점코드, 지점명, 상품코드, 상품명, 수량, 판매단가, 매출액, 결제수단, 담당자, 주문상태, 비고
기준정보: 「03_상품Master」, 「04_지점Master」

다음 관점에서 문제를 찾아줘.
1. 분석에 불필요한 행(소계, 메모)
2. 완전히 같은 중복 행
3. 지점명 표기 불일치
4. 상품명 표기 불일치
5. 상품코드 오류(기준정보에 없는 코드, 빈칸)
6. 날짜 형식 불일치 및 날짜 빈칸
7. 텍스트로 입력된 숫자
8. 수량 × 판매단가 ≠ 매출액인 행
9. 기타 빈 셀

표 형식: 문제 유형 | 해당 열 | Excel 행 번호 | 예시 값 | 처리 방법
실제 데이터에서 확인되는 것만 쓰고 추측하지 마.`,
  },
  {
    id: "p02", part: 2, level: "Level 2 · 빈칸 채우기",
    title: "수식 요청 프롬프트 공식 (예시)",
    use: "수식을 요청할 때 쓰는 기본 틀입니다. [ ] 안을 내 상황에 맞게 바꿔 쓰세요. (Excel 버전 + 시트·열 위치 + 원하는 결과 + 예외 처리 + 설명 요청)",
    href: "session_2.html#formula",
    tip: "Excel 버전을 꼭 쓰세요. Excel 2024에는 GROUPBY · PIVOTBY · REGEX 함수가 없어서, 버전이 빠지면 AI가 없는 함수를 알려줄 수 있습니다.",
    text: `나는 [Excel 2024]을 사용해.
[「05_정제데이터」의 상품코드는 D열]이고 …
[상품분류를 가져오는] 수식을 만들어줘.
[못 찾으면 "확인필요"]라고 표시해줘.
[수식 각 부분의 역할]도 설명해줘.`,
  },
  {
    id: "p03", part: 2, level: "Level 2 · 빈칸 채우기",
    title: "[09-①] IF 테스트: 매출액이 맞을까?",
    use: "09_함수테스트 시트 D6~D15에 넣을 수식을 요청합니다. E열 예상 결과와 비교해 '검토필요'가 3건이면 통과입니다.",
    href: "session_2.html#if",
    tip: "수식 예시: =IF(A6*B6=C6,\"정상\",\"검토필요\")",
    text: `나는 Excel 2024 버전을 사용해.
「09_함수테스트」에서 수량은 A열, 판매단가는 B열, 매출액은 C열이야.
수량×판매단가가 매출액과 같으면 "정상", 다르면 "검토필요"라고 D열에 표시하는 수식을 만들어줘.
수식 설명도 해줘.`,
  },
  {
    id: "p04", part: 2, level: "Level 3 · 직접 작성",
    title: "IF 수식 개선: 빈칸·텍스트 숫자 처리 (이어서 요청)",
    use: "테스트는 통과했지만 05 실전 데이터에서 틀린 경우, 앞의 대화에 이어서 조건을 추가해 다시 요청합니다.",
    href: "session_2.html#trap",
    tip: "개선 수식: =IF(COUNT(F2:H2)<3,\"값확인\",IF(F2*G2=H2,\"정상\",\"검토필요\")) → 결과: 값확인 10건 / 검토필요 2건(41·72행)",
    text: `(앞의 요청에 이어서) 빈칸이나 텍스트로 된 숫자가 있으면 "값확인"으로 표시해줘.`,
  },
  {
    id: "p05", part: 2, level: "Level 3 · 직접 작성",
    title: "IF 수식 개선: 상세 조건 버전 (생략 가능)",
    use: "처음부터 조건을 빠짐없이 적어 한 번에 요청하는 상세 버전입니다. 05_정제데이터 N2에 넣을 수식을 요청합니다.",
    href: "session_2.html#trap",
    tip: "슬라이드에서 '생략 가능'으로 표시된 심화 프롬프트입니다.",
    text: `나는 Excel 2024을 사용해. 「05_정제데이터」 시트에서 수량은 F열, 판매단가는 G열, 매출액은 H열이고, 데이터는 2행부터 있어. N2에 넣고 아래로 채울 수식 1개를 만들어줘.

판정 조건:
1. F2:H2 세 칸 중 숫자로 된 칸이 3개가 아니면 "값확인" (빈칸이나 텍스트로 입력된 숫자는 숫자로 세지 않음)
2. 세 칸이 모두 숫자이고 F×G가 H와 같으면 "정상"
3. 세 칸이 모두 숫자이고 F×G가 H와 다르면 "검토필요"`,
  },
  {
    id: "p06", part: 2, level: "Level 2 · 빈칸 채우기",
    title: "[09-②] XLOOKUP 테스트: 상품분류 가져오기 (빈칸 채우기)",
    use: "09_함수테스트 B20~B29에 상품분류를 가져옵니다. [ ] 두 곳(Excel 버전, 상품분류 열)을 채워서 요청하세요.",
    href: "session_2.html#xlookup",
    tip: "P013·P011(Master에 없는 코드)이 \"확인필요\"로 나오면 통과입니다.",
    text: `나는 Excel [        ]을 사용해.
「09_함수테스트」의 상품코드는 A열,
「03_상품Master」의 상품코드는 A열, 상품분류는 [    ]열이야.
XLOOKUP으로 B20에 상품분류를 가져와줘.
코드를 못 찾으면 "확인필요"라고 표시해줘.
수식 각 부분의 역할도 설명해줘.`,
  },
  {
    id: "p07", part: 2, level: "",
    title: "[09-②] XLOOKUP 테스트: 질문형 (수식 예시)",
    use: "함수 이름을 지정하지 않고 '어떤 함수를 써야 하는지' 묻는 방식입니다. 위 프롬프트와 비교해 보세요.",
    href: "session_2.html#xlookup",
    tip: "",
    text: `나는 Excel 2024을 사용해.
「09_함수테스트」의 상품코드는 A열이고,
「03_상품Master」의 상품코드는 A열, 상품분류는 C열이야.
B20에 상품분류를 가져오려면 어떤 함수를 써야 하니?`,
  },
  {
    id: "p08", part: 2, level: "강사 시연",
    title: "오류 코드가 나오면? 교정 요청",
    use: "수식을 입력했더니 #N/A, #VALUE!, #NAME?, #REF! 같은 오류가 나올 때 사용합니다. [ ] 안을 실제 내용으로 바꾸세요.",
    href: "session_2.html#error",
    tip: "오류 코드 + 수식 + 셀 값을 함께 주면 AI가 원인을 정확히 짚습니다.",
    text: `Excel 2024에서 이 수식을 입력했더니 [오류 코드]가 나왔어.
수식: [붙여넣기]
해당 셀 값: [값]
원인과 수정한 수식을 알려줘.`,
  },
  {
    id: "p09", part: 3, level: "",
    title: "정제 순서와 기준 묻기",
    use: "미션 1에서 만든 'AI 발견 vs 내 확인' 표를 붙여넣고, 정제 순서와 문제별 처리 기준을 AI에게 묻습니다.",
    href: "session_3.html#ask",
    tip: "AI의 제안은 '선택지'입니다. 최종 기준은 내가 정하고 기록합니다. (ChatGPT는 7단계, 다른 AI는 6단계로 제안하기도 합니다.)",
    text: `미션1에서 확인한 문제 목록은 다음과 같아:
[미션 1 완료 표 붙여넣기]

Excel 2024에서 정제하려고 해.
① 처리 순서 ② 문제별 처리 기준 ③ Excel에서 하는 방법
을 표로 알려줘. 원본은 수정하지 않는다는 전제야.
목록에 없는 문제는 추측하지 마.`,
  },
  {
    id: "p10", part: 4, level: "Level 3 · 직접 작성",
    title: "피벗 구조 묻기 (틀만 제공)",
    use: "[ ] 안을 직접 채워 보내세요. 피벗테이블의 행·열·값·필터를 어떻게 구성할지 물어봅니다.",
    href: "session_4.html#ask",
    tip: "힌트 — 목적: 월별·지점별 매출 비교 / 필드: 주문일자, 지점명, 상품분류, 주문상태, 매출액 …",
    text: `나는 [월별·지점별 판매 매출 비교]를 알고 싶어.
데이터 필드는 [주문일자, 지점명, 상품분류, 주문상태, 매출액]이야.
Excel 2024 피벗테이블의
① 행 ② 열 ③ 값 ④ 필터
구성과 그렇게 구성하는 이유를 알려줘.`,
  },
  {
    id: "p11", part: 4, level: "",
    title: "AI 분석: 사실 / 해석 / 추측 구분하기",
    use: "완성한 피벗 결과 수치를 붙여넣고 현황·특징·추가 확인 사항으로 정리하게 합니다. AI가 쓴 문장은 사실/해석/추측으로 직접 분류하세요.",
    href: "session_4.html#fact",
    tip: "'4월 이벤트 때문에 늘었다'처럼 데이터에 근거가 없는 원인은 추측입니다. 보고서에 쓰지 않습니다.",
    text: `이 피벗 결과를 ① 객관적 현황 ② 데이터에서 확인되는 특징 ③ 추가 확인 사항으로 정리해줘.
데이터에 없는 원인은 쓰지 마.
[피벗 수치 붙여넣기]`,
  },
  {
    id: "p12", part: 5, level: "",
    title: "AI에게 차트 추천받기",
    use: "06_피벗분석 결과를 보고 어떤 차트가 좋을지, 축과 범례는 어떻게 할지 묻습니다.",
    href: "session_5.html#chart-ask",
    tip: "비교 → 묶은 세로 막대형 / 추세 → 꺾은선형 / 구성비 → 원형(항목이 적을 때). 목적에 따라 내가 판단합니다.",
    text: `현재 피벗테이블은 월별·지점별 매출을 비교한 데이터야.
이 데이터를 시각화하려고 해.
① 추천 차트 ② 추천 이유
③ 가로축 ④ 세로축 ⑤ 범례
를 알려줘.`,
  },
  {
    id: "p13", part: 5, level: "",
    title: "Executive Summary 요청",
    use: "파일 전체가 아니라 Excel에서 직접 계산·검증한 숫자만 붙여넣습니다. 결과는 08_AI보고서 A3에 붙여넣고 문장마다 확인합니다.",
    href: "session_5.html#summary",
    tip: "AI가 원본을 다시 계산해 다른 숫자를 쓰는 것을 막기 위해, 검증한 숫자만 줍니다.",
    text: `다음은 Excel에서 직접 계산·검증한 결과야:
[피벗 수치 붙여넣기]

1. 현황 2. 인사이트 3. 추가 확인사항 / 실행과제
구조로 5문장 이내로 요약해줘.
데이터에 없는 원인은 쓰지 말고 "추가 확인 필요"로 표시해줘.
이를 보고서로 작성해줘.`,
  },
  {
    id: "p14", part: 5, level: "",
    title: "결과보고서를 인포그래픽으로",
    use: "Executive Summary 대화에 이어서 요청합니다.",
    href: "session_5.html#visual",
    tip: "",
    text: `위 결과보고서를 한 장의 인포그래픽으로 보여줘.
형식은 현황, 인사이트, 추가확인/실행과제 형식으로`,
  },
  {
    id: "p15", part: 5, level: "",
    title: "결과보고서를 PPT로 제작",
    use: "인포그래픽을 만든 뒤 이어서 요청합니다.",
    href: "session_5.html#visual",
    tip: "",
    text: `위 결과보고서를 PPT로 제작해줘. 그 중 한 장은 위에 생성한 인포그래픽 이미지를 넣어줘.`,
  },
];

// 프롬프트 공식 (라이브러리 상단 안내용)
const FORMULA = ["Excel 버전", "시트·열 위치", "원하는 결과", "예외 처리", "설명 요청", "추측 금지"];
const PART_NAMES = { 1: "PART 1 · 데이터 진단", 2: "PART 2 · 수식 생성·검증", 3: "PART 3 · 데이터 정제", 4: "PART 4 · 피벗 분석", 5: "PART 5 · 시각화·보고서" };

// ---------- 수식 라이브러리: 강의안의 복사용 수식 ----------
// where = 입력 위치, funcs = 사용 함수, href = 강의안 위치, note = 한 줄 설명
const FORMULAS = [
  { id: "f01", part: 2, title: "매출액 검증 (09 테스트)", where: "09 시트 · D6", funcs: "IF", href: "session_2.html#if",
    note: "수량×단가=매출액이면 정상, 아니면 검토필요. 검토필요 3건이면 통과.",
    text: `=IF(A6*B6=C6,"정상","검토필요")` },
  { id: "f02", part: 2, title: "매출액 검증 (05 실전, 함정 버전)", where: "05 시트 · N2", funcs: "IF", href: "session_2.html#trap",
    note: "소계 행이 정상으로 나오고, 텍스트 숫자가 검토필요로 나오는 함정 수식입니다.",
    text: `=IF(F2*G2=H2,"정상","검토필요")` },
  { id: "f03", part: 2, title: "매출액 검증 (개선판)", where: "05 시트 · N2", funcs: "IF + COUNT", href: "session_2.html#trap",
    note: "COUNT는 숫자만 셉니다. 하나라도 빈칸·텍스트면 값확인.",
    text: `=IF(COUNT(F2:H2)<3,"값확인",IF(F2*G2=H2,"정상","검토필요"))` },
  { id: "f04", part: 2, title: "상품분류 찾기 (09 테스트)", where: "09 시트 · B20", funcs: "XLOOKUP", href: "session_2.html#xlookup",
    note: "Master에 없는 코드(P013·P011)가 확인필요로 나오면 통과.",
    text: `=XLOOKUP(A20,'03_상품Master'!$A$2:$A$11,'03_상품Master'!$C$2:$C$11,"확인필요")` },
  { id: "f05", part: 2, title: "상품분류 찾기 (05 실전)", where: "05 시트 · M2", funcs: "XLOOKUP", href: "session_2.html#apply-xl",
    note: "M열에서 확인필요만 필터하면 코드 오류 6건이 보입니다.",
    text: `=XLOOKUP(D2,'03_상품Master'!$A$2:$A$11,'03_상품Master'!$C$2:$C$11,"확인필요")` },
  { id: "f06", part: 2, title: "#N/A 유도 수식 (시연용)", where: "09 시트 · G26", funcs: "XLOOKUP", href: "session_2.html#error",
    note: "'확인필요'를 뺀 수식. 오류 코드를 만든 뒤 AI에게 교정을 요청합니다.",
    text: `=XLOOKUP(A26,'03_상품Master'!$A$2:$A$11,'03_상품Master'!$C$2:$C$11)` },
  { id: "f08", part: 2, title: "중복키 만들기", where: "05 시트 · O2", funcs: "TEXTJOIN", href: "session_2.html#dup",
    note: "한 행을 문자열 하나로 합칩니다. FALSE는 빈칸을 유지합니다.",
    text: `=TEXTJOIN("|",FALSE,A2:L2)` },
  { id: "f09", part: 2, title: "중복 여부 표시", where: "05 시트 · P2", funcs: "IF + COUNTIF", href: "session_2.html#dup",
    note: "나와 똑같은 행이 2개 이상이면 중복. 결과: 2쌍(4행).",
    text: `=IF(COUNTIF($O$2:$O$101,O2)>1,"중복","")` },
  { id: "f10", part: 2, title: "조건 합계 (09 테스트)", where: "09 시트 · M33", funcs: "SUMIFS", href: "session_2.html#sumifs",
    note: "조건 칸(J~L)을 참조하는 3조건 합계. 오류 없이 조용히 틀릴 수 있습니다.",
    text: `=SUMIFS($D$33:$D$42,$A$33:$A$42,J33,$B$33:$B$42,K33,$C$33:$C$42,L33)` },
  { id: "f11", part: 2, title: "조건 합계 (월 조건 제외)", where: "09 시트 · M36", funcs: "SUMIFS", href: "session_2.html#sumifs",
    note: "Q4 계산용. 월 조건을 빼고 따로 입력합니다.",
    text: `=SUMIFS($D$33:$D$42,$B$33:$B$42,K36,$C$33:$C$42,L36)` },
  { id: "f12", part: 2, title: "3월 신구점 판매 매출", where: "05 시트 · W2", funcs: "SUMIFS + DATE", href: "session_2.html#w2",
    note: "정제 전 130,600원 → 정제 후 140,600원.",
    text: `=SUMIFS(H:H,C:C,"신구점",K:K,"판매",A:A,">="&DATE(2026,3,1),A:A,"<"&DATE(2026,4,1))` },
  { id: "f13", part: 3, title: "날짜 변환 확인: 진짜 날짜가 몇 개?", where: "05 시트 · 빈 셀 (A열 텍스트 나누기 후)", funcs: "COUNT", href: "session_3.html#clean2",
    note: "텍스트 나누기 뒤에 COUNT가 94면 성공. 94보다 작으면 남은 날짜만 골라 Ctrl+H로 \".\"을 \"-\"로 바꾼 뒤 다시 텍스트 나누기.",
    text: `=COUNT(A2:A96)` },
  { id: "f14", part: 3, title: "지점명 표준화", where: "05 시트 · R2", funcs: "XLOOKUP", href: "session_3.html#clean3",
    note: "지점코드로 Master에서 표준 지점명을 가져옵니다.",
    text: `=XLOOKUP(B2,'04_지점Master'!$A$2:$A$4,'04_지점Master'!$B$2:$B$4,"확인필요")` },
  { id: "f15", part: 3, title: "상품코드 표준화", where: "05 시트 · S2", funcs: "IF · COUNTIF · XLOOKUP · SUBSTITUTE", href: "session_3.html#clean3",
    note: "코드가 Master에 있으면 그대로, 없으면 상품명에서 공백을 빼고 코드를 거꾸로 찾습니다.",
    text: `=IF(COUNTIF('03_상품Master'!$A$2:$A$11,D2)>0,D2,
XLOOKUP(SUBSTITUTE(E2," ",""),'03_상품Master'!$B$2:$B$11,'03_상품Master'!$A$2:$A$11,"확인필요"))` },
  { id: "f16", part: 3, title: "상품명 표준화", where: "05 시트 · T2 (S열 다음에)", funcs: "XLOOKUP", href: "session_3.html#clean3",
    note: "반드시 상품코드(S열) 정리 다음에 실행합니다.",
    text: `=XLOOKUP(D2,'03_상품Master'!$A$2:$A$11,'03_상품Master'!$B$2:$B$11,"확인필요")` },
  { id: "f17", part: 3, title: "매출액 재계산", where: "05 시트 · U2", funcs: "IF + COUNT", href: "session_3.html#clean3",
    note: "수량·단가가 빈칸인 행은 원래 매출액을 두고, 나머지만 재계산합니다.",
    text: `=IF(COUNT(F2:G2)<2,H2,F2*G2)` },
  { id: "f18", part: 3, title: "조건부 서식: 남은 문제 행 칠하기", where: "05 시트 · A2:L96 조건부 서식", funcs: "OR · NOT · ISNUMBER", href: "session_3.html#cf",
    note: "N열이 정상이 아니거나, 날짜가 숫자가 아니거나, 주문상태가 빈칸이면 칠합니다.",
    text: `=OR($N2<>"정상",NOT(ISNUMBER($A2)),$K2="")` },
];

// ---------- 함수 카드 11 (강의안 PART 2 함수 카드 · OR와 NOT은 한 장으로 묶음 = 10장) ----------
// group = 판정 · 찾기 · 정리 · 합계 / text = 복사해 쓰는 예시 수식(강의 수식에서 발췌)
const FUNC_GROUPS = ["판정", "찾기", "정리", "합계"];
const FUNCS = [
  { id: "fn01", name: "IF", group: "판정", main: true, analogy: "\"~이면 A, 아니면 B\" 갈림길",
    syntax: "IF(조건, 참, 거짓)", where: "매출 판정: 09 D6, 05 N2", mistake: "따옴표 없이 정상 입력 → #NAME?",
    text: `=IF(A6*B6=C6,"정상","검토필요")` },
  { id: "fn02", name: "COUNT", group: "판정", analogy: "숫자인 칸만 세는 출석 체크",
    syntax: "COUNT(범위)", where: "빈칸·글자 숫자 감지: 05 N2", mistake: "글자 숫자도 셀 거라고 착각",
    text: `=COUNT(F2:H2)` },
  { id: "fn03", name: "ISNUMBER", group: "판정", analogy: "\"이게 숫자야?\" 예/아니오",
    syntax: "ISNUMBER(값)", where: "날짜가 숫자인지: 조건부 서식", mistake: "글자 날짜도 TRUE일 거라 착각",
    text: `=ISNUMBER(A2)` },
  { id: "fn04", name: "OR · NOT", group: "판정", analogy: "하나라도 맞으면 참 / 반대로 뒤집기",
    syntax: "OR(조건1, …) · NOT(조건)", where: "문제 행 칠하기: 조건부 서식", mistake: "AND와 혼동, 괄호 위치 실수",
    text: `=OR($N2<>"정상",NOT(ISNUMBER($A2)),$K2="")` },
  { id: "fn05", name: "XLOOKUP", group: "찾기", main: true, analogy: "학번으로 이름 찾기",
    syntax: "XLOOKUP(값, 찾을범위, 가져올범위, 없을 때)", where: "B20, M2, R2~T2", mistake: "범위 고정(F4) 빠뜨림",
    text: `=XLOOKUP(D2,'03_상품Master'!$A$2:$A$11,'03_상품Master'!$C$2:$C$11,"확인필요")` },
  { id: "fn06", name: "COUNTIF", group: "찾기", main: true, analogy: "\"나랑 똑같은 사람 몇 명?\"",
    syntax: "COUNTIF(범위, 조건)", where: "중복 P2, Master 확인 S2", mistake: "범위를 고정하지 않음",
    text: `=COUNTIF($O$2:$O$101,O2)` },
  { id: "fn07", name: "SUBSTITUTE", group: "정리", analogy: "찾아 바꾸기의 함수 버전",
    syntax: "SUBSTITUTE(텍스트, 바꿀 것, 새 것)", where: "공백 제거 S2", mistake: "따옴표 사이 공백 한 칸 빼먹음",
    text: `=SUBSTITUTE(E2," ","")` },
  { id: "fn09", name: "TEXTJOIN", group: "정리", analogy: "여러 칸을 한 줄로 이어 붙이기",
    syntax: "TEXTJOIN(구분자, 빈칸무시, 범위)", where: "중복키 O2", mistake: "TRUE로 해서 빈칸 위치 정보가 사라짐",
    text: `=TEXTJOIN("|",FALSE,A2:L2)` },
  { id: "fn12", name: "SUMIFS", group: "합계", main: true, analogy: "조건 맞는 영수증만 모아 합계",
    syntax: "SUMIFS(더할 범위, 조건 범위1, 조건1, …)", where: "09 M33, 05 W2", mistake: "조건 칸의 글자 때문에 0",
    text: `=SUMIFS($D$33:$D$42,$A$33:$A$42,J33,$B$33:$B$42,K33,$C$33:$C$42,L33)` },
  { id: "fn13", name: "DATE", group: "합계", analogy: "연·월·일로 진짜 날짜 만들기",
    syntax: "DATE(연, 월, 일)", where: "SUMIFS 날짜 조건 W2", mistake: "\">=\"와 DATE를 &로 안 붙임",
    text: `=SUMIFS(H:H,C:C,"신구점",K:K,"판매",A:A,">="&DATE(2026,3,1),A:A,"<"&DATE(2026,4,1))` },
];
