import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* NEWSLETTER */}
      <div className="newsletter">

        <h2>Get Exclusive Saree Offers</h2>

        <p>Subscribe to get updates on new collections & discounts</p>

        <div className="newsletter-box">

          <input type="email" placeholder="Enter your email" />

          <button>Subscribe</button>

        </div>

      </div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>Saree<span>Elegance</span></h2>

          <p>
            Premium silk sarees crafted with tradition and luxury.
            Directly from skilled Indian weavers.
          </p>

          <div className="social-icons">

            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>

          </div>

        </div>

        {/* LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Collections</a>
          <a href="#">Best Sellers</a>
          <a href="#">Contact</a>

        </div>

        {/* CATEGORIES */}
        <div className="footer-links">

          <h3>Categories</h3>

          <a href="#">Silk Sarees</a>
          <a href="#">Banarasi</a>
          <a href="#">Bridal</a>
          <a href="#">Designer</a>
          <a href="#">Party Wear</a>

        </div>

        {/* CONTACT */}
        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📞 +91 98765 43210</p>
          <p>✉ support@sareeelegance.com</p>
          <p>📍 Tamil Nadu, India</p>

        </div>

      </div>

      {/* TRUST BADGES */}
      <div className="trust">

        <span>✔ Secure Payment</span>
        <span>✔ Free Shipping</span>
        <span>✔ Easy Returns</span>
        <span>✔ Authentic Silk</span>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>© 2026 SareeElegance. All Rights Reserved.</p>

      </div>

    </footer>
  );
};

export default Footer;