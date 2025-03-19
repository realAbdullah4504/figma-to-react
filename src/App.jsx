import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroPage from "./components/Hero";
import Header from "./components/Hero/Header";
import Portfolio from "./components/Portfolio";
import RecentWork from "./components/RecentWork";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-w-[390px]">
      <Header />
      <HeroPage />
      <Portfolio />
      <Testimonials />
      <RecentWork />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;