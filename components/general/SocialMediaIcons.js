import { IconButton, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
const SocialMediaIcons = ({ color, fontSize }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Tooltip title="twitter">
                <Link href="https://instagram.com">
                    <IconButton aria-label="delete" color={color}>
                        <InstagramIcon sx={{ fontSize: fontSize }} />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip title="twitter">
                <Link href="https://instagram.com">
                    <IconButton aria-label="delete" color={color}>
                        <FacebookIcon sx={{ fontSize: fontSize }} />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip title="twitter">
                <Link href="https://instagram.com">
                    <IconButton color={color} aria-label="add an alarm">
                        <TwitterIcon sx={{ fontSize: fontSize }} />
                    </IconButton>
                </Link>
            </Tooltip>
        </Stack>
    );
};

export default SocialMediaIcons;
