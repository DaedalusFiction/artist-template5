import { Box } from "@mui/system";
import Image from "next/image";

const SizedImage = ({ image, height, width }) => {
  return (
    <Box
      sx={{
        position: "relative",
        transition: "300ms",
        width: width,
        height: height,
      }}
    >
      <Image
        src={image.url}
        blurDataURL={image.url}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        alt={image.alt}
      />
    </Box>
  );
};

export default SizedImage;
