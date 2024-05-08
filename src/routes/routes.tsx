import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import AllDonations from "../pages/AllSupplies";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashAllDonation from "../pages/Dashboard/DashAllDonation";
import DashCreateDonation from "../pages/Dashboard/DashCreateDonation";
import DashHome from "../pages/Dashboard/DashHome";
import SingleDonation from "../pages/SingleSupplies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: (
          <ProtectedRoute>
            <AllDonations />
          </ProtectedRoute>
        ),
      },
      {
        path: "donations/:id",
        element: (
          <ProtectedRoute>
            <SingleDonation />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DashHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/donations",
        element: (
          <ProtectedRoute>
            <DashAllDonation />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-donation",
        element: (
          <ProtectedRoute>
            <DashCreateDonation />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit-donation/:id",
        element: (
          <ProtectedRoute>
            <DashCreateDonation />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-donation",
        element: (
          <ProtectedRoute>
            <DashAllDonation />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

export default router;
