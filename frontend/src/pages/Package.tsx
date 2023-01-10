import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useEffect } from "react";
import ProductSwiper from "../components/productswiper/ProductSwiper";
import cap from "../pic/cap.webp";
const Package = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <Stack alignItems="center" gap={6} padding="20px 0">
        <Typography
          color="text.primary"
          variant="h4"
          style={{ fontFamily: "IBM Plex Sans Thai", marginTop: "20px" }}
        >
          ฝาสีต่าง ๆ
        </Typography>
        <img
          alt="pps"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "25px",
            pointerEvents: "none",
            marginBottom: "80px",
          }}
          src={cap}
        />
        <Typography
          color="text.primary"
          variant="h4"
          style={{ fontFamily: "IBM Plex Sans Thai", marginBottom: "30px" }}
        >
          รูปแบบขวดที่รับผลิตน้ำดื่ม OEM ในแบรนด์ของคุณทั้งแบบสวมฉลากและสกรีน
        </Typography>

        <ProductSwiper />
      </Stack>
    </Container>
  );
};

export default Package;
