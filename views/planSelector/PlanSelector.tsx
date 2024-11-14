
'use client';
import React, { useState, useContext } from 'react';
import { Grid, Box, Typography, Stack, Container, useMediaQuery, useTheme, Button, Modal } from '@mui/material';

import Image from 'next/image';
import Plans from '@/api/plans';
import { VehicleContext } from '@/components/customize';
import { Plan } from '@/types/plan';
import BuyModal from './BuyModal';

function PlanSelector() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { selectedVehicle } = useContext(VehicleContext);
    const [selectedPlan, setSelectedPlan] = useState<Plan >(Plans[0]);
    const [openModal, setOpenModal] = useState(false);

    const handlePlanSelect = (plan: Plan) => {
        setSelectedPlan(plan);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const calculatedPrice = selectedPlan && selectedVehicle ? selectedPlan.basePrice * selectedVehicle.priceFactor : 0;

    return (
        <>
            <Box sx={{ width: '100%', mt: '0.5vh' }}>
                <Container maxWidth="lg" sx={{ py: { md: 2, lg: 2 }, display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={4} sx={{ width: '100%' }}>
                        <Grid item xs={12} sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', px: 2, py: 2, borderRadius: 2 }}>
                            <Grid item sx={{ mb: 2 }}>
                                <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
                                    Select Your Plan
                                </Typography>
                            </Grid>

                            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {Plans.map((plan) => {
                                    // Calcular el precio para cada plan individualmente
                                    const planPrice = selectedVehicle ? plan.basePrice * selectedVehicle.priceFactor : plan.basePrice;

                                    return (
                                        <Stack
                                            key={plan.id}
                                            onClick={() => handlePlanSelect(plan)}
                                            sx={{
                                                cursor: 'pointer',
                                                mx: 2,
                                                my: 1,
                                                border: selectedPlan?.id === plan.id ? '2px solid white' : '1px solid #333333', // Optional chaining
                                                borderRadius: 2,
                                                p: 2,
                                                backgroundColor: selectedPlan?.id === plan.id ? 'rgba(255, 255, 255, 0.05)' : 'transparent', // Optional chaining
                                                alignItems: 'center',
                                                transition: 'transform 0.2s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                                minWidth: 200, // Ensure minimum width for content
                                            }}
                                        >
                                            <Image src={plan.image} alt={plan.name} width={isMobile ? 20 : 40} height={isMobile ? 80 : 100} />
                                            <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>
                                                {plan.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>
                                                {`$${planPrice.toFixed(2)}`} {/* Mostrar precio calculado */}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.7rem', fontWeight: 'bold' }}>
                                                {plan.description} {/* Mostrar precio calculado */}
                                            </Typography>
                                            {plan.features.map((feature) => {

                                                return (
                                                    <Box key={feature.featureid} width={'100%'} sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', px: 1, py: 1, my: 1, borderRadius: 2 }}>
                                                        <Stack direction={'row'} alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
                                                            <Image src={feature.icon} alt={feature.title} width={isMobile ? 10 : 20} height={isMobile ? 10 : 20} />

                                                            <Typography variant="body2" sx={{ color: selectedPlan?.id === plan.id ? 'white' : '#cccccc', fontSize: '0.8rem', fontWeight: 'regular' }}>
                                                                {feature.title}
                                                            </Typography>
                                                        </Stack>
                                                    </Box>
                                                )

                                            })}
                                            <Button variant="outlined" color="primary" onClick={handleOpenModal}>
                                                Subscribe
                                            </Button>
                                        </Stack>
                                    );
                                })}


                            </Box>
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
                 

                 
               
                  <BuyModal plan={selectedPlan} price={calculatedPrice} />
                  <Grid container spacing={2} sx={{ position : 'relative', top: '90%',height: '100%'}}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth onClick={handleCloseModal}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth color="primary" >
                Confirm
              </Button>

            </Grid>
            </Grid>
                
                </Box>
            </Modal>
        </>
    );
}

export default PlanSelector;
