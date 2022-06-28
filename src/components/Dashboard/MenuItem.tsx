import React, { useState } from "react";
import { Button, Collapse, Typography } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface MenuItemProps {
  textColor: string;
  textActiveColor: string;
  title: any;
  icon: any;
  view?: String;
  setView: any;
  activeBg: string;
  borderColor: string;
}

const MenuItem = ({
  title,
  icon,
  view,
  setView,
  textColor,
  textActiveColor,
  activeBg,
  borderColor,
}: MenuItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleMenuItemClick = () => {
    setView(title);
    setChecked(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          typeof title === "object" ? handleChange() : handleMenuItemClick();
        }}
        sx={{
          "&.MuiButton-root": {
            gap: typeof title === "object" ? "0" : "5px",
          },
          color: view === title ? textColor : textActiveColor,
          borderBottom: `1px solid ${borderColor}`,
          width: "100%",
          padding: "14px 20px",
          justifyContent: "left",
          gap: "5px",
          backgroundColor: view === title ? activeBg : "none",
          ":hover": {
            borderBottom: `1px solid ${borderColor}`,
            backgroundColor: view === title ? activeBg : "rgba(41, 68, 193, 0.3)",
          },
        }}
      >
        {icon.length > 1 ? <>{icon[0]}&nbsp;</> : icon}
        <Typography>{typeof title === "object" ? title.name : title}</Typography>
        {typeof title === "object" ? (
          checked ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )
        ) : null}
      </Button>
      <Collapse in={checked}>
        {typeof title === "object"
          ? title.options.map((data: string, index: React.Key) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setView(data);
                  }}
                  sx={{
                    "&.MuiButton-root": {
                      gap: typeof title === "object" ? "0" : "5px",
                    },
                    color: view === data ? textColor : textActiveColor,
                    width: "100%",
                    padding: "14px 20px",
                    justifyContent: "left",
                    gap: "5px",
                    backgroundColor: view === data ? activeBg : "none",
                    ":hover": {
                      backgroundColor:
                        view === data ? "rgba(41, 68, 193, 1)" : "rgba(41, 68, 193, 0.3)",
                    },
                  }}
                >
                  {icon[1][index]} &nbsp;
                  <Typography>{data}</Typography>
                </Button>
              );
            })
          : null}
      </Collapse>
    </>
  );
};

export default MenuItem;
