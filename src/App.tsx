import "./App.css";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MobileApp from "./sections/MobileApp";
import Models from "./sections/Models";
import NavBar from "./sections/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="px-28  ">
        <Hero />
        <MobileApp />
        <Models />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
