import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlockText = ({ text }) => {
    return (
        <Box
            className="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                backgroundColor: text.backgroundColor,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    maxWidth: "35ch",
                }}
            >
                {text.title}
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    maxWidth: "35ch",
                    fontSize: { xs: "2rem", md: "3rem" },
                }}
            >
                {text.body}
            </Typography>
        </Box>
    );
};

export default BlockText;
