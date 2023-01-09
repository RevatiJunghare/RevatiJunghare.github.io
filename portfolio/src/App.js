import About from "./components/About";
import  Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Statistics/>

      
      <SocialLinks/>
    </div>
  );
}

export default App;
