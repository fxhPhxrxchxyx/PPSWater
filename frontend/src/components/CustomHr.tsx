import { useTheme } from "@mui/system";
import React from "react";

const CustomHr = () => {
  const theme = useTheme();
  return (
    <hr
      style={{
        backgroundColor:
          theme.palette.mode == "light" ? "rgb(116, 114, 114)" : "white",
        height: 2,
        border: "none",
        marginBottom: "60px",
      }}
    />
  );
};

export default CustomHr;
