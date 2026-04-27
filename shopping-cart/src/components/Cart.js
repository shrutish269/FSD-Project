import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementQty,
  decrementQty,
  clearCart,
} from "../store/cartSlice";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { wishlist } = useCart();

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.wrapper}>
      <div style={styles.section}>
        <h2 style={styles.heading}>🛒 Cart ({items.length} items)</h2>
        {items.length === 0 ? (
          <p style={styles.empty}>Your cart is empty.</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} style={styles.row}>
                <span style={styles.rowEmoji}>{item.emoji}</span>
                <div style={styles.info}>
                  <p style={styles.itemName}>{item.name}</p>
                  <p style={styles.itemPrice}>₹{(item.price * item.qty).toLocaleString()}</p>
                </div>
                <div style={styles.qtyControls}>
                  <button style={styles.qBtn} onClick={() => dispatch(decrementQty(item.id))}>−</button>
                  <span style={styles.qty}>{item.qty}</span>
                  <button style={styles.qBtn} onClick={() => dispatch(incrementQty(item.id))}>+</button>
                </div>
                <button style={styles.removeBtn} onClick={() => dispatch(removeItem(item.id))}>✕</button>
              </div>
            ))}
            <div style={styles.totalRow}>
              <strong>Total: ₹{total.toLocaleString()}</strong>
              <button style={styles.clearBtn} onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>❤️ Wishlist ({wishlist.length})</h2>
        {wishlist.length === 0 ? (
          <p style={styles.empty}>No items in wishlist.</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} style={styles.wishRow}>
              <span>{item.emoji}</span>
              <span style={styles.itemName}>{item.name}</span>
              <span style={{ color: "#0984e3", fontWeight: "bold" }}>₹{item.price.toLocaleString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: { padding: "20px" },
  section: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  },
  heading: { borderBottom: "2px solid #f1f2f6", paddingBottom: "10px", marginTop: 0 },
  empty: { color: "#999", fontStyle: "italic" },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px solid #f1f2f6",
  },
  rowEmoji: { fontSize: "28px" },
  info: { flex: 1 },
  itemName: { margin: 0, fontWeight: "600", fontSize: "14px" },
  itemPrice: { margin: 0, color: "#0984e3", fontSize: "13px" },
  qtyControls: { display: "flex", alignItems: "center", gap: "8px" },
  qBtn: {
    width: "28px",
    height: "28px",
    border: "1px solid #dfe6e9",
    borderRadius: "6px",
    background: "#f1f2f6",
    cursor: "pointer",
    fontSize: "16px",
  },
  qty: { fontWeight: "bold", minWidth: "20px", textAlign: "center" },
  removeBtn: {
    background: "none",
    border: "none",
    color: "#ff4757",
    cursor: "pointer",
    fontSize: "16px",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    fontSize: "18px",
  },
  clearBtn: {
    background: "#ff4757",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  wishRow: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #f1f2f6",
    fontSize: "15px",
  },
};

export default Cart;