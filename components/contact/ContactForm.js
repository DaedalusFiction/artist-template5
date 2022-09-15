import {
    Button,
    Input,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ContactFormField from "./ContactFormField";

import emailjs from "@emailjs/browser";

const contactConfig = {
    website: "designer-template",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },

        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        {
            name: "Service",
            type: "dropdown",
            options: ["Service One", "Service Two", "Service Three"],
            value: "",
        },
    ],
};

const ContactForm = () => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(contactConfig))
    );
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSendEmail = () => {
        const templateParams = {
            website: formData.website,
            email: formData.fields[0].value,
            interest: formData.fields[1].value,
            service: formData.fields[2].value,
        };

        emailjs
            .send(
                "service_tmo76bn",
                "template_pfang7n",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
            )
            .then(function () {
                setIsSubmitted(true);
            });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                minWidth: "45ch",
            }}
        >
            {!isSubmitted ? (
                <>
                    {formData.fields.map((field, index) => {
                        return (
                            <Box key={index}>
                                <ContactFormField
                                    index={index}
                                    field={field}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </Box>
                        );
                    })}
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleSendEmail}
                    >
                        Submit
                    </Button>
                </>
            ) : (
                <Typography>Thanks! We will be in touch soon!</Typography>
            )}
        </Box>
    );
};

export default ContactForm;
