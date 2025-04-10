import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";

import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import BlogPreview from "./components/BlogPreview";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import Bar from "./components/Divider";
import TopSection from "./components/TopSection";
import AboutMe from "./components/AboutMe";  // The new About Me page
import Contact from "./components/Contact"
import Articles from "./components/Articles"
import "./styles/style.css";

function App() {
  return (
    <Router>
      {/* Common components */}
      {/* <ParticleBackground /> */}
      <TopSection />
      <Bar />
      

      {/* Routes for specific pages */}
      <Routes>
        <Route path="/" element={<>
        {/* <Header /> */}
        {/* <TechStack /> */}
        <Projects />
        {/* <BlogPreview /> */}
      
        </>} />

        <Route path="/about-me" element={
        <AboutMe />
      
      } />

<Route path="/contact" element={
        <Contact />
      
      } />

<Route path="/articles" element={
        <Articles />
      
      } />

        {/* Add more routes as needed */}
      </Routes>

      {/* Footer (rendered at the bottom of all pages) */}
      <Footer />
    </Router>
  );
}

export default App;
