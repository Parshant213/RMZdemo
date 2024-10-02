import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  const router = createBrowserRouter([
    {
      path: "kiosk/:customerName/:spaceId",
      element: <MainPage />,
      loader: async ({ request, params }) => {
        const requestOptions = {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJiOTMwYWY4LWViMmMtNDQ0YS04ZmM5LWJiZjVmYWViNjUzMSIsImlhdCI6MTgwMzM4ODQ3N30.7CcBQO8wj8Xax8cKhUVOVikS-EUKrhZGnz_-1pGFSGs",
          },
        };
        const url = `http://api.getclairco.com/v1/customer/space_data?space_id=${params.spaceId}`;
        return fetch(url, requestOptions);
      },
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
