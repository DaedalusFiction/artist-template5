import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import lightTheme from "../../styles/themes/lightTheme";
import NativeImage from "../general/NativeImage";
import SizedImage from "../general/SizedImage";

const HomeGallery = ({ images }) => {
    return (
        <Container maxWidth="xl">
            <Grid container rowSpacing={20} spacing={10}>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "2rem" }}
                    >
                        <NativeImage maxSize={2000} image={images[0]} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={800} image={images[1]} />
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
                        }}
                    >
                        <NativeImage maxSize={400} image={images[2]} />
                        <NativeImage maxSize={400} image={images[3]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={1200} image={images[4]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "6rem" }}
                    >
                        <NativeImage maxSize={1000} image={images[5]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "2rem" }}
                    >
                        <NativeImage maxSize={2000} image={images[6]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4rem",
                        }}
                    >
                        <NativeImage maxSize={800} image={images[7]} />
                        <NativeImage maxSize={600} image={images[8]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={2000} image={images[9]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%", padding: "2rem" }}
                    >
                        <NativeImage maxSize={2000} image={images[10]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4rem",
                        }}
                    >
                        <NativeImage maxSize={1200} image={images[11]} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        className="flex-center"
                        sx={{ height: "100%", width: "100%" }}
                    >
                        <NativeImage maxSize={600} image={images[12]} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            background: lightTheme.palette.background.default,
                            position: "relative",
                            zIndex: "40",
                            padding: "10rem 0",
                        }}
                    >
                        <Container maxWidth="md">
                            <Box className="flex-center">
                                <Box>
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Earum placeat
                                        obcaecati quos eaque vero veritatis,
                                        recusandae tenetur? Tempore, quod dicta?
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloremque
                                        consequuntur voluptatum distinctio harum
                                        autem quisquam ex tenetur! Quam nesciunt
                                        expedita vitae modi doloribus
                                        perspiciatis unde, incidunt consequatur,
                                        similique sequi omnis porro eum debitis
                                        culpa! Itaque quaerat possimus, deleniti
                                        est doloremque aut! Atque voluptates
                                        autem repellendus voluptate rerum
                                        cupiditate dolorem quibusdam?
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Dolorem quos soluta
                                        dicta. Quas aliquid vero quos inventore,
                                        quod ipsa ut iste dolorum eveniet,
                                        recusandae animi fugiat a quisquam quia
                                        ad nulla iusto fugit expedita debitis
                                        est architecto, autem sapiente?
                                        Voluptatem.
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Minima iusto commodi
                                        perferendis dolorum laboriosam eligendi
                                        similique porro? Natus debitis dolore
                                        assumenda. Magni tempore quisquam
                                        dolorum, dolores, sequi totam
                                        dignissimos beatae adipisci natus
                                        corrupti tenetur dolor inventore dolore!
                                        In non porro, temporibus commodi autem
                                        laudantium adipisci optio esse sint ex
                                        blanditiis vitae, exercitationem culpa
                                        tenetur aliquid. Incidunt, obcaecati
                                        cupiditate? Animi nulla in deserunt
                                        labore iusto totam, nam laudantium
                                        maxime facilis doloribus?
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Lorem ipsum dolor sit amet.
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Modi natus, tempore ut
                                        dolorem porro facilis neque suscipit
                                        est. Odit, qui!
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeGallery;
