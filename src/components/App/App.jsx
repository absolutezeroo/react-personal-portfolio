import './App.scss';
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

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
