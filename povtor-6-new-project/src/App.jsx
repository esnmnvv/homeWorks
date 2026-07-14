import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReciptList } from "./pages/ReciptList";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  { path: "/", element: <ReciptList /> },
  // { path: "/", element: <ReciptList /> }
]);

export const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
