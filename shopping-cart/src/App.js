import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [tab, setTab] = useState("products");

  return (
    <Provider store={store}>
      <CartProvider>
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.logo}>🛍️ ShopReact</h1>
            <p style={styles.subtitle}>Context API + Redux State Management</p>
            <div style={styles.tabs}>
              <button
                style={{ ...styles.tab, ...(tab === "products" ? styles.activeTab : {}) }}
                onClick={() => setTab("products")}
              >
                Products
              </button>
              <button
                style={{ ...styles.tab, ...(tab === "cart" ? styles.activeTab : {}) }}
                onClick={() => setTab("cart")}
              >
                Cart & Wishlist
              </button>
            </div>
          </header>
          <main>
            {tab === "products" ? <ProductList /> : <Cart />}
          </main>
        </div>
      </CartProvider>
    </Provider>
  );
}

const styles = {
  container: { minHeight: "100vh", background: "#f8f9fa", fontFamily: "Segoe UI, sans-serif" },
  header: {
    background: "linear-gradient(135deg, #0984e3, #6c5ce7)",
    color: "#fff",
    padding: "24px 20px 0",
    textAlign: "center",
  },
  logo: { margin: 0, fontSize: "28px" },
  subtitle: { margin: "4px 0 20px", opacity: 0.85, fontSize: "14px" },
  tabs: { display: "flex", justifyContent: "center", gap: "0" },
  tab: {
    padding: "10px 32px",
    border: "none",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "15px",
    borderRadius: "8px 8px 0 0",
  },
  activeTab: { background: "#f8f9fa", color: "#0984e3", fontWeight: "bold" },
};

export default App;