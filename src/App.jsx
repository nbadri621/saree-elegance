import './App.css'

import {
  Routes,
  Route,
} from "react-router-dom"

import Navbar from './Navbar/Navbar'

import Home from './Components/HomeComponents/Home/Home'

import Collections from './Components/CollectionComponent/Collections/Collections'

import Cart from './Components/CartComponent/Cart'

import Wishlist from './Components/WishlistComponent/WishList'
import Footer from './Footer/Footer'

function App() {

  return (

    <>

      <Navbar />
      <Routes>

  {/* HOME */}

  <Route
    path="/"
    element={<Home />}
  />

  {/* ALL COLLECTIONS */}

  <Route
    path="/collections"
    element={<Collections />}
  />

  {/* CATEGORY COLLECTION */}

  <Route
    path="/collections/:category"
    element={<Collections />}
  />

  {/* CART */}

  <Route
    path="/cart"
    element={<Cart />}
  />

  {/* WISHLIST */}

  <Route
    path="/wishlist"
    element={<Wishlist />}
  />

      </Routes>
      <Footer />

    </>

  )
}

export default App