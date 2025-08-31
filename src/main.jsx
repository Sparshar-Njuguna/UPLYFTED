// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Career from "./pages/Career.jsx";
import CourseDetail from "./pages/CourseDetail.jsx"; // NEW
import Aid from "./pages/Aid.jsx";
import Wellness from "./pages/Wellness.jsx";
import Community from "./pages/Community.jsx";
import Auth from "./pages/Auth.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/course/:id" element={<CourseDetail />} /> {/* NEW dynamic route */}
          <Route path="/aid" element={<Aid />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/community" element={<Community />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
