# Frontend

This project is a frontend application 

#### Figma url: 

## Folder Structure

The project is organized into the following directories, each with a specific purpose:

-  **`src/`**: Contains the source code of the application.
   -  **`components/`**: Reusable UI components.
      -  **`chat/`**: Components related to the chat functionality.
      -  **`common/`**: Components that are shared across the application.
      -  **`layout/`**: Components that define the structure of the application.
   -  **`schemas/`**: Zod schemas used to validate and parse external data, shared across the app.
   -  **`domain/`**: The core of the application, containing the business logic.
      -  **`entities/`**: The business objects of the application.
      -  **`repositories/`**: Interfaces for the data sources.
   -  **`helpers/`**: Utility functions.
   -  **`hooks/`**: Custom Preact hooks.
   -  **`infrastructure/`**: Implementation of the data sources.
      -  **`adapters/`**: Adapters for the data sources.
      -  **`http/`**: HTTP client and API routes.
   -  **`store/`**: State management.
   -  **`views/`**: The pages of the application.
-  **`public/`**: Contains the public assets of the application.
-  **`dist/`**: Contains the production build of the application.

## Testing

To ensure the scalability and maintainability of the application, tests are co-located with the files they test. This means that for a component in `src/components/chat/Chat.tsx`, its test file will be `src/components/chat/Chat.test.tsx`. This approach keeps tests close to the implementation, making them easier to find, update, and maintain.

### E2E tests (Playwright)

File: `tests/example.spec.ts`


Run E2E tests:

```sh
bun run e2e:ci
```

### Manual testing checklist


## Available Scripts

In the project directory, you can run:

-  `bun run dev`: Runs the app in the development mode.
-  `bun run build`: Builds the app for production to the `dist` folder.
-  `bun run preview`: Serves the production build locally.
-  `bun run lint`: Lints the code using Biome.
-  `bun run format`: Formats the code using Biome.
-  `bun run e2e:ci`: Run e2e tests from terminal
-  `bun run e2e:ui`: Run e2e tests with interface

## Libraries

-  **[Preact](https://preactjs.com/)**: Fast 3kB alternative to React with the same modern API.
-  **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
-  **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-  **[TanStack Query](https://tanstack.com/query/latest)**: Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte.
-  **[Axios](https://axios-http.com/)**: Promise based HTTP client for the browser and node.js.
-  **[Zustand](https://zustand-demo.pmnd.rs/)**: A small, fast and scalable bearbones state-management solution.
-  **[Biome](https://biomejs.dev/)**: A toolchain for web projects, designed to replace Babel, ESLint, webpack, and more.

## Installation and Usage

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install the dependencies:
   ```sh
   bun install
   ```
3. Start the development server:
   ```sh
   bun run dev
   ```
