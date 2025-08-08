import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createClient } from '@supabase/supabase-js';
import backimg from    '../assets/Images/g8.JPG';

// Supabase client (same project as in Wishes)
const supabase = createClient(
  'https://hbhqiqthpgsgraomofvl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaHFpcXRocGdzZ3Jhb21vZnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDIxNzcsImV4cCI6MjA3MDE3ODE3N30.Kxksm1H6itKutbWB2LivqPm3ztFboga2knrVnwgfb-I'
);

const Section = styled.section`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Wedding background image with soft overlay */
  background:
    linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 100%),
    url(${backimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  text-align: center;
  color: white;
  margin: 0.25rem auto 0.75rem auto;
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
  background: linear-gradient(135deg, #e63946 0%, #ff7a59 100%);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  width: fit-content;
  max-width: 100%;
  border: 1px solid rgba(255,255,255,0.35);
  box-shadow: 0 8px 24px rgba(230, 57, 70, 0.28), 0 2px 6px rgba(0,0,0,0.12);

  @media (min-width: 600px) {
    font-size: 2rem;
    padding: 0.45rem 1.25rem;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 680px;
  background: rgba(255, 247, 242, 0.1); /* increased transparency */
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  padding: 0.75rem;
  

  @media (min-width: 600px) {
    padding: 1rem 1.25rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 100vh;
  overflow: auto;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  padding-right: 0.25rem; /* avoid scroll bar overlapping */
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 0.6rem;
  background: ${(p) => p.$bg || 'rgba(255,255,255,0.65)'};
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px;
  padding: 0.6rem 0.7rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);

  @media (min-width: 600px) {
    grid-template-columns: 44px 1fr;
    padding: 0.7rem 0.9rem;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e63946 0%, #ff7a59 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  border: 2px solid rgba(255,255,255,0.85);

  @media (min-width: 600px) {
    width: 44px;
    height: 44px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.35rem;
  flex-wrap: wrap;
  font-family: 'Open Sans', sans-serif;
`;

const Name = styled.span`
  font-weight: 800;
  color: #111;
  font-size: 1rem;
`;

const Connection = styled.span`
  font-weight: 600;
  color: #444;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Message = styled.p`
  margin: 0.25rem 0 0 0;
  color: #222;
  line-height: 1.5;
  font-size: 0.95rem;
  word-break: break-word;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 599px) {
    font-size: 0.9rem;
  }
  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const Empty = styled.div`
  text-align: center;
  color: #333;
  padding: 0.75rem 0.25rem;
`;

const ErrorBox = styled.div`
  text-align: center;
  color: #b00020;
  background: #ffe6ea;
  border: 1px solid #ffc2cb;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  margin-bottom: 0.75rem;
`;

const Blessings = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        setError('');
        const { data, error } = await supabase
          .from('wishes')
          .select('id, name, connection, message, created_at, display')
          .eq('display', true)
          .order('created_at', { ascending: false })
          .limit(50);

        if (!isMounted) return;
        if (error) {
          console.error('Blessings: fetch error', error);
          setError('Unable to load messages right now.');
          setItems([]);
        } else {
          console.log('Blessings: fetched data', data);
          const normalized = (data || []).map((row) => ({
            id: row.id,
            name: row.name || 'Guest',
            connection: row.connection || 'Well-wisher',
            message: row.message || row.blessings || '',
          })).filter((r) => r.message.trim().length > 0);
          setItems(normalized);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('Blessings: unexpected error', err);
        setError('Something went wrong.');
        setItems([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  return (
    <Section id="blessings">
      <Card>
        <Title >Messages</Title>
        {error && <ErrorBox role="alert">{error}</ErrorBox>}
        {loading ? (
          <Empty>Loading…</Empty>
        ) : items.length === 0 ? (
          <Empty>No messages yet.</Empty>
        ) : (
          <List>
            {items.map((it, idx) => {
              const pastelPalette = [
                'linear-gradient(135deg, #FFE3E8 0%,rgb(253, 159, 176) 100%)', // soft rose (stronger)
                'linear-gradient(135deg, #FFE8C7 0%,rgb(255, 191, 139) 100%)', // peach
                'linear-gradient(135deg, #E7FFEF 0%,rgb(172, 247, 201) 100%)', // mint
                'linear-gradient(135deg, #E6F2FF 0%,rgb(155, 202, 250) 100%)', // powder blue
                'linear-gradient(135deg, #F3E6FF 0%,rgb(196, 148, 250) 100%)', // lavender
                'linear-gradient(135deg, #FFE6F1 0%,rgb(250, 167, 197) 100%)', // pink
                'linear-gradient(135deg, #E6FFF5 0%,rgb(158, 250, 224) 100%)', // aquamarine
              ];
              const bg = pastelPalette[idx % pastelPalette.length];
              return (
                <Item key={it.id} $bg={bg}>
                <Avatar aria-hidden>{(it.name || 'G').charAt(0).toUpperCase()}</Avatar>
                <div>
                  <Header>
                    <Name>{it.name}</Name>
                    <Connection>• {it.connection}</Connection>
                  </Header>
                  <Message>{it.message}</Message>
                </div>
                </Item>
              );
            })}
          </List>
        )}
      </Card>
    </Section>
  );
};

export default Blessings;


