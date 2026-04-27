import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>Contact Us 📬</h1>
        <p>Reach out and we'll get back to you!</p>
      </div>
      <div style={styles.formCard}>
        {submitted ? (
          <div style={styles.success}>
            <h2>✅ Message Sent!</h2>
            <p>Thanks, <strong>{form.name}</strong>! We'll reply to {form.email} soon.</p>
            <button style={styles.btn} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {["name", "email"].map((field) => (
              <div key={field} style={styles.field}>
                <label style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  style={styles.input}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  required
                />
              </div>
            ))}
            <div style={styles.field}>
              <label style={styles.label}>Message</label>
              <textarea
                style={{ ...styles.input, height: "100px", resize: "vertical" }}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              />
            </div>
            <button type="submit" style={styles.btn}>Send Message 🚀</button>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: { padding: "40px 20px", maxWidth: "600px", margin: "0 auto" },
  header: {
    background: "#fd79a8",
    color: "#fff",
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "24px",
  },
  formCard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
  },
  field: { marginBottom: "16px" },
  label: { display: "block", marginBottom: "6px", fontWeight: "600", color: "#2d3436" },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1.5px solid #dfe6e9",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
  },
  btn: {
    background: "#fd79a8",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
  },
  success: { textAlign: "center", padding: "20px 0" },
};

export default Contact;