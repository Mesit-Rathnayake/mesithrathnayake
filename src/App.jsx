import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import TracingBeam from "./components/TracingBeam"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent font-sans text-white">
      <Navbar />

      <TracingBeam>
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </TracingBeam>

      <Footer />
    </div>
  )
}

export default App