import { Box, Grid, Typography } from "@mui/material";
import { leadProfile, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import Services from "../../components/home/Services";

const index = () => {
    return (
        <PageLayout name="OUR SERVICES">
            <Box className="section">
                <Services />
            </Box>
        </PageLayout>
    );
};

export default index;
