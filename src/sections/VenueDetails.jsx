import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import silo from "../assets/Images/silo.jpg";

const Section = styled.section`
  width: 100%;
  
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.text};
  padding: 1rem;
  
  @media (max-width: 48em) {
    padding: 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-family: 'Dancing Script';
  color: white;
  font-weight: 900;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  text-align: center;
  position: absolute;
  top: 3rem;
  left: 40%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 64em) {
    font-size: 3rem;
    top: 2.5rem;
    font-weight: 800;
  }

  @media (max-width: 48em) {
    font-size: 2.5rem;
    top: 2rem;
    font-weight: 700;
  }
`;

const EventContainer = styled.div`
  color: white;
  font-family: 'Dancing Script';
  text-align: center;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  min-height: 40vh;
  margin: 0 auto;
  position: relative;
  background-image: url(${silo});
  background-size: cover;
  background-position: center 20%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  
  .event-item {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    position: relative;
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    h3 {
      font-size: ${props => props.theme.fontxl};
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      color: white;
    }
    p {
      font-size: ${props => props.theme.fontlg};
      line-height: 1.6;
      margin-bottom: 0.8rem;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 64em) {
    width: 95%;
    padding: 1.5rem;
    
    .event-item {
      padding: 0.8rem;
      
      h3 {
        font-size: ${props => props.theme.fontlg};
        margin-bottom: 0.8rem;
      }
      p {
        font-size: ${props => props.theme.fontmd};
        margin-bottom: 0.6rem;
      }
    }
  }

  @media (max-width: 48em) {
    width: 98%;
    padding: 1rem;
    
    .event-item {
      padding: 0.6rem;
      
      h3 {
        font-size: ${props => props.theme.fontmd};
        margin-bottom: 0.6rem;
      }
      p {
        font-size: ${props => props.theme.fontsm};
        line-height: 1.4;
        margin-bottom: 0.5rem;
      }
    }
  }
`;



const VenueDetails = () => {
  return (
    <Section id="venue">
      <EventContainer>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Events
        </Title>
        
        <motion.div 
          className="event-item"
          data-scroll
          data-scroll-speed="0.2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Wedding Ceremony</h3>
          <p>Date: August 10, 2025</p>
          <p>Time: 8:00 PM Onwards</p>
          <p>Sumuhurtam: 12:47 AM (early hours of Monday)</p> 
          <p>Venue: Railway Officers Club, Vijayawada, Andhra Pradesh</p>
        </motion.div>
      </EventContainer>
    </Section>
  );
};

export default VenueDetails;
