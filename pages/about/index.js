import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { leadProfile, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="ABOUT">
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
