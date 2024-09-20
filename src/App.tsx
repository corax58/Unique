import "./App.css";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MobileApp from "./sections/MobileApp";
import Models from "./sections/Models";
import NavBar from "./sections/NavBar";

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <NavBar />
      <div className=" px-4 md:px-10 lg:px-20 xl:px-28">
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
