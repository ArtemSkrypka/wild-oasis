import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Users from "./pages/Users";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,

      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "cabins",
        element: <Cabins></Cabins>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
      {
        path: "account",
        element: <Account></Account>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
