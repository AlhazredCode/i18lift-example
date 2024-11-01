'use client'
import React from 'react';
import Image from 'next/image';
import { Typography, Button, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles()((theme) => ({
  root: {
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'regular',
    marginBottom: theme.spacing(4),
  },
}));

const HeroContent: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('home'); // Usando el namespace 'home'

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        staggerChildren: 0.3,
        duration: 1,
        ease: [0.455, 0.03, 0.515, 0.955],
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      }
    },
  };

  const titleVariants = {
    ...itemVariants,
    visible: {
      ...itemVariants.visible,
      opacity: 1,
      transition: {
        ...itemVariants.visible.transition,
        delay: 2,
        yoyo: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={classes.root}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box py={2}>
        <motion.div variants={itemVariants}>
          <Image src="/icons/FullLogo.svg" alt="Logo" width={150} height={75} />
        </motion.div>
      </Box>

      <motion.div variants={titleVariants}>
        <motion.div
          style={{ display: 'inline-block' }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 2
          }}
          animate={{ opacity: [1, 0.5] }}
        >
          <Typography variant="h1" className={classes.title}>
            {t('hero.heroTitle')} 
          </Typography>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography variant="h6" className={classes.subtitle} style={{ color: 'gray' }}>
          {t('hero.heroSubtitle')} 
        </Typography>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button variant="outlined" color="primary">
          {t('hero.heroExploreButton')} 
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;