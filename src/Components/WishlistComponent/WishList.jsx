
import React from "react";

import "./Wishlist.css";

import {
  Heart,
  Trash2,
} from "lucide-react";

import {
  useStore,
} from "../StoreComponent/StoreContext/StoreContext"

const Wishlist = () => {

  const {
    wishlistItems,
    removeFromWishlist,
  } = useStore();

  return (

    <section className="wishlist-page">

      <div className="wishlist-heading">

        <h1>
          Your Wishlist
        </h1>

        <p>
          {wishlistItems.length} Saved Products
        </p>

      </div>

      <div className="wishlist-grid">

        {wishlistItems.map((item) => (

          <div
            className="wishlist-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt=""
            />

            <div className="wishlist-content">

              <div className="wishlist-top">

                <span>
                  {item.offer}
                </span>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                >

                  <Trash2 size={18} />

                </button>

              </div>

              <h3>
                {item.name}
              </h3>

              <p>
                ₹{item.price}
              </p>

              <div className="wishlist-rating">

                <Heart size={16} fill="#7b2c47" />

                <span>
                  {item.rating}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Wishlist;
