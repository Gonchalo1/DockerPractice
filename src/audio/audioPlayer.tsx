import React, { useRef, useState, MutableRefObject } from 'react';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  // Estado para controlar si el audio está en reproducción o no
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Referencia al elemento de audio
  const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef<HTMLAudioElement | null>(null);

  // Función para alternar la reproducción del audio
  const toggleAudio = () => {
    if (audioPlaying) {
      audioRef.current?.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current?.play()
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
        {audioPlaying ? <i className="bi bi-music-note-beamed"></i> : <i className="bi bi-music-note-beamed"></i>}
      </button>
    </div>
  );
};

export default AudioPlayer;
