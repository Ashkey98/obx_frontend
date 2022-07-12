import { Box, Button, Icon, Grid, Typography,TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../ults/Title";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIcon from "@mui/icons-material/Delete";
import { flexBetween, flexCenter, StyledTextField } from "../../../../styles/styles";
import EditIcon from "@mui/icons-material/Edit";
import FormControl from '@mui/material/FormControl';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const ObxSellerHead = () => {
  // const [view, setView] = useState("main");
  // const [currentBuilding, setCurrentBuilding] = useState({
  //   MCSTNumber: "2031",
  //   UENNumber: "54578HSSD8",
  //   date: "2022-05-18",
  //   devName: "The Anchorage & Anchorpoint",
  //   devLocation: "3832 Singapore",
  //   MCAddress: "3832 dshfdihf jdfhksdhf",
  //   phone: "659837249",
  //   nameOfAgent: "Savills Property Management Pte Ltd",
  //   contactOfAgent: "659837249",
  // });

  // const [color, setColor] = useState("");
  // useEffect(() => {
  //   let color = localStorage.getItem("color");
  //   if (color) {
  //     setColor(color);
  //   }
  // }, []);

  const [view, setView] = useState("main");
  const [supplyHead, setSupplyHead] = React.useState('');
  const [category, setCategory] = React.useState('');


  const handleChange = (event: SelectChangeEvent) => {
    setSupplyHead(event.target.value as string);
  };

  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <>
      {view === "main" ? (
        <Box>
          <Box>
            <Title title={"Supplier Directory"}>
              <Box>
                <Icon
                  onClick={() => setView("add")}
                  sx={{
                    background: "#3b82f6",
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </Icon>
                
              </Box>
            </Title>
          </Box>
          <Box
    sx={{
      backgroundColor: "#a7e8fc",
      width:"100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight:"100px"
    }}>
      <Typography
      sx={{
        color: "white",
        fontSize:"130%"
      }}>
        Search and View suppliers who have Government Suppliers Registration
      </Typography>
    </Box>
    <Box
    sx={{
      display: "flex",
      flexDirection: "row",
  flexWrap: "wrap",

      justifyContent: "space-between",
      width:"90%",
      marginLeft:"5%",
      marginTop:"5%",
    }}>
      <Box
      sx={{
        display: "flex",
      flexDirection: "column",
      }}>
      <Typography>
        Supplier Name/Trading Partner Ref.No
      </Typography>
      <TextField
          inputProps={{
            style: {
              padding: 5,
              width:"50%",
              height:"45px"
            },
          }}
        />
      </Box>
<Box
sx={{
  display: "flex",
flexDirection: "column",
width:"32%"
}}>
<Box
      >
      <Typography>
        Supply Head
      </Typography>
     
      
      </Box>
      <FormControl >
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={supplyHead}
    onChange={handleChange}
  >
    <MenuItem value={10}>Manned Guarding</MenuItem>
    <MenuItem value={20}>Surveillance systems</MenuItem>
    <MenuItem value={40}>Access control</MenuItem>
    <MenuItem value={50}>Robotics</MenuItem>
    <MenuItem value={60}>Cybersecurity</MenuItem>
    <MenuItem value={70}>Integrated services</MenuItem>
    <MenuItem value={80}>Video analytics</MenuItem>
    <MenuItem value={90}>Roving security</MenuItem>
    <MenuItem value={100}>Event security</MenuItem>
    <MenuItem value={110}>Security consultation</MenuItem>
    <MenuItem value={120}>Robotics and AI</MenuItem>
    <MenuItem value={130}>Concierge</MenuItem>
  </Select>
</FormControl>
</Box>
      
<Box
sx={{
  display: "flex",
flexDirection: "column",
width:"32%"
}}>
<Box
      >
      <Typography>
       Category
      </Typography>
     
      
      </Box>
      <FormControl >
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    onChange={handleCategory}
  >
    <MenuItem value={10}>Manned Guarding</MenuItem>
    <MenuItem value={20}>Surveillance systems</MenuItem>
    <MenuItem value={40}>Access control</MenuItem>
    <MenuItem value={50}>Robotics</MenuItem>
    <MenuItem value={60}>Cybersecurity</MenuItem>
    <MenuItem value={70}>Integrated services</MenuItem>
    <MenuItem value={80}>Video analytics</MenuItem>
    <MenuItem value={90}>Roving security</MenuItem>
    <MenuItem value={100}>Event security</MenuItem>
    <MenuItem value={110}>Security consultation</MenuItem>
    <MenuItem value={120}>Robotics and AI</MenuItem>
    <MenuItem value={130}>Concierge</MenuItem>
  </Select>
</FormControl>
</Box>

    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "50px 0",
        gap: "16px",
      }}>

      <Button
            sx={{
              backgroundColor:"blue",
              width: "160px"
              

            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Search</Typography>
          </Button>
          </Box>
        </Box>
      ) : view === "add" ? (
        <>
          <Box>
            <Title title={"Create Supply Head"}>
              <Button onClick={() => setView("main")}>
                <KeyboardBackspaceIcon /> <Typography>Back</Typography>
              </Button>
            </Title>
          </Box>
          <Box
            sx={{
              padding: "30px 36px",
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="S/N"
                  label="S/N"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Supply Head"
                  label="Supply Head"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Date Acquired"
                  label="Date Acquired"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Date of Expiry"
                  label="Date of Expiry"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            
            </Grid>
            <Box
              sx={{
                margin: "50px auto 0 auto",
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  padding: "8px 30px",
                }}
              >
                <Typography>Create</Typography>
              </Button>
            </Box>
          </Box>
        </>
      
      
      ) : null}
    </>
  );
};

export default ObxSellerHead;
