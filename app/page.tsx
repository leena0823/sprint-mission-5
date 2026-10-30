import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>스프린트 미션 5</h1>
      <p>페이지 라우팅 테스트</p>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "24px",
        }}
      >
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
        <Link href="/memos">메모 목록</Link>
        <Link href="/memos/new">새 메모 작성</Link>
        <Link href="/memos/1">메모 상세</Link>
        <Link href="/test">테스트 페이지</Link>
      </nav>
    </main>
  );
}