
import { Link } from "react-router-dom"
import heroImage from "../assets/hero.png"

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO SHOPZONE</p>
          <h1>Discover Products You'll Love</h1>
          <p>
            Explore a wide range of products at great prices.
            Find your favourites and enjoy a simple shopping experience.
          </p>
          <Link to="/shop" className="shop-now-btn">
            Shop Now →
          </Link>
        </div>

        <div className="hero-image-container">
          <img src={heroImage} alt="ShopZone shopping collection" />
        </div>
      </section>

      <section className="home-features">
        <h2>Why Shop With Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>🛍️ Wide Collection</h3>
            <p>Explore products across different categories.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Great Prices</h3>
            <p>Discover products at attractive prices.</p>
          </div>

          <div className="feature-card">
            <h3>🛒 Easy Shopping</h3>
            <p>Browse, add to cart and checkout with ease.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
