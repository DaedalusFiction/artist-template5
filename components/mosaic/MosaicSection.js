import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import Mosaic from "./Mosaic";

const MosaicSection = ({ mosaicSectionContent, reverse, variation }) => {
    return (
        <Box
            className="section"
            sx={{ backgroundColor: mosaicSectionContent.backgroundColor }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={6}
                    wrap={reverse ? "wrap-reverse" : "wrap"}
                >
                    <Grid item xs={12} lg={4} order={reverse ? "1" : "0"}>
                        <Box
                            className="flex-1"
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "45ch",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: {
                                        xs: "center",
                                        lg: reverse ? "start" : "end",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: reverse ? "start" : "end",
                                        },
                                    }}
                                >
                                    {mosaicSectionContent.title}
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: reverse ? "start" : "end",
                                        },
                                    }}
                                >
                                    {mosaicSectionContent.content}
                                </Typography>
                                <br />
                                <Link href={mosaicSectionContent.button.href}>
                                    <Button
                                        size="large"
                                        color="secondary"
                                        sx={{ width: "fit-content" }}
                                        variant={
                                            mosaicSectionContent.button.variant
                                        }
                                    >
                                        {mosaicSectionContent.button.text}
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8} order={reverse ? "0" : "1"}>
                        <Mosaic
                            images={mosaicSectionContent.images}
                            variation={variation}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MosaicSection;
