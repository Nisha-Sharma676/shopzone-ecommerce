import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart()

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your shopping cart is currently empty.</p>
          <Link to="/shop" className="back-link">
            ← Browse Products
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">
                    Price: ${item.price} each
                  </p>
                  <p className="cart-item-qty">
                    Quantity: {item.quantity}
                  </p>
                  <p className="cart-item-subtotal">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p className="cart-total-price">
              Total: <strong>${totalPrice.toFixed(2)}</strong>
            </p>
            <div className="cart-summary-actions">
              <Link to="/checkout" className="checkout-btn-link">
                Proceed to Checkout →
              </Link>
              <Link to="/shop" className="back-link">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
