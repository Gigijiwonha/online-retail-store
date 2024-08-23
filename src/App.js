import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import PrivateRouter from "./route/PrivateRouter";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";

//1. Create all pages - home page, products page, log-in, product details
//1.1 NAV bar - hamburger button / Search bar, wish-list and log-in
//2. Displaying all products on the page.
//3. Displaying log-in page by pressing log-in button.
//4. Rerouting to log-in page, when users want to see product's detail without log-in.
//5. when its logged in, users can see have a look destails.
//6. when its logged out, users are logged out.
//7. users cannot see anymore details pages and rerouting to log-in page.
//8. Log-in button is changed to log out when it's logged in.
//7. Users can search the products by any key words.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRouter authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
