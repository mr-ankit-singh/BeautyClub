import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";
import Virtual from "./Components/Virtual/Virtual"
import Testimonials from "./Components/Testimonials/Testimonials"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
	    <Hero />
      <Slider />
      <Virtual/>
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
