import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 40vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.body};
`;

const MapContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 48em) {
    padding: 0.5rem;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-family: 'Dancing Script';
  color: black; 
  font-weight: 900;
  position: absolute;
  top: 2rem;
  left: 80%;
  transform: translateX(-50%);
  z-index: 3;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  text-align: center;
  

  @media (max-width: 64em) {
    font-size: 3rem;
    top: 1.5rem;
    font-weight: 800;
  }

  @media (max-width: 48em) {
    font-size: 2.25rem;
    top: 1rem;
    font-weight: 700;
  }
`;

const VenueMap = () => {
  return (
    <Section id="venue-map">
      <Title
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        JOIN US HERE
      </Title>
      
      <MapContainer>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d568.6397166050294!2d80.63583431709127!3d16.509086158338256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faaa4d63c89d%3A0x5dcdd6b5cb6563ec!2sVijayawada%20Railway%20Club%20Function%20Hall!5e0!3m2!1sen!2sin!4v1754165591545!5m2!1sen!2sin"
          title="Vijayawada Railway Club Function Hall"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </Section>
  );
};

export default VenueMap; 