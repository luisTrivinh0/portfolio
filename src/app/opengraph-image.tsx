import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#edf8ff",
          background: "#071018",
          backgroundImage:
            "linear-gradient(rgba(66,200,245,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(66,200,245,.06) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #42c8f5",
              padding: "10px 12px",
              color: "#42c8f5",
              fontSize: 24,
            }}
          >
            LT
          </div>
          <div style={{ color: "#8ea5b5", fontSize: 20 }}>
            BRA · UTC-3 · Remote
          </div>
        </div>
        <div>
          <div style={{ fontSize: 82, letterSpacing: -4, fontWeight: 650 }}>
            Luís Trivinho
          </div>
          <div style={{ marginTop: 22, color: "#42c8f5", fontSize: 32 }}>
            Senior Software Engineer
          </div>
          <div style={{ marginTop: 24, color: "#b8cad5", fontSize: 24 }}>
            SaaS · Payments · APIs · Transactional Systems · Web & Mobile
          </div>
        </div>
      </div>
    ),
    size,
  );
}
