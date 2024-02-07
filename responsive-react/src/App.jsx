
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Intro } from './components/Intro/Intro'
import { Services } from './components/Services/Services'
import { Experience } from './components/Experience/Experience'
import { Works } from './components/Works/Works'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Testimonials } from './components/Testimonials/Testimonials'

function App() {
  
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>

        <Intro />

        <section>
          <Services />
        </section>

        <section>
          <Experience />
        </section>

        <section>
          <Works />
        </section>

        <section>
          <Portfolio />
        </section>

        <section>
          <Testimonials />
        </section>
       
      </div>

      <h1>Responsive React</h1>
      <div>
        <p>Im here with new settings.</p>
      </div>
    </>
  )

}

export default App
