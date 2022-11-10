import React from "react";
import { Box, Typography } from "@mui/material";
import Select from "react-select";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

const style = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const AssInput = (props) => {
  return (
    <Box
      sx={{
        width: "50%",
        //  background: 'red'
      }}
    >
      <Typography
        sx={{ fontSize: "18px", fontWeight: "500", color: "#000000" }}
      >
        {props.label}
      </Typography>
      <Box sx={{ display: "flex", gap: 1.5, width: "220%" }}>
        <Select
          styles={style}
          placeholder={props.placeholder}
          options={props.options}
          className="react-selectcomponent"
        />
        <AddIcon
          sx={{
            background: "#26AAE1",
            height: "50px",
            width: "50px",
            borderRadius: "5px",
            color: "#fff",
          }}
        />
      </Box>
    </Box>
  );
};

export const SecondInput = (props) => {
  return (
    <Box
      sx={{ width: "50%", float: props.float, marginRight: props.marginRight }}
    >
      <Typography
        sx={{ fontSize: "18px", fontWeight: "500", color: "#000000" }}
      >
        {props.label}
      </Typography>
      <Box sx={{ display: "flex", gap: 1.5, width: "220%" }}>
        <Select
          styles={style}
          placeholder={props.placeholder}
          options={props.options}
          className="react-selectcomponent"
        />
      </Box>
    </Box>
  );
};

export const AssTextField = (props) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label={props.label}
        InputProps={{ disableUnderline: true }}
        variant="filled"
        
      />
    </Box>
  );
};

export default AssInput;
