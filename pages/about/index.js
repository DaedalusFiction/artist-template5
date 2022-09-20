import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { leadProfile, pages, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import lightTheme from "../../styles/themes/lightTheme";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <Box
                sx={{
                    margin: "2em 0",
                    display: "flex",
                    justifyContent: "center",
                    gap: "1em",
                }}
            >
                {pages[2].subPages.map((subPage, index) => {
                    return (
                        <Button key={index}>
                            <Link
                                style={{
                                    textDecoration: "none",
                                }}
                                href={subPage.href}
                            >
                                {subPage.name}
                            </Link>
                        </Button>
                    );
                })}
            </Box>
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={leadProfile.image}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">{leadProfile.name}</Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {leadProfile.content}
                        </Typography>
                    </Grid>
                    {/* {secondaryProfiles.map((profile, index) => {
            return (
              <Grid item key={index} xs={12} md={4}>
                <Box sx={{ marginTop: "4rem" }}>
                  <SizedImage
                    image={profile.image}
                    height="25rem"
                    width="100%"
                  />
                  <br />
                  <Typography variant="h4">{profile.name}</Typography>
                  <br />
                  <Typography sx={{ whiteSpace: "pre-wrap" }}>
                    {profile.content}
                  </Typography>
                </Box>
              </Grid>
            );
          })} */}
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
