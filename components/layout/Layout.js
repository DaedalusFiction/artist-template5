import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Navbar />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
