
import Link from "next/link";

export default function LoginPage() {
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
        <Link
  href="/"
  style={{
    display: "block",
    width: "fit-content",
    fontSize: 13,
    fontWeight: 500,
    color: "#71849A",
    textDecoration: "none",
    marginBottom: 40,
  }}
>
  ← 홈으로 돌아가기
</Link>
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
            marginBottom: 10,
          }}
        >
          로그인
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#71849A",
            marginBottom: 36,
          }}
        >
          Easy ERP에 로그인하고 업무를 시작하세요.
        </p>

        <form>
          <label
            htmlFor="email"
            style={{ display: "block", fontSize: 13, marginBottom: 8 }}
          >
            이메일
          </label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            required
            style={{
              width: "100%",
              height: 46,
              border: "1px solid #DCE5EE",
              borderRadius: 8,
              padding: "0 14px",
              marginBottom: 22,
              outlineColor: "#91B2CC",
              color: "#263B50",
              background: "#FFFFFF",
            }}
          />

          <label
            htmlFor="password"
            style={{ display: "block", fontSize: 13, marginBottom: 8 }}
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
            style={{
              width: "100%",
              height: 46,
              border: "1px solid #DCE5EE",
              borderRadius: 8,
              padding: "0 14px",
              marginBottom: 30,
              outlineColor: "#91B2CC",
              color: "#263B50",
              background: "#FFFFFF",
            }}
          />

          <button
            type="button"
            style={{
              width: "100%",
              height: 48,
              background: "#91B2CC",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            로그인
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#71849A",
            marginTop: 28,
          }}
        >
          아직 회원이 아니신가요?{" "}
          <Link
            href="/signup"
            style={{
              color: "#476986",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            회원가입
          </Link>
        </p>
      </div>
    </main>
  );
}
