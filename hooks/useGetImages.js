import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function useGetImages(updateCounter, folder) {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function getImages() {
            const q = query(
                //change this based on Firebase file structure
                collection(db, folder),
                orderBy("dateUploaded", "desc")
            );

            const docsSnap = await getDocs(q);
            let newImages = [];
            docsSnap.docs.forEach((doc, index) => {
                newImages = [...newImages, doc];
            });
            setImages(newImages);
        }

        getImages();
    }, [updateCounter, folder]);
    return [images];
}

export default useGetImages;
