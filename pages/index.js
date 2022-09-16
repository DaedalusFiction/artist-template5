import BlockPhoto from "../components/general/BlockPhoto";
import BlockText from "../components/general/BlockText";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Meta from "../components/home/Meta";
import MosaicSection from "../components/mosaic/MosaicSection";

import {
    siteName,
    homeGalleryContent,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    blockPhotoContentTwo,
} from "../siteInfo";
import HomeGallery from "../components/home/HomeGallery";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <Box sx={{ position: "relative" }}>
            <Meta siteName={siteName} />
            <Hero siteName={siteName} />
            <HomeGallery images={homeGalleryContent.images} />
            {/* <BlockText text={blockTextOne} />
      <MosaicSection
        mosaicSectionContent={mosaicSectionContentOne}
        variation={1}
      />
      <Services preview/>
      <BlockPhoto blockPhotoContent={blockPhotoContentOne} reverse />
      <BlockText text={blockTextTwo} />
      <BlockPhoto blockPhotoContent={blockPhotoContentTwo} />
      <MosaicSection
        reverse
        mosaicSectionContent={mosaicSectionContentTwo}
        variation={2}
      />
      <BlockText text={blockTextThree} />
      <MosaicSection
        mosaicSectionContent={mosaicSectionContentThree}
        variation={3}
      /> */}
        </Box>
    );
}
