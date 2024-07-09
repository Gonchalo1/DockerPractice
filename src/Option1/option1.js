import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/fondoRpLife.jpg';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/rpLife.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Option1() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isTransitioning, setTransitioning] = useState(false);
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setShowWelcome(false);
        }, 1000);
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
            navigate('/option2');
        }, 2000);
    };

    const handleTopButtonClick = (event) => {
        event.preventDefault();
        // Handle top button click functionality here
        console.log('Top button clicked');
    };

    return (
        <div className={`option1-principal-content ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className="option1-image-container">
                <img src={backgroundImage} alt="Home Background" className="option1-background-image" />
                {showWelcome && (
                    <div className="option1-overlay-content">
                        <h1>RP LIFE</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="option1-overlay-content">
                        <div className="option1-texto-container-home">
                            <h1>RedlineRp </h1>
                            <h2>RP LIFE </h2>
                            <h4>
                            En el server Rplife está orientado en argentina donde vas a poder ser lo que quieras 
                            También podes comprar roles privados o vips para mejorar tu experiencia de juego.
                            </h4>
                            <span><strong>Detalles</strong></span><br/>
                            <button className="option1-btn btn btn-primary text-button" onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="option1-additional-text additional-text">
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
                    <div className="option1-button-container button-container">
                        <AudioPlayer audioSrc={Audio} />
                         
                        <div className="option1-btn btn btn-primary redirect-button-bottom" onClick={handleBottomButtonClick}>
                            <span>&#8964; </span> {/* Arrow down symbol */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Option1;
