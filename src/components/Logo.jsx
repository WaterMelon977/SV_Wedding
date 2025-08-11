import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

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
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3, // 0
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 400"
          width="300px"
          height="200px"
          style={{ display: 'block' }}
        >
          {/* S letter */}
          <motion.text
            x="30"
            y="220"
            fontFamily="'Dancing Script', 'Brush Script MT', cursive"
            fontSize="120"
            fill="#fff"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            S
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
            V
          </motion.text>
        </motion.svg>

        <Text variants={textVariants} initial="hidden" animate="visible"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Jarabhala's Wedding
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
