import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import EventItem from "./EventItem";

const EventsItems = () => {
    const [events] = useGetEvents("events");
    const handle = () => {
        console.log(events[0].data());
    };
    return (
        <Container className="section" maxWidth="lg">
            <Typography
                variant="h2"
                onClick={handle}
                sx={{ marginBottom: ".5em" }}
            >
                Upcoming:
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                {events &&
                    events.map((event, index) => {
                        return (
                            <EventItem
                                key={index}
                                fields={event.data().fields}
                                image={event.data().URLs[0]}
                            />
                        );
                    })}
            </Box>
        </Container>
    );
};

export default EventsItems;
