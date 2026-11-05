import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Login from './components/Login'
import Checkout from './components/Checkout'
import ProtectedRoute from './components/ProtectedRoute'
import { useCart } from './context/CartContext'
import { useAuth } from './context/AuthContext'
import './App.css'

function App() {
  const { totalItems } = useCart()
  const { user, logout } = useAuth()

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link> |{' '}
          <Link to="/shop">Shop</Link> |{' '}
          <Link to="/contact">Contact</Link> |{' '}
          <Link to="/cart" className="cart-nav-link">
            Cart ({totalItems})
          </Link>
        </div>

        <div className="nav-auth">
          {user ? (
            <>
              <span className="user-greeting">👤 {user.name}</span>
              <button type="button" onClick={logout} className="nav-logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="login-nav-link">
              Login
            </Link>
          )}
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
