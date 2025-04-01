import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
const steps = ["Secure Checkout", "Payment channels", "Success"];

export default function HorizontalLinearStepper({
  activeStep,
}: {
  activeStep: number;
}) {
  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Stepper
        activeStep={activeStep}
        sx={{
          "& .MuiStepIcon-root": { color: "gray" }, // Default
          "& .MuiStepIcon-root.Mui-active": { color: "green" }, // Active
          "& .MuiStepIcon-root.Mui-completed": { color: "green" }, // Completed
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                sx: {
                  color: "gray", // Default
                  "&.Mui-active": { color: "green" }, // Active
                  "&.Mui-completed": { color: "green" }, // Completed
                },
              }}
              sx={{
                "& .MuiStepLabel-label": {
                  color: "gray",
                  "&.Mui-active": { color: "green" },
                  "&.Mui-completed": { color: "green" },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
