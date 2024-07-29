import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PayBill from "./components/PayBill";
import History from "./components/History";
import Loginsignup from "./pages/Loginsignup";
import About from "./pages/About";
import Support from "./components/Support";
import Navbar from "./components/Navbar";
import Mybills from "./components/Mybills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/paybill" element={<PayBill />} />
          <Route path="/mybills" element={<Mybills />} />
          <Route path="/history" element={<History />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
