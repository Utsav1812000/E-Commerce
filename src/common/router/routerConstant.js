import Dashboard from "../../components/dashboard/Dashboard";
import Order from "../../components/orders/Order";
import Products from "../../components/products/Products";

export const routerConstant = [
  {
    path: "/orders",
    exact: true,
    component: Order,
    // isAuthenticated: true,
  },
  {
    path: "/products",
    exact: true,
    component: Products,
    // isAuthenticated: true,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    // isAuthenticated: true,
  },
];