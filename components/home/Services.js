import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Service from "./Service";
import {servicesContent} from "../../siteInfo"

const Services = ({preview}) => {
    return (
        <Box className="section">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {servicesContent.map((service, index) => {
                        return (
                            <Grid key={index} item xs={12} md={4}>
                                <Service preview={preview} service={service} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
