
import Link from "next/link";

export default function SignupPage() {
  const inputStyle = {
    width: "100%",
    height: 46,
    border: "1px solid #DCE5EE",
    borderRadius: 8,
    padding: "0 14px",
    outlineColor: "#91B2CC",
    color: "#263B50",
    background: "#FFFFFF",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: 13,
    marginBottom: 8,
    color: "#263B50",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F8FC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        color: "#263B50",
      }}
    >
     <div
  style={{
    width: "100%",
    maxWidth: 420,
    minHeight: 610,
    boxSizing: "border-box",
    position: "relative",
    background: "#FFFFFF",
    border: "1px solid #E1EAF2",
    borderRadius: 14,
    padding: "44px 36px",
  }}
>
        {/* 홈으로 돌아가기 */}
        <Link
          href="/"
          style={{
            display: "inline-block",
            fontSize: 13,
            color: "#71849A",
            textDecoration: "none",
            marginBottom: 12,
          }}
        >
          ← 홈으로 돌아가기
        </Link>

        {/* 브랜드 및 제목 */}
        <Link
          href="/"
          style={{
            display: "block",
            textAlign: "center",
            fontSize: 25,
            fontWeight: 700,
            color: "#263B50",
            textDecoration: "none",
            marginBottom: 12,
          }}
        >
          Easy ERP
        </Link>

        <h1
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: 600,
            margin: "0 0 44px",
          }}
        >
          회원가입
        </h1>

        {/* 회원가입 입력 영역 */}
        <form>
          <label htmlFor="name" style={labelStyle}>
            이름
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요."
            autoComplete="name"
            required
            style={{
              ...inputStyle,
              marginBottom: 12,
            }}
          />

          <label htmlFor="email" style={labelStyle}>
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            autoComplete="email"
            required
            style={{
              ...inputStyle,
              marginBottom: 12,
            }}
          />

          <label htmlFor="password" style={labelStyle}>
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            autoComplete="new-password"
            required
            style={{
              ...inputStyle,
              marginBottom: 30,
            }}
          />

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            style={{
              width: "100%",
              height: 48,
              background: "#263B50",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            가입하기
          </button>
        </form>

        {/* 로그인 페이지 이동 */}
        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#263B50",
            marginTop: 28,
            marginBottom: 0,
          }}
        >
          이미 계정이 있으신가요?{" "}
          <Link
            href="/login"
            style={{
              color: "#263B50",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            로그인
          </Link>
        </p>
      </div>
    </main>
  );
}
