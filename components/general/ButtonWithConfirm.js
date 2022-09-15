import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../../firebase";
import Notification from "./Notification";

export default function ButtonWithConfirm({
  buttonText,
  dialogText,
  notificationText,
  handleClick,
  isDisabled,
}) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogIsOpen(true);
  };

  const handleNo = () => {
    setDialogIsOpen(false);
  };

  const handleYes = async () => {
    handleClick();
    setDialogIsOpen(false);
    setNotificationOpen(true);
    // setUpdateCounter(updateCounter + 1);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
      <Dialog
        open={dialogIsOpen}
        onClose={handleNo}
        aria-labelledby="confirm-action"
        aria-describedby="confirm-action-description"
      >
        <DialogTitle id="delete-photo">{dialogText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-action-description">
            This action cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleNo}>
            No
          </Button>
          <Button color="secondary" onClick={handleYes}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Notification
        open={notificationOpen}
        setOpen={setNotificationOpen}
        message={notificationText}
      />
    </div>
  );
}
