import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import silo from "../assets/Images/silo.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 64em) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.body};
  
  @media (max-width: 64em) {
    width: 100%;
    height: 50vh;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  background-color: ${props => props.theme.text};
  
  @media (max-width: 64em) {
    width: 100%;
    height: 50vh;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${props => props.theme.fontxxl};
  font-family: 'Dancing Script';
  color: black;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const EventContainer = styled.div`
  color: white;
  font-family: 'Dancing Script';
  text-align: center;
  padding: 3rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  background-image: url(${silo});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

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
  
  h2 {
    font-size: ${props => props.theme.fontxxl};
    margin-bottom: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
  }
  
  .event-item {
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    position: relative;
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    h3 {
      font-size: ${props => props.theme.fontxl};
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      color: white;
    }
    p {
      font-size: ${props => props.theme.fontlg};
      line-height: 2;
      margin-bottom: 1rem;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VenueDetails = () => {
  return (
    <Section id="venue">
      <Title
        data-scroll
        data-scroll-speed="-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        Venue & Events
      </Title>
      
      <Left>
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
      </Left>
      
      <Right>
        <EventContainer>
          {/* <h2>Wedding Events</h2> */}
          
          {/* <motion.div 
            className="event-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h3>Reception</h3>
            <p>Date: August 15, 2025</p>
            <p>Time: 7:00 PM Onwards</p>
            <p>Venue: Railway Officers Club, Vijayawada, Andhra Pradesh</p>
          </motion.div> */}
          
          <motion.div 
            className="event-item"
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
          
          {/* <motion.div 
            className="event-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Wedding Lunch</h3>
            <p>Date: August 16, 2025</p>
            <p>Time: 11:00 AM - 3:00 PM</p>
            <p>Venue: Railway Officers Club, Vijayawada, Andhra Pradesh</p>
          </motion.div> */}
        </EventContainer>
      </Right>
    </Section>
  );
};

export default VenueDetails;
