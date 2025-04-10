import { useState } from 'react'
import './App.css'
import Navbar from "./sections/navbar.jsx";
import About from "./sections/about.jsx";
import Overview from "./sections/overview.jsx";
import CaseList from "./sections/caseList.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./sections/Footer.jsx";
import Home from "./sections/home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="max-w-7xl mx-auto">
      <div className="max-sm:px-0 max-xl:px-5">
        <Navbar/>
        <Home/>
        <About/>
        <Overview/>
        <CaseList/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
