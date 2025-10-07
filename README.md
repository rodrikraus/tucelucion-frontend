# Ecommerce Project

This is a working ecommerce application that the company "TuCelucion" currently uses.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A fast build tool and development server for modern web projects.
- **React Bootstrap:** Bootstrap components built for React.
- **React Router:** A library for declarative routing in React applications.

## Project Structure

- **`public/`**: Contains static assets like images and the `index.html` file.
- **`src/`**: Contains the main source code for the application.
  - **`components/`**: Reusable UI components.
  - **`context/`**: React Context for global state management (e.g., shopping cart).
  - **`hooks/`**: Custom React hooks.
  - **`pages/`**: Top-level page components.
  - **`utilities/`**: Helper functions and utilities.
  - **`environment/`**: Environment-specific configurations.
  - **`main.tsx`**: The entry point of the application.
  - **`App.tsx`**: The root component of the application, setting up routing.

## Getting Started

### Prerequisites

- Node.js (version 18.x or higher recommended)
- npm (comes with Node.js) or yarn

### Installation & Running Locally

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    This will start the development server, typically at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run the following scripts:

-   **`npm run dev` or `yarn dev`**:
    Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser. The page will reload if you make edits.

-   **`npm run build` or `yarn build`**:
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build process includes type checking with TypeScript.

-   **`npm run lint` or `yarn lint`**:
    Lints the project files using ESLint to check for code quality and style issues.

-   **`npm run preview` or `yarn preview`**:
    Serves the production build locally to preview it before deployment. This command should be run after `npm run build`.

---
