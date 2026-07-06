import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { CartPage } from "./pages/CartPage";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
