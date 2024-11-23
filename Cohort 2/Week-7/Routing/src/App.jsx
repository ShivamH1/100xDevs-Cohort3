// Importing necessary modules from react and react-router-dom
import { lazy, startTransition, Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// Importing the CSS file for the App component
import "./App.css";

// Lazy loading the Landing and Dashboard components
const Landing = lazy(() => import("../components/Landing")); 
const Dashboard = lazy(() => import("../components/Dashboard"));

// Defining the App component
function App() {
  return (
    // Creating a wrapper div for the entire app
    <div>
      {/* Wrapping the app with the BrowserRouter component to enable routing */}
      <BrowserRouter>
        {/* Rendering the Appbar component */}
        <Appbar />
        {/* Defining the Routes for the app */}
        <Routes>
          {/* Route for the landing page */}
          <Route
            path="/"
            element={
              // Using Suspense to display a fallback component while the Landing component is loading
              <Suspense fallback={"loading..."}>
                {/* Rendering the Landing component */}
                <Landing />
              </Suspense>
            }
          />
          {/* Route for the dashboard */}
          <Route
            path="/dashboard"
            element={
              // Using Suspense to display a fallback component while the Dashboard component is loading
              <Suspense fallback={"loading..."}>
                {/* Rendering the Dashboard component */}
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Defining the Appbar component
function Appbar() { 
  const navigate = useNavigate(); // Using the useNavigate hook to get the navigate function

  return (
    // Creating a div wrapper for the appbar
    <div>
      {/* Creating a div for the appbar buttons */}
      <div>
        {/* Creating a button for the landing page */}
        <button
          onClick={() => {
            // Navigating to the landing page
            navigate("/");
            // Using startTransition to batch the navigation (optional)
            // startTransition(() => {
            //   navigate("/");
            // });
          }}
        >
          Landing Page
        </button>
        {/* Creating a button for the dashboard */}
        <button
          onClick={() => {
            // Navigating to the dashboard
            navigate("/dashboard");
            // Using startTransition to batch the navigation (optional)
            // startTransition(() => {
            //   navigate("/dashboard");
            // });
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

// Exporting the App component
export default App;

