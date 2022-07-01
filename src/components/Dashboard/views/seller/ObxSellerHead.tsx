import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ObxSellerHead = () => {

  const [age, setAge] = React.useState('');


  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return(
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'

    }}>
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid",
      width: "100%",
    }}>
      <Typography sx={{
         fontSize: "40px",
         fontWeight: "bold"
       }}>
        Supplier Directory

      </Typography>
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
    value={age}
    onChange={handleChange}
  ><MenuItem value="">
  <em>All</em>
  </MenuItem>
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
    value={age}
    // onChange={handleChange}
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
  )
};
export default ObxSellerHead;
