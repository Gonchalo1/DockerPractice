import React from 'react';
import '../App.css'; // Archivo CSS para estilos específicos de Home
import backgroundImage from '../images/Home.webp';

function Home() {
    return (
        <div className="principal-content">
            <div className="image-container">
                <img src={backgroundImage} alt="Home Background" className="background-image" />
                <div className="overlay-content">
                    <div className="texto-container-home">
                        <h1>Online Soon</h1>
                        <h2>Build your <strong>team</strong></h2>
                        <span>More details</span>
                        <h4>
                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                        </h4>
                    </div>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
