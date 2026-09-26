import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Plant product data divided into three main categories
const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Low Light Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c8f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "ZZ Plant",
    category: "Low Light Plants",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1632207691146-3e4e6c9e1c8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1614594575743-8a9f7e6a6a7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Aloe Vera",
    category: "Flowering Plants",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  // Get products currently present in the Redux cart
  const cartItems = useSelector((state) => state.cart.items);

  // Add the selected plant to the Redux cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // Check whether a product is already in the cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Group products into categories
  const categories = [
    "Low Light Plants",
    "Indoor Plants",
    "Flowering Plants",
  ];

  return (
    <section className="products-section" id="products">
      <div className="products-container">

        <div className="products-heading">
          <p className="section-tag">OUR COLLECTION</p>

          <h2>Find Your Perfect Plant</h2>

          <p>
            Explore our collection of beautiful plants and bring a touch
            of nature into your home.
          </p>
        </div>

        {/* Render each plant category separately */}
        {categories.map((category) => {

          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <div className="plant-category" key={category}>

              <h2 className="category-title">
                {category}
              </h2>

              <div className="product-grid">

                {/* Render all products belonging to this category */}
                {categoryProducts.map((product) => (

                  <div
                    className="product-card"
                    key={product.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="product-info">

                      <span className="product-category">
                        {product.category}
                      </span>

                      <h3>{product.name}</h3>

                      <p className="product-price">
                        ₹{product.price}
                      </p>

                      <button
                        className="add-cart-btn"
                        onClick={() => handleAddToCart(product)}
                        disabled={isInCart(product.id)}
                      >
                        {isInCart(product.id)
                          ? "✓ Added to Cart"
                          : "Add to Cart"}
                      </button>

                    </div>
                  </div>

                ))}

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default ProductList;