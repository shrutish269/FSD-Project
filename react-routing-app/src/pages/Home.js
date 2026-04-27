import React from "react";

const Home = () => {
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome Home 🏠</h1>
        <p style={styles.desc}>
          This is the <strong>Home</strong> page. This app uses{" "}
          <strong>React Router</strong> for navigation and{" "}
          <strong>React.lazy + Suspense</strong> for lazy loading to improve
          performance.
        </p>
        <div style={styles.badge}>⚡ Lazy Loaded via React.lazy()</div>
      </div>
      <div style={styles.cards}>
        {["React Router", "Lazy Loading", "Suspense"].map((tech) => (
          <div key={tech} style={styles.card}>
            <strong>{tech}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: { padding: "40px 20px", maxWidth: "800px", margin: "0 auto" },
  hero: {
    background: "linear-gradient(135deg, #00b894, #00cec9)",
    borderRadius: "16px",
    padding: "40px",
    color: "#fff",
    marginBottom: "24px",
  },
  title: { fontSize: "36px", margin: "0 0 16px" },
  desc: { fontSize: "16px", lineHeight: "1.6", margin: 0 },
  badge: {
    display: "inline-block",
    marginTop: "16px",
    background: "rgba(255,255,255,0.2)",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
  },
  cards: { display: "flex", gap: "16px" },
  card: {
    flex: 1,
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    fontSize: "15px",
  },
};

export default Home;