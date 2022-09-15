import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = ({ image }) => {
  const [ratio, setRatio] = useState(1 / 1); // default to 16:9

  return (
    <Box>
      <Link href={`/projects/${image.category}/${image.id}`}>
        <Box
          className="link"
          sx={{
            transition: "300ms",
            "&:hover": { filter: "brightness(60%)" },
          }}
        >
          <Image
            src={image.URLs[0]}
            blurDataURL={image}
            placeholder="blur"
            //has to be unoptimized to work with firebase storage, apparently
            unoptimized
            width="100"
            height={100 / ratio}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setRatio(naturalWidth / naturalHeight)
            }
            layout="responsive"
            alt={image.description}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default GalleryImage;
