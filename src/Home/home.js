import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/Home.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/home.mp3';

function Home() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isTransitioning, setTransitioning] = useState(false);
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setShowWelcome(false);
        }, 2000);
    }, []);

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/contact');
        }, 2000);
    };

    const handleBottomButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/option1');
        }, 2000);
        
    };

    return (
        <div className={`principal-content ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className="image-container">
                <img src={backgroundImage} alt="Home Background" className="background-image" />
                {showWelcome && (
                    <div className="overlay-content">
                        <h1>Bienvenido</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="overlay-content">
                        <div className="texto-container-home">
                            <h1>RedlineRp </h1>
                            <h2>unturned  <strong>comunity</strong></h2>
                            <h4>
                            Bienvenidos a la tienda da web oficial de RedLineRP Unturned comunity Somos una comunidad con 2 modos de juego el Rp life y el Rp militar
                             en ambos modos la vas a pasar genial.
                            </h4>
                         
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="button-container">
                        <AudioPlayer  audioSrc={Audio}/>
                        <div  className="btn btn-light redirect-button" onClick={handleButtonClick}>
                            <span>&gt;</span>
                        </div>
                        <div className="btn btn-light redirect-button-bottom" onClick={handleBottomButtonClick}>
                            <span>&#8964; </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
