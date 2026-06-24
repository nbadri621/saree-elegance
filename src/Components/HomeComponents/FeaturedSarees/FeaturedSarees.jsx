import React from "react";
import "./FeaturedSarees.css";
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";

const sarees = [
  {
    id: 1,
    name: "Royal Kanchipuram Silk",
    price: "₹12,999",
    rating: "4.9",
    image:
      "https://imgs.search.brave.com/CUNouOUYLaa4wTmMniAHLceg4IURnvjmXJRDrC7l1uY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2FyYWdpcmkuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL2thbmpp/dmFyYW0tc2FyZWUt/Y2FzdGxldG9uLWdy/ZWVuLWthbmppdmFy/YW0tc2FyZWUtc2ls/ay1zYXJlZS1vbmxp/bmUtMzA4NjkyODE2/NjkzMTNfMzAweC5q/cGc_dj0xNzczNzUz/MDc0",
    tag: "Wedding Collection",
  },

  {
    id: 2,
    name: "Designer Party Wear",
    price: "₹8,499",
    rating: "4.8",
    image:
      "https://imgs.search.brave.com/E_1J7a1GVxYqQvBCNhhHvM3ygQ50umd3SH97zbUbcWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA1L2U0/LzFjLzA1ZTQxY2Yx/M2Q1Mjg3ZWU4NzJl/ZmU1NGU4NDQ3ZTI1/LmpwZw",
    tag: "Trending Design",
  },

  {
    id: 3,
    name: "Premium Banarasi Saree",
    price: "₹10,499",
    rating: "4.7",
    image:
      "https://imgs.search.brave.com/hcKk_eEH3gy3myIcs0XVM1MFJFh_8Z_u01z42nK2ypA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjc1/NzUxNzQvcGV4ZWxz/LXBob3RvLTI3NTc1/MTc0L2ZyZWUtcGhv/dG8tb2Ytc2FyZWUt/dHJhZGl0aW9uYWwt/d2Vhci5qcGVnP2F1/dG89Y29tcHJlc3Mm/Y3M9dGlueXNyZ2Im/ZHByPTEmdz01MDA",
    tag: "Luxury Collection",
  },

  {
    id: 4,
    name: "Traditional Bridal Silk",
    price: "₹15,999",
    rating: "5.0",
    image:
      "https://imgs.search.brave.com/7sf-xnA-Z7E5KcvZgQydxBY4ifRNb0MiXzSap9xRDIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzUx/MDg4MDkvcGV4ZWxz/LXBob3RvLTM1MTA4/ODA5L2ZyZWUtcGhv/dG8tb2YtZWxlZ2Fu/dC13b21hbi1pbi10/cmFkaXRpb25hbC1w/aW5rLXNpbGstc2Fy/ZWUuanBlZz9hdXRv/PWNvbXByZXNzJmNz/PXRpbnlzcmdiJmRw/cj0xJnc9NTAw",
    tag: "Bridal Special",
  },
];

const FeaturedSarees = () => {
  return (
    <section className="featured-section">

      <div className="featured-heading">

        <p>Featured Spotlight</p>

        <h2>
          Trending Saree Collections
        </h2>

      </div>

      <div className="featured-grid">

        {sarees.map((item) => (

          <div className="saree-card" key={item.id}>

            {/* IMAGE */}

            <div className="saree-image">

              <img src={item.image} alt="" />

              {/* HOVER OVERLAY */}

              <div className="hover-overlay">

                <span>{item.tag}</span>

              <Link to="/collections">
                <button>
                  Explore Collections
                </button>
              </Link>

              </div>

              {/* WISHLIST */}

              <div className="wishlist">

                <Heart size={18} />

              </div>

            </div>

            {/* DETAILS */}

            <div className="saree-details">

              <h3>{item.name}</h3>

              <div className="price-rating">

                <p>{item.price}</p>

                <div className="rating">

                  <Star size={15} fill="#f5b301" stroke="#f5b301" />

                  <span>{item.rating}</span>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedSarees;