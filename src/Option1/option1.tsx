import React, { useState, useEffect, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../App.module.css'; // Importación con 'S' mayúscula
import backgroundImage from '../images/1option.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/rpLife.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Option1: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isTransitioning, setTransitioning] = useState(false);
    const [neonEffect, setNeonEffect] = useState(true); // Estado para activar el efecto neón
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isTransitioning) {
            const timeoutId = setTimeout(() => {
                setShowWelcome(false);
            }, 1000); // Puedes ajustar el tiempo según sea necesario

            return () => clearTimeout(timeoutId); // Limpia el timeout si el componente se desmonta
        }
    }, [isTransitioning]);

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

    const handleTopButtonClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    const handleBottomButtonClick = (event: MouseEvent<HTMLDivElement>) => {
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
        <div className={`${Style.option1PrincipalContent} ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className={Style.option1ImageContainer}>
                <img src={backgroundImage} alt="Home Background" className={Style.option1BackgroundImage} />
                {showWelcome && (
                    <div className={Style.option1OverlayContent}>
                        <h1 className={neonEffect ? Style.neonText : ''}>PLAN <br/> RP LIFE</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className={Style.option1OverlayContent}>
                        <div className={Style.option1TextoContainerHome}>
                            <h1 className={`${neonEffect ? Style.neonText : ''} ${Style.hideOnMobile}`}>RedlineRp</h1>
                            <h1 className={neonEffect ? Style.neonText : ''}>RP LIFE</h1>
                            <h4 className={neonEffect ? Style.neonText : ''}>
                                En el servidor Rplife orientado en Argentina, puedes ser lo que quieras.
                                También puedes comprar roles privados o VIPs para mejorar tu experiencia de juego.
                            </h4>
                            <span><strong>Detalles</strong></span><br/>
                            <button className={`${Style.option1Btn} ${Style.textButton} ${neonEffect ? Style.neonButton : ''}`} onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className={`${Style.option1AdditionalText} ${Style.additionalText}`}>
                                    <button className={`${Style.btn} ${Style.btnDark} ${Style.vip} ${neonEffect ? Style.neonButton : ''}`} onClick={handleDiscordInviteClick}>
                                        <h3>VIP HERA</h3>
                                    </button>
                                    <button className={`${Style.btn} ${Style.btnDark} ${Style.vip} ${neonEffect ? Style.neonButton : ''}`} onClick={handleDiscordInviteClick}>
                                        <h3>VIP HADES</h3>
                                    </button>
                                    <br/>
                                    <span className={Style.hideOnMobile}>
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
                    <div className={`${Style.option1ButtonContainer} ${Style.buttonContainer}`}>
                        <AudioPlayer audioSrc={Audio} />
                        <div className={`${Style.option1Btn} ${Style.option1RedirectButtonTop} ${neonEffect ? Style.neonButton : ''}`} onClick={handleTopButtonClick}>
                            <i className="bi bi-arrow-up"/>
                        </div>
                        <div className={`${Style.option1Btn} ${Style.option1RedirectButtonBottom} ${neonEffect ? Style.neonButton : ''}`} onClick={handleBottomButtonClick}>
                            <span><i className="bi bi-arrow-down"/></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Option1;
