import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
