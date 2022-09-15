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
                    zIndex: "1",
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
                        transition: "300ms",
                        "&:hover": {
                            opacity: "0%",
                        },
                    }}
                >
                    ARTIST PORTFOLIO
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
                <SizedImage
                    height="35rem"
                    width="25rem"
                    image={heroContent.image}
                />
            </Box>
        </Container>
    );
};

export default Hero;
