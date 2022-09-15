import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Header from "./Header";

const PageLayout = ({ name, children }) => {
    return (
        <>
            {/* <Header /> */}
            <Box className="section">
                <Container maxWidth="xl">
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        {name}
                    </Typography>
                    {children}
                </Container>
            </Box>
        </>
    );
};

export default PageLayout;
