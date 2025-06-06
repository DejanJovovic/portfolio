import React from 'react'
import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <NavBar/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
