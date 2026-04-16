import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tokenDisplay, setTokenDisplay] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    } else {
      // Show partial token for display
      setTokenDisplay(token.substring(0, 40) + "...");
    }
  }, []);

  const getData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(res.data);
    } catch (err) {
      setError("Failed to fetch protected data. Token may be invalid.");
    }
    setLoading(false);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "30px 20px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h2 style={{ color: "#fff", margin: 0, fontWeight: "700" }}>
              🛡️ Protected Dashboard
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "14px" }}>
              Experiment 8 · JWT Session Authentication
            </p>
          </div>
          <button
            onClick={logout}
            className="btn"
            style={{
              background: "rgba(233,69,96,0.2)",
              border: "1px solid rgba(233,69,96,0.5)",
              color: "#e94560",
              borderRadius: "8px",
              padding: "8px 20px",
              fontWeight: "600",
            }}
          >
            Logout ↗
          </button>
        </div>

        {/* Token Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
            🔑 Session Token (from sessionStorage)
          </p>
          <code
            style={{
              color: "#4fc3f7",
              fontSize: "13px",
              wordBreak: "break-all",
              background: "rgba(0,0,0,0.3)",
              padding: "10px",
              borderRadius: "6px",
              display: "block",
            }}
          >
            {tokenDisplay}
          </code>
        </div>

        {/* Fetch Button */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={getData}
            disabled={loading}
            className="btn"
            style={{
              background: "linear-gradient(135deg, #11998e, #38ef7d)",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
              fontWeight: "700",
              fontSize: "15px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Fetching..." : "🚀 Fetch Protected Data"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div
            style={{
              background: "rgba(233,69,96,0.1)",
              border: "1px solid rgba(233,69,96,0.3)",
              color: "#e94560",
              borderRadius: "8px",
              padding: "14px",
              marginBottom: "20px",
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Response Data */}
        {data && (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(79,195,247,0.3)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
              ✅ Protected API Response
            </p>
            <pre
              style={{
                color: "#38ef7d",
                fontSize: "14px",
                background: "rgba(0,0,0,0.3)",
                padding: "14px",
                borderRadius: "8px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {typeof data === "object" ? JSON.stringify(data, null, 2) : data}
            </pre>
          </div>
        )}

        {/* Info Cards */}
        <div className="row mt-4">
          {[
            { icon: "📦", title: "Token Storage", desc: "JWT stored in sessionStorage (cleared on tab close)" },
            { icon: "🔒", title: "Route Guard", desc: "Dashboard redirects to login if no token found" },
            { icon: "📡", title: "Auth Header", desc: "Token sent as 'Authorization: Bearer <token>'" },
          ].map((card, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "16px",
                  height: "100%",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{card.icon}</div>
                <p style={{ color: "#fff", fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>{card.title}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: 0 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;