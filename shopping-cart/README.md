# Shopping Cart Application

## Objective
Build a simple shopping cart application in React using both **Context API** and **Redux** for state management.

## Technologies Used
- React.js
- Redux Toolkit
- React-Redux
- Context API

## Concepts Covered

### Redux Toolkit (for Cart)
- `createSlice` to define actions and reducers
- `configureStore` to set up the Redux store
- `useSelector` to read cart state
- `useDispatch` to trigger actions
- Actions: `addItem`, `removeItem`, `incrementQty`, `decrementQty`, `clearCart`

### Context API (for Wishlist)
- `createContext` and `useContext`
- Custom hook `useCart()` to access wishlist state
- `CartProvider` wraps the entire app

## File Structure
```
src/
├── context/
│   └── CartContext.js       ← Context API (Wishlist state)
├── store/
│   ├── store.js             ← Redux store configuration
│   └── cartSlice.js         ← Redux slice (Cart state)
├── components/
│   ├── ProductList.js       ← Displays products, handles add to cart & wishlist
│   └── Cart.js              ← Displays cart items and wishlist
└── App.js                   ← Root component with Provider and CartProvider
```

## How to Run
```bash
npm install
npm start
```

## Features
- Add products to cart
- Increment / Decrement item quantity
- Remove individual items from cart
- Clear entire cart
- Add / Remove items from wishlist (via Context API)
- Total price calculation
