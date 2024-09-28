import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Style from '../App.module.css';  // Importación del CSS Module
import backgroundImage from '../images/contact.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/contact.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isNavigating, setNavigating] = useState(false); 
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowWelcome(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

    const handleButtonClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setNavigating(true); 

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    const copyToClipboard = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
            inputRef.current.setSelectionRange(0, 0);
            alert('¡Texto copiado al portapapeles!');
        }
    };

    return (
        <div 
            className={`${Style['contact-principal-content']} ${isNavigating ? 'fade-out' : ''}`} 
            onMouseMove={window.innerWidth > 768 ? handleMouseMove : undefined}
        >
            <div className={Style['contact-image-container']}>
                <img src={backgroundImage} alt="Home Background" className={Style['contact-background-image']} />
                {showWelcome && (
                    <div className={Style['contact-overlay-content']}>
                        <h1 className={Style['neon-text']}>Contacto</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className={Style['contact-overlay-content']}>
                        <div className={Style['contact-texto-container-home']}>
                            <h1 className={Style['neon-text']}>Contacto</h1>
                            <h4 className={Style['neon-text']}>
                                En esta sección podrás encontrar información del servidor y cómo ingresar al mismo, para cualquier consulta o medios de pago.
                            </h4>
                            <article className={Style['neon-text']}>
                                <strong>ACEPTAMOS: </strong>
                                <i className="bi bi-paypal"></i> 
                            </article>
                            <button 
                                className={`${Style['contact-btn']} btn-light text-button ${Style['neon-button']}`} 
                                onClick={toggleTextVisibility}
                            >
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className={Style['additional-text']}>
                                    <p className={Style['neon-text']}>
                                        <i className="bi bi-envelope-at"></i> 
                                        <strong> Email del Admin:</strong>
                                        <br />    
                                        <input
                                            type="text"
                                            value="liannielsen82@gmail.com"
                                            readOnly
                                            ref={inputRef}
                                            style={{ width: '200px', marginRight: '10px' }}
                                        />
                                        <button 
                                            className="btn btn-primary" 
                                            onClick={copyToClipboard}
                                        >
                                            Copiar
                                        </button>
                                    </p>
                                    <p>
                                        <Link to="https://discord.com/invite/kqF3j5vpX2">
                                            <i className="bi bi-discord"></i>
                                        </Link>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className={Style['contact-button-container']}>
                        <AudioPlayer audioSrc={Audio} />
                        <div 
                            className={`${Style['contact-btn']} ${Style['contact-redirect-button']} ${Style['neon-button']}`} 
                            onClick={handleButtonClick}
                        >
                            <span><i className="bi bi-arrow-left-short"/></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
