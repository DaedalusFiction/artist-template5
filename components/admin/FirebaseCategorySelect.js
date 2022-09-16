import {
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { galleryCategories } from "../../siteInfo";

const FirebaseCategorySelect = ({ formData, setFormData }) => {
    const handleSelectedCategoriesChange = (e, index) => {
        const selectedValue = galleryCategories[index].name;
        var newSelectedCategories;
        if (e.target.checked) {
            newSelectedCategories = [...formData.categories, selectedValue];
        } else {
            newSelectedCategories = formData.categories.filter(
                (category) => category !== selectedValue
            );
        }

        const newFormData = {
            ...formData,
            categories: newSelectedCategories,
        };

        setFormData(newFormData);
    };

    return (
        <Box>
            <Typography variant="h6">Select Categories</Typography>
            <List dense>
                {galleryCategories.map((category, index) => {
                    return (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={(e) => {
                                        handleSelectedCategoriesChange(
                                            e,
                                            index
                                        );
                                    }}
                                    value={category.name}
                                    checked={formData.categories.includes(
                                        category.name
                                    )}
                                    // inputProps={{ "aria-labelledby": labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText
                                    // id={labelId}
                                    primary={category.name}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default FirebaseCategorySelect;
