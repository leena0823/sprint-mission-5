"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ShoppingCart,
  Package,
  Truck,
  FileSpreadsheet,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import type { CSSProperties } from "react";

const colors = {
  background: "#F5F8FC",
  navy: "#263B50",
  muted: "#71849A",
  blue: "#91B2CC",
  line: "#E6EDF3",
  light: "#EAF1F7",
};

const features = [
  {
    icon: ShoppingCart,
    title: "주문관리",
    description: "주문 현황과 처리 상태를 한눈에 확인하고 관리하세요.",
    href: "/orders",
  },
  {
    icon: Package,
    title: "재고관리",
    description: "현재 재고와 부족 상품을 빠르게 파악하세요.",
    href: "/inventory",
  },
  {
    icon: Truck,
    title: "입출고 관리",
    description: "상품의 입고와 출고 내역을 간편하게 관리하세요.",
    href: "/transactions",
  },
];

const metrics = [
  ["전체 상품", "248개"],
  ["재고 부족", "12개"],
  ["오늘 주문", "365개"],
  ["출고 예정", "98개"],
];

const smallCard: CSSProperties = {
  background: "#FFFFFF",
  borderRadius: 8,
  padding: 14,
  border: "1px solid #EDF1F5",
};

const sectionStyle: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 24px",
};

const buttonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 46,
  padding: "0 25px",
  borderRadius: 7,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 600,
};

