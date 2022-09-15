import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName, heroContent } from "../../siteInfo";
import SocialMediaIcons from "../general/SocialMediaIcons";
import SizedImage from "../general/SizedImage.js";

const Hero = () => {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "15vh 0",
                }}
            >
                <SizedImage
                    height="70vh"
                    width="55vw"
                    image={heroContent.image}
                />
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    top: "0",
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
                        fontSize: "clamp(4rem, 15vw, 20rem)",
                    }}
                >
                    ARTIST PORTFOLIO
                </Typography>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    top: "0",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "11",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontWeight: "900",
                        fontSize: "clamp(4rem, 15vw, 20rem)",
                        color: "transparent",
                        WebkitTextStroke: `4px ${lightTheme.palette.custom.light}`,
                    }}
                >
                    ARTIST PORTFOLIO
                </Typography>
            </Box>
        </Container>
    );
};

export default Hero;
