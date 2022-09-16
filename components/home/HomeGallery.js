import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";
import SizedImage from "../general/SizedImage";

const HomeGallery = ({ images }) => {
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box
                        className="flex-center"
                        // sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage image={images[0]} />
                        {/* <SizedImage
                            width="20rem"
                            height="30rem"
                            image={images[0]}
                        /> */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4rem",
                            padding: "4rem",
                        }}
                    >
                        <NativeImage image={images[1]} />
                        <NativeImage image={images[2]} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeGallery;
