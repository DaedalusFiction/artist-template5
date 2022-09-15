import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import Gallery from "../../../components/gallery/Gallery";
import { db } from "../../../firebase";
import PageLayout from "../../../components/layout/PageLayout";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/system";

const Project = ({ images, category }) => {
  const router = useRouter();
  const { gallery } = router.query;
  const [firstImage, setFirstImage] = useState(0);
  const [pageLimit, setPageLimit] = useState(20);

  const PaginationBar = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
          margin: "2em 0",
        }}
      >
        {firstImage > 0 && (
          <Button
            color="secondary"
            startIcon={<ArrowBackIosIcon />}
            onClick={handlePreviousPage}
          >
            Previous Page
          </Button>
        )}
        <Typography variant="subtitle1" sx={{}}>
          {firstImage + 1} - {Math.min(firstImage + pageLimit, images.length)}{" "}
          of {images.length}
        </Typography>
        {firstImage + pageLimit < images.length && (
          <Button
            color="secondary"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleNextPage}
          >
            Next Page
          </Button>
        )}
      </Box>
    );
  };

  const handleNextPage = () => {
    setFirstImage(Math.min(firstImage + pageLimit, images.length - 1));
  };
  const handlePreviousPage = () => {
    setFirstImage(Math.max(firstImage - pageLimit, 0));
  };

  return (
    <PageLayout name={gallery}>
      <PaginationBar />
      <Gallery
        images={images.slice(firstImage, firstImage + pageLimit)}
        category="projects"
      />
      <PaginationBar />
    </PageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const docsSnap = await getDocs(
    collection(db, `projects/${context.params.gallery}/images`)
  );
  let images = [];
  docsSnap.docs.forEach((doc, index) => {
    images = [...images, doc.data()];
  });

  return {
    props: {
      images,
    },
  };
};

export default Project;
