# Bivium.ru: Frontend with React

Welcome to the frontend of the website Bivium.ru, built using React. This repository is responsible for the user interface, connecting users with the backend API, and dynamically rendering content based on server data. It is designed to provide a seamless and interactive experience for customers browsing and purchasing sportswear.


## Architecture

The project is structured with maintainability and scalability in mind:

- **Components**: Each feature is broken down into individual React components. Components are reusable and encapsulate the logic and presentation for a specific part of the UI.
- **State Management**: The app uses **React Context** or **Redux** for managing the global state. This ensures that the state is consistent and can be accessed across the application, especially when dealing with user authentication or shopping cart data.
- **API Integration**: The frontend communicates with the Laravel-based API to fetch and display data. It makes use of **Axios** or **Fetch API** to send requests to the server and handle responses.
- **Routing**: React Router is used for seamless navigation across different pages within the application without reloading the page.

This modular architecture ensures that the app is maintainable, easy to extend, and provides a smooth user experience.

## Features

- **Dynamic Content Rendering**: Fetches product data, user information, and more from the backend API to dynamically display on the website.
- **User Authentication**: Allows users to log in, register, and manage their accounts securely by communicating with the Laravel authentication system.
- **Shopping Cart**: Enables users to manage their shopping cart, view added products, and proceed to checkout.
- **Responsive Design**: The app is fully responsive and optimized for both desktop and mobile devices.
- **Real-time Data**: Updates the UI in real time based on the API data, allowing users to see changes instantly.

## Backend Integration

The frontend interacts with the backend, developed using Bitrix. Bitrix handles SEO, product management, order processing and more. For more details about the backend, refer to the Bitrix backend repository.

[Backend Repository](https://github.com/ColdRayBurn/Bitrix24-bivium.org)

## **Preview**
Below is a screenshot of the website:

![Website Screenshot](https://all4it.org/storage/bivium-new.jpg "Website Screenshot")

## Installation

### Prerequisites

- Node.js 14.x or higher
- npm or Yarn
- Access to the Laravel backend API

### Setup

1. Clone the repository:

   `git clone https://github.com/ColdRayBurn/React-all4it.org.git`

   `cd React-all4it.org`

2. Install dependencies:

   `npm install` or `yarn install`

3. Set up environment variables:

   Copy `.env.example` to `.env` and update the API URL to point to your backend:

   `cp .env.example .env`

4. Start the development server:

   `npm start` or `yarn start`

   This will start the frontend on `http://localhost:3000`.

## **Contact Us**

Interested in building your custom e-commerce solution with React? Contact our team for a consultation and let’s create something exceptional together!

## 💼 [Mail us](mailto:info@all4it.org) | 🌐 [Our web-site](https://all4it.org/)
