import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import BackToTop from './Components/BackToTop/BackToTop';
import Preloader from './Components/Preloader/Preloader';
import Chatbot from './Components/Chatbot/Chatbot';
import Hero from './Pages/Hero/Hero';
import NeverMissSection from './Pages/NeverMissSection/NeverMissSection';
import WhyFlowtelSection from './Pages/WhyFlowtelSection/WhyFlowtelSection';
import EveryRequestSlider from './Pages/EveryRequestSlider/EveryRequestSlider';
import SeamlessFlowSection from './Pages/SeamlessFlowSection/SeamlessFlowSection';
import Integrations from './Pages/Integrations/Integrations';
import FinalCTA from './Pages/FinalCTA/FinalCTA';
import About from './Pages/About/About';
import Careers from './Pages/Careers/Careers';
import GetDemo from './Pages/GetDemoForm/GetDemo';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <Preloader />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NeverMissSection />
              <WhyFlowtelSection />
              <EveryRequestSlider />
              <SeamlessFlowSection />
              <Integrations />
              <FinalCTA />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/getdemo" element={<GetDemo />} />
        </Routes>
        <Footer />
        <BackToTop />
        <Chatbot />
      </BrowserRouter>
    </div>
  )
}

export default App