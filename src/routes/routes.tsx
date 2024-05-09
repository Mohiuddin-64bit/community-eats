import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import AllSupplies from "../pages/AllSupplies";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashAllSupplies from "../pages/Dashboard/DashAllSupplies";
import DashCreateSupplies from "../pages/Dashboard/DashCreateSupplies";
import DashHome from "../pages/Dashboard/DashHome";
import SingleSupplies from "../pages/SingleSupplies";

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
            <AllSupplies />
          </ProtectedRoute>
        ),
      },
      {
        path: "supplies/:id",
        element: (
          <ProtectedRoute>
            <SingleSupplies />
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
        path: "dashboard/supplies",
        element: (
          <ProtectedRoute>
            <DashAllSupplies />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-supplies",
        element: (
          <ProtectedRoute>
            <DashCreateSupplies />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit-supplies/:id",
        element: (
          <ProtectedRoute>
            <DashCreateSupplies />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-supplies",
        element: (
          <ProtectedRoute>
            <DashAllSupplies />
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
