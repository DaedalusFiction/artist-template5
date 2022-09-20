import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Meta />
            <Navbar />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
