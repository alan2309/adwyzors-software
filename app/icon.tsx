import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
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
          background: "#111827",
          borderRadius: "110px",
          position: "relative",
        }}
      >
        {/* Stylized 'A' */}
        <svg
          viewBox="0 0 24 24"
          style={{
            width: "300px",
            height: "300px",
          }}
          fill="none"
        >
          <path
            d="M12 3L3 20h4l1.5-3h7l1.5 3h4L12 3zm-2 11l2-4 2 4h-4z"
            fill="#FAFAFA"
          />
        </svg>
        {/* Accent dot */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#2563EB",
            border: "18px solid #111827",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
