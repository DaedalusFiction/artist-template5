import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";
import lightTheme from "../../styles/themes/lightTheme";
import { ArrowRightAlt } from "@mui/icons-material";
import GalleryImage from "../general/NativeImage";
import Image from "next/image";
import EventImage from "./EventImage";
import { formatDate } from "../../utility/general.js";

const EventItem = ({ fields, image }) => {
    const title = fields[0].value;
    const start = fields[1].value;
    const end = fields[2].value;
    const venue = fields[3].value;
    const time = fields[4].value;
    const description = fields[5].value;
    const website = fields[6].value;

    return (
        <Box>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={5}>
                    <Box>{image && <EventImage image={image} />}</Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                    >
                        <Box>
                            <Typography variant="h2">{title}</Typography>
                            <Typography variant="h4">{`${start} ${
                                end && "through"
                            } ${end}`}</Typography>
                            {
                                <Typography variant="h5">{`${venue}${
                                    time && ","
                                } ${time}`}</Typography>
                            }
                            <br />
                            <Typography
                                sx={{
                                    color: lightTheme.palette.custom.lightMuted,
                                }}
                            >
                                {description}
                            </Typography>
                            <br />
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                href={website}
                                size="large"
                                endIcon={<ArrowRightAlt />}
                            >
                                more details
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ margin: "3rem 0" }} />
        </Box>
    );
};

export default EventItem;
