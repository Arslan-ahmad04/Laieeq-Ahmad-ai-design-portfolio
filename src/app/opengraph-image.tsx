import { profileDetails } from "@/data/profile";
import { ImageResponse } from "next/og";
import { clientConfig } from "@/config/client.config";
export const alt = clientConfig.name + " | " + clientConfig.professionalTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px",
        background: "#f5fbff",
        color: "#102e43",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#38bdf8", fontSize: 24 }}>
        {profileDetails.shareEyebrow}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -5,
          }}
        >
          {clientConfig.name}
          <span style={{ color: "#38bdf8" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, marginTop: 24 }}>
          {clientConfig.professionalTitle}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 23, color: "#476478" }}>
        {profileDetails.shareServices}
      </div>
    </div>,
    size,
  );
}
