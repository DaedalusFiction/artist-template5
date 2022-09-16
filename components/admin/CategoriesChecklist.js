import {
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";

const CategoriesChecklist = ({ categories }) => {
    return (
        <List>
            {categories.map((category, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemButton onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={true}
                                    tabIndex={-1}
                                />
                            </ListItemIcon>
                            <ListItemText primary={`category`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default CategoriesChecklist;
