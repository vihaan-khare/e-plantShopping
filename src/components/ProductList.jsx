
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "../App.css";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c8f?auto=format&fit=crop&w=600&q=80" },
      { id: 2, name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80" },
      { id: 3, name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80" },
      { id: 5, name: "Boston Fern", price: 299, image: "https://images.unsplash.com/photo-1597055181300-2c4a3f8d7a8c?auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Rubber Plant", price: 449, image: "https://images.unsplash.com/photo-1614594575743-8a9f7e6a6a7e?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    category: "Low Light Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 399, image: "https://images.unsplash.com/photo-1632207691146-3e4e6c9e1c8b?auto=format&fit=crop&w=600&q=80" },
      { id: 8, name: "Pothos", price: 279, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80" },
      { id: 9, name: "Chinese Evergreen", price: 329, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 10, name: "Philodendron", price: 379, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
      { id: 11, name: "Parlor Palm", price: 349, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 12, name: "Cast Iron Plant", price: 429, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    category: "Succulents and Cacti",
    plants: [
      { id: 13, name: "Aloe Vera", price: 249, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 14, name: "Jade Plant", price: 299, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 15, name: "Echeveria", price: 199, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
      { id: 16, name: "Golden Barrel Cactus", price: 279, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 17, name: "Haworthia", price: 229, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
      { id: 18, name: "String of Pearls", price: 349, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((previous) => ({
      ...previous,
      [plant.name]: true,
    }));
  };

  return (
    <div className="products-page">
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>
        <div className="nav-links">
          <a href="/" onClick={(event) => {
            event.preventDefault();
            window.location.href = "/";
          }}>Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart" onClick={(event) => {
            event.preventDefault();
            window.location.href = "/cart";
          }}>
            Cart ({cartCount})
          </a>
        </div>
      </nav>

      <section className="products-section" id="plants">
        <div className="products-container">
          <div className="products-heading">
            <p className="section-tag">OUR COLLECTION</p>
            <h1>Find Your Perfect Plant</h1>
            <p>
              Explore our collection of beautiful plants and bring a touch
              of nature into your home.
            </p>
          </div>

          {plantsArray.map((category) => (
            <section className="plant-category" key={category.category}>
              <h2 className="category-title">{category.category}</h2>

              <div className="product-list">
                {category.plants.map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p className="product-price">₹{plant.price}</p>
                      <button
                        className="add-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name]
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
