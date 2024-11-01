'use client'
import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles()((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(4),
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
            <br />
            <br />
            {t('descriptionText2')}
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Description;