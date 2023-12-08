import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { Iconly } from "react-iconly";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const InstructorReviewDialog = (props) => {
  const { open, onClose, onSubmit, title, ...restProps } = props;
  const [value, setValue] = React.useState(3);

  return (
    <>
      <Dialog
        open={open}
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
        {...restProps}
      >
        {/* <DialogTitleXCloseButton onClose={onClose} /> */}
        <DialogContent id="alert-dialog-slide-description" className="">
          <div className="w-full flex justify-between items-center mb-4">
            <Typography variant="h5" className="font-bold">
              {title}
            </Typography>
            <div className="text-mui-primary-contrastText hover:text-mui-secondary-dark transition ease duration-150 cursor-pointer">
              <Iconly
                name="CloseSquare"
                size="large"
                set="lightBorder"
                onClick={onClose}
                // primaryColor="white"
                // secondaryColor="white"
              />
            </div>
          </div>
          <div className="my-8 flex flex-col gap-2">
            <Typography component="legend">Select Rating *</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            {/* <Typography component="legend">Feedback Title *</Typography> */}
            <TextField
              id="outlined-basic"
              label="Description"
              placeholder="Feedback Description"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            {/* <Typography component="legend">Feedback *</Typography> */}
            <TextField
              id="outlined-textarea"
              label="Feedback"
              placeholder="Enter Feedback"
              rows={4}
              multiline
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions className="p-6 pt-0">
          <Button
            size="large"
            className="bg-mui-primary-contrastText text-mui-error-main hover:bg-mui-error-lighter ease duration-150"
            onClick={onClose}
            startIcon={
              <Iconly
                name="CloseSquare"
                size="small"
                set="lightBorder"
                // primaryColor="white"
                // secondaryColor="white"
              />
            }
          >
            Close
          </Button>
          <Button size="large" color="primary" onClick={onSubmit}>
            Add Review
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InstructorReviewDialog;
