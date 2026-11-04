
import Link from "next/link";

const menuItems = [
  { label: "대시보드", href: "/dashboard" },
  { label: "주문관리", href: "/orders" },
  { label: "재고관리", href: "/inventory" },
  { label: "입출고 관리", href: "/transactions" },
];

const products = [
  {
    code: "P-001",
    name: "바디로션",
    stock: 5,
    safety: 30,
    status: "발주 필요",
  },
  {
    code: "P-002",
    name: "헤어샴푸",
    stock: 15,
    safety: 58,
    status: "발주 필요",
  },
  {
    code: "P-003",
    name: "수딩로션",
    stock: 80,
    safety: 30,
    status: "정상",
  },
  {
    code: "P-004",
    name: "베이비워시",
    stock: 45,
    safety: 20,
    status: "정상",
  },
  {
    code: "P-005",
    name: "보습크림",
    stock: 0,
    safety: 10,
    status: "품절",
  },
];

const summaryCards = [
  { label: "전체 상품", value: "248개" },
  { label: "재고 부족", value: "12개" },
  { label: "발주 필요", value: "8개" },
  { label: "품절 상품", value: "1개" },
];

export default function InventoryPage() {
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
      {/* 왼쪽 사이드바 */}
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
                fontWeight: item.href === "/inventory" ? 700 : 400,
                background:
                  item.href === "/inventory" ? "#EAF1F7" : "transparent",
                color: "#263B50",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 재고관리 본문 */}
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
          <h1 style={{ fontSize: 22, fontWeight: 700 }}>
            재고관리
          </h1>
          <span style={{ fontSize: 14, color: "#64748B" }}>
            관리자
          </span>
        </header>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: 32,
          }}
        >
          {/* 재고 요약 카드 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 20,
              marginBottom: 24,
            }}
          >
            {summaryCards.map((card) => (
              <div
                key={card.label}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EDF0F4",
                  borderRadius: 10,
                  padding: 24,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748B",
                    marginBottom: 12,
                  }}
                >
                  {card.label}
                </p>
                <strong style={{ fontSize: 26 }}>
                  {card.value}
                </strong>
              </div>
            ))}
          </div>

          {/* 재고 목록 */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #EDF0F4",
              borderRadius: 10,
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 18,
                    marginBottom: 8,
                  }}
                >
                  상품별 재고 현황
                </h2>
                <p style={{ fontSize: 13, color: "#64748B" }}>
                  상품별 현재 재고와 안전 재고를 확인하세요.
                </p>
              </div>

              <span
                style={{
                  padding: "10px 16px",
                  borderRadius: 8,
                  background: "#EAF1F7",
                  fontSize: 13,
                }}
              >
                총 {products.length}개 상품 표시
              </span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  minWidth: 650,
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr style={{ background: "#F5F8FC" }}>
                    {[
                      "상품코드",
                      "상품명",
                      "현재 재고",
                      "안전 재고",
                      "재고 상태",
                    ].map((title) => (
                      <th
                        key={title}
                        style={{
                          padding: "16px 12px",
                          fontSize: 13,
                          color: "#64748B",
                          fontWeight: 600,
                        }}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => {
                    const status =
                      product.stock === 0
                        ? "품절"
                        : product.stock < product.safety
                          ? "발주 필요"
                          : "정상";

                    const statusStyle =
                      status === "정상"
                        ? { bg: "#EAF5EF", text: "#43835E" }
                        : status === "품절"
                          ? { bg: "#FCEAEA", text: "#C44E4E" }
                          : { bg: "#FFF4E5", text: "#B7791F" };

                    return (
                      <tr
                        key={product.code}
                        style={{
                          borderBottom: "1px solid #EDF0F4",
                        }}
                      >
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {product.code}
                        </td>
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {product.name}
                        </td>
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {product.stock}개
                        </td>
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {product.safety}개
                        </td>
                        <td style={{ padding: "18px 12px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "7px 12px",
                              borderRadius: 6,
                              fontSize: 12,
                              background: statusStyle.bg,
                              color: statusStyle.text,
                            }}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 12,
              color: "#94A3B8",
            }}
          >
            * 현재 재고 수량과 요약 수치는 시연용 예시 데이터입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
