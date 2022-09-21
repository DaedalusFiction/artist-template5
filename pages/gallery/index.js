import { Grid, Typography } from "@mui/material";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { galleryCategories, galleryStylesCategories } from "../../siteInfo";
import GalleryCategoryPreview from "../../components/gallery/GalleryCategoryPreview";

const Projects = () => {
    return (
        <PageLayout name="GALLERY">
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "2em" }}
            >
                Categories
            </Typography>
            <Grid className="section" container spacing={4}>
                {galleryCategories.map((category, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <GalleryCategoryPreview category={category} />
                        </Grid>
                    );
                })}
            </Grid>
            {/* <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "2em" }}
            >
                Secondary Categories
            </Typography>
            <Grid container className="section" spacing={4}>
                {galleryStylesCategories.map((category, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={4} md={3}>
                            <GalleryCategoryPreview category={category} />
                        </Grid>
                    );
                })}
            </Grid> */}
        </PageLayout>
    );
};

export default Projects;
