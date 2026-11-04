
import Link from "next/link";

const menuItems = [
  { label: "대시보드", href: "/dashboard" },
  { label: "주문관리", href: "/orders" },
  { label: "재고관리", href: "/inventory" },
  { label: "입출고 관리", href: "/transactions" },
];

const transactions = [
  {
    id: "TR-001",
    date: "2026.11.03",
    product: "바디로션",
    type: "입고",
    quantity: 30,
    manager: "관리자",
  },
  {
    id: "TR-002",
    date: "2026.11.03",
    product: "헤어샴푸",
    type: "출고",
    quantity: 12,
    manager: "관리자",
  },
  {
    id: "TR-003",
    date: "2026.11.02",
    product: "수딩로션",
    type: "입고",
    quantity: 50,
    manager: "관리자",
  },
  {
    id: "TR-004",
    date: "2026.11.02",
    product: "베이비워시",
    type: "출고",
    quantity: 8,
    manager: "관리자",
  },
];

const cardStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid #EDF0F4",
  borderRadius: 10,
  padding: 24,
};

export default function TransactionsPage() {
  const incoming = transactions
    .filter((item) => item.type === "입고")
    .reduce((sum, item) => sum + item.quantity, 0);

  const outgoing = transactions
    .filter((item) => item.type === "출고")
    .reduce((sum, item) => sum + item.quantity, 0);

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
                fontWeight: item.href === "/transactions" ? 700 : 400,
                background:
                  item.href === "/transactions" ? "#EAF1F7" : "transparent",
                color: "#263B50",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 입출고 관리 본문 */}
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
            입출고 관리
          </h1>
          <span style={{ fontSize: 14, color: "#64748B" }}>
            관리자
          </span>
        </header>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
          {/* 요약 카드 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              marginBottom: 24,
            }}
          >
            {[
              { label: "전체 입출고", value: `${transactions.length}건` },
              { label: "입고 수량", value: `${incoming}개` },
              { label: "출고 수량", value: `${outgoing}개` },
            ].map((card) => (
              <div key={card.label} style={cardStyle}>
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

          {/* 입출고 내역 */}
          <div style={cardStyle}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 18, marginBottom: 8 }}>
                최근 입출고 내역
              </h2>
              <p style={{ color: "#64748B", fontSize: 13 }}>
                상품별 입고 및 출고 내역을 확인하세요.
              </p>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  minWidth: 620,
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr style={{ background: "#F5F8FC" }}>
                    {[
                      "거래번호",
                      "날짜",
                      "상품명",
                      "구분",
                      "수량",
                      "담당자",
                    ].map((title) => (
                      <th
                        key={title}
                        style={{
                          padding: "16px 12px",
                          color: "#64748B",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((item) => {
                    const isIncoming = item.type === "입고";

                    return (
                      <tr
                        key={item.id}
                        style={{
                          borderBottom: "1px solid #EDF0F4",
                        }}
                      >
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {item.id}
                        </td>
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {item.date}
                        </td>
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {item.product}
                        </td>
                        <td style={{ padding: "18px 12px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "7px 12px",
                              borderRadius: 6,
                              fontSize: 12,
                              background: isIncoming
                                ? "#EAF5EF"
                                : "#FFF4E5",
                              color: isIncoming
                                ? "#43835E"
                                : "#B7791F",
                            }}
                          >
                            {item.type}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "18px 12px",
                            fontSize: 13,
                            fontWeight: 600,
                            color: isIncoming ? "#43835E" : "#B7791F",
                          }}
                        >
                          {isIncoming ? "+" : "-"}
                          {item.quantity}개
                        </td>
                        <td style={{ padding: "18px 12px", fontSize: 13 }}>
                          {item.manager}
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
              color: "#94A3B8",
              fontSize: 12,
            }}
          >
            * 현재 입출고 내역은 시연용 예시 데이터입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
