import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

import {
  Heart,
  ShoppingCart,
  User,
  Search,
  Home,
  Menu,
  X,
  ChevronDown,
  Package,
  LogOut,
  MapPin,
} from "lucide-react";

import {
  useStore,
} from "../Components/StoreComponent/StoreContext/StoreContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Demo Login State
  const [user, setUser] = useState(null);

  const {
    cartItems,
    wishlistItems,
  } = useStore();

  return (
    <>
      {/* TOP BAR */}

      <div className="top-bar">
        <div className="top-bar-slider">

          <div className="top-bar-track">
            <span>✨ Exclusive Wedding Collection Now Live</span>
            <span>🎉 Festive Sale | Flat 30% OFF on Silk Sarees</span>
            <span>👑 Explore Premium Bridal Sarees Collection</span>
            <span>💖 Timeless Tradition Woven Into Every Saree</span>
            <span>🚚 Free Shipping | Easy Returns | Secure Payments</span>
            <span>🌸 New Arrivals Added Daily – Shop Latest Trends</span>
            <span>✨ Authentic Kanchipuram Sarees Crafted with Elegance</span>
            <span>🔥 Summer Sale • Bridal Collection • Free Shipping</span>
            <span>✨ Luxury Sarees for Every Celebration</span>
            <span>👑 Discover Elegance in Every Drape</span>
          </div>

          <div className="top-bar-track">
            <span>✨ Exclusive Wedding Collection Now Live</span>
            <span>🎉 Festive Sale | Flat 30% OFF on Silk Sarees</span>
            <span>👑 Explore Premium Bridal Sarees Collection</span>
            <span>💖 Timeless Tradition Woven Into Every Saree</span>
            <span>🚚 Free Shipping | Easy Returns | Secure Payments</span>
            <span>🌸 New Arrivals Added Daily – Shop Latest Trends</span>
            <span>✨ Authentic Kanchipuram Sarees Crafted with Elegance</span>
            <span>🔥 Summer Sale • Bridal Collection • Free Shipping</span>
            <span>✨ Luxury Sarees for Every Celebration</span>
            <span>👑 Discover Elegance in Every Drape</span>
          </div>

        </div>
      </div>

      {/* NAVBAR */}

      <nav className="navbar">

        {/* LOGO */}

        <div className="navbar-logo">
          <h2>
            Saree<span>Elegance</span>
          </h2>
        </div>

        {/* SEARCH */}

        <div className="navbar-search">

          <input
            type="text"
            placeholder="Search silk sarees..."
          />

          <div className="search-suggestions">
            <p>Silk Sarees</p>
            <p>Bridal Sarees</p>
            <p>Cotton Sarees</p>
            <p>Kanchipuram</p>
          </div>

          <button>
            <Search size={18} />
          </button>

        </div>

        {/* DESKTOP MENU */}

        <div className="navbar-menu">

          {/* HOME */}

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "nav-item active-nav"
                : "nav-item"
            }
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          {/* COLLECTIONS */}

          <div
            className="dropdown"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >

            <NavLink
              to="/collections/silk-sarees"
              className={({ isActive }) =>
                isActive
                  ? "nav-item dropdown-btn active-nav"
                  : "nav-item dropdown-btn"
              }
            >
              Collections
              <ChevronDown size={16} />
            </NavLink>

            {categoryOpen && (

              <div className="mega-menu">

                <div>
                  <h4>Wedding</h4>

                  <Link to="/collections/bridal-sarees">
                    Bridal Sarees
                  </Link>

                  <Link to="/collections/designer-sarees">
                    Designer Sarees
                  </Link>

                  <Link to="/collections/reception-sarees">
                    Reception Wear
                  </Link>
                </div>

                <div>
                  <h4>Traditional</h4>

                  <Link to="/collections/silk-sarees">
                    Kanchipuram
                  </Link>

                  <Link to="/collections/banarasi-sarees">
                    Banarasi
                  </Link>

                  <Link to="/collections/cotton-sarees">
                    Cotton Sarees
                  </Link>
                </div>

                <div>
                  <h4>Trending</h4>

                  <Link to="/collections/designer-sarees">
                    New Arrivals
                  </Link>

                  <Link to="/collections/reception-sarees">
                    Party Wear
                  </Link>

                  <Link to="/collections/silk-sarees">
                    Festival Collection
                  </Link>
                </div>

              </div>

            )}

          </div>

          {/* WISHLIST */}

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "nav-item icon-badge active-nav"
                : "nav-item icon-badge"
            }
          >
            <Heart size={18} />

            <span>Wishlist</span>

            <div className="badge">
              {wishlistItems.length}
            </div>
          </NavLink>

          {/* CART */}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "nav-item icon-badge active-nav"
                : "nav-item icon-badge"
            }
          >
            <ShoppingCart size={18} />

            <span>Cart</span>

            <div className="badge">
              {cartItems.length}
            </div>
          </NavLink>

          {/* ORDERS */}

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "nav-item active-nav"
                : "nav-item"
            }
          >
            <Package size={18} />
            <span>Orders</span>
          </NavLink>

          {/* PROFILE */}

          <div
            className="profile-wrapper"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >

            <div
              className="login-btn"
              onClick={() => {
                if (!user) {
                  setUser({
                    name: "Badri",
                  });
                }
              }}
            >
              <User size={18} />

              <span>
                {user ? user.name : "Login"}
              </span>
            </div>

            {profileOpen && (

              <div className="profile-dropdown">

                <p>
                  <User size={15} />
                  My Profile
                </p>

                <p>
                  <Package size={15} />
                  Orders
                </p>

                <p>
                  <MapPin size={15} />
                  Address
                </p>

                {user && (
                  <p
                    onClick={() => setUser(null)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <LogOut size={15} />
                    Logout
                  </p>
                )}

              </div>

            )}

          </div>

        </div>

        {/* MOBILE MENU BUTTON */}

        <div
          className="mobile-toggle"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
        >
          {mobileMenu ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </div>

      </nav>

      {/* MOBILE SIDEBAR */}

      <div
        className={`mobile-sidebar ${
          mobileMenu ? "active" : ""
        }`}
      >

        <Link to="/">
          Home
        </Link>

        <Link to="/collections/silk-sarees">
          Collections
        </Link>

        <Link to="/wishlist">
          Wishlist
        </Link>

        <Link to="/cart">
          Cart
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>
    </>
  );
};

export default Navbar;