import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GalleryImage from "./GalleryImage";

const Gallery = ({ images }) => {
    const [columns, setColumns] = useState([[], [], []]);
    const router = useRouter();
    const { category, subCategory } = router.query;
    const [firstImage, setFirstImage] = useState(0);
    const [pageLimit, setPageLimit] = useState(20);
    const handleNextPage = () => {
        setFirstImage(Math.min(firstImage + pageLimit, images.length - 1));
    };
    const handlePreviousPage = () => {
        setFirstImage(Math.max(firstImage - pageLimit, 0));
    };
    const PaginationBar = () => {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1em",
                    margin: "2em 0",
                }}
            >
                {firstImage > 0 && (
                    <Button
                        color="secondary"
                        // startIcon={<ArrowBackIosIcon />}
                        onClick={handlePreviousPage}
                    >
                        Previous Page
                    </Button>
                )}
                <Typography variant="subtitle1" sx={{}}>
                    {firstImage + 1} -{" "}
                    {Math.min(firstImage + pageLimit, images.length)} of{" "}
                    {images.length}
                </Typography>
                {firstImage + pageLimit < images.length && (
                    <Button
                        color="secondary"
                        // endIcon={<ArrowForwardIosIcon />}
                        onClick={handleNextPage}
                    >
                        Next Page
                    </Button>
                )}
            </Box>
        );
    };

    useEffect(() => {
        function sortImages() {
            let newColumns = [[], [], []];
            images
                .slice(firstImage, firstImage + pageLimit)
                .forEach((image, index) => {
                    newColumns[index % 3].push(image);
                });
            setColumns(newColumns);
        }
        sortImages();
    }, [images, firstImage, pageLimit]);

    return (
        <Box sx={{ padding: "3rem 0" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                Images
            </Typography>
            <Grid container spacing={2}>
                {columns &&
                    columns.length > 0 &&
                    columns.map((column, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                {column.map((image, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{ margin: "1rem 0" }}
                                        >
                                            <GalleryImage
                                                image={image}
                                                category={category}
                                                subCategory={
                                                    subCategory || "all"
                                                }
                                            />
                                        </Box>
                                    );
                                })}
                            </Grid>
                        );
                    })}
            </Grid>
            <PaginationBar />
        </Box>
    );
};

export default Gallery;
