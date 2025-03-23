import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesDetails from "./components/ArticlesDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="news/:newsId" element={<ArticlesDetails />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
