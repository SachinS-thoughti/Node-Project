import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
