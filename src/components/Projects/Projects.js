import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsDemo=[
  {
  title:"Project 1",
  description:"This is important"
},
{
 title:"Project 2",
 description:"This is important"
},
{
 title:"Project 3",
 description:"This is important"
}
];
const Projects = () => (
 <Section nopadding id="projects">
   <SectionDivider />
   <SectionTitle main>Projects</SectionTitle>
   <GridContainer>
     {
     projects.map(({id,image,title,description,tags,source,visit}) =>(
       <BlogCard key={id}>
         <Img src={image}/>
         <TitleContent>
           <HeaderThree title>{title}></HeaderThree>
         </TitleContent>
         <CardInfo>{description}</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
             {tags.map((tag,i)=>(
               <Tag>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList>
           <ExternalLinks href={visit}>Code</ExternalLinks>
           
          
         </UtilityList>
         </BlogCard>
       ))}
      
    </GridContainer>
    </Section>
 
);

export default Projects;