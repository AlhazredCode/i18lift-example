import React from 'react';
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { motion } from 'framer-motion';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  badge: {
    marginRight: theme.spacing(2), 
    maxWidth: '50%', // Ajusta el ancho máximo para cada badge
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
     
      maxWidth: '100%', // Ocupa todo el ancho en pantallas pequeñas 
    },
  },
}));

const Badges: React.FC = () => {
    const { classes } = useStyles();
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <Box maxWidth="md"> 
        <Box className={classes.root}>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className={classes.badge}>
            <Image src="/badges/AppStore.svg" alt="Badge 1" width={250} height={150} /> 
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className={classes.badge}>
            <Image src="/badges/GooglePlay.svg" alt="Badge 2" width={250} height={150} /> 
          </motion.div>
        </Box>
      </Box>
    );
  };

export default Badges;