import { IconButton, Switch, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { GiHamburgerMenu, GiWaterGallon } from "react-icons/gi";
import useBreakpoint from "../../hook/useBreakpoint";
import logo from "../../pic/pps.png";
import logoDark from "../../pic/ppsfordark.png";

type Props = { setDark: Function };
const Navbar: React.FC<Props> = ({ setDark }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const breakpoint = useBreakpoint();
  const toggleExpanded = () => {
    setExpanded(false);
  };

  return (
    <div
      className={
        theme.palette.mode === "light" ? styles.wrapper : styles.wrapperDark
      }
    >
      <div className={styles.nav}>
        {expanded && (
          <div
            style={{ position: "fixed", inset: 0, zIndex: -1 }}
            onClick={toggleExpanded}
          />
        )}
        {breakpoint < 600 ? (
          <IconButton
            sx={{ zIndex: 1000 }}
            onClick={() => {
              setExpanded((expanded) => !expanded);
            }}
          >
            <GiHamburgerMenu />
          </IconButton>
        ) : (
          <img
            alt="logo"
            src={theme.palette.mode == "light" ? logo : logoDark}
            style={{ height: "52px" }}
          />
        )}
        <Typography
          fontWeight={700}
          color="white"
          fontSize={30}
          fontFamily="'Julius Sans One'"
        >
          PPS Water
        </Typography>
        <div
          className={
            styles.navItems +
            " " +
            (expanded && styles.navItemsActive) +
            " " +
            (theme.palette.mode === "dark" && styles.navItemsDark)
          }
        >
          <NavbarItem
            action={toggleExpanded}
            name="Home"
            icon={<AiFillHome fontSize={23} />}
            path="/home"
          />
          <NavbarItem
            action={toggleExpanded}
            name="About"
            icon={<AiFillInfoCircle fontSize={23} />}
            path="/about"
          />
          <NavbarItem
            action={toggleExpanded}
            name="Package"
            icon={<GiWaterGallon fontSize={23} />}
            path="/package"
          />
          <Switch
            onClick={() => {
              setDark((dark: boolean) => !dark);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
