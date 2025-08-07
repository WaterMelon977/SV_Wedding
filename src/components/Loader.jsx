import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;

  @media (max-width: 48em) {
    svg {
      width: 80vw;
    }
  }

  @media (max-width: 30em) {
    svg {
      width: 90vw;
    }
  }

  svg {
    width: 50vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  padding-top: 1rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding-top: 1.5rem;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    padding-top: 2rem;
  }
`;

const Loader = () => {
  const [showFireworks, setShowFireworks] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFireworks(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (main) => {
    await loadFireworksPreset(main);
  };

  const particlesOptions = {
    preset: 'fireworks',
    sounds: {
      enable: true,
    },
  };

  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {showFireworks && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
      )}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
        width="300px"
        height="200px"
        style={{ display: 'block', zIndex: 2 }}
      >
        <motion.text
          x="-200"
          y="220"
          fontFamily="'Dancing Script', 'Brush Script MT', cursive"
          fontSize="100"
          fill="#fff"
        >
          Sandhya
        </motion.text>

        <motion.path
          d="M300 180 C300 100, 420 100, 420 180 C420 260, 300 320, 300 320 C300 320, 180 260, 180 180 C180 100, 300 100, 300 180Z"
          fill="#e63946"
          stroke="#fff"
          strokeWidth="8"
          style={{
            transform: 'scale(1.2)',
            transformOrigin: 'center',
            filter: 'drop-shadow(0 0 10px rgba(230,57,70,0.5))',
          }}
        />

        <motion.text
          x="500"
          y="220"
          fontFamily="'Dancing Script', 'Brush Script MT', cursive"
          fontSize="100"
          fill="#fff"
        >
          Vishal
        </motion.text>
      </motion.svg>
      <Text style={{ fontFamily: "'Dancing Script', cursive", zIndex: 2 }}>
        Jarabala's Wedding
      </Text>
    </Container>
  );
};

export default Loader;