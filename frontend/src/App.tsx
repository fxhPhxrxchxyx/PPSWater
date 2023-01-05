import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Packge from "./pages/Packge";
import "./styles/index.scss";

const App = () => {
  const [dark, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
    typography: {
      fontFamily: `"IBM Plex Sans Thai"`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar setDark={setDark} />
        <Box height={64}></Box>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packge" element={<Packge />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
