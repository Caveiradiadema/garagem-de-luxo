import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#C9A227",
          border: "20px solid #1A1A1A",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", fontStyle: "italic", letterSpacing: "-0.05em" }}>
          GARAGEM <span style={{ color: "white", marginLeft: 15 }}>DE LUXO</span>
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#888", textTransform: "uppercase", letterSpacing: "0.5em" }}>
          Estética Automotiva de Elite
        </div>
        <div style={{ fontSize: 24, marginTop: 40, color: "#C9A227" }}>
          Diadema - SP
        </div>
      </div>
    )
  );
}
