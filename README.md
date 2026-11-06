# ShopZone – E-Commerce Web Application

ShopZone is a responsive e-commerce Single Page Application (SPA) built using React and Vite. It allows users to browse products, view product details, manage their shopping cart, log in as a guest, and complete a simulated checkout process.

## Features

- **Home Page:** Attractive landing page with a hero section and Shop Now button.
- **Product Listing:** Fetches products dynamically from the DummyJSON API.
- **Product Details:** Displays individual product information.
- **Shopping Cart:** Add, remove, and manage products and quantities.
- **Cart Persistence:** Saves cart data using localStorage.
- **Guest Login:** Allows users to log in as a guest.
- **Protected Checkout:** Restricts checkout access to logged-in users.
- **Order Confirmation:** Displays a confirmation message after placing an order.
- **Contact Page:** Contact form with basic frontend validation and submission feedback.
- **Responsive Design:** Supports desktop and mobile screens.

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- Context API
- Browser localStorage
- DummyJSON Products API

## API Used

Product data is fetched from:

https://dummyjson.com/products

## Application Routes

| Route | Description |
|---|---|
| `/` | Home Page |
| `/shop` | Product Listing |
| `/product/:id` | Product Details |
| `/cart` | Shopping Cart |
| `/login` | Guest Login |
| `/checkout` | Protected Checkout |
| `/contact` | Contact Page |

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Nisha-Sharma676/shopzone-ecommerce.git
   ```

2. Navigate to the project folder:

   ```bash
   cd shopzone-ecommerce
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## Available Scripts

- `npm run dev` – Starts the development server.
- `npm run build` – Creates the production build.
- `npm run lint` – Runs code quality checks.

## Live Demo

https://shopzone-ecommerce-one.vercel.app/

## GitHub Repository

https://github.com/Nisha-Sharma676/shopzone-ecommerce

## Note

This project is developed for learning and demonstration purposes. Guest authentication is simulated on the frontend. Checkout does not process real payments, and the contact form does not send actual emails.

## Author

Nisha Sharma
B.Tech CSE (AI & ML)