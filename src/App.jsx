import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmpowerU from "./pages/EmpowerU";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import TrainerProfile from "./pages/TrainerProfile";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainer-profile" element={<TrainerProfile />} />
        <Route path="/empower-u" element={<EmpowerU />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;
