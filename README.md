# React Portfolio

A personal portfolio website built with React.

## Features and Functionality

*   **Home Page:** Displays a hero section with a brief introduction and links to view projects and download a resume. Includes an "About Me" section, featured projects, testimonials, and a contact section.
*   **About Me Page:** Provides a detailed overview of my experience, education, and skills. Includes a downloadable resume.
*   **Skills Page:** Showcases technical and soft skills.
*   **Projects Page:** Lists all projects with links to live demos and GitHub repositories.
*   **Project Details Page:** Provides detailed information about each project, including a description, features, tech stack, live demo link, and GitHub repository link.
*   **Contact Page:** A contact form to send me a message.
*   **Admin Panel:** (Protected Route) Allows authorized users to manage projects (create, edit, delete).
*   **Admin Login:** (Authentication Required) Allows authorized admin login to manage projects.
*   **Responsive Design:** The website is designed to be responsive and accessible on different devices.
*   **ScrollToTop:** Component for navigating pages from the top.
*   **Testimonials:** Display customer testimonials using `react-slick` library
*   **Firebase Integration:** Utilizes Firebase for authentication (admin login) and data storage (projects).
*   **Toast Notifications:** Provides user feedback using `react-toastify`.
*   **PrivateRoute:** For accessing AdminPanel only accessible for logged in users.
*   **NotFound:** Component for accessing unknown routes.

## Technology Stack

*   **React.js:** A JavaScript library for building user interfaces.
*   **React Router:** For navigation.
*   **Bootstrap:** A CSS framework for responsive design.
*   **Firebase:** A platform for building web and mobile applications.
*   **react-toastify:** For toast notifications.
*   **slick-carousel:** For testimonials.
*   **HTML5:** For structuring the web pages.
*   **CSS3:** For styling the web pages.
*   **JavaScript:** For adding interactivity to the web pages.

## Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn
*   Firebase project configured with:
    *   Authentication enabled
    *   Firestore database created

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/sharfrasaqsan/react-portfolio.git
    cd react-portfolio
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Configure Firebase:

    *   Create a `.env` file in the project root.
    *   Add your Firebase configuration to the `.env` file. Example:

        ```
        REACT_APP_FIREBASE_API_KEY="YOUR_API_KEY"
        REACT_APP_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
        REACT_APP_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
        REACT_APP_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
        REACT_APP_FIREBASE_APP_ID="YOUR_APP_ID"
        REACT_APP_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
        ```

    *   **Important:**  The provided `src/firebase.js` file currently contains placeholder Firebase configuration values.  **Replace these with your actual Firebase project credentials** for the application to function correctly.  This includes `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`, and `measurementId`.

## Usage Guide

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

3.  **Admin Panel:**

    *   Navigate to `/login`.
    *   Enter the email and password for an authorized admin user. **Note:** You will need to create an admin user in your Firebase project and add the user information in the `admin` collection of your Firestore database. Example:

        ```json
        // Document ID: user.uid (from Firebase Authentication)
        {
          "email": "admin@example.com",
          "name": "Admin User"
        }
        ```

    *   After logging in, navigate to `/admin` to access the admin panel.

4.  **Project Management:**

    *   **Create Project:**  Click the "+ Add Project" button on the admin panel to create a new project.  Fill in the form fields (title, thumbnail, short description, description, live URL, GitHub URL, tech stack, features, is featured) and submit the form.
    *   **Edit Project:**  Click the "Edit" button on the admin panel or the project details page to edit an existing project.  Update the form fields and submit the form.
    *   **Delete Project:**  Click the "Delete" button on the admin panel or the project details page to delete a project.

## API Documentation

This project utilizes Firebase Firestore as its backend database. Below are the details of the collections and their fields:

*   **Collections:**
    *   `admin`: Stores admin user information.
    *   `projects`: Stores project data.

*   **`admin` Collection:**
    *   Each document represents an admin user.
    *   Fields:
        *   `email` (string): The admin user's email address.
        *   `name` (string): The admin user's name.
    *   Document ID: The user ID from Firebase Authentication.

*   **`projects` Collection:**
    *   Each document represents a project.
    *   Fields:
        *   `title` (string): The title of the project.
        *   `thumbnail` (string): URL of the project thumbnail image.
        *   `shortDescription` (string): A brief description of the project.
        *   `description` (string): A detailed description of the project.
        *   `liveURL` (string): URL of the live demo of the project.
        *   `githubURL` (string): URL of the GitHub repository for the project.
        *   `techStack` (array of strings): An array of technologies used in the project (e.g., `["React", "Firebase"]`).
        *   `features` (string): A list of key features of the project, with each feature on a new line.
        *   `createdAt` (string): The date the project was created (format: YYYY-MM-DD).
        *   `updatedAt` (string, optional): The date the project was last updated (format: YYYY-MM-DD).
        *   `isFeatured` (boolean): Indicates whether the project is featured on the home page.

## Contributing Guidelines

Contributions are welcome!  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Test your changes thoroughly.
5.  Submit a pull request to the `main` branch.

## License Information

This project has no specified license.

## Contact/Support Information

*   Mohamed Sharfiras
*   Email: [sharfrasaqsan@gmail.com](mailto:sharfrasaqsan@gmail.com)
*   Phone: +94 751 230 001
*   GitHub: [https://github.com/sharfrasaqsan](https://github.com/sharfrasaqsan)
*   LinkedIn: [https://www.linkedin.com/in/sharfiras/](https://www.linkedin.com/in/sharfiras/)
*   Facebook: [https://facebook.com/sharfras.aqsan97/](https://facebook.com/sharfras.aqsan97/)