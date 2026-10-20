import Navbar from "./components/Navbar"
import Backdrop from "./components/Backdrop"
import ScrollProgress from "./components/ScrollProgress"
import Hero from "./components/Hero"
import Work from "./components/Work"
import About from "./components/About"
import Skills from "./components/Skills"
import GithubActivity from "./components/GithubActivity"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-fg">
      <Backdrop />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Skills />
        <GithubActivity />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App