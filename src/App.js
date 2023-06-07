
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import About from './components/about/About';
import Products from './components/products/Products';
import Subscribe from './components/subscribe/Subscribe';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='container'>
      <Header/>
      <Banner/>
      <About/>
      <Products/>
      <Subscribe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
