import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import GalleryCategoryPreview from "../../../components/gallery/GalleryCategoryPreview";
import PageLayout from "../../../components/layout/PageLayout";
import { galleryCategories } from "../../../siteInfo";

const Projects = () => {
    const router = useRouter();
    const { category } = router.query;
    return (
        <PageLayout name={category}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "2em" }}
            >
                Sub-categories
            </Typography>
            {galleryCategories.map((galleryCategory) => {
                {
                    return (
                        galleryCategory.name === category && (
                            <Grid className="section" container spacing={4}>
                                {galleryCategory.subCategories.map(
                                    (subCategory, index) => {
                                        return (
                                            <Grid
                                                key={index}
                                                item
                                                xs={12}
                                                sm={6}
                                                md={4}
                                            >
                                                <GalleryCategoryPreview
                                                    category={subCategory}
                                                />
                                            </Grid>
                                        );
                                    }
                                )}
                            </Grid>
                        )
                    );
                }
            })}
            <Grid className="section" container spacing={4}></Grid>
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
