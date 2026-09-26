import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
    
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
  <CartItem />
</section>
      </div>
    </div>
  );
}

export default App;