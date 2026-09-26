import { useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
        <strong>₹{item.price}</strong>
      </div>

      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>−</button>

        <span>{item.quantity}</span>

        <button onClick={increaseQuantity}>+</button>
      </div>

      <div className="cart-item-total">
        ₹{item.price * item.quantity}
      </div>

      <button
        className="remove-btn"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;