import React, { useMemo, useState } from "react";

import "./Collections.css";

import sareesData from "../../../Datas/Sarees.json";

import { useParams } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  SlidersHorizontal,
  X,
} from "lucide-react";

import {
  useStore,
} from "../../StoreComponent/StoreContext/StoreContext";

const Collections = () => {

  const { category } = useParams();

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

    const [message, setMessage] = useState("");

  /* STORE CONTEXT */

  const {
    addToWishlist,
    addToCart,
  } = useStore();

  const handleAddToCart = (product) => {

  addToCart(product);

  setMessage(`${product.name} added to Cart`);

  setTimeout(() => {
    setMessage("");
  }, 2000);

};

const handleAddToWishlist = (product) => {

  addToWishlist(product);

  setMessage(`${product.name} added to Wishlist`);

  setTimeout(() => {
    setMessage("");
  }, 2000);

};

  /* FILTER CATEGORY */

  const filteredCategory = useMemo(() => {

    if (!category) return sareesData;

    return sareesData.filter(
      (item) => item.slug === category
    );

  }, [category]);

  /* SAFETY */

  if (filteredCategory.length === 0) {

    return (

      <div className="no-products">

        <h1>
          Collection Not Found
        </h1>

      </div>

    );

  }

  /* ALL PRODUCTS */

  const allProducts = filteredCategory.flatMap(
    (item) => item.products
  );

  /* FILTER PRODUCTS */

  const displayedProducts =
    selectedFilter === "All"

      ? allProducts

      : allProducts.filter(
          (item) =>
            item.offer === selectedFilter
        );

  const categoryTitle =
    filteredCategory[0]?.category ||
    "Luxury Sarees";

  const categoryImage =
    displayedProducts[0]?.image;

  return (

    <section className="collection-page">

      {/* HERO */}

      <div
        className="collection-hero"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${categoryImage})`,
        }}
      >

        <div className="hero-content">

          <p>
            HOME / COLLECTIONS
          </p>

          <h1>
            {categoryTitle}
          </h1>

          <span>

            Discover handcrafted luxury sarees curated for timeless elegance.

          </span>

        </div>

      </div>

      {/* FILTER */}

      <div className="filter-wrapper">

        <div className="filter-left">

          <SlidersHorizontal size={18} />

          <span>
            Filters
          </span>

        </div>

        <div className="filter-tags">

          <button
            className={
              selectedFilter === "All"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedFilter("All")
            }
          >
            All
          </button>

          <button
            className={
              selectedFilter === "20% OFF"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedFilter("20% OFF")
            }
          >
            20% OFF
          </button>

          <button
            className={
              selectedFilter === "30% OFF"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedFilter("30% OFF")
            }
          >
            30% OFF
          </button>

          <button
            className={
              selectedFilter === "40% OFF"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedFilter("40% OFF")
            }
          >
            40% OFF
          </button>

        </div>

      </div>

      {/* FEATURED */}

      {displayedProducts[0] && (

        <div className="featured-product">

          <div className="featured-image">

            <img
              src={displayedProducts[0].image}
              alt=""
            />

          </div>

          <div className="featured-details">

            <p>
              FEATURED SPOTLIGHT
            </p>

            <h2>
              {displayedProducts[0].name}
            </h2>

            <div className="featured-rating">

              <Star
                size={18}
                fill="#d4af37"
                stroke="#d4af37"
              />

              <span>
                {displayedProducts[0].rating}
              </span>

            </div>

            <h3>
              ₹{displayedProducts[0].price}
            </h3>

            <span className="featured-description">

              Crafted with luxurious fabric and timeless elegance.

            </span>

            <div className="featured-buttons">

              <button>
                Shop Now
              </button>

              <button className="outline-btn">
                Explore More
              </button>

            </div>

          </div>

        </div>

      )}

      {/* PRODUCT GRID */}

      <div className="luxury-grid">

        {displayedProducts.map((product) => (

          <div
            className="luxury-card"
            key={product.id}
          >

            {/* IMAGE */}

            <div className="luxury-image">

              <img
                src={product.image}
                alt=""
              />

              {/* OFFER */}

              <div className="offer-badge">

                {product.offer}

              </div>

              {/* ACTIONS */}

              <div className="floating-actions">

                {/* WISHLIST */}

                <button
                  onClick={() =>
                    handleAddToWishlist(product)
                  }
                >

                  <Heart size={18} />

                </button>

                {/* CART */}

                <button
                  onClick={() =>
                    handleAddToCart(product)
                  }
                >

                  <ShoppingCart size={18} />

                </button>
                {/* VIEW */}

                <button
                  onClick={() =>
                    setSelectedProduct(product)
                  }
                >

                  <Eye size={18} />

                </button>

              </div>

              {/* HOVER */}

              <div className="hover-content">

                <h4>
                  Premium Saree Collection
                </h4>

                <span>
                  Luxury handcrafted elegance
                </span>

              </div>

            </div>

            {/* DETAILS */}

            <div className="luxury-details">

              <h3>
                {product.name}
              </h3>

              <div className="luxury-rating">

                <Star
                  size={16}
                  fill="#d4af37"
                  stroke="#d4af37"
                />

                <span>
                  {product.rating}
                </span>

              </div>

              <div className="price-wrapper">

                <h4>
                  ₹{product.price}
                </h4>

                <span>
                  ₹{product.oldPrice}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}

      {selectedProduct && (

        <div className="modal-overlay">

          <div className="product-modal">

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={() =>
                setSelectedProduct(null)
              }
            >

              <X size={20} />

            </button>

            {/* IMAGE */}

            <div className="modal-left">

              <img
                src={selectedProduct.image}
                alt=""
              />

            </div>

            {/* DETAILS */}

            <div className="modal-right">

              <h2>
                {selectedProduct.name}
              </h2>

              <div className="modal-rating">

                <Star
                  size={18}
                  fill="#d4af37"
                  stroke="#d4af37"
                />

                <span>
                  {selectedProduct.rating}
                </span>

              </div>

              <h3>
                ₹{selectedProduct.price}
              </h3>

              <p>

                Experience luxurious craftsmanship with premium fabrics and timeless elegance.

              </p>

              <div className="modal-buttons">

                <button
                  onClick={() =>
                    handleAddToCart(selectedProduct)
                  }
                >
                  Add To Cart
                </button>



                <button
                  className="outline-btn"
                  onClick={() =>
                    handleAddToWishlist(selectedProduct)
                  }
                >
                  Wishlist
                </button>

              </div>

            </div>

          </div>

        </div>

      )}



      {message && (

  <div className="toast-message">

    {message}

  </div>

)}

    </section>

  );
};

export default Collections;