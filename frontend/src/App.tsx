import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Package from "./pages/Package";
import "./styles/index.scss";
import Footer from "./components/footer/Footer";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgb(184, 215, 255)"
                : "rgb(74, 86, 109)",
          }}
        >
          <Box height={64}></Box>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/package" element={<Package />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
