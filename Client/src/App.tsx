import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "@/components/ui/AppLayout";
import HomePage from "@/features/homepage/HomePage";
import Account from "./features/account/Account";
import Address from "./features/address/Address";
import Cart from "./features/cart/Cart";
import Product from "./features/product/Product";
import ErrorPage from "./components/ui/ErrorPage";
import Category from "./features/category/Category";
import Wishlist from "./features/wishlist/Wishlist";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "account", element: <Account /> },
      { path: "address", element: <Address /> },
      { path: "cart", element: <Cart /> },
      { path: "products/:category/:id", element: <Product /> },
      { path: "products/:category", element: <Category /> },
      { path: "wishlist", element: <Wishlist /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
