import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Pages/Hero/Hero';
import NeverMissSection from './Pages/NeverMissSection/NeverMissSection';
import WhyFlowtelSection from './Pages/WhyFlowtelSection/WhyFlowtelSection';
import EveryRequestSlider from './Pages/EveryRequestSlider/EveryRequestSlider';
import SeamlessFlowSection from './Pages/SeamlessFlowSection/SeamlessFlowSection';
import Integrations from './Pages/Integrations/Integrations';
import FinalCTA from './Pages/FinalCTA/FinalCTA';
import GetDemo from './Pages/GetDemoForm/GetDemo';
import About from './Pages/About/About';

function Home() {
  return (
    <>
      <Hero />
      <NeverMissSection />
      <WhyFlowtelSection />
      <EveryRequestSlider />
      <SeamlessFlowSection />
      <Integrations />
      <FinalCTA />
    </>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getdemo" element={<GetDemo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App