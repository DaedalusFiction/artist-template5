import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const PaginationBar = ({
    pageLimit,
    firstImage,
    images,
    handlePreviousPage,
    handleNextPage,
}) => {
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
                    // startIcon={<ArrowBackIosIcon />}
                    onClick={handlePreviousPage}
                >
                    Previous Page
                </Button>
            )}
            <Typography variant="subtitle1" sx={{}}>
                {firstImage + 1} -{" "}
                {Math.min(firstImage + pageLimit, images.length)} of{" "}
                {images.length}
            </Typography>
            {firstImage + pageLimit < images.length && (
                <Button
                    color="secondary"
                    // endIcon={<ArrowForwardIosIcon />}
                    onClick={handleNextPage}
                >
                    Next Page
                </Button>
            )}
        </Box>
    );
};

export default PaginationBar;
