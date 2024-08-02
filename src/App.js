import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerCard from "./components/ShimmerCard";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./reduxComponents/appStore";
//import Grocery from "./components/Grocery";

// Lazy loading/ Dynamic Import/ Dynamic bundling/ Code splitting/ On Demand loading
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an api call to send username and password
    const data = {
      name: "Jungkook",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/* this outlet works as a tunnel, in which children elemetns comes in this according to path */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        // this path should be dynamic as we'll be loading diff types of menu
        // :resId means this part of the url is dynamic
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("appLayout"));

//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
