import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../images/Home.webp';
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
                        <h1>Contact</h1>
                    </div>
                )}
                {!showWelcome && (
                    <div className="contact-overlay-content">
                        <div className="contact-texto-container-home">
                            <h1>Online Soon</h1>
                            <h2>Build your <strong>team</strong></h2>
                            <span>More details</span>
                            <h4>
                                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                            </h4>
                            <button className="contact-btn btn-primary text-button" onClick={toggleTextVisibility}>
                                {isTextVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </button>
                            {isTextVisible && (
                                <div className="additional-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum, fermentum eros sit amet, placerat ante.
                                        Suspendisse potenti. Nullam ultrices nunc nec magna placerat, ac porttitor ex facilisis.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {!showWelcome && (
                    <div className="contact-button-container">
                        <AudioPlayer audioSrc={Audio} />
                        <div className="contact-btn btn-primary contact-redirect-button" onClick={handleButtonClick}>
                            <span>&lt;</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
