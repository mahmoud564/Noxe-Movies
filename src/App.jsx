import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Tvshow from "./Components/Tvshow/Tvshow";
import People from "./Components/People/People";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notfound from "./Components/NotFound/Notfound";
import { useEffect, useState } from "react";
import Root from "./Components/Root/Root";
import NavContextProvider from "./Context/OutContext";
import Out from "./Components/Out/Out";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Store } from "./Store/reduxStore";
import { Provider } from "react-redux";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import TvDetails from "./Components/TvDetails/TvDetails";
import Peopleditels from "./Components/Peopledetils/Peopleditels";




function App() {
  const [decoded, setdecoded] = useState(null);
  function decodedToken() {
    let token = localStorage.getItem("UserToken");
    setdecoded(token);
  }
  useEffect(() => {
    if (localStorage.getItem("UserToken") !== null) {
      let token = localStorage.getItem("UserToken");
      setdecoded(token);
    }
  }, []);

  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout setdecoded={setdecoded} decoded={decoded} />,
      children: [
        { path: "Noxe-Movies", element: <Out /> },
        { index: true, element: <Out /> },
        {
          path: "home",
          element: (
            <Root>
              <Home />
            </Root>
          ),
        },
        {
          path: "movies",
          element: (
            <Root>
              <Movies />
            </Root>
          ),
        },
        {
          path: "tvshow",
          element: (
            <Root>
              <Tvshow />
            </Root>
          ),
        },
        {
          path: "MovieDetails/:id",
          element: (
            <Root>
              <MovieDetails />
            </Root>
          ),
        },
        {
          path: "TvDetails/:id",
          element: (
            <Root>
              <TvDetails />
            </Root>
          ),
        },
        {
          path: "PeopleDetails/:id",
          element: (
            <Root>
              <Peopleditels/>
            </Root>
          ),
        },
        {
          path: "MovieDetails/:id",
          element: (
            <Root>
              <MovieDetails />
            </Root>
          ),
        },
        {
          path: "people",
          element: (
            <Root>
              <People />
            </Root>
          ),
        },
        
        
        { path: "login", element: <Login decodedToken={decodedToken} /> },
        { path: "register", element: <Register /> },
        {
          path: "*",
          element: (
            <Root>
              <Notfound />
            </Root>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={Store}>
        <NavContextProvider>
          <RouterProvider router={routers}></RouterProvider>
        </NavContextProvider>
      </Provider>
    </>
  );
}

export default App;
