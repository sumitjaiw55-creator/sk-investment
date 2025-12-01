import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Home from './components/Home'; // Ye Master Home Page hai
import About from './components/About';
import Services from './components/Services';
import SIPCalculator from './components/SIPCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        
        {/* Navbar har page par dikhega */}
        <Navbar />

        {/* Routing Logic */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<SIPCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer aur WhatsApp Button bhi har page par rahenge */}
        <Footer />
        <WhatsAppButton />
        
      </div>
    </Router>
  );
}

export default App;