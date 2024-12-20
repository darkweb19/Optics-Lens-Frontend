# Project Name

## Overview

This project is a modern e-commerce web application built with Next.js, React, and TypeScript. It features a comprehensive shopping cart, product categories, and user authentication. The application is styled using Tailwind CSS and leverages Prisma for database management. Authentication is handled by NextAuth.js, and the project uses PNPM for package management.

## Tech Stack

-   **Next.js**: A React framework for server-side rendering and static site generation.
-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Prisma**: An ORM for Node.js and TypeScript.
-   **NextAuth.js**: Authentication for Next.js applications.
-   **PNPM**: A fast, disk space efficient package manager.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   PNPM (v6 or higher)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/project-name.git
    cd project-name
    ```

2. Install dependencies:

    ```sh
    pnpm install
    ```

3. Set up environment variables:

    - Copy the [.env.example](http://_vscodecontentref_/0) file to [.env](http://_vscodecontentref_/1):

        ```sh
        cp .env.example .env
        ```

    - Update the [.env](http://_vscodecontentref_/2) file with your configuration. For example:

        ```env
        DATABASE_URL="your-database-url"
        NEXTAUTH_SECRET="your-secret-key"
        NEXTAUTH_URL="http://localhost:3000"
        GOOGLE_CLIENT_ID="your-google-client-id"
        GOOGLE_CLIENT_SECRET="your-google-client-secret"
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
        CLOUDINARY_API_KEY="your-cloudinary-api-key"
        CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
        ```

4. Run database migrations:

    ```sh
    pnpm prisma migrate dev
    ```

### Running the Application

1. Start the development server:

    ```sh
    pnpm dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

1. Build the application:

    ```sh
    pnpm build
    ```

2. Start the production server:

    ```sh
    pnpm start
    ```

### Linting and Formatting

-   To run ESLint:

    ```sh
    pnpm lint
    ```

-   To format with Prettier

```sh
  pnpm format
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
