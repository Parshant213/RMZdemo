import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RMZCircularDesign from "./pages/rmzCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MAX from "./pages/max";
import ErrorPage from "./components/error/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "kiosk/rmz/:customerName/:building/:IndoorSensor/:OutdoorSensor",
      element: <RMZCircularDesign />,
      errorElement: <ErrorPage />,
    },
    {
      path:"kiosk/max/:customerName/:sensorName",
      element:<MAX/>, 
      errorElement: <ErrorPage />,

    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
