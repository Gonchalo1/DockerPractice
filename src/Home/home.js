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
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        if (!isTransitioning) {
            setTimeout(() => {
                setShowWelcome(false);
            }, 1000); // Puedes ajustar el tiempo según sea necesario
        }
    }, [isTransitioning]);

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/contact');
        }, 1000);
    };

    const handleBottomButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/option1');
        }, 1000);
    };

    return (
        <div 
            className={`principal-content ${isTransitioning ? 'fade-out' : ''}`} 
            onMouseMove={isMobile ? null : handleMouseMove}
        >
            <div className="image-container">
                <img src={backgroundImage} alt="Home Background" className="background-image" />
                {showWelcome && (
                    <div className="overlay-content">
                        <h1 className="neon-text">Bienvenido</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="overlay-content">
                        <div className="texto-container-home">
                            <h1 className="neon-text">RedlineRp </h1>
                            <h2 className="neon-text">unturned  <strong>comunity</strong></h2>
                            <h4>
                                Bienvenidos a la tienda da web oficial de RedLineRP Unturned comunity Somos una comunidad con 2 modos de juego el Rp life y el Rp militar
                                en ambos modos la vas a pasar genial.
                            </h4>
                            <p>         
                                Para navegar mejór tienes los botones en los laterales de la pantalla donde puedes ver los planes de pago y contactarnos.
                            </p>
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="button-container">
                        <AudioPlayer audioSrc={Audio} />
                        <div className=" redirect-button neon-button" onClick={handleButtonClick}>
                            <span><i class="bi bi-arrow-right"/></span>
                        </div>
                        <div className="redirect-button-bottom neon-button" onClick={handleBottomButtonClick}>
                            <span><i class="bi bi-arrow-down"/></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
