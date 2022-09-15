import { Box, Typography } from "@mui/material";
import React from "react";
import lightTheme from "../styles/themes/lightTheme";
import { pages } from "../siteInfo";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ side, light }) => {
    const router = useRouter();
    const path = router.pathname;
    console.log(path);
    return (
        <Box
            sx={{
                display: { xs: "none", lg: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100vh",
                padding: "1em 0",
                position: "sticky",
                top: "0",
            }}
        >
            {pages.map((page, index) => {
                return (
                    <Typography
                        key={index}
                        variant="subtitle2"
                        sx={{
                            color:
                                path === page.href
                                    ? "black"
                                    : lightTheme.palette.custom.darkMuted,
                            "&:hover": {
                                color: lightTheme.palette.custom.dark,
                            },
                            transform: "rotate(180deg)",
                            writingMode: {
                                xs: "inherit",
                                lg: "vertical-rl",
                            },
                            textOrientation: "mixed",
                        }}
                    >
                        <Link href={page.href}>{page.name}</Link>
                    </Typography>
                );
            })}
        </Box>
    );
};

export default Sidebar;
