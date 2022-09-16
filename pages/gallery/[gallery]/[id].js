import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";

const Project = ({ image }) => {
  const [ratio, setRatio] = useState(1 / 1); // default to 16:9
  return (
    <PageLayout name={image.fields[0].value}>
      <Box className="section">
        {image && (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
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
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                {image.fields.map((field, index) => {
                  return (
                    <Grid container key={index}>
                      <Grid item xs={4}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "bold" }}
                        >
                          {field.name}:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="subtitle2"
                          sx={{ whiteSpace: "pre-wrap" }}
                        >
                          {field.value.trim()}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </PageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const docSnap = await getDoc(
    doc(db, `projects/${context.params.gallery}/images/${context.params.id}`)
  );
  let image = docSnap.data();

  return {
    props: {
      image,
    },
  };
};

export default Project;
