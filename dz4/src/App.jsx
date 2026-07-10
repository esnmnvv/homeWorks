import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailPost } from "./components/DetailPost";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/post/:id", element: <DetailPost /> },
]);

export const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
