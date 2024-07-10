// AudioPlayer.js

import React, { useRef, useState } from 'react';

const AudioPlayer = ({ audioSrc }) => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (audioPlaying) {
            audioRef.current.pause();
            setAudioPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => setAudioPlaying(true))
                .catch(error => console.log('Error al reproducir audio:', error));
        }
    };

    return (
        <div className="audio-container">
            <audio ref={audioRef} loop>
                <source src={audioSrc} type="audio/mpeg" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <button className="btn btn-light audio-button" onClick={toggleAudio}>
                {audioPlaying ? 'Pause Audio' : 'PLAY AUDIO'}
            </button>
        </div>
    );
};

export default AudioPlayer;
