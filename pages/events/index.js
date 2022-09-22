import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import EventItem from "../../components/Events/EventItem";
import PageLayout from "../../components/layout/PageLayout";

const events = [
    {
        name: "First Show",
        image: {},
        type: "show",
        venue: "Uptown Gallery",
        startDate: new Date(),
        endDate: new Date(),
        startTime: "8 pm",
        description:
            "This is the event description. It's going to be a great time, y'all should come out. It's going to be a great time, y'all should come out.  There's gonna be dancing and singing and stuff. You don't want to miss it. BYOB.",
        timeUploaded: new Date(),
        button: {
            text: "more details",
            href: "https://fictionalweb.com",
            variant: "contained",
        },
    },
    {
        name: "First Show",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        type: "show",
        venue: "Downtown Gallery",
        startDate: new Date(),
        endDate: new Date(),
        startTime: "9 pm",
        description:
            "This is the event description. It's going to be a great time, y'all should come out. BYOB.",
        timeUploaded: new Date(),
        button: {
            text: "more details",
            href: "https://fictionalweb.com",
            variant: "contained",
        },
    },
];

const index = () => {
    return (
        <PageLayout name="EVENTS">
            <Container className="section" maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    {events.map((event, index) => {
                        return <EventItem key={index} event={event} />;
                    })}
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
