import { Home } from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <WeatherDetails />
  },
];

export default AppRoutes;
