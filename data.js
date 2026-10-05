// 강의 공통 정보와 차시 목록.
// 새 차시를 추가하려면: 1) session_N.html 내용 파일 작성, 2) 아래 SESSIONS 배열에 항목 추가.
// index.html의 목차 카드와 각 session_N.html의 상단 네비게이션이 이 데이터로 자동 생성됩니다.
// => 이 파일 덕분에 차시가 늘어나도 다른 파일을 일일이 고칠 필요가 없습니다.

const COURSE = {
  name: "신구대학교 재학생 특강 · AI 활용 스마트 엑셀",
  instructor: "김유라",
  year: 2026,
};

const SESSIONS = [
  {
    id: 1,
    title: "ChatGPT와 함께하는 스마트 엑셀",
    subtitle: "AI에게 묻고, Excel에서 실행하고, 결과를 검증하다",
    desc: "AI로 데이터 문제 진단부터 IF·XLOOKUP·COUNTIF·SUMIFS 수식 생성·검증, 데이터 정제, 피벗 분석, 차트와 1페이지 AI 보고서까지.",
    href: "session_1.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#materials", label: "실습자료" },
      { href: "#opening", label: "오프닝" },
      { href: "#part1", label: "01 문제 진단" },
      { href: "#part2", label: "02 수식 생성·검증" },
      { href: "#part3", label: "03 데이터 정제" },
      { href: "#part4", label: "04 피벗 분석" },
      { href: "#part5", label: "05 시각화·보고서" },
      { href: "#funcs", label: "함수 카드" },
      { href: "#wrap", label: "마무리" },
      { href: "#appendix", label: "부록" },
    ],
  },
];
