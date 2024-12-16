


'use client'
import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import FreeWashModal from './FreeWashModal';


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
    color: '#F2F2F2',
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
  const [openModal, setOpenModal] = useState(false);


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

  const handleOpenModal = () => {
    setOpenModal(true);
};

const handleCloseModal = () => {
    setOpenModal(false);
};



  return (
    <>
    <Box className={classes.container}>
      <Container maxWidth="lg" sx={{ py: 1, display: 'flex', justifyContent: 'center' }}>
        <Grid container px={1} alignItems={'center'}>
          <Grid item xs={12} md={4}>
            <Box justifySelf={isMobile ? 'center' : 'flex-start'}>
              <Image src="/icons/Logo.svg" alt="Logo" width={100} height={50} />
            </Box>
          </Grid>

            <Grid item xs={12} md={4} container justifyContent="center" alignItems="center">
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
                  onClick={() => handleNavigation('download')} // Usa handleNavigation
                  style={{ fontWeight: activeView === 'download' ? 'bold' : 'normal' }}
                >
                  {t('header.download')}
                </Button>
              </Grid>
            </Grid>
         


          <Grid item xs={12} md={4} container justifyContent={isMobile ? 'center' : 'flex-end'}  alignItems="center" spacing={2}>
            <Grid item>
                <Button className={classes.neonButton} onClick={handleOpenModal}>
                  {t('header.freeWash')}
                </Button>
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

   <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="buy-modal-title"
                aria-describedby="buy-modal-description"
            >
  <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '80vh',
        minWidth: isMobile ? '90vw' : '60vw',
        bgcolor: 'rgba(26, 26, 26, 0.85)',
        backdropFilter: 'blur(10px)',
        boxShadow: 24,
        borderRadius: 4,
        p: 4
    }}>
            <FreeWashModal/>
            </Box>
            </Modal>



    </>
  );
};

export default Header;