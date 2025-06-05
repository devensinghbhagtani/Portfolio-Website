import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Work from "./pages/Work";
import About from "./pages/About";
import GigHive from "./components/Works/GigHive";
import StarSpeakers from "./components/Works/StarSpeakers";
import ScrollToTop from "./components/ScrollToTop";
import CreativeWorks from "./components/Works/CreativeWorks";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="work" element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="gighive" element={<GigHive />} />
            <Route path="starspeakersacademy" element={<StarSpeakers />} />
            <Route path="creativeworks" element={<CreativeWorks />} />
          </Route>
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
