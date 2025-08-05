
import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const GalleryImage = styled(motion.img)`
  max-width: 90%;
  max-height: 80%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  ${(props) => (props.direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
`;

const GalleryOverlay = ({ images, selectedImage, setSelectedImage, onClose }) => {
  const prevSelectedImageRef = useRef(selectedImage);

  const triggerConfetti = useCallback(() => {
    // Create confetti from left side
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff']
    });

    // Create confetti from right side
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff']
    });
  }, []);

  // Detect navigation changes and trigger confetti
  useEffect(() => {
    if (prevSelectedImageRef.current !== selectedImage && selectedImage !== null) {
      triggerConfetti();
      console.log("confetti")
      prevSelectedImageRef.current = selectedImage;
    }
  }, [selectedImage, triggerConfetti]);

  if (selectedImage === null) return null;

  const handleNext = () => {
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <NavButton direction="left" onClick={handlePrev}>&#8249;</NavButton>
      <GalleryImage
        key={selectedImage}
        src={images[selectedImage]}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <NavButton direction="right" onClick={handleNext}>&#8250;</NavButton>
    </Overlay>
  );
};

export default GalleryOverlay;
