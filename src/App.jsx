import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import SkillsEducation from './components/SkillsEducation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Experience />
      <Achievements />
      <SkillsEducation />
      <footer className="py-10 text-center text-xs text-blue-300/70">
        © {new Date().getFullYear()} Kalvin Marpaho Valentino. Built with care.
      </footer>
    </div>
  );
}

export default App;
