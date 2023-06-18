import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import Projects from "./pages/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./pages/Skills/Skills";
import { useRef } from "react";

function App() {
  const mainRef = useRef<null | HTMLElement>(null);
  const aboutRef = useRef<null | HTMLElement>(null);
  const skillsRef = useRef<null | HTMLElement>(null);
  const projectsRef = useRef<null | HTMLElement>(null);
  const contactRef = useRef<null | HTMLElement>(null);

  return (
    <Layout
      aboutRef={aboutRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      contactRef={contactRef}
    >
      {/* <Routes>
        <Route path="/" element={<Home mainRef={mainRef} />}>
          <Route path="about" element={<About aboutRef={aboutRef} />} />
          <Route path="skills" element={<Skills skillsRef={skillsRef} />} />
        </Route>
      </Routes> */}
      {/* <ScrollToTop /> */}
      <Home mainRef={mainRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </Layout>
  );
}

export default App;
