import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/App.css';


function App() {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <Hero />
      <Hero2 />
      <Hero3 />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
