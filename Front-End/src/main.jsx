import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home_mid from "./Home/Home_mid.jsx";
import Candles from "./Candles/Candles.jsx";
import Product from "./Product/Product.jsx";
import Electronics from "./Electronics/Electronics.jsx";
import Coolers from "./Coolers/Coolers.jsx";
import BuyNow from "./BuyNow/BuyNow.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home_mid />} />
      <Route path="/candles" element={<Candles />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/coolers" element={<Coolers />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/buynow/:productId" element={<BuyNow />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
