import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React from "react";

const ContactFormField = ({ field, formData, setFormData, index }) => {
    const handleFieldChange = (e) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    switch (field.type) {
        case "text":
            return (
                <TextField
                    fullWidth
                    type={field.type}
                    color="secondary"
                    label={field.name}
                    multiline={field.multiline}
                    rows={field.rows}
                    value={field.value}
                    onChange={handleFieldChange}
                />
            );
        case "dropdown":
            return (
                <FormControl fullWidth>
                    <InputLabel id="interest-label">Interest</InputLabel>
                    <Select
                        labelId="interest-label"
                        id="interest-select"
                        label={field.name}
                        value={field.value}
                        onChange={handleFieldChange}
                    >
                        {field.options.map((option, index) => {
                            return (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            );
        default:
            return <div>ho</div>;
    }
};

export default ContactFormField;
