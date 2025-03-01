// import About from "./Component/About"
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
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
    </div>
      
    <div className="conatiner mx-auto px-8">
      <Navbar/>
      <Profile/>
      {/* <About/> */}
      
      
      <Experience/> 
      <Technology/>
      <Project/>
    
      <Contact/>
      </div> 
     </div> 
      
    
 
  )
}

export default App
