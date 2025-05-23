import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import ProjectSection from "./pages/ProjectSection";
import AboutSection from "./pages/AboutSection";
import { Contact } from "lucide-react";
import ContactSection from "./pages/ContactSection";
import FooterSection from "./pages/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
