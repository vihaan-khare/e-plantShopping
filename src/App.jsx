import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";

import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
    const cartItems = useSelector((state) => state.cart.items);

const totalAmount = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
  return (
    <div className="landing-page">
      <div className="overlay">
        <nav className="navbar">
          <div className="logo">🌿 Paradise Nursery</div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Plants</a>
            <a href="#cart">🛒 Cart</a>
          </div>
        </nav>

        <main className="hero-section" id="home">
          <div className="hero-content">
            <p className="tagline">BRING NATURE HOME</p>

            <h1>Paradise Nursery</h1>

            <p className="hero-description">
              Discover beautiful indoor plants and transform your home
              into a peaceful green paradise.
            </p>

           <button
  className="get-started-btn"
  onClick={() =>
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Get Started
</button>
          </div>
        </main>
        <AboutUs />
        <ProductList />
        <section className="cart-section" id="cart">
  <div className="cart-container">
    <div className="cart-heading">
      <p className="section-tag">YOUR SHOPPING CART</p>
      <h2>Shopping Cart</h2>
      <p>Review your selected plants before checkout.</p>
    </div>

    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <h3>Your cart is empty 🌱</h3>
        <p>Add some beautiful plants to get started.</p>
      </div>
    ) : (
      <>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="cart-summary">
          <h3>Total: ₹{totalAmount}</h3>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </>
    )}
  </div>
</section>
      </div>
    </div>
  );
}

export default App;