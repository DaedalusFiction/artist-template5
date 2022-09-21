import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import SizedImage from "../general/SizedImage";

const GalleryCategoryPreview = ({ category }) => {
    return (
        <Link href={category.href}>
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
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    );
};

export default GalleryCategoryPreview;
