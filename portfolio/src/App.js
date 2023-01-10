import About from "./components/About";
import Calender from "./components/Calender";
import Contact from "./components/Contact";
import  Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Statistics from "./components/Statistics";
import Technical from "./components/Technical";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Statistics/>
      <Calender/>
      <Technical/>
      <Contact/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
