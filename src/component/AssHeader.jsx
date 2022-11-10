import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AssHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          background: "#26AAE1",
          width: "100%",
          height: "116px",
          p: "0 50px",
          gap: 8,
          alignItems: 'center'
        }}
      >
        <CloseIcon sx={{ color: "#fff", fontWeight: '700', fontSize: '36px' }} />
        <Typography sx={{ color: "#fff", fontWeight: '700', fontSize: '36px' }}>New Transhipment Entry</Typography>
      </Box>
    </>
  );
};

export default AssHeader;
