import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import "./css/footer.css";
import 'antd/dist/antd.css'; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  </div>
);
