import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import lineQr from "../pic/lineQr.png";
import allproduct from "../pic/allproduct.webp";
import ro from "../pic/ro.jpg";
import uv from "../pic/uv.jpg";
import ppsplace from "../pic/ppsplace.jpg";
import map from "../pic/mappps.jpg";
import addFriend from "../pic/add.png";
import Map from "../components/Map";
const About = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        textAlign="center"
        marginBottom={4}
        fontWeight={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        ช่องทางการติดต่อ(Contact)
      </Typography>
      <Box display="flex" justifyContent="center">
        <Stack>
          <Stack flexDirection="row" gap={6}>
            <Stack margin={2} alignItems="center">
              <img
                src={lineQr}
                alt="lineQr"
                style={{
                  borderRadius: "15px",
                  width: "250px",
                  marginBottom: "10px",
                }}
              />
              <a href="https://lin.ee/L7H05yR" target="_blank">
                <img
                  src={addFriend}
                  alt="เพิ่มเพื่อน"
                  height="36"
                  style={{
                    border: "0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </a>
            </Stack>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h6"
                style={{ fontFamily: "IBM Plex Sans Thai" }}
              >
                ห้างหุ้นส่วนจำกัด น้ำดื่มเพิ่มพูนทรัพย์
                <br />
                Tel: 081-842-2554 , 081-985-3410 <br />
                Email: ppswater54@gmail.com
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <hr
        style={{
          color: "rgb(116, 114, 114)",
          backgroundColor: "rgb(116, 114, 114)",
          height: 0.5,
          borderColor: "rgb(116, 114, 114)",
          width: "1000px",
          marginBottom: "60px",
        }}
      />
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        ประเภทน้ำดื่มของทางเพิ่มพูนทรัพย์
      </Typography>
      <Box>
        <img
          src={allproduct}
          alt="all product"
          style={{ width: "1136px", height: "auto", pointerEvents: "none" }}
        />
      </Box>
      <hr
        style={{
          color: "rgb(116, 114, 114)",
          backgroundColor: "rgb(116, 114, 114)",
          height: 0.5,
          borderColor: "rgb(116, 114, 114)",
          width: "1000px",
          marginBottom: "60px",
        }}
      />
      <Typography
        variant="h4"
        textAlign="center"
        marginBottom="60px"
        fontWeight={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        ขั้นตอนการผลิตน้ำ
      </Typography>
      <Stack
        justifyContent="center"
        flexDirection="row"
        gap={5}
        marginBottom="60px"
      >
        <img
          alt="ro"
          src={ro}
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",

            pointerEvents: "none",
          }}
        />
        <img
          alt="uv"
          src={uv}
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",

            pointerEvents: "none",
          }}
        />
      </Stack>
      <Typography
        textAlign="center"
        marginBottom="60px"
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        น้ำดิบของเราเป็นน้ำประปา โดยผ่านระบบการกรอง คาร์บอน เรซิน
        และเมมเบรนฟิลเตรชั่น(Membrane filtration) <br />
        ฆ่าเชื้อด้วยแสงอัลตราไวโอเลต น้ำทุกขวดผ่านมาตรฐานที่อ.ย.กำหนด
        มั่นใจคุณภาพ มั่นใจน้ำดื่มของเรา
      </Typography>

      <hr
        style={{
          color: "rgb(116, 114, 114)",
          backgroundColor: "rgb(116, 114, 114)",
          height: 0.5,
          borderColor: "rgb(116, 114, 114)",
          width: "1000px",
          marginBottom: "60px",
        }}
      />
      <Stack
        justifyContent="center"
        flexDirection="row"
        gap={6}
        marginBottom="60px"
      >
        <img
          src={ppsplace}
          alt="pps place"
          style={{
            borderRadius: "15px",
            width: "auto",
            height: "350px",
            pointerEvents: "none",
          }}
        />
        <Stack maxWidth="400px">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={800}
            style={{ fontFamily: "IBM Plex Sans Thai" }}
          >
            ประวัติ PPS Water
          </Typography>
          <br />
          ห้างหุ้นส่วนจำกัด น้ำดื่มเพิ่มพูนทรัพย์ ก่อตั้งเมื่อปี พ.ศ. 2554
          ประกอบธุรกิจนำดื่ม ผลิตโดยเครื่องจักรอัตโนมัติ ด้วยระบบ RO
          รีเวิร์สออสโมซิส (Reverse Osmosis System) ฆ่าเชื้อด้วย UV
          รังสีอัลตราไวโอเลต (UltraViolet) ที่ได้มาตรฐาน สะอาด ปลอดภัย
          ทุกขั้นตอน จนถึงมือผู้บริโภค
          มีใบอนุญาตผลิตอาหารและเลขที่อ.ย.ถูกต้องตามกฎหมาย
          เราผลิตน้ำดื่มในขนาดต่าง ๆ โดยมีทั้งสินค้าในแบรนด์ของเรา
          และรับจ้างผลิตให้กับลูกค้าในหลากหลายธุรกิจ มีทั้งแบบสวมสลาก
          และสกรีนขวด ให้เลือกตามความต้องการ
          และอำนวยความสะดวกในการขอใบอนุญาตเลขที่อ.ย.ให้กับลูกค้า
          ที่ต้องการสร้างแบรนด์ของตัวเอง
          <br /> ตามสโลแกน "น้ำดื่มคุณภาพ น้ำดื่มเพิ่มพูนทรัพย์"
        </Stack>
      </Stack>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        แผนที่หจก.น้ำดื่มเพื่มพูนทรัพย์
      </Typography>
      <Container>
        <Box display="flex" gap={4} margin={8} justifyContent="center">
          <img
            alt="product"
            src={map}
            style={{
              borderRadius: "15px",
              width: "75%",
              height: "auto",
            }}
          />
          <Map />
        </Box>
      </Container>
    </Container>
  );
};

export default About;
