import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number:1, text:'2 Front-end Projects'},
  { number:2,text: 'Completed a course on Ethical hacking ', },
  {  number: 3,text: 'Won a gold in Intra-college basketball tournament :)', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
    <Box key={index}>
      <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
    ))}
      
    
  </Boxes>
</Section>
);

export default Acomplishments;
