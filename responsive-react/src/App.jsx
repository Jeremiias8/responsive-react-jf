
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Intro } from './components/Intro/Intro'

function App() {
  
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>

        <Intro />

       
      </div>

      <h1>Responsive React</h1>
      <div>
        <p>Im here with new settings.</p>
      </div>
    </>
  )

}

export default App
