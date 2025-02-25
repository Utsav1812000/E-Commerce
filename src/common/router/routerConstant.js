import Dashboard from "../../components/dashboard/Dashboard";
import OrderSummary from "../../components/orders/OrderSummary";
import Products from "../../components/products/Products";

export const routerConstant = [
  {
    path: "/orders",
    exact: true,
    component: OrderSummary,
  },
  {
    path: "/products",
    exact: true,
    component: Products,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
];