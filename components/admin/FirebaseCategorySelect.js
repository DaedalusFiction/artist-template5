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
import { galleryCategories, gallerySubcategories } from "../../siteInfo";

//will need to refactor this to avoid duplication

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

    const handleSelectedSubcategoriesChange = (e, index) => {
        const selectedValue = gallerySubcategories[index].name;
        var newSelectedCategories;
        if (e.target.checked) {
            newSelectedCategories = [...formData.subCategories, selectedValue];
        } else {
            newSelectedCategories = formData.subCategories.filter(
                (category) => category !== selectedValue
            );
        }

        const newFormData = {
            ...formData,
            subCategories: newSelectedCategories,
        };

        setFormData(newFormData);
    };

    return (
        <Box>
            <Typography variant="h6">Select Categories: </Typography>
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
            <Typography variant="h6">Select Subcategories: </Typography>
            <List dense>
                {gallerySubcategories.map((category, index) => {
                    return (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={(e) => {
                                        handleSelectedSubcategoriesChange(
                                            e,
                                            index
                                        );
                                    }}
                                    value={category.name}
                                    checked={formData.subCategories.includes(
                                        category.name
                                    )}
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
