import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

//1. All products page, log-in, product details
//1.1 NAV bar
//2. Displaying all products on the page.
//3. Displaying log-in page by pressing log-in button.
//4. Rerouting to log-in page, when users want to see product's detail without log-in.
//5. when its logged in, users can see have a look destails.
//6. when its logged out, users are logged out.
//7. users cannot see anymore details pages and rerouting to log-in page.
//8. Log-in button is changed to log out when it's logged in.
//7. Users can search the products by any key words.

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
