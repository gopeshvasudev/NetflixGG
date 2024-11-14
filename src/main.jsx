import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import MovieDetails from "./pages/MovieDetails.jsx";
import MovieWatch from "./pages/MovieWatch.jsx";

const Login = lazy(() => import("./pages/Login.jsx"));
const Browse = lazy(() => import("./pages/Browse.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<h1>Loading....</h1>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/browse",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Browse />
          </Suspense>
        ),
      },
      {
        path: "/movie/:movieId",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <MovieDetails />
          </Suspense>
        ),
      },
      {
        path: "/movie/watch/:movieId",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <MovieWatch />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