function DashboardPreview() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "flex",
        background: "#FFFFFF",
        border: "1px solid #DDE6EF",
        borderRadius: 10,
        boxShadow: "0 12px 25px rgba(38,59,80,.10)",
        overflow: "hidden",
        textAlign: "left",
        width: "100%",
        minHeight: 390,
      }}
    >
      <aside
        style={{
          width: 145,
          flexShrink: 0,
          padding: "20px 12px",
          borderRight: "1px solid #E8EDF2",
        }}
      >
        <strong style={{ fontSize: 15 }}>Easy ERP</strong>
        <div style={{ marginTop: 25, display: "grid", gap: 7 }}>
          {[
            ["대시보드", "/dashboard"],
            ["주문관리", "/orders"],
            ["재고관리", "/inventory"],
            ["입출고", "/transactions"],
          ].map(([label, href], index) => (
            <Link
              key={label}
              href={href}
              style={{
                padding: "9px 8px",
                borderRadius: 5,
                fontSize: 11,
                color: colors.navy,
                background: index === 0 ? colors.light : "transparent",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <span style={{ padding: "9px 8px", fontSize: 11 }}>
            인보이스
          </span>
          <span style={{ padding: "9px 8px", fontSize: 11 }}>
            AI 파트너
          </span>
        </div>
      </aside>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 17px",
            borderBottom: "1px solid #E8EDF2",
          }}
        >
          <strong style={{ fontSize: 12 }}>대시보드</strong>
          <span style={{ fontSize: 10, color: colors.muted }}>
            ♧ 관리자
          </span>
        </div>

        <div style={{ padding: 16, background: colors.background }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 10,
              marginBottom: 12,
            }}
          >
            {metrics.map(([label, value]) => (
              <div key={label} style={smallCard}>
                <div style={{ fontSize: 9, color: colors.muted }}>
                  {label}
                </div>
                <strong style={{ fontSize: 17, display: "block", marginTop: 7 }}>
                  {value}
                </strong>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            <div style={{ ...smallCard, minHeight: 145 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 6,
                }}
              >
                <strong style={{ fontSize: 11 }}>발주 대상 상품</strong>
                <Link
                  href="/orders"
                  style={{
                    fontSize: 9,
                    padding: "6px 8px",
                    background: colors.light,
                    borderRadius: 5,
                    textDecoration: "none",
                    color: colors.navy,
                  }}
                >
                  + 발주 생성
                </Link>
              </div>
              <div style={{ borderTop: "1px solid #EDF1F5", marginTop: 12 }}>
                {[
                  ["바디로션", "5개", "30개"],
                  ["헤어샴푸", "15개", "58개"],
                ].map(([name, stock, safe]) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 5,
                      paddingTop: 15,
                      fontSize: 9,
                    }}
                  >
                    <span>{name}</span>
                    <span>{stock}</span>
                    <span>{safe}</span>
                    <span style={{ color: "#D97706" }}>발주 필요</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...smallCard, minHeight: 145 }}>
              <strong style={{ fontSize: 11 }}>✦ AI 발주 제안</strong>
              <p
                style={{
                  fontSize: 9,
                  lineHeight: 1.7,
                  color: colors.muted,
                  marginTop: 15,
                }}
              >
                재고 부족 상품을 분석해 필요한 발주 수량을 추천합니다.
              </p>
              <div style={{ textAlign: "right", marginTop: 18 }}>
                <Link
                  href="/inventory"
                  style={{
                    background: colors.light,
                    padding: "7px 10px",
                    borderRadius: 5,
                    fontSize: 9,
                    color: colors.navy,
                    textDecoration: "none",
                  }}
                >
                  제안 확인 →
                </Link>
              </div>
            </div>

            <div style={{ ...smallCard, height: 145, position: "relative" }}>
              <svg
                viewBox="0 0 300 115"
                style={{ width: "100%", height: "100%" }}
                role="img"
                aria-label="재고 추이 예시 그래프"
              >
                {[20, 40, 60, 80, 100].map((y) => (
                  <line
                    key={y}
                    x1="24"
                    y1={y}
                    x2="295"
                    y2={y}
                    stroke="#E8EDF3"
                    strokeWidth="1"
                  />
                ))}
                {[20, 40, 60, 80, 100].map((y, i) => (
                  <text
                    key={y}
                    x="3"
                    y={y + 3}
                    fill="#94A3B8"
                    fontSize="7"
                  >
                    {100 - i * 20}
                  </text>
                ))}
                <polyline
                  points="24,27 69,34 114,31 159,40 204,35 249,57 294,53"
                  fill="none"
                  stroke="#8FAFCD"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                
{[
  [24, 27, "10.21", 82],
  [69, 34, "10.22", 76],
  [114, 31, "10.23", 79],
  [159, 40, "10.24", 65],
  [204, 35, "10.25", 70],
  [249, 57, "10.26", 58],
  [294, 53, "10.27", 62],
].map(([x, y, date, value]) => (
 <circle
  key={date}
  cx={x}
  cy={y}
  r="2"
  fill="#8FAFCD"
  stroke="transparent"
  strokeWidth="12"
  onMouseEnter={() =>
    setHoveredPoint(date === "10.23" ? Number(value) : null)
  }
  onMouseLeave={() => setHoveredPoint(null)}
  style={{ cursor: "pointer" }}
/>
))}

              {["월", "화", "수", "목", "금", "토", "일"].map((day, i) => (
  <text
    key={day}
    x={24 + i * 45}
    y="112"
    textAnchor="middle"
    fill="#94A3B8"
    fontSize="8"
  >
    {day}
  </text>
))}
              </svg>

              {hoveredPoint !== null && (
  <div
    style={{
      position: "absolute",
      left: "29%",
      top: 8,
      transform: "translateX(-50%)",
      background: "#263B50",
      color: "#FFFFFF",
      padding: "6px 10px",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 500,
      pointerEvents: "none",
      zIndex: 10,
      boxShadow: "0 4px 12px rgba(38,59,80,0.15)",
    }}
  >
    주문 물량: {hoveredPoint}건
  </div>
)}
            </div>

            <div style={{ ...smallCard, height: 145 }}>
              <strong style={{ fontSize: 11 }}>최근 입출고 현황</strong>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                  gap: 6,
                  fontSize: 9,
                  marginTop: 17,
                }}
              >
                {["상품명", "구분", "수량", "날짜"].map((item) => (
                  <span key={item} style={{ color: colors.muted }}>
                    {item}
                  </span>
                ))}
                {[
                  "바디로션", "입고", "+30개", "10.28",
                  "헤어샴푸", "출고", "-12개", "10.29",
                ].map((item, i) => (
                  <span key={i} style={{ marginTop: 10 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.background,
        color: colors.navy,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 헤더 */}
      <header
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E8EDF2",
          padding: "0 6%",
          minHeight: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: 19,
            textDecoration: "none",
            color: colors.navy,
          }}
        >
          Easy ERP
        </Link>
        <nav style={{ display: "flex", gap: 25, alignItems: "center" }}>
          <a href="#about" style={{ color: colors.navy, fontSize: 13 }}>
            서비스 소개
          </a>
          <a href="#features" style={{ color: colors.navy, fontSize: 13 }}>
            주요 기능
          </a>
          <Link
            href="/signup"
            style={{
              ...buttonStyle,
              minHeight: 36,
              padding: "0 22px",
              background: "#DDE9F2",
              color: colors.navy,
              fontSize: 12,
            }}
          >
            시작하기
          </Link>
        </nav>
      </header>

      {/* 히어로 영역 */}
      <section
        style={{
          ...sectionStyle,
          textAlign: "center",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            letterSpacing: "-1.6px",
            lineHeight: 1.35,
            fontWeight: 750,
            marginBottom: 18,
          }}
        >
          복잡한 업무관리는 이제 간편하게.
        </h1>
        <p style={{ color: colors.muted, fontSize: 16, marginBottom: 30 }}>
          주문부터 재고, 입출고까지 한곳에서 관리하세요.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          <Link
            href="/signup"
            style={{
              ...buttonStyle,
              background: colors.blue,
              color: "#FFFFFF",
              minWidth: 190,
            }}
          >
            Easy ERP 시작하기
          </Link>
          <Link
            href="/dashboard"
            style={{
              ...buttonStyle,
              background: "#FFFFFF",
              color: colors.navy,
              border: "1px solid #D8E0E8",
              minWidth: 190,
            }}
          >
            대시보드 체험하기
          </Link>
        </div>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <DashboardPreview />
        </div>
      </section>

      {/* 서비스 소개 */}
      <section
        id="about"
        style={{
          background: "#FFFFFF",
          textAlign: "center",
          padding: "95px 24px",
        }}
      >
        <div style={sectionStyle}>
          <p style={{ color: colors.blue, fontSize: 11, fontWeight: 700 }}>
            ABOUT EASY ERP
          </p>
          <h2 style={{ fontSize: "clamp(23px, 3vw, 32px)", marginTop: 15 }}>
            엑셀보다 쉽고, 복잡한 ERP보다 간편하게.
          </h2>
          <p
            style={{
              color: colors.muted,
              lineHeight: 1.9,
              fontSize: 14,
              maxWidth: 570,
              margin: "24px auto 0",
            }}
          >
            매일 반복되는 주문, 재고, 입출고 업무를 하나의 화면에서 관리하세요.
            <br />
            복잡한 기능 대신 꼭 필요한 업무에 집중할 수 있도록 설계했습니다.
          </p>
        </div>
      </section>

      {/* 주요 기능 */}
      <section id="features" style={{ padding: "90px 24px" }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: 29 }}>사업 운영에 필요한 기능을 한곳에.</h2>
            <p style={{ color: colors.muted, fontSize: 14, marginTop: 12 }}>
              복잡한 업무를 더 쉽고 효율적으로 관리하세요.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: 30,
                  minHeight: 195,
                  borderRadius: 10,
                  textDecoration: "none",
                  color: colors.navy,
                  border: "1px solid #EDF1F5",
                }}
              >
                <div
                  style={{
                    fontSize: 23,
                    color: colors.blue,
                    marginBottom: 20,
                  }}
                >
                  <feature.icon />
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 12 }}>
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: colors.muted,
                    lineHeight: 1.8,
                  }}
                >
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI 발주 제안 소개 */}
      <section
        style={{
          background: "#FFFFFF",
          textAlign: "center",
          padding: "95px 24px",
        }}
      >
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 28 }}>
            재고 확인부터 발주 제안까지, AI가 더 쉽게.
          </h2>
          <p style={{ color: colors.muted, fontSize: 14, marginTop: 15 }}>
            재고 부족 상품을 확인하고 필요한 발주 수량을 추천받으세요.
          </p>
          <div
            style={{
              maxWidth: 480,
              background: "#F8FAFD",
              border: "1px solid #E7EDF4",
              borderRadius: 10,
              padding: 24,
              textAlign: "left",
              margin: "35px auto 0",
            }}
          >
            <strong style={{ fontSize: 15 }}>✦ AI 발주 제안</strong>
            <p
              style={{
                fontSize: 12,
                color: colors.muted,
                lineHeight: 1.8,
                marginTop: 12,
              }}
            >
              재고 부족 상품을 분석해 필요한 발주 수량을 추천합니다.
            </p>
            <div style={{ textAlign: "right", marginTop: 16 }}>
              <Link
                href="/inventory"
                style={{
                  ...buttonStyle,
                  minHeight: 34,
                  fontSize: 11,
                  background: colors.light,
                  color: colors.navy,
                }}
              >
                제안 확인 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 업무 흐름 */}
      <section style={{ padding: "95px 24px", textAlign: "center" }}>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 28 }}>
            엑셀로 하던 반복 업무, 이제 더 간편하게.
          </h2>
          <p style={{ color: colors.muted, fontSize: 14, marginTop: 15 }}>
            복잡한 수작업을 줄이고 필요한 업무를 빠르게 확인하세요.
          </p>
          <div
            style={{
              maxWidth: 800,
              margin: "35px auto 0",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 40px minmax(0, 1fr)",
              gap: 20,
              textAlign: "left",
            }}
          >
            <div style={{ background: "#EAF1F7", padding: 26, borderRadius: 8 }}>
              <strong style={{ fontSize: 16 }}>▤ 기존 엑셀 업무</strong>
              <p style={{ color: colors.muted, fontSize: 13, lineHeight: 2 }}>
                여러 파일을 열어 주문과 재고를 확인
                <br />
                수작업으로 입출고 내역 정리
                <br />
                재고 부족 여부를 직접 확인
              </p>
            </div>
            <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <ArrowRight size={24} color="#91B2CC" />
