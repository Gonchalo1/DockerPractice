import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const handleTopButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    const handleBottomButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/option2');
        }, 2000);
    };

    const handleDiscordInviteClick = () => {
        window.open('https://discord.com/invite/kqF3j5vpX2', '_blank');
        setTimeout(() => {
            window.location.href = 'https://discordapp.com/channels/1110983224752099398/1145810158283395135';
        }, 5000); // Espera 5 segundos antes de redirigir al canal específico
    };

    return (
        <div className={`option1-principal-content ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className="option1-image-container">
                <img src={backgroundImage} alt="Home Background" className="option1-background-image" />
                {showWelcome && (
                    <div className="option1-overlay-content">
                        <h1>PLAN  <br/>RP LIFE</h1>
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
                            <button className="option1-btn btn btn-light text-button" onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="option1-additional-text additional-text">
                                    <p>
                                        En la modalidad Rp life vas a poder hacer tu historia y ser lo que quieras ser puedes ser policía, bombero, médico etc.
                                        Para navegar mejór tienes los botones en los laterales de la pantalla donde puedes ver los planes de pago y contactarnos.
                                    </p>
                                    <button className="btn btn-dark VIP" onClick={handleDiscordInviteClick}>
                                        <h3>VIP HERA</h3>
                                    </button>
                                    <button className="btn btn-dark VIP" onClick={handleDiscordInviteClick}>
                                        <h3>VIP HADES</h3>
                                    </button>
                                    <br/>
                                    <span>
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
                        <div className="option1-btn btn btn-light option1-redirect-button-top" onClick={handleTopButtonClick}>
                            <span>&#8963; </span> {/* Arrow up symbol */}
                        </div>

                        <div className="option1-btn btn btn-light option1-redirect-button-bottom" onClick={handleBottomButtonClick}>
                            <span>&#8964; </span> {/* Arrow down symbol */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Option1;
