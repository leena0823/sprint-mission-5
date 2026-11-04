
import Link from "next/link";

const menuItems = [
  { label: "대시보드", href: "/dashboard" },
  { label: "주문관리", href: "/orders" },
  { label: "재고관리", href: "/inventory" },
  { label: "입출고 관리", href: "/transactions" },
];

const orders = [
  {
    id: "ORD-001",
    customer: "김민지",
    product: "바디로션",
    quantity: "2개",
    date: "2026.11.03",
    status: "신규 주문",
  },
  {
    id: "ORD-002",
    customer: "이서연",
    product: "헤어샴푸",
    quantity: "3개",
    date: "2026.11.03",
    status: "배송 준비",
  },
  {
    id: "ORD-003",
    customer: "박지훈",
    product: "수딩로션",
    quantity: "1개",
    date: "2026.11.02",
    status: "배송 완료",
  },
  {
    id: "ORD-004",
    customer: "최유진",
    product: "바디로션",
    quantity: "4개",
    date: "2026.11.02",
    status: "배송 준비",
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  "신규 주문": { bg: "#EAF1F7", text: "#537A9B" },
  "배송 준비": { bg: "#FFF4E5", text: "#B7791F" },
  "배송 완료": { bg: "#EAF5EF", text: "#43835E" },
};

export default function OrdersPage() {
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
                fontWeight: item.href === "/orders" ? 700 : 400,
                background:
                  item.href === "/orders" ? "#EAF1F7" : "transparent",
                color: "#263B50",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 주문관리 본문 */}
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
          <h1 style={{ fontSize: 22, fontWeight: 700 }}>주문관리</h1>
          <span style={{ fontSize: 14, color: "#64748B" }}>
            관리자
          </span>
        </header>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
          {/* 주문 요약 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              marginBottom: 24,
            }}
          >
            {[
              ["전체 주문", "365건"],
              ["신규 주문", "24건"],
              ["배송 준비", "18건"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EDF0F4",
                  borderRadius: 10,
                  padding: 24,
                }}
              >
                <p style={{ color: "#64748B", fontSize: 13, marginBottom: 12 }}>
                  {label}
                </p>
                <strong style={{ fontSize: 26 }}>{value}</strong>
              </div>
            ))}
          </div>

          {/* 주문 목록 */}
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
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div>
                <h2 style={{ fontSize: 18, marginBottom: 8 }}>
                  주문 목록
                </h2>
                <p style={{ fontSize: 13, color: "#64748B" }}>
                  주문 내역과 배송 상태를 확인하세요.
                </p>
              </div>

              <span
                style={{
                  background: "#EAF1F7",
                  padding: "10px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                }}
              >
                총 {orders.length}건 표시
              </span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  minWidth: 650,
                }}
              >
                <thead>
                  <tr style={{ background: "#F5F8FC" }}>
                    {[
                      "주문번호",
                      "고객명",
                      "상품명",
                      "수량",
                      "주문일",
                      "상태",
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
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      style={{ borderBottom: "1px solid #EDF0F4" }}
                    >
                      <td style={{ padding: "18px 12px", fontSize: 13 }}>
                        {order.id}
                      </td>
                      <td style={{ padding: "18px 12px", fontSize: 13 }}>
                        {order.customer}
                      </td>
                      <td style={{ padding: "18px 12px", fontSize: 13 }}>
                        {order.product}
                      </td>
                      <td style={{ padding: "18px 12px", fontSize: 13 }}>
                        {order.quantity}
                      </td>
                      <td style={{ padding: "18px 12px", fontSize: 13 }}>
                        {order.date}
                      </td>
                      <td style={{ padding: "18px 12px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "7px 12px",
                            borderRadius: 6,
                            fontSize: 12,
                            background: statusColors[order.status].bg,
                            color: statusColors[order.status].text,
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
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
            * 현재 주문 내역과 요약 수치는 시연용 예시 데이터입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
