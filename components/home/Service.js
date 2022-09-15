import { Check } from "@mui/icons-material";
import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import SizedImage from "../general/SizedImage";

const Service = ({ service, preview }) => {
    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "300ms",
                height: "100%",
                "&:hover": {
                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
                    transform: "translate(-3px, -3px)",
                },
            }}
        >
            <Box>
                <SizedImage height="12rem" width="100%" image={service.image} />
                <Box sx={{ padding: "2rem 1rem" }}>
                    <Typography
                        sx={{ textAlign: "center", fontWeight: "400" }}
                        variant="h3"
                    >
                        {service.title}
                    </Typography>
                    <br />
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        {service.price}
                    </Typography>
                    <br />
                    <Typography sx={{ textAlign: "center" }}>
                        {service.description}
                    </Typography>
                    <br />
                    <br />
                    {!preview && (
                        <Box>
                            <List dense>
                                {service.features.map((feature, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={feature.primaryText}
                                                secondary={
                                                    feature.secondaryText
                                                }
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Box>
                    )}
                </Box>
            </Box>
            <Box
                className="flex-1"
                sx={{ justifyContent: "center", marginBottom: "1em" }}
            >
                <Link href={service.button.href}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        // tabIndex={-1}
                    >
                        {service.button.text}
                    </Button>
                </Link>
            </Box>
        </Paper>
    );
};

export default Service;
