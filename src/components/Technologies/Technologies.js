import React from 'react';
import { DiCss3, DiFirebase, DiHtml5, DiJavascript, DiMysql, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The technologies that I've worked with are
    </SectionText>
    <List>
    <ListItem>
        <DiHtml5 size="8rem"/>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
        <ListParagraph>Experience with HTML5.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="8rem"/>
        <ListContainer>
          <ListTitle>Css3</ListTitle>
        <ListParagraph>Experience with CSS3.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="8rem"/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        <ListParagraph>Experience with JavaScript.</ListParagraph>
        </ListContainer>
      </ListItem><ListItem>
        <DiReact size="8rem"/>
        <ListContainer>
          <ListTitle>React</ListTitle>
        <ListParagraph>Experience with React.</ListParagraph>
        </ListContainer>
      </ListItem><ListItem>
        <DiNodejs size="8rem"/>
        <ListContainer>
          <ListTitle>Nodejs</ListTitle>
        <ListParagraph>Experience with Nodejs.</ListParagraph>
        </ListContainer>
      </ListItem><ListItem>
        <DiMysql size="8rem"/>
        <ListContainer>
          <ListTitle>Mysql</ListTitle>
        <ListParagraph>Experience with Mysql.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
export default Technologies;
