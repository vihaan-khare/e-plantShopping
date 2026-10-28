
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";
import "../App.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>
        <div className="nav-links">
          <a href="/" onClick={(event) => {
            event.preventDefault();
            window.location.href = "/";
          }}>
            Home
          </a>
          <a href="/plants" onClick={(event) => {
            event.preventDefault();
            window.location.href = "/plants";
          }}>
            Plants
          </a>
          <a href="/cart">Cart ({totalQuantity})</a>
        </div>
      </nav>

      <div className="cart-container">
        <div className="cart-heading">
          <p className="section-tag">YOUR SHOPPING CART</p>
          <h2>Shopping Cart</h2>
          <p>Review your selected plants before checkout.</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some beautiful plants to get started.</p>
            <a className="continue-shopping" href="/plants">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p>Unit price: ₹{item.price}</p>
                </div>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  <p>Item total</p>
                  <strong>₹{item.price * item.quantity}</strong>
                </div>

                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Total Items: {totalQuantity}</h3>
              <h2>Total Amount: ₹{totalAmount}</h2>

              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout - Coming Soon
              </button>

              <p>
                <a className="continue-shopping" href="/plants">
                  Continue Shopping
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
