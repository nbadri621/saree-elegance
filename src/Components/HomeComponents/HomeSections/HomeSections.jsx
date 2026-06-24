import React from "react";
import "./HomeSections.css";
import { Link } from "react-router-dom";
import {
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  HeartHandshake,
} from "lucide-react";

/* CATEGORY */

const categories = [
  {
    name: "Silk Sarees",
    image:
      "https://imgs.search.brave.com/zh_cmTtlfil5vR5vbKXDXW5hXidyRmoIICAP0IJcwOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYW55/YXZhci5zY2VuZTcu/Y29tL2lzL2ltYWdl/L21hbnlhdmFyL1NC/MTgwODItNDMzLVJB/TUErR1JFRU4xXzIy/LTA3LTIwMjUtMDkt/NTg6MjgzeDM5NT8m/ZHByPW9uLDI",
  },

  {
    name: "Bridal Sarees",
    image:
      "https://imgs.search.brave.com/TKhjGWI7lXCcRrr5FPvaqQhcb0pNoNiCVI1R62FUrsA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby80/c2ptb3F0amUvdHI6/dy0zNzAsYy1hdF9t/YXgvY2RuL3Nob3Av/ZmlsZXMvc2czMzU5/NDAtMV9jNDM2MTBh/Ni03ZDVhLTQ1MTEt/OGY4NC0xMjEzYjhl/N2Q4NmQuanBnP3Y9/MTc3MzgxNDM2NQ",
  },

  {
    name: "Designer Wear",
    image:
      "https://imgs.search.brave.com/_JpRxo5VeOgL8G8EnSU-cjnM1vMu9VlZIc0rtPoQH4w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbXBy/ZXNzLWNsb3RoaW5n/LmNvbS9jZG4vc2hv/cC9maWxlcy9LTTU0/NjQuanBnP3Y9MTc1/NTMzMDkyNyZ3aWR0/aD0xMDgw",
  },

  {
    name: "Party Wear",
    image:
      "https://imgs.search.brave.com/3TXsInUF3Z2mYyxgW8voaK9HTk4v9vTlxNAXmFofRPc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXRobmljcGx1cy5p/bi9jZG4vc2hvcC9m/aWxlcy9nb3JnZW91/cy1nb2xkLW5ldC1z/ZXF1aW5zLXBhcnR5/LXdlYXItc2FyZWUt/d2l0aC1ibG91c2Ut/Mzg3NzE3OS5qcGc_/dj0xNzY4NzgxNTk0/JndpZHRoPTI1MDA",
  },
];

/* PRODUCTS */

const products = [
  {
    name: "Royal Silk Saree",
    price: "₹12,999",
    image:
      "https://imgs.search.brave.com/UkAYdjWE9o7ND8RXI7uMUKQqmuSwJ8EWx0yLYWJF1rg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2FyYWdpcmkuY29t/L2Nkbi9zaG9wL2Zp/bGVzL1NISU1PTkFW/T0wtMi02MzAzXzJf/MzAweC5qcGc_dj0x/NzcyMDA5MDMy",
  },

  {
    name: "Bridal Designer Saree",
    price: "₹15,999",
    image:
      "https://imgs.search.brave.com/woSejb8QXk22HYDtmVxvnm5Ku8LBQRZbZicck7pulf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYW55/YXZhci5zY2VuZTcu/Y29tL2lzL2ltYWdl/L21hbnlhdmFyL1NC/MTg5MTMtNDI1LVJB/TkktMS0xMDFfMDQt/MDItMjAyNi0wNi0z/NToyODN4Mzk1PyZk/cHI9b24sMg",
  },

  {
    name: "Luxury Banarasi",
    price: "₹10,499",
    image:
      "https://imgs.search.brave.com/4kkf1APhvpX8_dl7mT5yE1bWGJO9_CTuX8beGef-MOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Vz/ZW9mZWxlZ2FuY2Uu/aW4vY2RuL3Nob3Av/ZmlsZXMvSE9VU0VP/RkVMRUdBTkNFREFZ/MTA3MTc3LmpwZz92/PTE3MzU3NDAzNzgm/d2lkdGg9ODAw",
  },

  {
    name: "Wedding Special",
    price: "₹18,999",
    image:
      "https://imgs.search.brave.com/xAYHjjU4jCr_lFPpkm2G_I3fiCivtvI0xNTBiFgWLgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuYXJhc2VlLmlu/L2Nkbi9zaG9wL2Zp/bGVzL0lNR184OTM1/X2RjZjFmZDhkLWYz/N2EtNDJmMS1hNTRj/LTQ4MTQwZDRlZDE5/ZV82MDB4LmpwZz92/PTE3NjAwOTYxODg",
  },
];

/* TESTIMONIALS */

const reviews = [
  {
    name: "Priya",
    review:
      "The saree quality was absolutely premium and elegant.",
  },

  {
    name: "Ananya",
    review:
      "Perfect bridal collection with luxurious fabric quality.",
  },

  {
    name: "Divya",
    review:
      "Beautiful designs and super fast delivery experience.",
  },
];

const HomeSections = () => {
  return (
    <section className="home-sections">

      {/* SHOP BY CATEGORY */}

      <div className="section-heading">
        <h2>
    
          Shop By Category
          </h2>
      </div>

      <div className="category-grid">

        {categories.map((item, index) => (

          <div className="category-card" key={index}>

            <img src={item.image} alt="" />

            <div className="category-overlay">
              <h3>{item.name}</h3>
            </div>

          </div>

        ))}

      </div>

      {/* NEW ARRIVALS */}

      <div className="section-heading new-heading">
        <p>
          Latest Collections</p>
        <h2>
          New Arrivals</h2>
      </div>

      <div className="products-grid">

        {products.map((item, index) => (

          <div className="product-card" key={index}>

            <img src={item.image} alt="" />

            <div className="product-details">

              <h3>{item.name}</h3>

              <div className="product-bottom">

                <p>{item.price}</p>

                <div className="rating">
                  <Star size={14} fill="#f5b301" stroke="#f5b301" />
                  <span>4.9</span>
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* LUXURY BANNER */}

      <div className="luxury-banner">

        <div className="luxury-content">

          <p>Luxury Collection</p>

          <h2>
            Tradition Meets
            <br />
            Modern Elegance
          </h2>

          <Link to="/Collections">
          <button>
            Explore Collections
          </button>
        </Link>

        </div>

      </div>

      

      {/* BEST SELLERS */}

      <div className="section-heading new-heading">
        <p>Most Loved</p>
        <h2>Best Sellers</h2>
      </div>

      <div className="best-seller-grid">

        {products.map((item, index) => (

          <div className="best-card" key={index}>

            <img src={item.image} alt="" />

            <div className="best-content">

              <span>Best Seller</span>

              <h3>{item.name}</h3>

              <p>{item.price}</p>

            </div>

          </div>

        ))}

      </div>

      {/* TESTIMONIALS */}

      <div className="section-heading new-heading">
        <p>Customer Reviews</p>
        <h2>Testimonials</h2>
      </div>

      <div className="testimonial-grid">

        {reviews.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="stars">

              <Star size={16} fill="#f5b301" stroke="#f5b301" />
              <Star size={16} fill="#f5b301" stroke="#f5b301" />
              <Star size={16} fill="#f5b301" stroke="#f5b301" />
              <Star size={16} fill="#f5b301" stroke="#f5b301" />
              <Star size={16} fill="#f5b301" stroke="#f5b301" />

            </div>

            <p>{item.review}</p>

            <h4>{item.name}</h4>

          </div>

        ))}

      </div>

      

    </section>
  );
};

export default HomeSections;