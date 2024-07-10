import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/contact.webp';
import useParallax from '../animation/screenAnimation';
import AudioPlayer from '../audio/audioPlayer';
import Audio from '../audio/contact.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isTransitioning, setTransitioning] = useState(false);
    const { handleMouseMove } = useParallax();
    const navigate = useNavigate();
    const inputRef = useRef(null);

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
            navigate('/');
        }, 2000);
    };

    const copyToClipboard = () => {
        if (inputRef.current) {
            // Seleccionar el texto dentro del input
            inputRef.current.select();
            // Copiar el texto al portapapeles
            document.execCommand('copy');
            // Deseleccionar el input
            inputRef.current.setSelectionRange(0, 0);
            alert('¡Texto copiado al portapapeles!');
        }
    };

    const handleBottomButtonClick = (event) => {
        event.preventDefault();
        setTransitioning(true);

        setTimeout(() => {
            navigate('/option1');
        }, 2000);
    };

    return (
        <div className={`contact-principal-content ${isTransitioning ? 'fade-out' : ''}`} onMouseMove={handleMouseMove}>
            <div className="contact-image-container">
                <img src={backgroundImage} alt="Home Background" className="contact-background-image" />
                {showWelcome && (
                    <div className="contact-overlay-content">
                        <h1>Contacto</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="contact-overlay-content">
                        <div className="contact-texto-container-home">
                            <h1>Contacto</h1>
                            <h4>
                                En esta sección podrás encontrar información del servidor y cómo ingresar al mismo, para cualquier consulta o medios de pago.
                            </h4>
                            <article><strong>ACEPTAMOS: </strong><i className="bi bi-paypal"></i> </article>
                            <button className="contact-btn btn-light text-button" onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="additional-text">
                                    <p>
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
                                        <button className="btn btn-primary" onClick={copyToClipboard}>
                                            Copiar
                                        </button>
                                    </p>
                                    <p>
                                        <Link to='https://discord.com/invite/kqF3j5vpX2'>
                                            <i className="bi bi-discord"></i>
                                        </Link>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="contact-button-container">
                        <AudioPlayer audioSrc={Audio} />
                        <div className="contact-btn  contact-redirect-button" onClick={handleButtonClick}>
                            <span>&lt;</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
