"use client";

import { useState } from "react";

const DEFAULT_PARAMS = {
  name: "Amritansh Rai",
  handle: "@amritanshr",
  pnl: "+₹2.45L",
  winRate: "68.3%",
  trades: "1,204",
};

export default function HomePage() {
  const [params, setParams] = useState(DEFAULT_PARAMS);
  const [imgKey, setImgKey] = useState(0);

  const ogUrl = `/api/og?name=${encodeURIComponent(params.name)}&handle=${encodeURIComponent(
    params.handle
  )}&pnl=${encodeURIComponent(params.pnl)}&winRate=${encodeURIComponent(
    params.winRate
  )}&trades=${encodeURIComponent(params.trades)}`;

  const handleRefresh = () => setImgKey((k) => k + 1);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0c0c10",
        color: "#f9fafb",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "4px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "#6366f1",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            915 by Groww
          </span>
          <span style={{ color: "#4b5563" }}>·</span>
          <span
            style={{
              fontSize: "13px",
              color: "#6b7280",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            OG Preview Tool
          </span>
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(90deg, #818cf8, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Twitter / X Unfurl Preview
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            margin: 0,
            textAlign: "center",
          }}
        >
          Tweak the values below to preview how the OG card looks when shared on
          X.
        </p>
      </div>

      {/* OG Image Preview — styled like a tweet card */}
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          marginBottom: "40px",
        }}
      >
        {/* Tweet-card chrome */}
        <div
          style={{
            background: "#16181c",
            border: "1px solid #2f3336",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Tweet top bar (fake) */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "12px 16px 0",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#fff",
              }}
            >
              AR
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#e7e9ea",
                  }}
                >
                  Amritansh Rai
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#1d9bf0"
                >
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.87 9.33 2 10.57 2 12s.87 2.67 2.19 3.34c-.46 1.39-.2 2.9.8 3.91s2.52 1.26 3.92.81c.66 1.31 1.9 2.19 3.33 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                </svg>
              </div>
              <span style={{ fontSize: "14px", color: "#71767b" }}>
                @amritanshr
              </span>
            </div>
          </div>

          {/* Tweet text */}
          <div style={{ padding: "10px 16px 12px" }}>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#e7e9ea",
                lineHeight: 1.5,
              }}
            >
              Just hit a milestone on{" "}
              <span style={{ color: "#1d9bf0" }}>@915_trade</span> 🚀 Check out
              my verified P&amp;L — broker-verified, no cap.
            </p>
          </div>

          {/* OG Image */}
          <div
            style={{
              margin: "0 16px 12px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #2f3336",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={imgKey}
              src={ogUrl}
              alt="OG preview"
              style={{ width: "100%", display: "block" }}
            />
            {/* URL + title bar below image — exactly how X renders it */}
            <div
              style={{
                background: "#16181c",
                padding: "10px 14px",
                borderTop: "1px solid #2f3336",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "#71767b",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                og-preview.vercel.app
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "14px",
                  color: "#e7e9ea",
                  fontWeight: 600,
                }}
              >
                {params.name}&apos;s Verified P&amp;L
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "13px",
                  color: "#71767b",
                }}
              >
                View {params.name}&apos;s verified trading P&amp;L on 915 by
                Groww. Real, broker-verified performance.
              </p>
            </div>
          </div>

          {/* Tweet actions */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              padding: "4px 16px 12px",
              color: "#71767b",
              fontSize: "13px",
            }}
          >
            <span>💬 12</span>
            <span>🔁 34</span>
            <span>❤️ 248</span>
            <span>📊 4.2K</span>
          </div>
        </div>
      </div>

      {/* Customise Panel */}
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#13131a",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          padding: "28px",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "13px",
            color: "#6b7280",
            margin: "0 0 20px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Customise Preview
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {(
            [
              { key: "name", label: "Trader Name" },
              { key: "handle", label: "Handle" },
              { key: "pnl", label: "Net P&L (e.g. +₹2.45L)" },
              { key: "winRate", label: "Win Rate" },
              { key: "trades", label: "Total Trades" },
            ] as { key: keyof typeof DEFAULT_PARAMS; label: string }[]
          ).map(({ key, label }) => (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                gridColumn: key === "name" ? "1 / -1" : undefined,
              }}
            >
              <label
                htmlFor={key}
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </label>
              <input
                id={key}
                value={params[key]}
                onChange={(e) =>
                  setParams((p) => ({ ...p, [key]: e.target.value }))
                }
                style={{
                  background: "#0c0c10",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "8px",
                  padding: "9px 12px",
                  fontSize: "14px",
                  color: "#f9fafb",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleRefresh}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            border: "none",
            borderRadius: "10px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.02em",
          }}
        >
          ↺ &nbsp;Refresh Preview
        </button>
      </div>

      {/* Direct OG URL row */}
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#13131a",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "12px",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: "#4b5563",
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: "monospace",
          }}
        >
          {ogUrl}
        </span>
        <a
          href={ogUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "13px",
            color: "#818cf8",
            textDecoration: "none",
            flexShrink: 0,
            border: "1px solid rgba(129,140,248,0.3)",
            borderRadius: "6px",
            padding: "4px 12px",
          }}
        >
          Open ↗
        </a>
      </div>

      <p
        style={{
          fontSize: "13px",
          color: "#374151",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Deploy to Vercel → share the URL on X → the unfurl card will match
        exactly what you see above.
      </p>
    </main>
  );
}
