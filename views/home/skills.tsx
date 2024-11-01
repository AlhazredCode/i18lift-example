// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';


function Item({ item }: { item: { text: string; highlight?: boolean } }) {
  return (
    <Typography
      variant="h4"
      sx={{
        cursor: 'pointer',
        fontWeight: 500,
        my: 1,
        mx: 3,
        transition: 'all 0.3s ease-in-out',
        opacity: item.highlight ? 0.75 : 0.4,
        '&:hover': { opacity: '1' },
        color: 'white', 
      }}
    >
      {item.text}
    </Typography>
  );
}

export default function SkillsSection() {
  const { t } = useTranslation('home'); 

  const skillItems = [
    { text: t('upLift') },
    { text: t('luxuryService') },
    { text: t('interiorDetailing') },
    { text: t('exteriorDetailing') },
    { text: t('vacuuming') }, 
    { text: t('seatCleaning') },
    { text: t('carpetCleaning') },
    { text: t('tireCleaning') },
    { text: t('engineCleaning') },
    { text: t('airFreshener') },
    { text: t('leatherConditioning') }, 
    { text: t('ceramicCoating') },
    { text: t('paintProtection') },
  ];

  return (
    <Box sx={{ overflowX: 'hidden', width: '100%' , mb: 2 , mt: '95vh'}}> 
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Marquee pauseOnHover direction="left" gradient={false} speed={80}>
            {skillItems.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}> 
          <Marquee pauseOnHover direction="right" gradient={false} speed={80}> 
            {skillItems.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
}