
import React, {useState} from 'react'
import { Box, Divider, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";

import AssHeader from "../component/AssHeader";
import AddIcon from "@mui/icons-material/Add";
import AssInput from "../component/AssInput";
import { SecondInput } from "../component/AssInput";
import AssButton from "../component/AssButton";
import RegisterNewGood from "./RegisterNewGood";
import RegisterNewHandler from './RegisterNewHandler';

const RegisterTranshipment = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [openH, setOpenH] = useState(true)
  const handleOpenH = () => setOpenH(true)
  const handleCloseH = () => setOpenH(false)

  const options = [
    { value: "Benze", label: "Benze" },
    { value: "Carina", label: "Carina" },
    { value: "Toyota", label: "Toyota" },
  ];

  const iconStyle = {
    margin: "auto 2px",
    fontSize: "25px",
    color: "inherit",
  };

  return (
    <Box
      sx={{
        width: "200vh",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AssHeader />
      <Box sx={{ mt: 13, width: "85%" }}>
        <Typography
          sx={{ fontWeight: "700", fontSize: "36px", color: "#26AAE1", mb: 9 }}
        >
          Offloading Car
        </Typography>

        {/* inputs start here !!!!!!!!!!*/}
        <Box
          sx={{
            //  background: 'green',
            display: "flex",
            gap: 10,
          }}
        >
          <AssInput
            options={options}
            placeholder="select car"
            label="Select car plate number"
          />
          <AssInput
            options={options}
            placeholder="select multipe handlers"
            label="Select Handlers"
          />
        </Box>

        <Typography
          sx={{ fontWeight: "700", fontSize: "16px", color: "#26AAE1", mt: 9 }}
        >
          Product details
        </Typography>
        <AssButton
          text={
            <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>
              Add New Product
            </Typography>
          }
          float="right"
          width="170px"
          height="40px"
          borderRadius="5px"
          margin="-25px -2px"
          border="1px solid #26AAE1"
          bgColor="#fff"
          color="#26AAE1"
          bgHoverColor="#fff"
          icon={<AddIcon sx={iconStyle} />}
          handleClick={handleOpen}
        />

        <Divider sx={{ border: "1px solid rgba(38, 170, 225, 0.29)", mt: 3 }} />

        <RegisterNewGood
        open={open} onClose={handleClose}
        />

        <Box
          sx={{
            height: "76px",
            background: "rgba(38, 170, 225, 0.04)",
            border: "1px solid #26AAE1",
            borderRadius: "5px",
            mt: 3,
          }}
        >
          <Box
            sx={{
              width: "12px",
              background: "#26AAE1",
              height: "100%",
              float: "left",
            }}
          />
          <CheckIcon
            fontSize="large"
            sx={{ color: "#26AAE1", float: "right", mr: 2, mt: "15px" }}
          />
          <Box
            sx={{
              display: "flex",
              margin: "auto",
              mt: "25px",
              justifyContent: "space-between",
              pr: 50,
              pl: 10,
            }}
          >
            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
              {" "}
              Sugar{" "}
            </Typography>
            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
              {" "}
              23 items
            </Typography>
            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
              {" "}
              50 KG/item
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            //  background: 'green',
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            mt: 3,
          }}
        >
          <AssInput
            options={options}
            placeholder="select product"
            label="Select product name"
          />
          <SecondInput
            options={options}
            placeholder="Enter number of product item s"
            label="Number of items"
            marginRight="-95px"
          />
        </Box>

        <Box
          sx={{
            //  background: 'green',
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            mt: 3,
          }}
        >
          <SecondInput
            options={options}
            placeholder="Enter product  weight/item"
            label="Weight/Item"
          />
          <SecondInput
            options={options}
            placeholder="Enter price/item"
            label="Price/Item (Optional)"
            marginRight="-95px"
          />
        </Box>

        {/* <AssButton
          text="Save Product"
          float="right"
          width="123px"
          height="40px"
          borderRadius="5px"
          margin="20px -2px"
        /> */}
      </Box>

      {/* image drop zone here!!!!!!!!!!!!!!!!!!!! */}

      <Box sx={{ width: "85%", mt: '40px' }}>
        <AssButton
          text="Cancel"
          float="left"
          width="123px"
          height="40px"
          borderRadius="5px"
          margin="20px -2px"
          bgColor= 'black'
          bgHoverColor= 'black'
        />
        <AssButton
          text="Next"
          float="right"
          width="123px"
          height="40px"
          borderRadius="5px"
          margin="20px -2px"
          
        />
      </Box>
    </Box>
  );
};

export default RegisterTranshipment;
