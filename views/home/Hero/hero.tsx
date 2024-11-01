
// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import HeroContent from './HeroContent';

const useStyles = makeStyles()((theme) => ({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    top: '15vh',
    left: 0,
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  gradientLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%', // Ajusta el ancho del degradado según sea necesario
    height: '100%',
    background: 'linear-gradient(to right, black, transparent)',
  },
  gradientRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '20%', // Ajusta el ancho del degradado según sea necesario
    height: '100%',
    background: 'linear-gradient(to left, black, transparent)',
  },
  contentContainer: { // Estilos para el contenedor del contenido
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Hero: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/CarDasboard.png"
          alt="Car Dashboard"
          layout="fill"
          className={classes.image}
          priority
        />
        <div className={classes.gradientLeft} />
        <div className={classes.gradientRight} />
      </div>
      {/* Contenedor para el componente HeroContent */}
      <div className={classes.contentContainer}>
        <HeroContent /> 
      </div>
    </div>
  );
};

export default Hero;