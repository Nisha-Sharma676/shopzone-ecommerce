import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { user, loginAsGuest, logout } = useAuth()
  const [justLoggedIn, setJustLoggedIn] = useState(false)

  const handleGuestLogin = () => {
    loginAsGuest()
    setJustLoggedIn(true)
  }

  return (
    <div className="login-page">
      <h1>Account Login</h1>

      {user ? (
        <div className="login-card success-card">
          <p className="login-status-message">
            {justLoggedIn
              ? '✓ Successfully logged in as Guest User!'
              : `You are currently logged in as ${user.name}.`}
          </p>

          <div className="login-actions">
            <Link to="/checkout" className="checkout-btn-link">
              Proceed to Checkout →
            </Link>
            <button type="button" onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="login-card">
          <p>
            Welcome to ShopZone! Continue as a guest to proceed to checkout and
            place your orders without needing a password.
          </p>
          <button
            type="button"
            onClick={handleGuestLogin}
            className="guest-login-btn"
          >
            Login as Guest
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
