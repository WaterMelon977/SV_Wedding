import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

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
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* Wedding SVG Animation: S❤️V */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 600 400"
  width="300px"
  height="200px"
  style={{ display: 'block' }}
>
  {/* S letter */}
  <motion.text
    x="-250"
    y="220"
    fontFamily="'Dancing Script', 'Brush Script MT', cursive"
    fontSize="120"
    fill="#fff"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0 }}
  >
    Sandhya
  </motion.text>

  {/* Heart - Emoji-like and large */}
  <motion.path
    d="M300 180 
       C300 100, 420 100, 420 180 
       C420 260, 300 320, 300 320 
       C300 320, 180 260, 180 180 
       C180 100, 300 100, 300 180Z"
    fill="#e63946"
    stroke="#fff"
    strokeWidth="10"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1.2, 1], opacity: 1 }}
    transition={{ duration: 1.2, delay: 1, type: 'spring', stiffness: 180 }}
  />

  {/* V letter */}
  <motion.text
    x="480"
    y="220"
    fontFamily="'Dancing Script', 'Brush Script MT', cursive"
    fontSize="120"
    fill="#fff"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 2 }}
  >
    Vishal
  </motion.text>
</motion.svg>
      <Text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Jarabala's Wedding
      </Text>
    </Container>
  );
};

export default Loader;
