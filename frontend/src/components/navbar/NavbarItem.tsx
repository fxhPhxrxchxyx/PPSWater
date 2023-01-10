import { Typography } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarItem.module.scss";

type Props = {
  name: string;
  icon: ReactNode;
  path: string;
  action: (e: any) => void;
};
const NavbarItem: React.FC<Props> = ({ name, icon, path, action }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }} onClick={action}>
      <div className={styles.navItems}>
        <Typography
          color="text.primary"
          sx={{
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
            transition: "color 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
              color: "rgb(248, 224, 250)",
            },
          }}
        >
          {icon}
          <Typography
            style={{ marginTop: "4px", marginLeft: "5px", fontSize: "20px" }}
          >
            {name}
          </Typography>
        </Typography>
      </div>
    </Link>
  );
};

export default NavbarItem;
