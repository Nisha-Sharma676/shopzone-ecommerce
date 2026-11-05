/* oxlint-disable react/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'

// 1. Create Auth Context
export const AuthContext = createContext()

// 2. Custom hook to consume Auth Context
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const AUTH_STORAGE_KEY = 'shopzone_user'

// 3. AuthProvider to manage user login state
export function AuthProvider({ children }) {
  // Retrieve saved user on initial load
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY)
      if (savedUser) {
        return JSON.parse(savedUser)
      }
    } catch (err) {
      console.error('Failed to load user from localStorage:', err)
    }
    return null
  })

  // Synchronize user state with localStorage
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY)
      }
    } catch (err) {
      console.error('Failed to sync user with localStorage:', err)
    }
  }, [user])

  // Login as guest
  const loginAsGuest = () => {
    setUser({
      name: 'Guest User',
      isGuest: true,
      email: 'guest@shopzone.local',
    })
  }

  // Logout
  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    loginAsGuest,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
