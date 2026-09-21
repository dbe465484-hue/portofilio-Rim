import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Certifications,
  Hero,
  Navbar,
  Footer,
  Tech,
  Works,
} from "./components";
import { config } from "./constants/config";
import VersionMode from "./components/layout/VersionMode";
import PortfolioChat from "./components/layout/PortfolioChat";
import { LanguageProvider } from "./i18n";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="paper-sheet relative z-0 min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certifications />
          <Contact />
          <Footer />
          <PortfolioChat />
          <VersionMode />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
