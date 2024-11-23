import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import about_img from '../../images/HeroImage.jpg';
import { link } from '../../data/constants';


const LinksSection = () => {
  return (
    <Container id='link'>
      <ProfileImage src={about_img} alt="Profile" />
      <Name>Ankur Kumar Singh</Name>
      <Subtitle>Coding enthusiast and Web Developer</Subtitle>
      <Timeline>
        {link.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot>
                <Icon src={item.icon} alt={item.name} />
              </TimelineDot>
              {index < link.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <LinkItem href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </LinkItem>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  text-align: center;
  color: #ffffff;
  background-color: #121212;
  padding: 20px;
  border-radius: 10px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const LinkItem = styled.a`
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #00bfa5;
  }
`;

export default LinksSection;
