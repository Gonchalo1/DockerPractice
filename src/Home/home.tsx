import React, { useState, useEffect, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../App.module.css';
import backgroundImage from '../images/Home.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/home.mp3';

const Home: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isTransitioning, setTransitioning] = useState(false);
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();
    const isMobile = window.innerWidth <= 768;

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

    const handleButtonClick = (event: MouseEvent<HTMLDivElement>) => {
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

    return (
        <div className={`${Style['principal-content']} ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={isMobile ? undefined : handleMouseMove}>
            <div className={Style['image-container']}>
                <img src={backgroundImage} alt="Home Background" className={Style['background-image']} />
                {showWelcome && (
                    <div className={Style['overlay-content']}>
                        <h1 className={Style['neon-text']}>Bienvenido</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className={Style['overlay-content']}>
                        <div className={Style['texto-container-home']}>
                            <h1 className={Style['neon-text']}>RedlineRp</h1>
                            <h2 className={Style['neon-text']}>unturned <strong>comunity</strong></h2>
                            <h4>
                                Bienvenidos a la tienda da web oficial de RedLineRP Unturned comunity. Somos una comunidad con 2 modos de juego: el Rp life y el Rp militar.
                                En ambos modos la vas a pasar genial.
                            </h4>
                            <p>
                                Para navegar mejor, tienes los botones en los laterales de la pantalla donde puedes ver los planes de pago y contactarnos.
                            </p>
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className={Style['button-container']}>
                        <AudioPlayer audioSrc={Audio} />
                        <div className={Style['redirect-button neon-button']} onClick={handleButtonClick}>
                            <span><i className={Style['bi bi-arrow-right']}/></span>
                        </div>
                        <div className={Style['redirect-button-bottom neon-button']} onClick={handleBottomButtonClick}>
                            <span><i className={Style['bi bi-arrow-down']}/></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
