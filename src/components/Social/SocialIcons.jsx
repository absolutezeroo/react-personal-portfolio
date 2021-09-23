import React from "react";
import TwitterIconImg from "../../assets/images/icon-twitter.svg";
import FiverrIconImg from "../../assets/images/icon-fiverr.svg";
import LinkedinIconImg from "../../assets/images/icon-linkedin.svg";
import GithubIconImg from "../../assets/images/icon-github.svg";
import "./SocialIcons.scss";

const SocialIcons = () => {
    return (
        <>
            <div className="mt-3 row justify-content-center justify-content-md-start row-cols-auto">
                <a className="social__icon" href="https://twitter.com/BarbierClayton" target="_blank" rel="noreferrer">
                    <img src={TwitterIconImg} alt="twitter-icon" width="45" height="45"/>
                </a>
                <a className="social__icon" href="https://fr.fiverr.com/azeors" target="_blank" rel="noreferrer">
                    <img src={FiverrIconImg} alt="fiverr-icon" width="45" height="45"/>
                </a>
                <a className="social__icon" href="https://www.linkedin.com/in/clayton-barbier" target="_blank" rel="noreferrer">
                    <img src={LinkedinIconImg} alt="linkedin-icon" width="45" height="45"/>
                </a>
                <a className="social__icon" href="https://github.com/absolutezeroo" target="_blank" rel="noreferrer">
                    <img src={GithubIconImg} alt="github-icon" width="45" height="45"/>
                </a>
            </div>
        </>
    );
}

export default SocialIcons;