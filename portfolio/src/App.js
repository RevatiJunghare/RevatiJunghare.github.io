import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Statistics from "./Pages/Statistics";



// import Footer from "./Components/Footer/Footer"

import "./style.css";
function App() {

  return (
    <div>
      <Header />
      <Home />
       <About />
       
      <Projects />
      <Statistics/>
      <Contact />
      <br/>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;