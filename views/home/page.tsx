import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero/hero';
import Description from './description';
import Features from './features';
import Models from './models';
import Dimensions from './dimensions';
import Cta from './cta';
import SkillsSection from './skills';
import Gallery from './gallery';
import EcoFriendly from './EcoFriendly';
import Promo from './promo';
import VideoEmbed from './Video';
function LandingPage() {
  return (
    <Box sx={{minHeight: '100%'}}>
  
        <Box sx={{minHeight: 800}}>
          <Hero /> 
          <SkillsSection /> 
          <Description /> 
          <Promo /> 
          
          <Features /> 
          <EcoFriendly />
          <VideoEmbed />
          <Cta /> 
          <Gallery /> 
        </Box>
    
    </Box>
  )
}

export default LandingPage