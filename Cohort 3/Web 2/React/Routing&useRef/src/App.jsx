import React from "react";

//Single Page Application
// Single Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user
// interacts with the app. This approach allows for a smoother user experience compared to traditional multi-page applications (MPAs),
// where each interaction often requires a full page reload.
// How you do that is by using react-routing:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/neet" element={<Layout />}> {/* Parent Route */}
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="/landing" element={<Landing />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Class12Program() {
  return <div>NEET programs for Class 12th</div>;
}
