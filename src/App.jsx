import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';
import Virtual from './components/virtual/Virtual';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footerSection/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
