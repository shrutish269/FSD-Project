import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!role) {
      window.location.href = "/";
    }
  }, [role]);

  const fetchProfile = async () => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: {
          username: sessionStorage.getItem("user"),
          password: sessionStorage.getItem("pass") || "",
        },
      });
      setMessage(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      setError("Failed to fetch profile. " + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  const tryAdminAccess = async () => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: {
          username: sessionStorage.getItem("user"),
          password: sessionStorage.getItem("pass") || "",
        },
      });
      setMessage(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      setError(
        "❌ Access Denied! You do not have ADMIN privileges. (HTTP " +
          (err.response?.status || "error") +
          ")"
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff" }}>
      {/* Navbar */}
      <nav
        className="navbar px-4 py-3"
        style={{ background: "linear-gradient(135deg, #11998e, #38ef7d)" }}
      >
        <span className="navbar-brand fw-bold text-white fs-5">👤 User Dashboard</span>
        <div className="d-flex align-items-center gap-3">
          <span
            className="badge"
            style={{ background: "rgba(255,255,255,0.3)", color: "white", fontSize: "13px", padding: "7px 14px", borderRadius: "20px" }}
          >
            🟢 Role: USER
          </span>
          <span className="text-white small">Hello, <strong>{username}</strong></span>
          <button
            className="btn btn-sm btn-light fw-semibold"
            onClick={logout}
            style={{ borderRadius: "8px" }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">

            {/* Info Card */}
            <div className="card mb-4 border-0 shadow-sm" style={{ borderRadius: "14px" }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-1">Welcome, {username}!</h5>
                <p className="text-muted small mb-0">
                  You are logged in as a <span className="badge bg-success">USER</span>. You can access user endpoints only.
                </p>
              </div>
            </div>

            {/* Session Storage Display */}
            <div className="card mb-4 border-0 shadow-sm" style={{ borderRadius: "14px", background: "#1e1e2e", color: "#cdd6f4" }}>
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3" style={{ color: "#89b4fa" }}>📦 sessionStorage</h6>
                <pre className="mb-0" style={{ fontSize: "13px", color: "#a6e3a1" }}>
{`{
  "user": "${username}",
  "role": "${role}"
}`}
                </pre>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "14px" }}>
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3">API Actions</h6>
                <div className="d-flex flex-wrap gap-3">
                  <button
                    className="btn btn-success fw-semibold px-4"
                    onClick={fetchProfile}
                    disabled={loading}
                    style={{ borderRadius: "10px" }}
                  >
                    ✅ GET /api/user/profile
                  </button>
                  <button
                    className="btn btn-outline-danger fw-semibold px-4"
                    onClick={tryAdminAccess}
                    disabled={loading}
                    style={{ borderRadius: "10px" }}
                    title="This should be denied!"
                  >
                    🚫 Try /api/admin/dashboard
                  </button>
                </div>
                <p className="text-muted small mt-2 mb-0">
                  The red button demonstrates that USER role cannot access admin endpoints.
                </p>
              </div>
            </div>

            {/* Result */}
            {message && (
              <div className="alert alert-success" style={{ borderRadius: "12px" }}>
                <strong>✅ Response:</strong> {message}
              </div>
            )}
            {error && (
              <div className="alert alert-danger" style={{ borderRadius: "12px" }}>
                <strong>{error}</strong>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;