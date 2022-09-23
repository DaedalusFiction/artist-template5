import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function useGetEvents(folder) {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        async function getEvents() {
            const q = query(
                //change this based on Firebase file structure
                collection(db, folder),
                orderBy("dateUploaded", "desc")
            );

            const docsSnap = await getDocs(q);
            let newEvents = [];
            docsSnap.docs.forEach((doc, index) => {
                newEvents = [...newEvents, doc];
            });
            setEvents(newEvents);
        }

        getEvents();
    }, [folder]);
    return [events];
}

export default useGetEvents;
