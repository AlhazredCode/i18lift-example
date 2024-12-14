'use client'
import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  logo: {
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  description: {
    lineHeight: 1.8,
    color: 'gray',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  },
}));

const Description: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('home');
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delay: 3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box className={classes.root}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className={classes.logo}>
          <Image src="/CarWashVan.webp" alt="Logo" width={isMobile ? 300 : 500} height={isMobile ? 300 : 500} layout='intrinsic' objectFit='cover' />
        </motion.div>

        <motion.div variants={itemVariants} className={classes.logo}>
          <Image src="/icons/Logo.svg" alt="Logo" width={150} height={75} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="h2" className={classes.title}>
            {t('descriptionTitle')}
          </Typography>
        </motion.div>
     
          <motion.div variants={itemVariants}>
            <Typography variant="body1" className={classes.description}>
              {t('descriptionText1')}
              </Typography>
              <br />
              <br />
              <Box sx={{ maxWidth: '800px', justifySelf: 'center'}}>
              <Typography variant="body1" className={classes.description}>
              {t('descriptionText2')}
            </Typography>
            </Box>
          </motion.div>
     
      </motion.div>
    </Box>
  );
};

export default Description;