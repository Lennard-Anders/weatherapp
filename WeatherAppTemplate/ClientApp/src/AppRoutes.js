import Error from "./components/Error";
import { Home } from "./components/Home";
import WeatherDetail from "./components/WeatherDetail";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <WeatherDetail />
  },
  {
    path: '/error',
    element: <Error />
  },
];

export default AppRoutes;
