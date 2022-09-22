import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import EventItem from "../../components/Events/EventItem";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";
import { formatDate } from "../../utility/general";

// const events = [
//     {
//         timeUploaded: new Date(),
//         image: { url: "/images/placeholder.webp", alt: "event poster" },
//         fields: [
//             { name: "Title", type: "text", value: "Title" },
//             { name: "Start Date", type: "date", value: formatDate(new Date()) },
//             { name: "End Date", type: "date", value: "" },
//             { name: "Venue", type: "text", value: "venue" },
//             { name: "Time", type: "text", value: "8 pm" },
//             {
//                 name: "Description",
//                 type: "text",
//                 value: "Description",
//                 multiline: true,
//                 rows: 4,
//             },
//             {
//                 name: "Venue Website",
//                 type: "text",
//                 value: "https://fictionalweb.com",
//             },
//         ],
//     },
// ];

const index = ({ events }) => {
    return (
        <PageLayout name="EVENTS">
            <Container className="section" maxWidth="lg">
                <Typography variant="h2" sx={{ marginBottom: ".5em" }}>
                    Upcoming:
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    {events.map((event, index) => {
                        return (
                            <EventItem
                                key={index}
                                fields={event.fields}
                                image={event.URLs[0]}
                            />
                        );
                    })}
                </Box>
            </Container>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const imagesRef = collection(db, "events");

    const queriedDocuments = await getDocs(imagesRef);
    let events = [];
    queriedDocuments.docs.forEach((doc, index) => {
        events = [...events, doc.data()];
    });

    return {
        props: {
            events,
        },
    };
};

export default index;
