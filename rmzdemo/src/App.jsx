import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MaxTowers from "./pages/maxTowers";
import ErrorPage from "./components/error/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "kiosk/:customerName/:spaceId",
      element: <MainPage />,
      errorElement: <ErrorPage />,
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
    {
      path:"kiosk/v3/:customerId/:buildingId/:deviceTypeId/:sensorName",
      element:<MaxTowers/>,    //IAQ04000026     // 6690ef7fdeb2b486e92011aa
  //     errorElement: <ErrorPage />,
  //      loader:async ({request,params})=>{
  //       const requestOptions = {
  //       headers:{
  //            Authorization:
	//  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZTcwYjFiYjVhM2M1ZTBmMmEzNDc3IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifSwiaWF0IjoxNzMxODcyMDUzfQ.9t4vX_lC9aVD9wSpTsxBHxpCmGbe17h_5webTp7BvNM"}
  //        };
  //        const url = `http://3.7.82.174:4444/api/v1/devices/all?customerId=${params.customerId}&buildingId=${params.buildingId}&deviceTypeId=${params.deviceTypeId}`;
  //        return fetch(url,requestOptions);
  //     }
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
