# Angela's EShop

Welcome to my E-Shop, a fully-functional front-end e-commerce application built as a capstone project. This project allows users to browse, view details, sort, and filter products. Additionally, logged-in users can add items to their cart, edit quantities, remove products, and simulate a checkout process.

Features
Product Listings: Browse through a variety of products, including categories such as men's clothing and women's clothing.

Product Details: View detailed information about each product, including descriptions, photos, and prices.

Sorting and Filtering: Sort products by price (low to high or high to low) and by name (A to Z or Z to A).

Cart Management: Add items to the cart, adjust quantities, remove products, and clear the entire cart.

Responsive Design: The application is designed to be responsive, ensuring a seamless experience across devices of various screen sizes.

Technologies Used
Front-End: React.js, React Router for navigation, Tailwind CSS for styling.

API: Utilized the Fake Store API (https://fakestoreapi.com/) for fetching product data.

State Management: Context API for managing global state (cart state, product state).

Deployment: Deployed on Netlify for live preview.


Getting Started
To run this project locally, follow these steps:

Clone the repository:

git clone <repository-url>
cd AngelasEshop

Install dependencies:
npm install

Start the development server:
npm start
Open http://localhost:3000 in your browser to view the application.

Project Structure
The project structure is organized as follows:

src/: Contains all source code files.
components/: Reusable UI components.
contexts/: Context providers for managing global state.
pages/: React components representing different pages (Home, ProductDetails).
utils/: Utility functions and API integration.
Additional Notes
This project is a demonstration of front-end development skills focusing on React.js and state management using Context API.
Future enhancements could include implementing backend functionality for user authentication, cart persistence, and order processing.
Author
Developed by Angela Bello
License
This project is licensed under the MIT License - see the LICENSE file for details.

