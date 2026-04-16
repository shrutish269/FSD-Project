import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "40px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #e94560, #0f3460)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              fontSize: "24px",
            }}
          >
            🔐
          </div>
          <h2 style={{ color: "#fff", fontWeight: "700", marginBottom: "4px" }}>
            Welcome Back
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
            Sign in with your JWT credentials
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            className="alert"
            style={{
              background: "rgba(233,69,96,0.15)",
              border: "1px solid rgba(233,69,96,0.4)",
              color: "#e94560",
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "14px",
              marginBottom: "16px",
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Username */}
        <div className="mb-3">
          <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "6px", display: "block" }}>
            USERNAME
          </label>
          <input
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 14px",
            }}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "6px", display: "block" }}>
            PASSWORD
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 14px",
            }}
          />
        </div>

        {/* Button */}
        <button
          className="btn w-100"
          onClick={login}
          disabled={loading}
          style={{
            background: "linear-gradient(135deg, #e94560, #c23152)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "13px",
            fontWeight: "600",
            fontSize: "15px",
            letterSpacing: "0.5px",
            transition: "opacity 0.2s",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Signing in..." : "Sign In →"}
        </button>

        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textAlign: "center", marginTop: "20px" }}>
          Experiment 8 · JWT Session Auth
        </p>
      </div>
    </div>
  );
}

export default Login;