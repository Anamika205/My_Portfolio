import About from "./Component/About"
import Navbar from "./Component/Navbar"
import Profile from "./Component/Profile"
import Technology from "./Component/Technology";
import Project from "./Component/Project";
import Experience from "./Component/Experience"
import Contact from "./Component/Contact";
function App() {
  

  return (
  
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-200">
      <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    </div>
    </div>
    <div className="conatiner mx-auto px-8">
      <Navbar/>
      <Profile/>
      <About/>
      
       <Technology/>
      <Experience/> 
      <Project/>
      <Contact/>
      </div> 
     </div> 
      
    
 
  )
}

export default App
