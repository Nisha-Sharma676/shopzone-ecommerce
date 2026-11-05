/* oxlint-disable react/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'

// 1. Create the Cart Context
export const CartContext = createContext()

// 2. Custom hook for consuming the Cart Context easily
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

const CART_STORAGE_KEY = 'shopzone_cart'

// 3. CartProvider component that manages cart state and localStorage persistence
export function CartProvider({ children }) {
  // Retrieve saved cart data on initial load safely with try/catch
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          return parsedCart
        }
      }
    } catch (err) {
      console.error('Failed to load cart from localStorage:', err)
    }
    return []
  })

  // Save cart data to localStorage whenever cart state changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch (err) {
      console.error('Failed to save cart to localStorage:', err)
    }
  }, [cart])

  // Add product to cart (or increment quantity if already present)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id)

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // Remove product completely from cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Clear entire cart (e.g. after successful checkout)
  const clearCart = () => {
    setCart([])
  }

  // Calculate total number of items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  // Calculate total price of all items in cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
