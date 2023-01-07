import { FormHelperText, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import lineQr from "../../pic/lineQr.png";
import styles from "./footer.module.scss";
const Footer = () => {
  const theme = useTheme();
  return (
    <div
      className={
        theme.palette.mode === "light" ? styles.footer : styles.footerDark
      }
      style={{
        padding: "20px",
        color: "#444",
        height: "300px",
      }}
    >
      <Stack alignItems="center">
        <Typography
          color="text.primary"
          style={{ fontFamily: "IBM Plex Sans Thai", fontWeight: "800" }}
        >
          ห้างหุ้นส่วนจำกัด น้ำดื่มเพิ่มพูนทรัพย์
        </Typography>
        <Typography
          color="text.primary"
          style={{ fontFamily: "IBM Plex Sans Thai" }}
        >
          Tel: 081-842-2554 , 081-985-3410
        </Typography>
        <Typography
          color="text.primary"
          marginBottom={2}
          style={{ fontFamily: "IBM Plex Sans Thai" }}
        >
          Email: ppswater54@gmail.com
        </Typography>
        <img
          src={lineQr}
          style={{
            borderRadius: "15px",
            // width: "20%",
            width: "150px",
            marginBottom: "10px",
          }}
        ></img>
        <FormHelperText
          sx={{
            color: "#fff",
            fontFamily: "IBM Plex Sans Thai",
          }}
        >
          © Copyright PPS water
        </FormHelperText>
      </Stack>
    </div>
  );
};

export default Footer;
