import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem href="tel:8897013471">8897013471</LinkItem>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="mailto:saswatmarpureddy@gmail.com">saswatmarpureddy@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Web design with a human touch.</Slogan>
       </CompanyContainer>
       <SocialIcons href="https://github.com/Eren-Yeaager">
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href="linkedin.com/in/marpureddy-saswat-352267219">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons> 
     <SocialIcons href="https://www.instagram.com/saswat_reddy666/">
       <AiFillInstagram size="3rem"/>
     </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
