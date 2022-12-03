import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
