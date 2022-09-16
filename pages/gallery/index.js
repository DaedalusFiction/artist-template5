import { Box, Container, Grid, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Gallery from "../../components/gallery/Gallery";
import PageLayout from "../../components/layout/PageLayout";
import { galleryCategories } from "../../siteInfo";
import SizedImage from "../../components/general/SizedImage";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";

const Projects = () => {
    return (
        <PageLayout name="GALLERY">
            <Grid className="section" container spacing={4}>
                {galleryCategories.map((category, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Link href={`/gallery/${category.name}`}>
                                <Box sx={{ position: "relative" }}>
                                    <SizedImage
                                        image={category.image}
                                        height="25rem"
                                        width="100%"
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "0",
                                            height: "100%",
                                            width: "100%",
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.4)",
                                            left: "0",
                                            opacity: { xs: "100%", lg: "0" },
                                            transition: "300ms",
                                            "&:hover": {
                                                opacity: "100%",
                                            },
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: "white",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {category.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export default Projects;