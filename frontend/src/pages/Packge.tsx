import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import cap from "../pic/cap.webp";
const Packge = () => {
  return (
    <Container>
      <Stack alignItems="center" gap={6} marginBottom="60px">
        <Typography
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
          variant="h4"
          style={{ fontFamily: "IBM Plex Sans Thai", marginBottom: "30px" }}
        >
          รูปแบบขวดที่รับผลิตน้ำดื่ม OEM ในแบรนด์ของคุณทั้งแบบสวมฉลากและสกรีน
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontFamily: "IBM Plex Sans Thai",
          }}
        >
          ขนาดบรรจุ 350 cc
        </Typography>
        {/* card brabra */}
      </Stack>
    </Container>
  );
};

export default Packge;
