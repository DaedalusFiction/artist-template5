import React from "react";
import EventsItems from "../../components/Events/EventsItems";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="EVENTS">
            <EventsItems />
        </PageLayout>
    );
};

export default index;
