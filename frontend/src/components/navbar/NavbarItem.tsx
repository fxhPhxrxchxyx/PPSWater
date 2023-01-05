import { Typography } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarItem.module.scss";

type Props = {
  name: string;
  icon: ReactNode;
  path: string;
};
const NavbarItem: React.FC<Props> = ({ name, icon, path }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className={styles.navItems}>
        <Typography
          color="text.primary"
          fontWeight={600}
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
          <p style={{ marginTop: "4px", marginLeft: "5px" }}>{name}</p>
        </Typography>
      </div>
    </Link>
  );
};

export default NavbarItem;
