import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!role) {
      window.location.href = "/";
    } else if (role !== "ADMIN") {
      alert("Access Denied! You must be an ADMIN.");
      window.location.href = "/";
    }
  }, [role]);

  const fetchAdminData = async () => {
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
      setError("Error: " + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
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
      setError("Error: " + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5f5" }}>
      {/* Navbar */}
      <nav
        className="navbar px-4 py-3"
        style={{ background: "linear-gradient(135deg, #c0392b, #e74c3c)" }}
      >
        <span className="navbar-brand fw-bold text-white fs-5">🛡️ Admin Dashboard</span>
        <div className="d-flex align-items-center gap-3">
          <span
            className="badge"
            style={{ background: "rgba(255,255,255,0.3)", color: "white", fontSize: "13px", padding: "7px 14px", borderRadius: "20px" }}
          >
            🔴 Role: ADMIN
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
            <div className="card mb-4 border-0 shadow-sm" style={{ borderRadius: "14px", borderLeft: "4px solid #e74c3c" }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-1">Welcome, Admin {username}!</h5>
                <p className="text-muted small mb-0">
                  You have <span className="badge bg-danger">ADMIN</span> privileges. You can access all endpoints including admin-only routes.
                </p>
              </div>
            </div>

            {/* Session Storage */}
            <div className="card mb-4 border-0 shadow-sm" style={{ borderRadius: "14px", background: "#1e1e2e", color: "#cdd6f4" }}>
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3" style={{ color: "#89b4fa" }}>📦 sessionStorage</h6>
                <pre className="mb-0" style={{ fontSize: "13px", color: "#f38ba8" }}>
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
                <h6 className="fw-bold mb-3">API Actions (Full Access)</h6>
                <div className="d-flex flex-wrap gap-3">
                  <button
                    className="btn btn-danger fw-semibold px-4"
                    onClick={fetchAdminData}
                    disabled={loading}
                    style={{ borderRadius: "10px" }}
                  >
                    🛡️ GET /api/admin/dashboard
                  </button>
                  <button
                    className="btn btn-success fw-semibold px-4"
                    onClick={fetchUserProfile}
                    disabled={loading}
                    style={{ borderRadius: "10px" }}
                  >
                    ✅ GET /api/user/profile
                  </button>
                </div>
                <p className="text-muted small mt-2 mb-0">
                  Admins have access to <strong>all</strong> endpoints — both user and admin routes.
                </p>
              </div>
            </div>

            {/* RBAC Note */}
            <div className="card border-0 mb-4" style={{ borderRadius: "14px", background: "#fff3cd" }}>
              <div className="card-body p-3">
                <p className="mb-0 small">
                  <strong>⚠️ Role-Based UI Control:</strong> This admin panel button is <em>hidden</em> from USER role dashboards. Only ADMIN sees this page.
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

export default AdminDashboard;