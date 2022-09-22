import { Container } from "@mui/system";
import React from "react";
import EventItem from "../../components/Events/EventItem";
import PageLayout from "../../components/layout/PageLayout";

const events = [
    {
        name: "First Show",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        type: "show",
        venue: "downtown gallery",
        time: Date.now(),
        description:
            "This is the event description. It's going to be a great time, y'all should come out. BYOB.",
    },
    {
        name: "First Show",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        type: "show",
        venue: "downtown gallery",
        time: Date.now(),
        timeUploaded: Date.now(),
        description:
            "This is the event description. It's going to be a great time, y'all should come out. BYOB.",
    },
];

const index = () => {
    return (
        <PageLayout name="EVENTS">
            <Container maxWidth="lg">
                {events.map((event, index) => {
                    return <EventItem key={index} event={event} />;
                })}
            </Container>
        </PageLayout>
    );
};

export default index;
