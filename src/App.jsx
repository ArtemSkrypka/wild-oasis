import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Users from "./pages/Users";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";

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
    <>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
