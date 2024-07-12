import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/1option.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/rpLife.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Option1() {
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

    const handleTopButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    const handleBottomButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/option2');
        }, 1000);
    };

    const handleDiscordInviteClick = () => {
        window.open('https://discord.com/invite/kqF3j5vpX2', '_blank');
        setTimeout(() => {
            window.location.href = 'https://discordapp.com/channels/1110983224752099398/1145810158283395135';
        }, 5000); // Espera 5 segundos antes de redirigir al canal específico
    };

    const handleNeonEffect = () => {
        setNeonEffect(true); // Activa el efecto neón
    };

    return (
        <div className={`option1-principal-content ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className="option1-image-container">
                <img src={backgroundImage} alt="Home Background" className="option1-background-image" />
                {showWelcome && (
                    <div className="option1-overlay-content">
                        <h1 className={neonEffect ? 'neon-text' : ''}>PLAN <br/> RP LIFE</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="option1-overlay-content">
                        <div className="option1-texto-container-home">
                            <h1 className={`${neonEffect ? 'neon-text' : ''} hide-on-mobile`}>RedlineRp</h1>
                            <h1 className={neonEffect ? 'neon-text' : ''}>RP LIFE</h1>
                            <h4 className={neonEffect ? 'neon-text' : ''}>
                                En el servidor Rplife orientado en Argentina, puedes ser lo que quieras.
                                También puedes comprar roles privados o VIPs para mejorar tu experiencia de juego.
                            </h4>
                            <span><strong>Detalles</strong></span><br/>
                            <button className={`option1-btn  text-button ${neonEffect ? 'neon-button' : ''}`} onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="option1-additional-text additional-text">
                                    <button className={`btn btn-dark VIP ${neonEffect ? 'neon-button' : ''}`} onClick={handleDiscordInviteClick}>
                                        <h3>VIP HERA</h3>
                                    </button>
                                    <button className={`btn btn-dark VIP ${neonEffect ? 'neon-button' : ''}`} onClick={handleDiscordInviteClick}>
                                        <h3>VIP HADES</h3>
                                    </button>
                                    <br/>
                                    <span className='hide-on-mobile'>
                                        MENSUAL 5 USD/------------- MENSUAL 10USD<br/> 
                                        TRIMESTRAL 10 USD/--------- TRIMESTRAL 12USD<br/>
                                        PERMANENTE 12 USD/-------- PERMANENTE 16USD
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="option1-button-container button-container">
                        <AudioPlayer audioSrc={Audio} />
                        <div className={`option1-btn  option1-redirect-button-top ${neonEffect ? 'neon-button' : ''}`} onClick={handleTopButtonClick}>
                        <i class="bi bi-arrow-up"/>
                        </div>
                        <div className={`option1-btn  option1-redirect-button-bottom ${neonEffect ? 'neon-button' : ''}`} onClick={handleBottomButtonClick}>
                          <span><i class="bi bi-arrow-down"/></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Option1;
