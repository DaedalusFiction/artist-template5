import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName, heroContent } from "../../siteInfo";
import NativeImage from "../general/NativeImage.js";

const heroText = siteName;
// const color = lightTheme.palette.primary.off;

const Hero = () => {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "-1",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontWeight: "900",
                        fontSize: "clamp(4rem, 12vw, 20rem)",
                        writingMode: { xs: "vertical-lr", md: "inherit" },
                        textOrientation: { xs: "upright", md: "inherit" },
                        lineHeight: { xs: "2.5em", md: ".8em" },
                    }}
                >
                    {heroText}
                </Typography>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "1",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontWeight: "900",
                        fontSize: "clamp(4rem, 12vw, 20rem)",
                        color: "transparent",
                        WebkitTextStroke: `4px ${lightTheme.palette.custom.light}`,
                        transition: "300ms",
                        opacity: { xs: "0", md: "70%" },
                        "&:hover": {
                            opacity: "0%",
                        },
                        writingMode: { xs: "vertical-lr", md: "inherit" },
                        textOrientation: { xs: "upright", md: "inherit" },
                        lineHeight: { xs: "2.5em", md: ".8em" },
                    }}
                >
                    {heroText}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    // position: "relative",
                    justifyContent: "center",
                    padding: "15vh 0",
                }}
            >
                <NativeImage maxSize={800} image={heroContent.image} />
            </Box>
        </Container>
    );
};

export default Hero;
