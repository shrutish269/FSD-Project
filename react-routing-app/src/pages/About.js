import React from "react";

const About = () => {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>About Us 👨‍💻</h1>
        <p>
          This app demonstrates <strong>React Router DOM</strong> with multiple
          pages and <strong>React.lazy()</strong> for code splitting and lazy
          loading.
        </p>
      </div>
      <div style={styles.section}>
        <h2>What is Lazy Loading?</h2>
        <p>
          Lazy loading delays loading of non-critical components until they are
          needed. React provides <code>React.lazy()</code> and{" "}
          <code>{"<Suspense>"}</code> to achieve this natively.
        </p>
        <pre style={styles.code}>{`const About = React.lazy(() => import('./pages/About'));

<Suspense fallback={<div>Loading...</div>}>
  <About />
</Suspense>`}</pre>
      </div>
      <div style={styles.teamGrid}>
        {["Alice", "Bob", "Charlie"].map((name) => (
          <div key={name} style={styles.card}>
            <div style={styles.avatar}>{name[0]}</div>
            <strong>{name}</strong>
            <small>Developer</small>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: { padding: "40px 20px", maxWidth: "800px", margin: "0 auto" },
  header: {
    background: "#6c5ce7",
    color: "#fff",
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "24px",
  },
  section: {
    background: "#fff",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  },
  code: {
    background: "#2d3436",
    color: "#00b894",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "13px",
    overflowX: "auto",
  },
  teamGrid: { display: "flex", gap: "16px" },
  card: {
    flex: 1,
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "center",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#6c5ce7",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default About;