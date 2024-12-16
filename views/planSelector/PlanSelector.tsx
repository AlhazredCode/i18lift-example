'use client';
import React, { useState, useContext } from 'react';
import {
    Grid,
    Box,
    Typography,
    Stack,
    Container,
    useMediaQuery,
    useTheme,
    Button,
} from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
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
    const { t } = useTranslation('home');

    // State for the MobileStepper
    const [activeStep, setActiveStep] = useState(0);

    const handlePlanSelect = (plan: Plan) => {
        setSelectedPlan(plan);
    };

    const getPlanPrice = (plan: Plan, vehicle: Vehicle): number => {
        const price = vehicle?.[plan.name as keyof Vehicle] ?? 0;
        return Number(price);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <Box sx={{ width: '100%', mt: '0.5vh' }}>
                <Container
                    maxWidth="lg"
                    sx={{ py: 2, display: 'flex', justifyContent: 'center' }}
                >
                    <Grid container spacing={0} sx={{ width: '100%' }}>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                
                                py: 2,
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                variant="h5"
                                align="center"
                                sx={{ fontWeight: 'bold', mb: 2 }}
                            >
                                {t('plans.Title')}
                            </Typography>

                            {isMobile ? (
                                <>
                                    <Box
                                        sx={{
                                            justifySelf: 'center',
                                            width: '100%',
                                          
                                            maxWidth: 400,
                                            flexGrow: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            marginBottom: '5vh'
                                        }}
                                    >
                                        <Stack
                                            key={Plans[activeStep].id}
                                            onClick={() =>
                                                handlePlanSelect(Plans[activeStep])
                                            }
                                            sx={{
                                                cursor: 'pointer',
                                                mx: 2,
                                                my: 1,
                                                border:
                                                    selectedPlan?.id ===
                                                        Plans[activeStep].id
                                                        ? '2px solid white'
                                                        : '1px solid #333333',
                                                borderRadius: 2,
                                                p: 2,
                                                backgroundColor:
                                                    selectedPlan?.id ===
                                                        Plans[activeStep].id
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : 'transparent',
                                                alignItems: 'center',
                                                transition: 'transform 0.2s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                                minWidth: 200,
                                            }}
                                        >
                                            <Image
                                                src={Plans[activeStep].image}
                                                alt={Plans[activeStep].name}
                                                width={isMobile ? 30 : 40}
                                                height={isMobile ? 30 : 40}
                                                layout="intrinsic"
                                                objectFit="cover"
                                            />

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        selectedPlan?.id ===
                                                            Plans[activeStep].id
                                                            ? 'white'
                                                            : '#cccccc',
                                                    mt: 1,
                                                    fontSize: '0.9rem',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {Plans[activeStep].name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        selectedPlan?.id ===
                                                            Plans[activeStep].id
                                                            ? 'white'
                                                            : '#cccccc',
                                                    mt: 1,
                                                    fontSize: '0.9rem',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {`$${getPlanPrice(
                                                    Plans[activeStep],
                                                    selectedVehicle
                                                ).toFixed(2)}`}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        selectedPlan?.id ===
                                                            Plans[activeStep].id
                                                            ? 'white'
                                                            : '#cccccc',
                                                    mt: 1,
                                                    fontSize: '0.7rem',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {t(
                                                    `plans.${Plans[activeStep].name}.description`
                                                )}
                                            </Typography>
                                            {Plans[activeStep].features.map(
                                                (feature) => (
                                                    <Box
                                                        key={feature.featureid}
                                                        width="100%"
                                                        sx={{
                                                            bgcolor:
                                                                'rgba(255, 255, 255, 0.05)',
                                                            px: 1,
                                                            py: 1,
                                                            my: 1,
                                                            borderRadius: 2,
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                            width="100%"
                                                            justifyContent="space-between"
                                                        >
                                                            <Image
                                                                src={
                                                                    feature.icon
                                                                }
                                                                alt={
                                                                    feature.title
                                                                }
                                                                width={
                                                                    isMobile
                                                                        ? 10
                                                                        : 20
                                                                }
                                                                height={
                                                                    isMobile
                                                                        ? 10
                                                                        : 20
                                                                }
                                                            />

                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    color:
                                                                        selectedPlan?.id ===
                                                                            Plans[activeStep]
                                                                                .id
                                                                            ? 'white'
                                                                            : '#cccccc',
                                                                    fontSize:
                                                                        '0.6rem',
                                                                    fontWeight:
                                                                        'regular',
                                                                }}
                                                            >
                                                                {t(
                                                                    `plans.${Plans[activeStep].name}.features.${feature.title.replace(
                                                                        / /g,
                                                                        '_'
                                                                    )}`
                                                                )}
                                                            </Typography>
                                                        </Stack>
                                                    </Box>
                                                )
                                            )}
                                        </Stack>
                                    </Box>
                                    <MobileStepper
                                        variant="dots"
                                        steps={Plans.length}
                                        position="static"
                                        activeStep={activeStep}
                                        sx={{
                                            justifySelf: 'center',
                                            width: '100%',
                                            maxWidth: 400,
                                            flexGrow: 1,
                                        }}
                                        nextButton={
                                            <Button
                                                size="small"
                                                onClick={handleNext}
                                                disabled={
                                                    activeStep ===
                                                    Plans.length - 1
                                                }
                                            >
                                                Next
                                                {theme.direction === 'rtl' ? (
                                                    <KeyboardArrowLeft />
                                                ) : (
                                                    <KeyboardArrowRight />
                                                )}
                                            </Button>
                                        }
                                        backButton={
                                            <Button
                                                size="small"
                                                onClick={handleBack}
                                                disabled={activeStep === 0}
                                            >
                                                {theme.direction === 'rtl' ? (
                                                    <KeyboardArrowRight />
                                                ) : (
                                                    <KeyboardArrowLeft />
                                                )}
                                                Back
                                            </Button>
                                        }
                                    />
                                </>
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {Plans.map((plan) => (
                                        <Stack
                                            key={plan.id}
                                            onClick={() => handlePlanSelect(plan)}
                                            sx={{
                                                cursor: 'pointer',
                                                mx: 2,
                                                my: 1,
                                                border:
                                                    selectedPlan?.id === plan.id
                                                        ? '2px solid white'
                                                        : '1px solid #333333',
                                                borderRadius: 2,
                                                p: 2,
                                                backgroundColor:
                                                    selectedPlan?.id === plan.id
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : 'transparent',
                                                alignItems: 'center',
                                                transition: 'transform 0.2s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                                minWidth: 200,
                                            }}
                                        >
                                            <Image
                                                src={plan.image}
                                                alt={plan.name}
                                                width={isMobile ? 30 : 40}
                                                height={isMobile ? 30 : 40}
                                                layout="intrinsic"
                                                objectFit="cover"
                                            />

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        selectedPlan?.id ===
                                                            plan.id
                                                            ? 'white'
                                                            : '#cccccc',
                                                    mt: 1,
                                                    fontSize: '0.9rem',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {plan.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        selectedPlan?.id ===
                                                            plan.id
                                                            ? 'white'
                                                            : '#cccccc',
                                                    mt: 1,
                                                    fontSize: '0.9rem',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {`$${getPlanPrice(
                                                    plan,
                                                    selectedVehicle
                                                ).toFixed(2)}`}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        selectedPlan?.id ===
                                                            plan.id
                                                            ? 'white'
                                                            : '#cccccc',
                                                    mt: 1,
                                                    fontSize: '0.7rem',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {t(
                                                    `plans.${plan.name}.description`
                                                )}
                                            </Typography>
                                            {plan.features.map((feature) => (
                                                <Box
                                                    key={feature.featureid}
                                                    width="100%"
                                                    sx={{
                                                        bgcolor:
                                                            'rgba(255, 255, 255, 0.05)',
                                                        px: 1,
                                                        py: 1,
                                                        my: 1,
                                                        borderRadius: 2,
                                                    }}
                                                >
                                                    <Stack
                                                        direction="row"
                                                        alignItems="center"
                                                        width="100%"
                                                        justifyContent="space-between"
                                                    >
                                                        <Image
                                                            src={feature.icon}
                                                            alt={feature.title}
                                                            width={
                                                                isMobile ? 10 : 20
                                                            }
                                                            height={
                                                                isMobile ? 10 : 20
                                                            }
                                                        />

                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color:
                                                                    selectedPlan?.id ===
                                                                        plan.id
                                                                        ? 'white'
                                                                        : '#cccccc',
                                                                fontSize:
                                                                    '0.6rem',
                                                                fontWeight:
                                                                    'regular',
                                                            }}
                                                        >
                                                            {t(
                                                                `plans.${plan.name}.features.${feature.title.replace(
                                                                    / /g,
                                                                    '_'
                                                                )}`
                                                            )}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            ))}
                                        </Stack>
                                    ))}
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default PlanSelector;