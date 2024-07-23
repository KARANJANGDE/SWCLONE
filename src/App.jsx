import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import ImagePage from "./components/ImagePage";
import LandingPage from "./components/LandingPage";
import ResourePage from "./components/ResourePage";
import StaticPage from "./components/StaticPage";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-[#FEFFEA]">
      <LandingPage />
      <StaticPage />
      <ResourePage />
      <BlogPage />
      <ImagePage />
      <Footer />
    </div>
  );
}

export default App;
