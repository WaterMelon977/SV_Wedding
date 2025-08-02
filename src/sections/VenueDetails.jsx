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

  &::before {
    content: 'Railway Officers Club';
    position: absolute;
    top: 46%;
    left: 52%;
    background-color: lightgrey;
    color: ${props => props.theme.body};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-family: 'Dancing Script';
    font-size: ${props => props.theme.fontmd};
    z-index: 1;
  }

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.412584559251!2d80.64265827588747!3d16.523274427838773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f02d38a11715%3A0xa374ee6442706182!2sGJ5P%2BM4%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1706963839811!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Railway Officers Club, Vijayawada, Andhra Pradesh"
            style={{ filter: 'grayscale(0.2)' }}
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
