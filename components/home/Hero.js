import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName, heroContent } from "../../siteInfo";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Hero = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
  url(${heroContent.image.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 5%",
                        padding: "1rem 0",
                        height: { xs: "50vh", md: "100vh" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Container maxWidth="xl">
                        <Box
                            sx={{
                                display: "flex",
                                gap: ".5em",
                                justifyContent: "end",
                            }}
                        >
                            <SocialMediaIcons color="primary" fontSize="30px" />
                        </Box>
                    </Container>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Container maxWidth="xl" sx={{ height: "100%" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                            padding: "3rem 0",
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                marginBottom: ".25em",
                                color: lightTheme.palette.custom.dark,
                                fontWeight: "900",
                                textAlign: "center",
                            }}
                        >
                            {siteName}
                        </Typography>
                        <br />
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dolor quibusdam odio aut laudantium. Deserunt
                            sunt quo perspiciatis eaque, placeat culpa?
                        </Typography>
                        <br />
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Qui, in? Architecto asperiores distinctio quia
                            neque officia eaque hic quisquam, similique vitae
                            expedita, tenetur laboriosam dolores quae reiciendis
                            dolor deserunt quos!
                        </Typography>
                        <br />
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, ex!
                        </Typography>
                        <br />
                        <Link href={heroContent.buttonOne.href}>
                            <Button
                                size="large"
                                variant={heroContent.buttonOne.variant}
                                color="secondary"
                                sx={{ width: "fit-content" }}
                            >
                                {heroContent.buttonOne.text}
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Hero;
