import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://dummyjson.com/products')

        if (!response.ok) {
          throw new Error(`Failed to fetch products (HTTP ${response.status})`)
        }

        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="shop-page">
      <h1>Shop</h1>

      {loading && <p className="status-message">Loading products...</p>}

      {error && (
        <div className="status-message error-message">
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-card-link">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-card-image"
                />
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-price">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop
