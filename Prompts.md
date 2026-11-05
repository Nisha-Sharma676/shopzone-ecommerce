# ShopZone eCommerce — AI-Assisted Development Log

This document records the user prompts, actions taken, architectural decisions, and conceptual explanations during the development of the **ShopZone** eCommerce application.

---

## Session Log

### Session 1: Project Scaffolding
- **User Prompt:**
  ```text
  npm create vite@latest . -- --template react
  ```
- **Actions Taken:**
  - Scaffolded an initial Vite + React project into the workspace directory.
  - Initial project files created: `package.json`, `vite.config.js`, `index.html`, and base `src/` files.

---

### Session 2: Dependency Installation & Dev Server
- **User Prompt:**
  ```text
  Install the project dependencies using `npm install`, then install `react-router-dom`. Do not install Tailwind CSS or any other unnecessary libraries.

  After installation:
  1. Check that `package.json` contains React Router DOM.
  2. Start the Vite development server using `npm run dev`.
  3. Do not create the complete application yet. Keep the existing Vite project structure and explain the purpose of the installed dependencies.

  Wait for my confirmation before modifying application components.
  ```
- **Actions Taken:**
  - Ran `npm install` to install base packages (`react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `oxlint`).
  - Ran `npm install react-router-dom` to install client-side routing.
  - Confirmed `react-router-dom` entry in `package.json`.
  - Started Vite development server at `http://localhost:5173/`.
  - Documented role and purpose of all installed dependencies.

---

### Session 3: React Router Configuration & Initial Pages
- **User Prompt:**
  ```text
  Now configure React Router for the ShopZone application.

  Requirements:
  1. In `src/main.jsx`, wrap the App component with `BrowserRouter`.
  2. In `src/App.jsx`, configure these routes:
     - `/` → Home component
     - `/shop` → Shop component
     - `/contact` → Contact component
     - `/product/:id` → ProductDetails component
  3. Create a `src/components/` folder for the page components.
  4. Create separate files for Home, Shop, Contact, and ProductDetails.
  5. For now, each component should display only its page name as a heading.
  6. Add a simple navigation bar using React Router's `Link` component, not HTML anchor tags, for internal navigation.
  7. Do not implement API fetching, cart, authentication, or styling yet.
  8. Explain the purpose of BrowserRouter, Routes, Route, Link, and useParams in simple language.
  9. Create or update `Prompts.md` to document this AI-assisted development session.

  Keep the code beginner-friendly and do not add unnecessary files or dependencies.
  ```
- **Actions Taken:**
  - Created directory `src/components/`.
  - Created individual page components:
    - `src/components/Home.jsx`: Renders `<h1>Home</h1>`.
    - `src/components/Shop.jsx`: Renders `<h1>Shop</h1>`.
    - `src/components/Contact.jsx`: Renders `<h1>Contact</h1>`.
    - `src/components/ProductDetails.jsx`: Renders `<h1>Product Details</h1>` and reads `:id` via `useParams()`.
  - Wrapped `<App />` with `<BrowserRouter>` in `src/main.jsx`.
  - Updated `src/App.jsx` with a navigation bar using `<Link>` components and routes using `<Routes>` and `<Route>`.
  - Verified compilation and build with `npm run build`.

---

### Session 4: React Router Implementation Review
- **User Prompt:**
  ```text
  Review the current React Router implementation without changing anything.

  Verify:
  1. BrowserRouter is used only once in main.jsx.
  2. All four routes are correctly configured in App.jsx.
  3. Internal navigation uses Link, not anchor tags.
  4. ProductDetails uses useParams() and correctly reads the id.
  5. There are no console errors.
  6. npm run build completes successfully.

  Report any issues found. Do not implement new features yet.
  ```
- **Actions Taken:**
  - Verified `BrowserRouter` exists solely in `src/main.jsx`.
  - Verified routes (`/`, `/shop`, `/contact`, `/product/:id`) in `src/App.jsx`.
  - Verified navigation uses `<Link>` with zero raw `<a>` tags.
  - Verified `ProductDetails.jsx` properly uses `useParams()`.
  - Verified `npm run lint` (`oxlint`) returned 0 warnings and 0 errors.
  - Verified `npm run build` completed successfully with zero issues.

---

### Session 5: Product API Integration (DummyJSON)
- **User Prompt:**
  ```text
  Implement the product API integration for ShopZone using the DummyJSON API.

  API endpoint: https://dummyjson.com/products

  Requirements:
  1. In `src/components/Shop.jsx`, fetch products from the API using `fetch()` and `useEffect()`.
  2. Use `useState()` to manage:
     - Products
     - Loading state
     - Error state
  3. Display products in a responsive grid.
  4. Each product card should show its image, title, and price.
  5. Use React Router's `Link` to navigate to `/product/:id` when a product is clicked.
  6. In `src/components/ProductDetails.jsx`, use the `id` from `useParams()` to fetch the selected product from `https://dummyjson.com/products/${id}`.
  7. Display the selected product's image, title, price, and description.
  8. Include loading and error messages on both pages.
  9. Use simple CSS in the existing stylesheet or create one if necessary. Do not install additional libraries.
  10. Do not implement Cart, Context API, Login, or Checkout yet.
  11. Update `Prompts.md` with this AI-assisted session.
  ```
- **Actions Taken:**
  - Implemented product catalog fetching in `src/components/Shop.jsx` using `fetch('https://dummyjson.com/products')` inside `useEffect()`.
  - Managed three state variables with `useState`: `products` (array), `loading` (boolean), and `error` (string or null).
  - Implemented single product fetching in `src/components/ProductDetails.jsx` using `fetch('https://dummyjson.com/products/${id}')` triggered when `id` changes.
  - Handled loading spinners/messages and error display with user-friendly fallback and back navigation.
  - Added responsive CSS grid and clean card styling in `src/App.css`.
  - Tested with `npm run lint` (passed: 0 errors, 0 warnings).
  - Tested with `npm run build` (passed: build completed successfully).

---

### Session 6: Phase 2 — Global Shopping Cart using Context API
- **User Prompt:**
  ```text
  Implement Phase 2 of the ShopZone application: Global Shopping Cart using React Context API.

  Requirements:
  1. Create `src/context/CartContext.jsx`.
  2. Create a CartContext using `createContext()`.
  3. Create a CartProvider component that manages cart items using `useState()`.
  4. Add these cart functions:
     - `addToCart(product)`: Add a product to the cart. If it already exists, increase its quantity instead of creating a duplicate entry.
     - `removeFromCart(productId)`: Remove the selected product.
  5. Wrap the application with CartProvider in `src/main.jsx`, keeping BrowserRouter correctly configured.
  6. Update the global Navbar to display a Cart link and a dynamic cart item count.
  7. Create `src/components/Cart.jsx`:
     - Display selected products with image, title, price and quantity.
     - Display the total cart price.
     - Provide a Remove button for each product.
     - Show a friendly message when the cart is empty.
  8. Add the `/cart` route in App.jsx.
  9. Add an Add to Cart button on ProductDetails.jsx and connect it to CartContext.
  10. Use simple CSS consistent with the existing application.
  11. Update Prompts.md with the AI-assisted session and explanations.
  ```
- **Actions Taken:**
  - Created `src/context/CartContext.jsx` with `createContext()`, `CartProvider`, `useCart()` custom hook, and state functions (`addToCart`, `removeFromCart`, `totalItems`, `totalPrice`).
  - Wrapped `<App />` with `<CartProvider>` inside `<BrowserRouter>` in `src/main.jsx`.
  - Updated global Navbar in `src/App.jsx` to display dynamic cart count: `Cart ({totalItems})`.
  - Added `/cart` route pointing to `<Cart />` component in `src/App.jsx`.
  - Created `src/components/Cart.jsx` showing product thumbnails, titles, unit prices, quantities, item subtotals, full cart total, Remove buttons, and empty-cart message.
  - Added "Add to Cart" button in `src/components/ProductDetails.jsx` with transient confirmation ("Added to Cart! ✓").
  - Extended `src/App.css` with clean layout styles for cart items, summary box, and buttons.
  - Verified with `npm run lint` (0 warnings, 0 errors) and `npm run build` (successful production build).

---

### Session 7: Phase 3 — Cart Persistence, Guest Login, and Protected Checkout
- **User Prompt:**
  ```text
  Implement Phase 3 of the ShopZone application.

  Part A – Cart Persistence:
  1. Update CartContext.jsx to save cart data in localStorage whenever cart changes.
  2. On initial application load, retrieve saved cart data from localStorage.
  3. Ensure cart items, quantities and totals remain correct after refreshing the browser.
  4. Handle missing or invalid localStorage data safely.

  Part B – Guest Login:
  1. Create `src/components/Login.jsx`.
  2. Add a Login as Guest button.
  3. Create a global user login state using React Context API.
  4. When the button is clicked, set the user state to logged in.
  5. Show a suitable success message and provide navigation to Checkout.

  Part C – Protected Checkout:
  1. Create `src/components/Checkout.jsx`.
  2. Add a `/login` route and a `/checkout` route.
  3. Create a ProtectedRoute component.
  4. If the user is not logged in, redirect them to `/login` using Navigate.
  5. If logged in, allow access to Checkout.
  6. Display a simple order summary using the cart items and total price.
  7. Add a Checkout link or button to the Cart page.

  Part D – Integration:
  1. Update the global Navbar to show Login or Guest User status appropriately.
  2. Add a logout option if appropriate.
  3. Update Prompts.md with this development session and concept explanations.
  4. Keep the existing application structure and CSS consistent.
  5. Do not install unnecessary dependencies.
  ```
- **Actions Taken:**
  - **Part A (Cart Persistence)**:
    - Updated `src/context/CartContext.jsx` with lazy state initialization via `localStorage.getItem('shopzone_cart')` wrapped in a `try / catch` block to safely handle empty or corrupt data.
    - Synchronized updates automatically to `localStorage` using `useEffect` with `JSON.stringify(cart)`.
    - Added `clearCart()` method to empty the cart after successful checkout.
  - **Part B (Guest Login)**:
    - Created `src/context/AuthContext.jsx` managing user state with `loginAsGuest` and `logout` actions, also backed by `localStorage` persistence.
    - Created `src/components/Login.jsx` with a "Login as Guest" button, feedback message, and direct navigation to Checkout.
  - **Part C (Protected Checkout)**:
    - Created `src/components/ProtectedRoute.jsx` using React Router's `<Navigate to="/login" replace />` when an unauthenticated user attempts to access protected pages.
    - Created `src/components/Checkout.jsx` showing authenticated customer details, order item breakdown, total price, and a "Place Order" confirmation action.
    - Added "Proceed to Checkout →" link to `src/components/Cart.jsx`.
  - **Part D (Integration & Quality Assurance)**:
    - Wrapped `<App />` with both `<AuthProvider>` and `<CartProvider>` in `src/main.jsx`.
    - Updated Navbar in `src/App.jsx` to dynamically display `"👤 Guest User"` and a `"Logout"` button when authenticated, or a `"Login"` link when unauthenticated.
    - Updated `src/App.css` with clean responsive styling for Login, Checkout, order success, and authentication controls.
    - Executed `npm run lint` (0 errors, 0 warnings) and `npm run build` (build succeeded cleanly).

---

## Core Concepts Explained

### 1. `localStorage`
- **What it is:** A Web Storage API built into all modern web browsers that allows web applications to store key-value string data persistently on the client machine.
- **Why we use it:** Unlike normal React state which is wiped from memory whenever the browser tab is refreshed or closed, data stored in `localStorage` persists across page reloads and browser restarts until explicitly cleared.
- **In ShopZone:** We store `shopzone_cart` and `shopzone_user` so shoppers never lose their cart contents or active session upon refreshing.

### 2. `JSON.stringify`
- **What it is:** A standard JavaScript method that converts JavaScript objects or arrays into a JSON-formatted string:
  ```javascript
  const jsonString = JSON.stringify([{ id: 1, title: 'Item', quantity: 2 }])
  ```
- **Why we need it:** `localStorage` can **only store strings**. Trying to pass a raw object or array to `localStorage.setItem()` would turn it into the useless string `"[object Object]"`. `JSON.stringify` serializes the data so it can be stored accurately.

### 3. `JSON.parse`
- **What it is:** The counterpart to `JSON.stringify`. It takes a JSON string and reconstructs the original JavaScript object or array:
  ```javascript
  const cartArray = JSON.parse(savedCartString)
  ```
- **Safe Handling:** Because invalid or corrupt data in storage can throw a syntax error and crash the app, we always wrap `JSON.parse` in a `try / catch` block and verify that the result is an array before setting state.

### 4. `Navigate`
- **What it is:** A component provided by `react-router-dom` used for declarative navigation and redirects.
- **How it works:** When React renders `<Navigate to="/login" replace />`, React Router immediately changes the current URL to `/login` and renders the destination route. The `replace` prop replaces the current entry in the history stack rather than pushing a new one, preventing the back button from getting stuck in an infinite redirect loop.

### 5. `ProtectedRoute`
- **What it is:** A higher-order component pattern in React Router that checks whether a user meets certain access conditions (e.g. being logged in) before displaying a page.
- **How it works:**
  ```jsx
  function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
    return children
  }
  ```
  If `isAuthenticated` is `false`, the user is redirected to `/login`. If `true`, the child component (`<Checkout />`) renders normally.

---

## Current Project Structure

```text
shopzone-ecommerce/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Shop.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── Prompts.md
├── README.md
└── vite.config.js
```
