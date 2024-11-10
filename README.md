Home Rental Website (Dream Home BD)

A web application for browsing, finding and renting homes, built using React.js, Express.js, Node.js, MongoDB, and other modern web technologies. The platform allows users to view available listings, register, log in, post comments, rates houses and to get the phone number of the house owner to communicate with them. The application aims to provide a user-friendly and efficient home rental experience.

Features
1. User Authentication: Register and log in using a secure authentication system. User cannot create multiple account using same email.
2. Home Listings: Browse available home listings, each with detailed descriptions, images, and contact information.
3. Category: Listings categories are available for faster browsing.
4. Search and Filter system: User can search and filter items according to their need.
5. Owner Dashboard: House owners can post listings, as well as manage their rental properties.
6. Review and Rating System: Users can leave public comments on listings and rate the house based on their experience.
7. About Us: Am about us section consisting information about our platform.
8. Responsive Design: Optimized for both desktop and mobile devices.
9. State Management: Utilizes Redux for global state management.
10. Material UI (MUI): Provides a modern and sleek design with pre-built components.

Technologies Used

Frontend
React.js: For building the interactive UI.
Redux: For state management across the application.
Material-UI (MUI): For pre-designed components and themes.
CSS Modules: Scoped CSS for better styling.
React Router: For handling navigation between different pages.
Vite: A fast build tool for modern web applications.

Backend
Node.js: A JavaScript runtime for building the server-side application.
Express.js: A minimal web framework for handling API requests.
Nodemon: For automatic restart of the server.
MongoDB: NoSQL database for storing listings, users, reviews, rents.
Mongoose: MongoDB ORM for interacting with the database.
Bcrypt: For hashing user passwords securely.
JWT: For secure user authentication and token generation.

Setup & Installation

Frontend Setup
1. Clone the repository:
     git clone https://github.com/nairobi-J/Home_rental_Website.git
2. Navigate to the frontend directory:
     cd Home_rental_Website/Basha-Vara
3. Install the dependencies
     npm install
4. Start the development server
     npm run dev
5. Navigate to the backend directory
     cd Home_rental_Website/server
6. Install the dependencies:
     npm install
7. npm start
     The server will be available at http://localhost:3000.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

