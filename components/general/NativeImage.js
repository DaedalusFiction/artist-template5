import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = ({ image, size }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9

    return (
        <Image
            src={image.url}
            blurDataURL={image}
            placeholder="blur"
            //has to be unoptimized to work with firebase storage, apparently
            unoptimized
            width={size}
            height={size / ratio}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                setRatio(naturalWidth / naturalHeight)
            }
            objectFit="cover"
            alt={image.alt}
        />
    );
};

export default GalleryImage;
