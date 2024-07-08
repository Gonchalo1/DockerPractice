import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/Home.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/home.mp3';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
                            <span><strong>Detalles</strong></span><br/>
                            <button className="btn btn-primary text-button" onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="additional-text">
                                    <p>
                                    En la modalidad Rp life vas a poder hacer tu historia y ser lo que quieras ser puedes ser policía, bombero, médico etc.
                                    Para navegar mejór tienes los botones en los laterales de la pantalla donde puedes ver los planes de pago y contactarnos.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="button-container">
                        <AudioPlayer  audioSrc={Audio}/>
                        <div  className="btn btn-primary redirect-button" onClick={handleButtonClick}>
                            <span>&gt;</span>
                        </div>
                        <div className="btn btn-primary redirect-button-bottom" onClick={handleBottomButtonClick}>
                            <span>&#8964; </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
