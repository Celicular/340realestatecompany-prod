import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import SalesAgent from "./components/SalesAgent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <SalesAgent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
