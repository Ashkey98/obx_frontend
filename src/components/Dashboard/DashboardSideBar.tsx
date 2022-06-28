import React from "react";
import { Box } from "@mui/system";
import MenuItem from "./MenuItem";

interface DashboardSideBarProps {
  data: Array<any>;
  view: String;
  setView: any;
}

const DashboardSideBar = ({ data, view, setView }: DashboardSideBarProps) => {
  const buyerMenuIcons = data[0];
  const buyerMenuItems = data[1];
  const bgColor = data[2][0];
  const activeBg = data[2][1];
  const textColor = data[2][2];
  const textActiveColor = data[2][3];
  const borderColor = data[2][4];

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
        visibility: {
          xs: "hidden",
          lg: "visible",
        },
      }}
    >
      <Box
        sx={{
          width: "246px",
          boxShadow: 1,
          flexDirection: "column",
          background: bgColor,
          display: {
            xs: "none",
            lg: "flex",
          },
          visibility: {
            xs: "hidden",
            lg: "visible",
          },
        }}
      >
        {buyerMenuIcons.map((icon: any, index: React.Key) => {
          return (
            <Box key={index}>
              <MenuItem
                view={view}
                setView={setView}
                title={buyerMenuItems[index]}
                icon={icon}
                activeBg={activeBg}
                textColor={textColor}
                textActiveColor={textActiveColor}
                borderColor={borderColor}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default DashboardSideBar;
