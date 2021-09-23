import React from "react";
import Wave from "react-wavify";
import Typewriter from "typewriter-effect";
import SocialIcons from "../Social/SocialIcons";
import "./Hero.scss";

const waveOption = {
    "height": 50,
    "amplitude": 20,
    "speed": 0.15,
    "points": 6
}

const typerTexts = ["Développeur WEB", "Développeur Backend", "Développeur Frontend"];

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="hero__title text-center text-md-start">Salut !</h1>
                    <h2 className="hero__description text-center text-md-start">Je me nomme CLAYTON BARBIER et je suis,</h2>
                    <h3 className="hero__specialisation text-center text-md-start">
                        <Typewriter options={{
                            strings: typerTexts,
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            skipAddStyles: false,
                            deleteSpeed: 3,
                            pauseFor: 700,
                        }}/>
                    </h3>
                    <SocialIcons/>
                </div>
            </div>
            <Wave className="position-absolute bottom-0" fill="#5F85DB" options={waveOption}/>
        </section>
    )
};

export default Hero;