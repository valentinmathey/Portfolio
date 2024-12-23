import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import ScrollToTop from "./components/ScrollToTop"
import { Tecnologies } from "./components/Tecnologies"
import WhatsappIcon from "./components/WhatsappIcon"

function App() {

  return (

    <div className="overflow-x-hidden text-gray-100 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className=" container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tecnologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-3 z-50">
  <ScrollToTop />
  <WhatsappIcon />
</div>
      <Footer />
    </div>
  )
}

export default App
