import { BrowserRouter } from "react-router-dom";
import { Hero,Navbar, About,Techno,Experience, Works,Feedbacks, Contact } from "./components";

const App = ()=>{
  return(
    <BrowserRouter>
      <div className="bg-primary z-0 relative">
        <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Techno />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;