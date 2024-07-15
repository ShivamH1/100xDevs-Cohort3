import { lazy, startTransition } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

const Landing = lazy(() => import("../components/Landing")); 
const Dashboard = lazy(() => import("../components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() { 
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              navigate("/");
            }); 
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            startTransition(() => {
              navigate("/dashboard");
            });
          }}
        >
          Dashboard
        </button>

        {/* <button onClick={() => window.location.href = "/"}>Landing</button>
        <button onClick={() => window.location.href = "/dashboard"}>Dashboard</button>       */}
      </div>
    </div>
  );
}

export default App;
