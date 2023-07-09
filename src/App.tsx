import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import { useRef } from "react";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <Layout
      aboutRef={aboutRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      contactRef={contactRef}
    >
      <Home mainRef={mainRef} />
      <About aboutRef={aboutRef} skillsRef={skillsRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </Layout>
  );
}

export default App;
