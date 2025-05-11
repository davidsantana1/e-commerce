import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "@/components/ui/AppLayout";
import HomePage from "@/features/homepage/HomePage";
import Account from "./features/account/Account";
import Address from "./features/address/Address";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/address" element={<Address />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