</div>
            <div style={{ background: "#EAF1F7", padding: 26, borderRadius: 8 }}>
              <strong style={{ fontSize: 16 }}>✦ Easy ERP</strong>
              <p style={{ color: colors.muted, fontSize: 13, lineHeight: 2 }}>
                하나의 대시보드에서 현황 확인
                <br />
                주문과 재고, 입출고를 통합 관리
                <br />
                부족 상품을 한눈에 파악
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 CTA */}
      <section
        style={{
          background: "#B7CCDE",
          textAlign: "center",
          padding: "85px 24px",
        }}
      >
        <h2 style={{ fontSize: 30, marginBottom: 16 }}>
          지금, Easy ERP를 시작해 보세요.
        </h2>
        <p style={{ fontSize: 14, color: "#536C83", marginBottom: 28 }}>
          복잡한 업무를 하나의 대시보드에서 간편하게 관리하세요.
        </p>
        <Link
          href="/signup"
          style={{
            ...buttonStyle,
            background: "#476986",
            color: "#FFFFFF",
            minWidth: 190,
          }}
        >
          Easy ERP 시작하기 →
        </Link>
      </section>

      {/* 푸터 */}
      <footer
        style={{
          background: "#FFFFFF",
          padding: "30px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <strong style={{ fontSize: 14 }}>Easy ERP</strong>
        <span style={{ color: colors.muted, fontSize: 11 }}>
          © 2026 Easy ERP. Prototype demonstration.
        </span>
      </footer>
    </main>
  );
}
