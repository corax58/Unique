import "./App.css";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MobileApp from "./sections/MobileApp";
import Models from "./sections/Models";
import NavBar from "./sections/NavBar";

function App() {
  return (
    <div className="md:snap-y snap-mandatory h-screen overflow-y-scroll">
      <NavBar />
      {/* <div className=" md:hidden p-2 text-lg text-center justify-center flex items-center fixed z-50 w-full h-screen bg-red-600 text-white font-bold">
        <p>
          This Website is not mobile responsive yet, please switch to desktop
          mode
        </p>
      </div> */}
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
