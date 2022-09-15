import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import SizedImage from "./SizedImage";

const BlockPhoto = ({ blockPhotoContent, reverse }) => {
  return (
    <Box
      sx={{
        // background: {
        //     xs: `url(${blockPhotoContent.image.url})`,
        //     md: ,
        // },
        backgroundColor: blockPhotoContent.background,
        backgroundImage: {
          xs: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
  url(${blockPhotoContent.image.url})`,
          md: "none",
        },
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Grid container wrap={reverse ? "wrap-reverse" : "wrap"}>
        <Grid item xs={12} md={6} order={reverse ? 1 : 0}>
          <SizedImage
            image={blockPhotoContent.image}
            height="100%"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} md={6} order={reverse ? 0 : 1}>
          <Container>
            <Box
              className="flex-1"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                padding: "16rem 0",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: {
                      xs: lightTheme.palette.custom.light,
                      md: lightTheme.palette.custom.dark,
                    },
                  }}
                >
                  {blockPhotoContent.title}
                </Typography>
                <br />
                <Typography
                  variant="h2"
                  sx={{
                    color: {
                      xs: lightTheme.palette.custom.light,
                      md: lightTheme.palette.custom.dark,
                    },
                  }}
                >
                  {blockPhotoContent.content}
                </Typography>
                <br />
                <Box>
                  <Link href={blockPhotoContent.button.href}>
                    <Button
                      variant={blockPhotoContent.button.variant}
                      size="large"
                    >
                      {blockPhotoContent.button.text}
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlockPhoto;
