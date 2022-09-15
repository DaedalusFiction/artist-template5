import { Box, Grid, Typography } from "@mui/material";
import SizedImage from "../../components/general/SizedImage";

const ProcessStep = ({ step }) => {
  return (
    <Box className="section">
      <Grid container spacing={6} wrap={step.reverse ? "wrap-reverse" : "wrap"}>
        <Grid item xs={12} md={6} order={step.reverse ? 1 : 0}>
          <SizedImage height="30rem" width="100%" image={step.image} />
        </Grid>
        <Grid item xs={12} md={6} order={step.reverse ? 0 : 1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: step.reverse ? "end" : "start",
              height: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: step.reverse ? "end" : "start" }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{ textAlign: step.reverse ? "end" : "start" }}
            >
              {step.name}
            </Typography>
            <br />
            <Typography
              sx={{
                whiteSpace: "pre-wrap",
                textAlign: step.reverse ? "end" : "start",
              }}
            >
              {step.content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProcessStep;
