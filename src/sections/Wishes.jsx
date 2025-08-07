import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { createClient } from '@supabase/supabase-js';
import bgImage from '../assets/Images/g9.JPG';

// Supabase client
const supabase = createClient(
  'https://hbhqiqthpgsgraomofvl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaHFpcXRocGdzZ3Jhb21vZnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDIxNzcsImV4cCI6MjA3MDE3ODE3N30.Kxksm1H6itKutbWB2LivqPm3ztFboga2knrVnwgfb-I'
);

const Section = styled.section`
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 1rem; /* reduced vertical padding */
  position: relative;
  overflow-x: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.47);
  padding: 1rem; /* tighter padding to optimize space */

  @media (min-width: 600px) {
    padding: 1.25rem; /* slightly larger on tablet+ */
  }
`;

const Title = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-size: ${(p) => p.theme.fontxxl};
  text-align: center;
  color: #111;
  margin-bottom: 0.5rem; /* reduced spacing */
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
`;

const Subtitle = styled.p`
  text-align: center;
  color: #333;
  margin-bottom: 0.75rem; /* reduced spacing */
  font-family: 'Open Sans', sans-serif;
  font-size: ${(p) => p.theme.fontsm};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* tighter vertical rhythm */
`;

const Row = styled.div`
  display: flex;
  gap: 0.5rem; /* tighter spacing */
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  font-size: 1.05rem;
  color: #111;
  margin-bottom: 0.4rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 1.3;
  font-family: 'Open Sans', sans-serif;

  &::after {
    content: ' *';
    color: #e63946;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0.9rem 0.9rem;
  font-size: 1rem;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #111;

  &:focus {
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.15);
  }
`;

const Select = styled.select`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0.9rem 0.9rem;
  font-size: 1rem;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #111;

  &:focus {
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.15);
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0.9rem 0.9rem;
  min-height: 140px;
  resize: vertical;
  font-size: 1rem;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #111;

  &:focus {
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.15);
  }
`;

const Button = styled.button`
  margin-top: 0.25rem;
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #e63946, #ff7a59);
  cursor: pointer;
  transition: transform 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.7; cursor: not-allowed; }
`;

const ErrorText = styled.span`
  color: #b00020;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-family: 'Open Sans', sans-serif;
`;

const Success = styled.div`
  background: #e6ffef;
  color: #0f5132;
  border: 1px solid #badbcc;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.75rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

const StarsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const StarButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0.2rem;
  cursor: pointer;
  line-height: 1;
  font-size: 1.6rem;
  transition: transform 0.12s ease;
  color: ${(p) => (p.$active ? '#FFC107' : '#D6D6D6')};
  filter: drop-shadow(0 1px 0 rgba(0,0,0,0.15));

  &:hover { transform: scale(1.05); }
  &:focus { outline: 2px solid rgba(230, 57, 70, 0.4); outline-offset: 2px; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255,255,255,0.6);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Wishes = () => {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [rating, setRating] = useState(null); // 1-5 or null
  const [hoverRating, setHoverRating] = useState(null);

  const validate = () => {
    const next = {};
    if (!name.trim()) next.name = 'Name is required';
    if (!relation.trim()) next.relation = 'Please select your connection';
    if (!message.trim()) next.message = 'Please add your blessings';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setSubmitError('');
    if (!validate()) return;

    try {
      setLoading(true);
      // Try with 'connection' since the API reports 'relation' column doesn't exist
      const payload = { name, connection: relation, message };
      if (typeof rating === 'number') payload.rating = rating;
      let { error } = await supabase
        .from('wishes')
        .insert([payload]);

      // If 'message' column doesn't exist, fallback to 'blessings'
      if (error && /could not find the 'message' column|column\s+message\s+does not exist/i.test(error.message)) {
        const retry = await supabase
          .from('wishes')
          .insert([{ name, connection: relation, blessings: message }]);
        error = retry.error;
      }

      if (error) throw error;
      setSuccess('Thank you! Your blessings have been recorded.');
      setName('');
      setRelation('Friend');
      setMessage('');
      setRating(null);
    } catch (err) {
      const reason = err?.message || 'Unknown error';
      setSubmitError(`Something went wrong. Please try again. (${reason})`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="wishes">
      <Overlay />
      <Card>
        {success && <Success role="status">{success}</Success>}
        <Title>Bless the Couple</Title>
        <Subtitle>Share your wishes and love. We’d love to read them!</Subtitle>
        <Form onSubmit={handleSubmit} noValidate>
          <Row>
            <Field>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </Field>
          </Row>
          <Row>
            <Field>
              <Label htmlFor="relation">Connection to couple</Label>
              <Select
                id="relation"
                name="relation"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
              >
                <option>Friend</option>
                <option>Family</option>
                <option>Colleague</option>
                <option>Neighbor</option>
                <option>Other</option>
              </Select>
              {errors.relation && <ErrorText>{errors.relation}</ErrorText>}
            </Field>
          </Row>
          <Row>
            <Field>
              <Label htmlFor="message">Your blessings</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </Field>
          </Row>

          <Row>
            <Field>
              <Label as="div">Rate this site (optional)</Label>
              <StarsRow role="radiogroup" aria-label="Rate this site">
                {[1,2,3,4,5].map((value) => {
                  const isActive = (hoverRating ?? rating) >= value;
                  return (
                    <StarButton
                      key={value}
                      type="button"
                      $active={isActive}
                      aria-label={`${value} star${value>1?'s':''}`}
                      aria-checked={rating === value}
                      role="radio"
                      onMouseEnter={() => setHoverRating(value)}
                      onMouseLeave={() => setHoverRating(null)}
                      onFocus={() => setHoverRating(value)}
                      onBlur={() => setHoverRating(null)}
                      onClick={() => setRating(value)}
                    >
                      {isActive ? '★' : '☆'}
                    </StarButton>
                  );
                })}
              </StarsRow>
            </Field>
          </Row>

          {submitError && <ErrorText role="alert">{submitError}</ErrorText>}

          <Button type="submit" disabled={loading} aria-busy={loading}>
            {loading ? <Spinner aria-label="loading" /> : 'Send Wishes'}
          </Button>
        </Form>
      </Card>
    </Section>
  );
};

export default Wishes;


