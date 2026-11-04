
import Link from "next/link";

const menuItems = [
  { label: "대시보드", href: "/dashboard" },
  { label: "주문관리", href: "/orders" },
  { label: "재고관리", href: "/inventory" },
  { label: "입출고 관리", href: "/transactions" },
];

const summaryCards = [
  { label: "전체 상품", value: "248개" },
  { label: "재고 부족", value: "12개" },
  { label: "오늘 주문", value: "365개" },
  { label: "출고 예정", value: "98개" },
];

const cardStyle: React.CSSProperties = {
  background: "#FFFFFF",
  borderRadius: 10,
  padding: 24,
  border: "1px solid #EDF0F4",
};

export default function DashboardPage() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#F5F8FC",
        color: "#263B50",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 왼쪽 메뉴 */}
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          background: "#FFFFFF",
          borderRight: "1px solid #E5EAF0",
          padding: "28px 16px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "block",
            fontSize: 22,
            fontWeight: 700,
            color: "#263B50",
            textDecoration: "none",
            marginBottom: 36,
          }}
        >
          Easy ERP
        </Link>

        <nav style={{ display: "grid", gap: 8 }}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                display: "block",
                padding: "13px 14px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: item.href === "/dashboard" ? 700 : 400,
                background:
                  item.href === "/dashboard" ? "#EAF1F7" : "transparent",
                color: "#263B50",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 오른쪽 대시보드 */}
      <section style={{ flex: 1, minWidth: 0 }}>
        <header
          style={{
            height: 76,
            background: "#FFFFFF",
            borderBottom: "1px solid #E5EAF0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
          }}
        >
          <h1 style={{ fontSize: 22, fontWeight: 700 }}>대시보드</h1>
          <span style={{ fontSize: 14, color: "#64748B" }}>
            ♧ 관리자
          </span>
        </header>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: 32,
          }}
        >
          {/* KPI 카드 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 20,
              marginBottom: 24,
            }}
          >
            {summaryCards.map((card) => (
              <div key={card.label} style={cardStyle}>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: 13,
                    marginBottom: 12,
                  }}
                >
                  {card.label}
                </p>
                <strong style={{ fontSize: 26 }}>{card.value}</strong>
              </div>
            ))}
          </div>

          {/* 중간 카드 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
              marginBottom: 20,
            }}
          >
            <div style={{ ...cardStyle, minHeight: 230 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}
              >
                <h2 style={{ fontSize: 17 }}>발주 대상 상품</h2>
                <Link
                  href="/orders"
                  style={{
                    background: "#EAF1F7",
                    color: "#263B50",
                    padding: "8px 12px",
                    borderRadius: 6,
                    textDecoration: "none",
                    fontSize: 12,
                  }}
                >
                  + 발주 생성
                </Link>
              </div>

              <div style={{ display: "grid", gap: 16, fontSize: 13 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span>바디로션</span>
                  <span>5개</span>
                  <span>30개</span>
                  <span style={{ color: "#D97706" }}>발주 필요</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span>헤어샴푸</span>
                  <span>15개</span>
                  <span>58개</span>
                  <span style={{ color: "#D97706" }}>발주 필요</span>
                </div>
              </div>
            </div>

            <div style={{ ...cardStyle, minHeight: 230 }}>
              <h2 style={{ fontSize: 17, marginBottom: 20 }}>
                ✦ AI 발주 제안
              </h2>
              <p
                style={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.8,
                }}
              >
                재고 부족 상품을 분석해 필요한 발주 수량을 추천합니다.
              </p>
              <Link
                href="/inventory"
                style={{
                  display: "inline-block",
                  marginTop: 28,
                  padding: "10px 16px",
                  background: "#EAF1F7",
                  color: "#263B50",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                제안 확인 →
              </Link>
            </div>
          </div>

          {/* 하단 카드 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            <div style={{ ...cardStyle, minHeight: 230 }}>
              <h2 style={{ fontSize: 17, marginBottom: 22 }}>
                재고 추이
              </h2>

              <svg
                viewBox="0 0 440 140"
                style={{ width: "100%", height: 150 }}
                role="img"
                aria-label="재고 추이 예시 그래프"
              >
                {[25, 60, 95, 130].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="440"
                    y2={y}
                    stroke="#E5EAF0"
                  />
                ))}
                <polyline
                  points="0,28 55,40 110,35 165,65 220,57 275,82 330,75 385,96 440,86"
                  fill="none"
                  stroke="#8FAFC9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
{[
  [0, 28, "10.21", 82],
  [55, 40, "10.22", 76],
  [110, 35, "10.23", 79],
  [165, 65, "10.24", 65],
  [220, 57, "10.25", 70],
  [275, 82, "10.26", 58],
  [330, 75, "10.27", 62],
  [385, 96, "10.28", 51],
  [440, 86, "10.29", 56],
].map(([x, y, date, value]) => (
  <circle
    key={date}
    cx={x}
    cy={y}
    r="10"
    fill="#91B2CCt"
    stroke="#FFFFFF"
    strokeWidth="12"
  >
    <title>{`${date} | 재고 수량: ${value}개`}</title>
  </circle>
))}

              </svg>
            </div>

            <div style={{ ...cardStyle, minHeight: 230 }}>
              <h2 style={{ fontSize: 17, marginBottom: 24 }}>
                최근 입출고 현황
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: 18,
                  fontSize: 13,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span>바디로션</span>
                  <span>입고</span>
                  <span>+30개</span>
                  <span>10.28</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span>헤어샴푸</span>
                  <span>출고</span>
                  <span>-12개</span>
                  <span>10.29</span>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: 24,
              color: "#94A3B8",
              fontSize: 12,
            }}
          >
            * 현재 표시된 수치는 프로토타입 시연용 예시 데이터입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
