import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ msg: "", type: "" });

  const fillCreds = (u, p) => {
    setUsername(u);
    setPassword(p);
  };

  const login = async () => {
    if (!username || !password) {
      setStatus({ msg: "Please enter username and password.", type: "error" });
      return;
    }
    try {
      let role = "USER";
      try {
        await axios.get("http://localhost:8080/api/admin/dashboard", {
          auth: { username, password }, withCredentials: true
        });
        role = "ADMIN";
      } catch { role = "USER"; }

      await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }, withCredentials: true
      });

      sessionStorage.setItem("user", username);
      sessionStorage.setItem("password", password);
      sessionStorage.setItem("role", role);
      setStatus({ msg: `Login successful! Redirecting to ${role === "ADMIN" ? "/admin" : "/user"}...`, type: "success" });

      setTimeout(() => {
        window.location.href = role === "ADMIN" ? "/admin" : "/user";
      }, 1000);

    } catch {
      setStatus({ msg: "Invalid credentials!", type: "error" });
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "var(--color-background-tertiary, #f5f5f3)" }}>
      <div style={{ width: "100%", maxWidth: "380px", padding: "1rem" }}>

        {/* Card */}
        <div style={{ background: "#fff", border: "0.5px solid #e0dfd8", borderRadius: "12px", padding: "2rem" }}>

          {/* Icon */}
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
            🔐
          </div>

          <h2 style={{ textAlign: "center", fontSize: 20, fontWeight: 500, margin: "0 0 4px" }}>Welcome back</h2>
          <p style={{ textAlign: "center", fontSize: 13, color: "#888", margin: "0 0 1.75rem" }}>Sign in to your RBAC dashboard</p>

          {/* Username */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "#666", display: "block", marginBottom: 6 }}>Username</label>
            <input className="form-control" placeholder="admin or user1"
              value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "#666", display: "block", marginBottom: 6 }}>Password</label>
            <input className="form-control" type="password" placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {/* Login Button */}
          <button onClick={login}
            style={{ width: "100%", background: "#185FA5", color: "#fff", border: "none", borderRadius: 8, padding: "9px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            Sign in
          </button>

          {/* Status */}
          {status.msg && (
            <p style={{ textAlign: "center", fontSize: 12, marginTop: 10, color: status.type === "error" ? "#c0392b" : "#1a7a4a" }}>
              {status.msg}
            </p>
          )}

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "1.25rem 0" }}>
            <div style={{ flex: 1, height: "0.5px", background: "#e0dfd8" }} />
            <span style={{ fontSize: 12, color: "#aaa" }}>quick fill</span>
            <div style={{ flex: 1, height: "0.5px", background: "#e0dfd8" }} />
          </div>

          {/* Quick Fill Pills */}
          <div style={{ display: "flex", gap: 8 }}>
            <div onClick={() => fillCreds("user1", "user123")}
              style={{ flex: 1, border: "0.5px solid #e0dfd8", borderRadius: 8, padding: "8px 10px", cursor: "pointer", textAlign: "center", background: "#f8f8f6" }}>
              <p style={{ fontSize: 12, fontWeight: 500, margin: 0 }}>USER</p>
              <p style={{ fontSize: 11, color: "#888", margin: "2px 0 0" }}>user1 / user123</p>
            </div>
            <div onClick={() => fillCreds("admin", "admin123")}
              style={{ flex: 1, border: "0.5px solid #e0dfd8", borderRadius: 8, padding: "8px 10px", cursor: "pointer", textAlign: "center", background: "#f8f8f6" }}>
              <p style={{ fontSize: 12, fontWeight: 500, margin: 0 }}>ADMIN</p>
              <p style={{ fontSize: 11, color: "#888", margin: "2px 0 0" }}>admin / admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;