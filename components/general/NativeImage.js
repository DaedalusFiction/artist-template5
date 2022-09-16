import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = ({ image }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9

    return (
        <Box sx={{ height: "100%", width: "100%" }}>
            <Image
                src={image.url}
                blurDataURL={image}
                placeholder="blur"
                //has to be unoptimized to work with firebase storage, apparently
                unoptimized
                width="100"
                height={100 / ratio}
                onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    setRatio(naturalWidth / naturalHeight)
                }
                objectFit="cover"
                layout="responsive"
                alt={image.alt}
            />
        </Box>
    );
};

export default GalleryImage;
