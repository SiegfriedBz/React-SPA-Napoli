# React Napoli

React Napoli is a responsive React Single Page Application (SPA) designed for users to order pizzas. The application leverages modern web technologies to provide an efficient and enjoyable user experience.

## Table of Contents
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Running the Production Server](#running-the-production-server)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo) 🚀

# Installation

1. Clone the repository:
```bash
git clone git@github.com:SiegfriedBz/vite_react_napoli.git
cd vite_react_napoli
```

2. Install dependencies:
```bash
npm install
```
    
# Running the Development Server
To start the development server, run:

```bash
npm run dev
  ```

# Building for Production
To build the project for production, run:

```bash
npm run build
```

# Running the Production Server
After building the project, you can start the production server with:

```bash
npm start
```

## Technologies Used

- **Framework**: React 18.2.0
- **Routing**: React Router DOM 6.22.0
  - Utilizes `createBrowserRouter` for route creation, enabling loaders to provide data to route elements before they render ("render as you fetch") and route actions to perform data mutations.
- **State Management**: @reduxjs/toolkit 2.2.1
  - Manages the UI state for the user and the cart.
- **Styling**: Responsive design using Tailwind CSS.

### Additional Libraries

- **react-toastify**: For notifications.
- **tailwind-merge**: For merging Tailwind CSS classes.


## Live Demo
Visit the live demo of [React Napoli](https://react-napoli.onrender.com/) deployed on Render.com

