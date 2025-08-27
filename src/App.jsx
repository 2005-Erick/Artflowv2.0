import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
