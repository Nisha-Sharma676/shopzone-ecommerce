import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`https://dummyjson.com/products/${id}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch product details (HTTP ${response.status})`)
        }

        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProductDetails()
    }
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    }
  }

  return (
    <div className="product-details-page">
      <h1>Product Details</h1>

      {loading && <p className="status-message">Loading product details...</p>}

      {error && (
        <div className="status-message error-message">
          <p>Error: {error}</p>
          <Link to="/shop" className="back-link">
            ← Back to Shop
          </Link>
        </div>
      )}

      {!loading && !error && product && (
        <div className="product-detail-card">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="product-detail-image"
          />
          <div className="product-detail-info">
            <h2>{product.title}</h2>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>

            <div className="product-actions">
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                {added ? 'Added to Cart! ✓' : 'Add to Cart'}
              </button>
            </div>

            <div className="product-links">
              <Link to="/shop" className="back-link">
                ← Back to Shop
              </Link>
              {' | '}
              <Link to="/cart" className="back-link">
                Go to Cart →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
