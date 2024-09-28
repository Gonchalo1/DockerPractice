import React, { useState, useEffect, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../App.module.css'; // Actualiza la importación a 'Style' con 'S' mayúscula
import backgroundImage from '../images/fondoRpMilitar.jpg';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/rpMilitary.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Option2: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState<boolean>(true);
    const [isTextVisible, setTextVisible] = useState<boolean>(true);
    const [isTransitioning, setTransitioning] = useState<boolean>(false);
    const [neonEffect, setNeonEffect] = useState<boolean>(true); // Estado para activar el efecto neón
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => {
                setShowWelcome(false);
            }, 1000); // Puedes ajustar el tiempo según sea necesario

            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/contact');
        }, 1000);
    };

    const handleBottomButtonClick = (event: MouseEvent<HTMLDivElement>) => {
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
        <div className={`${Style.option2PrincipalContent} ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className={Style.option2ImageContainer}>
                <img src={backgroundImage} alt="Home Background" className={Style.option2BackgroundImage} />
                {showWelcome && (
                    <div className={Style.option2OverlayContent}>
                        <h1 className={neonEffect ? Style.neonText : ''}>PLAN <br/> RP MILITARY</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className={Style.option2OverlayContent}>
                        <div className={Style.option2TextoContainerHome}>
                            <h1 className={`${neonEffect ? Style.neonText : ''} ${Style.hideOnMobile}`}>RedlineRp</h1>
                            <h1 className={neonEffect ? Style.neonText : ''}>RP MILITARY</h1>
                            <h4 className={neonEffect ? Style.neonText : ''}>
                                En el Rpmilitar podrás luchar en el bando Ruso o Ucraniano por el poder del país. Puedes ser ingeniero, piloto, sniper, etc. En este modo puedes comprar facciones privadas/personalizadas.
                            </h4>
                            <span><strong>Detalles</strong></span><br/>
                            <button className={`${Style.option2Btn} ${Style.textButton} ${neonEffect ? Style.neonButton : ''}`} onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className={`${Style.option2AdditionalText} ${Style.additionalText}`}>
                                    <p>
                                        Las cosas de las facciones personalizadas van a ser vigiladas por el staff para evitar el pay to win.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className={`${Style.option2ButtonContainer} ${Style.buttonContainer}`}>
                        <AudioPlayer audioSrc={Audio} />
                        
                        <div className={`${Style.option2Btn} ${Style.redirectButtonBottom} ${neonEffect ? Style.neonButton : ''}`} onClick={handleBottomButtonClick}>
                            <i className="bi bi-arrow-up"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Option2;
