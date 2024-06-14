import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
