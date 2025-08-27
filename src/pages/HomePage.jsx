import "../App.css";
import Footer from "../components/Footer.jsx";
import GallerySection from "../components/GallerySection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Navbar from "../components/NavBar.jsx";

function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gray-500">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default HomePage;
