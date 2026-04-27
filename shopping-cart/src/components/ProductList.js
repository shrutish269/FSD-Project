import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, emoji: "🎧" },
  { id: 2, name: "Mechanical Keyboard", price: 4499, emoji: "⌨️" },
  { id: 3, name: "USB-C Hub", price: 1599, emoji: "🔌" },
  { id: 4, name: "Webcam HD", price: 3299, emoji: "📷" },
  { id: 5, name: "Mouse Pad XL", price: 799, emoji: "🖱️" },
  { id: 6, name: "LED Desk Lamp", price: 1299, emoji: "💡" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const { wishlist, addToWishlist, removeFromWishlist } = useCart();

  const isWishlisted = (id) => wishlist.some((p) => p.id === id);

  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <div style={styles.emoji}>{product.emoji}</div>
          <h3 style={styles.name}>{product.name}</h3>
          <p style={styles.price}>₹{product.price.toLocaleString()}</p>
          <div style={styles.btnRow}>
            <button
              style={styles.addBtn}
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
            <button
              style={{
                ...styles.wishBtn,
                background: isWishlisted(product.id) ? "#ff4757" : "#f1f2f6",
                color: isWishlisted(product.id) ? "#fff" : "#333",
              }}
              onClick={() =>
                isWishlisted(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              {isWishlisted(product.id) ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  emoji: { fontSize: "48px", marginBottom: "8px" },
  name: { fontSize: "15px", margin: "8px 0", color: "#2d3436" },
  price: { color: "#0984e3", fontWeight: "bold", fontSize: "18px" },
  btnRow: { display: "flex", gap: "8px", justifyContent: "center" },
  addBtn: {
    background: "#0984e3",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
  },
  wishBtn: {
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProductList;