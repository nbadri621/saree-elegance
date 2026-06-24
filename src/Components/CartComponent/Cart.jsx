import React from "react";

import "./Cart.css";

import {
  Trash2,
  ShoppingBag,
} from "lucide-react";

import {
  useStore,
} from "../StoreComponent/StoreContext/StoreContext";

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
  } = useStore();

  /* TOTAL PRICE */

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (

    <section className="cart-page">

      {/* HEADING */}

      <div className="cart-heading">

        <h1>
          Shopping Cart
        </h1>

        <p>
          {cartItems.length} Items Added
        </p>

      </div>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <ShoppingBag size={70} />

          <h2>
            Your Cart is Empty
          </h2>

          <p>
            Add beautiful sarees to your cart.
          </p>

        </div>

      ) : (

        <div className="cart-grid">

          {/* CART ITEMS */}

          <div className="cart-items">

            {cartItems.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                {/* IMAGE */}

                <div className="cart-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                {/* DETAILS */}

                <div className="cart-details">

                  <h3>
                    {item.name}
                  </h3>

                  <div className="cart-price">

                    <span className="new-price">
                      ₹{item.price}
                    </span>

                    <span className="old-price">
                      ₹{item.oldPrice}
                    </span>

                  </div>

                  <div className="cart-offer">

                    {item.offer}
                  </div>

                  <p className="stock">
                    {item.stock}
                  </p>

                </div>

                {/* REMOVE */}

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >

                  <Trash2 size={18} />

                </button>

              </div>

            ))}

          </div>

          {/* SUMMARY */}

          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Products
              </span>

              <span>
                {cartItems.length}
              </span>

            </div>

            <div className="summary-row">

              <span>
                Delivery
              </span>

              <span>
                Free
              </span>

            </div>

            <div className="summary-row total-row">

              <span>
                Total
              </span>

              <span>
                ₹{total}
              </span>

            </div>

            <button className="checkout-btn">

              Proceed Checkout

            </button>

          </div>

        </div>

      )}

    </section>

  );
};

export default Cart;