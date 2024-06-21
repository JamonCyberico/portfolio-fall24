import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import TechNews from "./pages/TechNews";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div>
          <Routes>
            <Route
              index
              element={
                <>
                  <Navbar />
                  <About />
                  <Skills />
                  <Work />
                  <Contact />
                </>
              }
            />
            <Route path="/news" element={<TechNews />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
