import React from 'react';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  backgroundContainer: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120vw',
    height: '100vh',
    zIndex: -2,
    overflow: 'hidden',
    '&::before': { // Pseudo-elemento para la capa roja
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      zIndex: 1, 
    },
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0, // Ajusta el z-index si es necesario
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    '& img': {
      display: 'block',
      width: 'auto',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

const Background: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.backgroundContainer}>
      <div className={classes.backgroundOverlay} />
      <div className={classes.backgroundImage}>
        <Image src="/bkg.svg" alt="Background" layout="fill" priority />
      </div>
    </div>
  );
};

export default Background;