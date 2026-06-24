
import React, {
  createContext,
  useContext,
  useState,
} from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const [wishlistItems, setWishlistItems] = useState([]);

  /* ADD TO CART */

  const addToCart = (product) => {

    const exists = cartItems.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setCartItems([...cartItems, product]);
    }

  };

  /* REMOVE CART */

  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );

  };

  /* ADD TO WISHLIST */

  const addToWishlist = (product) => {

    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }

  };

  /* REMOVE WISHLIST */

  const removeFromWishlist = (id) => {

    setWishlistItems(
      wishlistItems.filter(
        (item) => item.id !== id
      )
    );

  };

  return (

    <StoreContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >

      {children}

    </StoreContext.Provider>

  );
};

export const useStore = () => useContext(StoreContext);