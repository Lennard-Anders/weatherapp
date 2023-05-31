import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
];

export default AppRoutes;
