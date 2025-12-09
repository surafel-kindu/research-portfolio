import Cursor from './components/Cursor';
import BackgroundGrid from './components/BackgroundGrid';

import ResearchInterests from './components/ResearchInterests';
import Education from './components/Education';
import Skills from './components/Skills';
import Honors from './components/Honors';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-[#00f38d] selection:text-black">
      <Cursor />
      <BackgroundGrid />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ResearchInterests />
          <Experience />
          <Skills />
          <Education />
          <Honors />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
