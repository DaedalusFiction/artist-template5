import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Button, Grid, Slide, useScrollTrigger } from "@mui/material";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { useState } from "react";
import { navigateToTop } from "../../utility/navigateToTop";
import { pages, siteName, navbar } from "../../siteInfo";
import SocialMediaIcons from "../general/SocialMediaIcons";
import { useRouter } from "next/router";

const activeStyle = {
    color: lightTheme.palette.custom.light,
};

const inactiveStyle = {
    color: lightTheme.palette.custom.light,
};

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const currentPage = router.pathname.split("/")[1];
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    const handleMouseEnter = () => {
        setExpanded(true);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
    };

    return (
        <Slide
            direction="down"
            in={trigger}
            sx={{
                position: "fixed",
                top: "0",
                zIndex: "100",
                display: { xs: "inherit", lg: "flex" },
            }}
        >
            <AppBar position="static" onMouseLeave={handleMouseLeave}>
                <Container sx={{ padding: ".5rem 0" }} maxWidth="xl">
                    <Grid container>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", lg: "none" },
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", lg: "none" },
                                    }}
                                >
                                    {pages.map((page, index) => {
                                        return (
                                            <MenuItem
                                                onClick={() => {
                                                    navigateToTop();
                                                    handleCloseNavMenu();
                                                }}
                                                key={index}
                                            >
                                                <Typography textAlign="center">
                                                    <Link
                                                        href={"/" + page.href}
                                                    >
                                                        {page.name}
                                                    </Link>
                                                </Typography>
                                            </MenuItem>
                                        );
                                    })}
                                </Menu>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="h3"
                                noWrap
                                onClick={() => {
                                    navigateToTop();
                                }}
                                sx={{
                                    mr: 2,
                                    display: { xs: "flex", lg: "none" },
                                    fontSize: "1.75rem",
                                    flexGrow: 1,
                                    fontWeight: 700,
                                    color: lightTheme.palette.custom.dark,
                                }}
                            >
                                <Link href="/" style={{ color: "inherit" }}>
                                    {siteName}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* desktop view */}
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography
                                // className="nav-link"
                                variant="h4"
                                onClick={() => {
                                    navigateToTop();
                                }}
                                sx={{
                                    margin: "0 1em",
                                    transition: "150ms",
                                    color:
                                        "/" + currentPage === "/"
                                            ? lightTheme.palette.custom.light
                                            : lightTheme.palette.custom.dark,
                                    "&:hover": {
                                        color: lightTheme.palette.custom.light,
                                    },
                                }}
                            >
                                <Link href="/">{siteName}</Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    justifyContent: "space-around",
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Link href={page.href} key={index}>
                                        <Button
                                            onMouseEnter={handleMouseEnter}
                                            size="large"
                                            sx={{
                                                color:
                                                    currentPage === page.href
                                                        ? lightTheme.palette
                                                              .custom.light
                                                        : lightTheme.palette
                                                              .custom.dark,
                                                "&:hover": {
                                                    color: lightTheme.palette
                                                        .custom.light,
                                                },
                                            }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1em",
                                    justifyContent: "end",
                                    width: "100%",
                                }}
                            >
                                <SocialMediaIcons
                                    color="secondary"
                                    fontSize="20px"
                                />
                                <Link href={navbar.buttonOne.href}>
                                    <Button
                                        color="secondary"
                                        variant={navbar.buttonOne.variant}
                                    >
                                        {navbar.buttonOne.text}
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    {expanded && (
                        <Grid container>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={4}>
                                {pages.map((page, index) => {
                                    return (
                                        <Box key={index}>
                                            {page.subPages.length > 0 &&
                                                page.subPages.map(
                                                    (subPage, index) => {
                                                        return (
                                                            <Typography
                                                                key={index}
                                                                sx={{
                                                                    margin: ".25em 0",
                                                                    transition:
                                                                        "150ms",
                                                                    "&:hover": {
                                                                        color: lightTheme
                                                                            .palette
                                                                            .custom
                                                                            .light,
                                                                    },
                                                                }}
                                                            >
                                                                <Link
                                                                    href={
                                                                        subPage.href
                                                                    }
                                                                >
                                                                    {
                                                                        subPage.name
                                                                    }
                                                                </Link>
                                                            </Typography>
                                                        );
                                                    }
                                                )}
                                        </Box>
                                    );
                                })}
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                    )}
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Navbar;
