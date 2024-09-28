import { MouseEventHandler } from 'react';

const useParallax = () => {
  // Define el manejador de eventos del ratón
  const handleMouseMove: MouseEventHandler<HTMLElement> = (e) => {
    if (window.innerWidth > 768) {
      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      const offsetX = (clientX - rect.left - rect.width / 2) / 60;
      const offsetY = (clientY - rect.top - rect.height / 2) / 60;

      currentTarget.style.setProperty('--offsetX', `${offsetX}px`);
      currentTarget.style.setProperty('--offsetY', `${offsetY}px`);
    }
  };

  return { handleMouseMove };
};

export default useParallax;
