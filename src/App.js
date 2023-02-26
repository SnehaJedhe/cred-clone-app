import './App.css';
import Heading from './components/Heading';
import MobileView from './components/MobileView';
import Navbar from './components/Navbar';
import MoreOften from './components/MoreOften';
import Brands from './components/Brands';
import PayBill from './components/PayBill';
import Security from './components/Security';
import CredStory from './components/CredStory';
import Reating from './components/Reating';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Heading/>
    <MobileView/>
    <MoreOften/>
    <Brands/>
    <PayBill/>
    <Security/>
    <CredStory/>
    <Reating/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;