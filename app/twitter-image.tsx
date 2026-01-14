import { ImageResponse } from "next/og";
import { siteDescription, siteName } from "../lib/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1b1f2c 0%, #6a1a33 35%, #b9323f 60%, #f0b49a 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontSize: "28px",
            opacity: 0.7
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            fontSize: "90px",
            fontWeight: 700,
            marginTop: "18px",
            lineHeight: 1
          }}
        >
          Content Packages
        </div>
        <div
          style={{
            fontSize: "32px",
            maxWidth: "900px",
            marginTop: "20px",
            lineHeight: 1.4,
            opacity: 0.85
          }}
        >
          {siteDescription}
        </div>
      </div>
    ),
    size
  );
}
