'use client';
import React, { useState, useContext } from 'react';
import { Grid, Box, Typography, Stack, Container, useMediaQuery, useTheme, Button, Modal } from '@mui/material';

import Image from 'next/image';
import Plans from '@/api/plans';
import { VehicleContext } from '@/components/customize';
import { Plan } from '@/types/plan';
import { Vehicle } from '@/types/vehicle';

import { useTranslation } from 'react-i18next';


function PlanSelector() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { selectedVehicle } = useContext(VehicleContext);
    const [selectedPlan, setSelectedPlan] = useState<Plan>(Plans[0]);
    const [openModal, setOpenModal] = useState(false);
    const { t } = useTranslation('home'); // Asegúrate de que el namespace sea correcto

    const handlePlanSelect = (plan: Plan) => {
        setSelectedPlan(plan);
    };

    const getPlanPrice = (plan: Plan, vehicle: Vehicle): number => {
        const price = vehicle?.[plan.name as keyof Vehicle] ?? 0;
        return Number(price); 
    };

    const planPrice = getPlanPrice(selectedPlan, selectedVehicle);


    return (
        <>
            <Box sx={{ width: '100%', mt: '0.5vh' }}>
                <Container maxWidth="lg" sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={4} sx={{ width: '100%' }}>
                        <Grid item xs={12} sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', px: 2, py: 2, borderRadius: 2 }}>
                            <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                            
                                {t('plans.Title')} 
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {Plans.map((plan) => (
                                    <Stack
                                        key={plan.id}
                                        onClick={() => handlePlanSelect(plan)}
                                        sx={{
                                            cursor: 'pointer',
                                            mx: 2,
                                            my: 1,
                                            border: selectedPlan?.id === plan.id ? '2px solid white' : '1px solid #333333',
                                            borderRadius: 2,
                                            p: 2,
                                            backgroundColor: selectedPlan?.id === plan.id ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                                            alignItems: 'center',
                                            transition: 'transform 0.2s ease',
                                            '&:hover': { transform: 'scale(1.05)' },
                                            minWidth: 200,
                                        }}
                                    >
                                        <Image src={plan.image} alt={plan.name} width={isMobile ? 30 : 40} height={isMobile ? 30 : 40} layout="intrinsic" objectFit="cover" />
                                        
                                        
                                        <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>
                                        {plan.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>
                                            {`$${getPlanPrice(plan, selectedVehicle).toFixed(2)}`} 
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.7rem', fontWeight: 'bold' }}>
                                        {t(`plans.${plan.name}.description`)}
                                        </Typography>
                                        {plan.features.map((feature) => (
                                            <Box key={feature.featureid} width="100%" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', px: 1, py: 1, my: 1, borderRadius: 2 }}>
                                                <Stack direction="row" alignItems="center" width="100%" justifyContent="space-between">
                                                    <Image src={feature.icon} alt={feature.title} width={isMobile ? 10 : 20} height={isMobile ? 10 : 20} />
                                                    {/*  Si necesitas traducir feature.title, 
                                                         usa t('clave_de_traduccion')  */}
                                                    <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', fontSize: '0.6rem', fontWeight: 'regular' }}>
                                                    {t(`plans.${plan.name}.features.${feature.title.replace(/ /g, '_')}`)}
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        ))}
                                     
                                    </Stack>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

         
        </>
    );
}

export default PlanSelector;