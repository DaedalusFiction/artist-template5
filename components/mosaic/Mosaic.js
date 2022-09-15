import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SizedImage from "../general/SizedImage";

const variation1 = (images) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={4}>
        <Box
          className="flex-1"
          sx={{
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "end",
              gap: "1em",
            }}
          >
            <SizedImage image={images[0]} height="6rem" width="6rem" />
            <SizedImage image={images[1]} height="6rem" width="6rem" />
          </Box>

          <SizedImage image={images[2]} height="20rem" width="100%" />
        </Box>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <SizedImage image={images[3]} width="100%" height="100%" />
        </Box>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: "1em",
            flexDirection: "column",
          }}
        >
          <SizedImage image={images[3]} width="100%" height="10rem" />
          <SizedImage image={images[3]} width="10rem" height="16rem" />
        </Box>
      </Grid>
    </Grid>
  );
};
const variation2 = (images) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <SizedImage image={images[0]} height="20rem" width="100%" />
      </Grid>

      <Grid item xs={12} lg={7}>
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Box
            className="flex-1"
            sx={{ flexDirection: "column", width: "100%" }}
          >
            <Box className="flex-1" sx={{ alignItems: "end" }}>
              <SizedImage image={images[3]} width="10rem" height="16rem" />
              <SizedImage image={images[3]} width="10rem" height="10rem" />
            </Box>
            <SizedImage image={images[3]} width="100%" height="10rem" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
const variation3 = (images) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "end",
            alignItems: "end",
            gap: "1em",
            height: "100%",
          }}
        >
          <Box
            className="flex-1"
            sx={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              alignItems: "end",
              height: "100%",
            }}
          >
            <SizedImage image={images[2]} height="10rem" width="10rem" />
            <SizedImage image={images[2]} height="10rem" width="10rem" />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} lg={6}>
        <SizedImage image={images[3]} width="100%" height="26rem" />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Box className="flex-1" sx={{ flexDirection: "column" }}>
            <SizedImage image={images[3]} width="10rem" height="10rem" />
            <SizedImage image={images[3]} width="10rem" height="10rem" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
const Mosaic = ({ variation, images }) => {
  switch (variation) {
    case 1:
      return variation1(images);
    case 2:
      return variation2(images);
    case 3:
      return variation3(images);
    default:
      return <div>Remember to input a variation prop (1, 2, or 3)</div>;
  }
};

export default Mosaic;
