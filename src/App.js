import React from "react";
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./index.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
import Demo from "./component/Demo";
import Demo2 from "./component/Demo2";
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <div className="flex">
            <Demo />
            <Demo2 />
          </div>
        ),
      },
    ],
  },
]);
// export default <RouterProvider router={appRouter} />;
export default appRouter;
