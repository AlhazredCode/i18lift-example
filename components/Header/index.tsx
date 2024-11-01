


'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';


const useStyles = makeStyles()((theme) => ({
  container: {
    borderBottom: '1px solid #E20000',
    width: '100%',
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    zIndex: 10,
  },
  neonButton: {
    background: 'linear-gradient(to right, #E20000, #E51B20)',
    color: '#EEEEEE',
    padding: '8px 20px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 'bold',
    boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      color: '#3A3A3A',
      boxShadow: '0 0 20px rgba(255, 0, 0, 1)',
    },
  },
  outlineButton: {
    color: '#E20000',
    borderColor: '#E20000',
    padding: '8px 20px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 'bold',
    transition: 'border-color 0.3s ease',
    '&:hover': {
      borderColor: '#E51B20', 
    },
  },
}));

interface HeaderProps {
  type: 'primary' | 'secondary';
  activeView?: string;
  onSelectView?: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ type, activeView, onSelectView }) => {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();


  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleNavigation = (view: string) => {
    if (type === 'primary' && onSelectView) {
      onSelectView(view);
    } else if (type === 'secondary') {
      router.push('/'); // Redirige a la ruta principal
    }
  };


  return (
    <Box className={classes.container}>
      <Container maxWidth="lg" sx={{ py: 1, display: 'flex', justifyContent: 'center' }}>
        <Grid container px={1}>
          <Grid item xs={12} sm={4}>
            <Box justifySelf={isMobile ? 'center' : 'flex-start'}>
              <Image src="/icons/Logo.svg" alt="Logo" width={100} height={50} />
            </Box>
          </Grid>

            <Grid item xs={12} sm={4} container justifyContent="center">
              <Grid item>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => handleNavigation('landing')} // Usa handleNavigation
                  style={{ fontWeight: activeView === 'landing' ? 'bold' : 'normal' }}
                >
                  {t('header.home')}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => handleNavigation('customize')} // Usa handleNavigation
                  style={{ fontWeight: activeView === 'customize' ? 'bold' : 'normal' }}
                >
                  {t('header.customize')}
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => handleNavigation('contact')} // Usa handleNavigation
                  style={{ fontWeight: activeView === 'contact' ? 'bold' : 'normal' }}
                >
                  {t('header.contact')}
                </Button>
              </Grid>
            </Grid>
         


          <Grid item xs={12} sm={4} container justifyContent={isMobile ? 'center' : 'flex-end'} spacing={2}>
            <Grid item>
              <Link href={ type==="primary" ? './subscription' : './' } passHref>
                <Button className={classes.neonButton}>
                  {t('header.freeWash')}
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button className={classes.outlineButton} onClick={changeLanguage}>
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Header;