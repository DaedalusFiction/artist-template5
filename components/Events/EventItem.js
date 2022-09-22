import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";
import { formatDate } from "../../utility/general";
import lightTheme from "../../styles/themes/lightTheme";
import { ArrowRightAlt } from "@mui/icons-material";

const EventItem = ({ event }) => {
    const start = formatDate(event.startDate);
    const end = formatDate(event.endDate);
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    {event.image.url && (
                        <NativeImage image={event.image} maxSize={600} />
                    )}
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
                            <Typography variant="h2">{event.name}</Typography>
                            <Typography variant="h4">{`${start} - ${end}`}</Typography>
                            <Typography variant="h5">{`${event.venue}, ${event.startTime}`}</Typography>
                            <br />
                            <Typography
                                sx={{
                                    color: lightTheme.palette.custom.lightMuted,
                                }}
                            >
                                {event.description}
                            </Typography>
                            <br />
                        </Box>
                        <Box>
                            <Button
                                variant={event.button.variant}
                                href={event.button.href}
                                size="large"
                                endIcon={<ArrowRightAlt />}
                            >
                                {event.button.text}
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
