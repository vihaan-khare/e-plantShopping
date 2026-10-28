
import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <>
          <div className="background-image">
            <div className="overlay">
              <nav className="navbar">
                <div className="logo">Paradise Nursery</div>

                <div className="nav-links">
                  <a href="#home">Home</a>
                  <a href="#about">About Us</a>
                  <a
                    href="#plants"
                    onClick={(event) => {
                      event.preventDefault();
                      setShowProductList(true);
                    }}
                  >
                    Plants
                  </a>
                </div>
              </nav>

              <section className="hero-section" id="home">
                <div className="hero-content">
                  <p className="tagline">BRING NATURE HOME</p>

                  <h1>Welcome to Paradise Nursery</h1>

                  <p className="hero-description">
                    Discover beautiful indoor plants that bring freshness,
                    beauty, and tranquility to your home. Find the perfect
                    green companion for every corner of your space.
                  </p>

                  <button
                    className="get-started-btn"
                    onClick={() => setShowProductList(true)}
                  >
                    Get Started
                  </button>
                </div>
              </section>
            </div>
          </div>

          <AboutUs />
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
