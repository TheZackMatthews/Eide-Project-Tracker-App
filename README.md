# Eide Machinery Project Management Tool

## Overview

Welcome to the Eide Machinery Project Management Tool. This is a fullstack project designed to help manage projects efficiently. The backend is built using Express.js to provide a REST API, while the frontend is developed using React.js. Development is done on a component basis, which is managed by Storybook.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/TheZackMatthews/Eide-Project-Tracker-App.git
    cd eide-project-tracker-app
    ```

2. Install dependencies for both backend and frontend:
    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../project-tracker-client
    npm install
    ```

### Running the Project

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```bash
    cd ../project-tracker-client
    npm start
    ```

3. Start Storybook:
    ```bash
    cd ../project-tracker-client
    npm run storybook
    ```

The backend server will run on `http://localhost:5000`, the frontend will run on `http://localhost:3000`, and Storybook will be available at `http://localhost:6006`.

## Development Workflow

- **Backend**: All API-related code should go into the `backend` directory. Organize controllers, models, and routes accordingly.
- **Frontend**: All UI components and pages should go into the `project-tracker-client` directory. Organize components and services as needed.
- **Storybook**: All component stories should be placed in the `storybook/stories` directory.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## Contact

For any questions or suggestions, please contact [zmatthews@eidemachinery.com](mailto:zmatthews@eidemachinery.com).
