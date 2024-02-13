
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Intro } from './components/Intro/Intro'
import { Services } from './components/Services/Services'
import { Experience } from './components/Experience/Experience'
import { Works } from './components/Works/Works'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

import { themeContext } from './Context'
import { useContext } from 'react'

function App() {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className='App'
        style={{
          background: darkMode ? 'black' : 'white',
          color: darkMode ? 'white' : ''
        }}
      >
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

        <div>
          <Contact />
        </div>
       
      </div>

      <h1>Responsive React</h1>
      <div>
        <p>Im here with new settings.</p>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  )

}

export default App
