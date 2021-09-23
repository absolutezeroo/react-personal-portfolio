import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <Projects/>
            <Footer/>
        </>
    );
}

export default App;
