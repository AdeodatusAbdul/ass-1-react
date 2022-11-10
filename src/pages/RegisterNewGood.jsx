import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Modal,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { AssTextField } from "../component/AssInput";
import AssButton from "../component/AssButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 10,
  pb: '20px',
};

const RegisterNewGood = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ background: "#26AAE1", height: '116px' }}>
          <Typography sx={{color: 'white', fontSize: '32px', fontWeight: '700', ml: 5, pt: 4}}>Add New Good</Typography>
          <AssButton
            float="right"
            margin="-40px 10px 0 0"
            handleClick={props.onClose}
            icon={<CloseIcon sx={{ color: "white", fontSize: '50px' }} />}
          />
        </Box>
        {/* ++++++++++ stepper label+++++++++++ */}

        <Grid
          container
          // spacing={5}
          sx={{
            // display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            padding: "30px 0",
            // margin: 'auto',
            // background: 'blue'
          }}
        >
          <Grid item md={10}>
            <Typography sx={{ ml: 1 }}>Names</Typography>
            <AssTextField label="Name your good" />
          </Grid>
          <Grid item md={10}>
            <Typography sx={{ ml: 1 }}>Dimension (Optional)</Typography>
            <AssTextField label="Specify size occupied" />
          </Grid>
        </Grid>

        <AssButton
          color="white"
          width="120px"
          height="40px"
          sx={{ mr: 1 }}
          text={
            <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
              Add
            </Typography>
          }
        />
      </Box>
    </Modal>
  );
};

export default RegisterNewGood;
