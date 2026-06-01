import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Scholarships from "./pages/Scholarships";
import Eligibility from "./pages/Eligibility";
import CollegePredictor from "./pages/CollegePredictor";
import Tracker from "./pages/Tracker";
import Alerts from "./pages/Alerts";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/college-predictor" element={<CollegePredictor />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;