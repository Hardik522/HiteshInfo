// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/routes/Router";
import "../src/assets/Global.css";
import "../src/assets/Global_new.css";
import "../src/assets/Global_New_1.css";


export default function App() {
  return <RouterProvider router={router} />;
}
