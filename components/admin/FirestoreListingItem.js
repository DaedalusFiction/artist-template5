import { Box, IconButton, TextField, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { db, storage } from "../../firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import ButtonWithConfirm from "../general/ButtonWithConfirm";
import lightTheme from "../../styles/themes/lightTheme";

const FirestoreListingItem = ({
  image,
  category,
  updateCounter,
  setUpdateCounter,
  setShownImages,
}) => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(image.data()))
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleDelete = async () => {
    setIsUpdating(true);
    let urls = image.data().URLs;
    urls.forEach((url) => {
      deleteObject(ref(storage, url));
    });
    await deleteDoc(doc(db, category, image.id));
    setUpdateCounter(updateCounter + 1);
    setShownImages([]);
    setIsUpdating(false);
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    const docRef = doc(db, category, image.id);
    await setDoc(docRef, formData).then(() => {
      setIsExpanded(false);
      setIsUpdating(false);
    });
  };

  const handleFieldChange = (e, field, index) => {
    const newFieldData = {
      ...formData.fields[index],
      value: e.target.value,
    };
    let newFormDataFields = formData.fields;
    newFormDataFields[index] = newFieldData;
    setFormData({ ...formData, fields: newFormDataFields });
  };

  return (
    <Box>
      {!isExpanded ? (
        <Box
          sx={{
            border: lightTheme.border,
            padding: ".5em",
            margin: ".5em 0",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={handleExpand}
        >
          <Typography>{image.data().id}</Typography>
          <ExpandMoreIcon />
        </Box>
      ) : (
        <Box
          sx={{
            border: lightTheme.border,
            padding: ".5em",
            margin: ".5em 0",
            display: "flex",
            flexDirection: "column",
            gap: ".5em",
          }}
        >
          {image &&
            formData.fields.map((field, index) => {
              return (
                <TextField
                  fullWidth
                  type={field.type}
                  color="secondary"
                  label={field.name}
                  key={index}
                  multiline={true}
                  rows={field.rows}
                  value={field.value}
                  onChange={(e) => {
                    handleFieldChange(e, field, index);
                  }}
                />
              );
            })}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: ".5em",
            }}
          >
            <Box sx={{ display: "flex", gap: "1em" }}>
              <ButtonWithConfirm
                handleClick={handleUpdate}
                isDisabled={isUpdating}
                dialogText="Are you sure you want to update this item?"
                buttonText="update"
                notificationText="Item Updated!"
              />
              <ButtonWithConfirm
                handleClick={handleDelete}
                dialogText="Are you sure you want to delete this item permanently?"
                buttonText="delete"
                notificationText="Item Deleted!"
                isDisabled={isUpdating}
              />
            </Box>
            <IconButton variant="contained" onClick={handleCollapse}>
              <ExpandLessIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FirestoreListingItem;
