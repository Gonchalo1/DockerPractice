import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/fondoRpMilitar.jpg';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/rpMilitary.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Option2() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isTransitioning, setTransitioning] = useState(false);
    const [neonEffect, setNeonEffect] = useState(true); // Estado para activar el efecto neón
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();

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


    const handleNeonEffect = () => {
        setNeonEffect(true); // Activa el efecto neón
    };

    return (
        <div className={`option2-principal-content ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className="option2-image-container">
                <img src={backgroundImage} alt="Home Background" className="option2-background-image" />
                {showWelcome && (
                    <div className="option2-overlay-content">
                        <h1 className={neonEffect ? 'neon-text' : ''}>PLAN <br/> RP MILITARY</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="option2-overlay-content">
                        <div className="option2-texto-container-home">
                            <h1 className={`${neonEffect ? 'neon-text' : ''} hide-on-mobile`}>RedlineRp</h1>
                            <h1 className={neonEffect ? 'neon-text' : ''}>RP MILITARY </h1>
                            <h4 className={neonEffect ? 'neon-text' : ''}>
                                En el Rpmilitar podrás luchar en el bando Ruso o Ucraniano por el poder del país. Puedes ser ingeniero, piloto, sniper, etc. En este modo puedes comprar facciones privadas/personalizadas.
                            </h4>
                            <span><strong>Detalles</strong></span><br/>
                            <button className={`option2-btn text-button ${neonEffect ? 'neon-button' : ''}`} onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="option2-additional-text additional-text">
                                    <p>
                                        Las cosas de las facciones personalizadas van a ser vigiladas por el staff para evitar el pay to win.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="option2-button-container button-container">
                        <AudioPlayer audioSrc={Audio} />
                        
                        <div className={`option2-btn redirect-button-bottom ${neonEffect ? 'neon-button' : ''}`} onClick={handleBottomButtonClick}>
                        <i class="bi bi-arrow-up"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Option2;
