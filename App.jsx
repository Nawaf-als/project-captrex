import Hero from './components/Hero';
import WhyPerformance from './components/WhyPerformance';
import HowItWorks from './components/HowItWorks';
import PerformanceFeatures from './components/PerformanceFeatures';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <WhyPerformance />
      <HowItWorks />
      <PerformanceFeatures />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
