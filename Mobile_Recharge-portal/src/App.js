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
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Loginsignup />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/paybill" element={<ProtectedRoute element={<PayBill />} />} />
            <Route path="/mybills" element={<ProtectedRoute element={<Mybills />} />} />
            <Route path="/history" element={<ProtectedRoute element={<History />} />} />
            <Route path="/support" element={<ProtectedRoute element={<Support />} />} />
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
