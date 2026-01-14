import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1b1f2c 0%, #6a1a33 35%, #b9323f 60%, #f0b49a 100%)",
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
          letterSpacing: "0.08em"
        }}
      >
        JM
      </div>
    ),
    size
  );
}
