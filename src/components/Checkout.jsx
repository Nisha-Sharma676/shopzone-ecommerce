import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <h1>Order Confirmation</h1>
        <div className="order-success-card">
          <h2>🎉 Thank you for your purchase!</h2>
          <p>
            Your order has been placed successfully. A confirmation has been
            sent to <strong>{user?.email || 'your email'}</strong>.
          </p>
          <Link to="/shop" className="checkout-btn-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. Add products before checking out.</p>
          <Link to="/shop" className="back-link">
            ← Go to Shop
          </Link>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-user-info">
            <h2>Customer Details</h2>
            <p>
              Ordering as: <strong>{user?.name}</strong> ({user?.email})
            </p>
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="checkout-items-list">
              {cart.map((item) => (
                <div key={item.id} className="checkout-item-row">
                  <span className="checkout-item-name">
                    {item.title} &times; {item.quantity}
                  </span>
                  <span className="checkout-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="checkout-total-row">
              <span>Total Amount:</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="place-order-btn"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
