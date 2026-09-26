import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of all products
  const calculateTotalQuantity = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

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

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h3>Your cart is empty 🌱</h3>
        <p>Add some beautiful plants to get started.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <div className="cart-heading">
        <p className="section-tag">YOUR SHOPPING CART</p>
        <h2>Shopping Cart</h2>
        <p>Review your selected plants before checkout.</p>
      </div>

      {cartItems.map((item) => {

        // Calculate cost of this particular item
        const itemTotal = item.price * item.quantity;

        return (
          <div className="cart-item" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <strong>₹{item.price}</strong>
            </div>

            <div className="quantity-controls">

              <button
                onClick={() => decreaseQuantity(item)}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>

            </div>

            <div className="cart-item-total">
              <strong>
                ₹{itemTotal}
              </strong>
            </div>

            <button
              className="remove-btn"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>

          </div>
        );
      })}

      {/* Cart Summary */}
      <div className="cart-summary">

        <h3>
          Total Items: {calculateTotalQuantity()}
        </h3>

        <h2>
          Total Amount: ₹{calculateTotalAmount()}
        </h2>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}

export default CartItem;