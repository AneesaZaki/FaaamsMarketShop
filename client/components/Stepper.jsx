import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom'; // Assuming you're using react-router for navigation

const steps = ['Cart', 'Payment', 'Review'];

export default function HorizontalNonLinearStepper({ currentStep }) {
    const history = useHistory();

    // Function to handle step change
    const handleStep = (step) => () => {
        let path = "";
        switch (step) {
            case 0:
                path = "/cart";
                break;
            case 1:
                path = "/checkout";
                break;
            default:
                path = "/cart";
        }
        history.push(path);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={currentStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={currentStep == 2}>
                        <StepButton color="inherit" onClick={handleStep(index)} disabled={label === "Review"}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
