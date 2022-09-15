import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const FirebaseUploadForm = ({ config, updateCounter, setUpdateCounter }) => {
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(config)));
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [fileError, setFileError] = useState("false");
  const fileInputRef = useRef();

  const handleFieldChange = (e, field, index) => {
    const newFieldData = {
      ...formData.fields[index],
      value: e.target.value,
    };

    let newFormDataFields = formData.fields;
    newFormDataFields[index] = newFieldData;
    setFormData({ ...formData, fields: newFormDataFields });
  };

  const handleImagesChange = (e) => {
    setFileError("false");
    if (e.target.files[0].size > 1097152) {
      setFileError("File size must be less than 1MB");
      return;
    }
    setSelectedImages([...selectedImages, e.target.files[0]]);
    setFileError(false);
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (e) => {
        if (previews.includes(e.target.result)) {
          setFileError("Please select another file");
        } else {
          setPreviews([...previews, e.target.result]);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
    fileInputRef.current.children[0].value = null;
  };

  const handleRemovePreview = (preview) => {
    const newPreviews = previews.filter((myPreview) => myPreview !== preview);
    setPreviews(newPreviews);
  };

  const handleRemoveSelectedImage = (index) => {
    const newSelectedImages = selectedImages.splice(index, 1);
    setSelectedImages(newSelectedImages);
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      return;
    }
    var downloadURLs = [];
    let error = false;

    await Promise.all(
      selectedImages.map(async (image) => {
        const storageRef = ref(
          storage,
          `projects/${formData.category}/${image.name}`
        );
        const task = await getDownloadURL(storageRef).then(
          (res) => {
            //file already exists
            console.log("exists");
            error = true;
          },
          (res) => {
            //file doesn't exist
            console.log("doesn't exist");
          }
        );
      })
    );

    if (error) {
      setFileError(
        "Cannot upload. One of these files already exists in storage."
      );

      return;
    } else {
      setIsUploading(true);
      selectedImages.forEach(async (image) => {
        const storageRef = ref(
          storage,
          `projects/${formData.category}/${image.name}`
        );

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            //to show upload progress as percentage
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // setUploadProgress(progress);
          },
          (error) => {
            // setUploadError(true);
          },
          () => {
            // creates firestore database entry
            // setUploadProgress(0);
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              downloadURLs = [...downloadURLs, downloadURL];
              if (downloadURLs.length >= selectedImages.length) {
                setDoc(
                  doc(
                    db,
                    `projects/${formData.category}/images`,
                    formData.fields[0].value
                  ),
                  {
                    ...formData,
                    id: formData.fields[0].value,
                    URLs: downloadURLs,
                    dateUploaded: Date.now(),
                  }
                );
              }

              setFormData(JSON.parse(JSON.stringify(config)));
              setPreviews([]);
              setSelectedImages([]);
              setIsUploading(false);
              setUpdateCounter(updateCounter + 1);
              setFileError("");
            });
          }
        );
      });
    }
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Typography variant="h3">Upload new {formData.category} item.</Typography>
      {formData.fields.map((field, index) => {
        return (
          <TextField
            type={field.type}
            color="secondary"
            label={field.name}
            key={index}
            multiline={field.multiline}
            rows={field.rows}
            value={field.value}
            onChange={(e) => {
              handleFieldChange(e, field, index);
            }}
          />
        );
      })}
      <Box>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            console.log(fileInputRef.current.children[0].click());
            fileInputRef.current.click();
          }}
        >
          select file
        </Button>
        <Input
          variant="contained"
          type="file"
          sx={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImagesChange}
        >
          Select File
        </Input>
      </Box>
      <Grid container spacing={1}>
        {previews.length > 0 &&
          previews.map((preview, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <Image
                    blurDataURL={preview}
                    placeholder="blur"
                    src={preview}
                    alt="image preview"
                    width="100px"
                    height="100px"
                    layout="responsive"
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      handleRemovePreview(preview);
                      handleRemoveSelectedImage(index);
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            );
          })}
      </Grid>

      <ButtonWithConfirm
        handleClick={handleUpload}
        isDisabled={isUploading}
        buttonText="Upload"
        dialogText="Are you sure you want to upload this item?"
        notificationText="File Uploading..."
      />
      {fileError !== "false" && <Typography>{fileError}</Typography>}
    </Box>
  );
};

export default FirebaseUploadForm;
