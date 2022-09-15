import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function useGetImages(category, updateCounter, lastVisible) {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function getImages() {
            const q = query(
                //change this based on Firebase file structure
                collection(db, `projects/${category}/images`),
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
    }, [category, lastVisible, updateCounter]);
    return [images];
}

export default useGetImages;
