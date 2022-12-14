import { Box, Container, Stack, Typography } from "@mui/material";
import lineQr from "../pic/lineQr.png";
import addFriend from "../pic/add.png";
import ad from "../pic/produce.jpg";
import useBreakpoint from "../hook/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { ImageData } from "../components/productswiper/ProductData";
import ProductCard from "../components/productswiper/ProductCard";
const Home = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const breakpoint = useBreakpoint();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <div
        style={{ wordWrap: "break-word", marginTop: "20px", padding: "20px 0" }}
      >
        <Box sx={{ marginBottom: "40px" }}>
          <Swiper
            onSwiper={(swiper) => setSwiperRef(swiper)}
            slidesPerView={breakpoint < 720 ? 1 : breakpoint < 960 ? 2 : 3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {ImageData.map((detail) => (
              <SwiperSlide
                key={detail.id}
                style={{ padding: "0 8px 32px 8px" }}
              >
                <ProductCard detail={detail} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <img
          src={ad}
          alt="รับผลิต"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "25px",
            marginBottom: "20px",
            pointerEvents: "none",
          }}
        />
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          1 กำหนดรายละเอียดขององค์ประกอบขวดน้ำดื่มที่ต้องการ
        </Typography>
        <Typography
          color="text.primary"
          variant="h6"
          style={{ marginBottom: "20px" }}
        >
          • จำนวนน้ำดื่มขั้นต่ำในการสั่งผลิต 300 โหล <br />
          • ขนาดบรรจุ 350cc, 500cc หรือ 600cc <br />• สีฝา และรูปทรงขวด
          <br /> • รูปแบบสลาก เป็นแบบสวมหรือสกรีน
        </Typography>
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          2 ติดต่อเราเพื่อยื่นขอใบเสนอราคา
        </Typography>

        <Stack>
          <Stack flexDirection={breakpoint < 600 ? "column" : "row"} gap={6}>
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
              {breakpoint < 600 && (
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
              )}
            </Stack>

            <Box display="flex" alignItems="center">
              <Typography
                color="text.primary"
                variant="h6"
                style={{ marginBottom: "30px" }}
              >
                แจ้งจำนวนที่ต้องการเพื่อขอรับใบเสนอราคา
                พร้อมแจ้งรายละเอียดขององค์ประกอบขวดน้ำดื่มที่ต้องการ (ข้อ 1)
                พร้อมแจ้งรายละเอียดของลูกค้า
                <br />• ชื่อผู้ติดต่อ เบอร์โทร Email <br />• ชื่อบริษัท ที่อยู่
                เลขประจำตัวผู้เสียภาษี ที่ใช้สำหรับเปิดบิล
                <br /> • ที่อยู่ในการจัดส่งผ่านทาง Email : ppswater54@gmail.com
                หรือ LINE Offical PPS Water
                <br />
                (สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ LINE Offical PPS Water และ
                Tel: 081-842-2554, 081-985-3410)
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          3 ยืนยันการสั่งซื้อ
        </Typography>
        <Typography
          color="text.primary"
          variant="h6"
          style={{ marginBottom: "20px" }}
        >
          เมื่อลูกค้าเซ็นยืนยันสั่งซื้อและเซ็นใบเสนอราคามาเรียบร้อย
          ลูกค้าจะต้องชำระเงินครั้งที่ 1
          เพื่อเป็นการยืนยันสั่งซื้อเฉพาะค่าบล็อกและฉลากเต็มจำนวน
          และค่าน้ำดื่มบรรจุขวด 30% และ
          จะต้องทำการชำระอีกครั้งในส่วนที่เหลือก่อนส่งมอบสินค้า
        </Typography>
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          4 จดเลขทะเบียน อ.ย.
        </Typography>
        <Typography
          color="text.primary"
          variant="h6"
          style={{ marginBottom: "20px" }}
        >
          ลูกค้าจะต้องแจ้งรายละเอียดดังต่อไปนี้เพื่อให้ทางเราจะนำไปขอเลข อ.ย.
          กับกระทรวงสาธารสุขจังหวัดนครปฐมให้ (ฟรีไม่มีค่าใช้จ่าย) <br />• สำเนา
          หนังสือรับรองบริษัท หรือ สำเนาทะเบียนพาณิชย์ร้านฯ
          <br /> • สำเนา บัตรประชาชน (กรณีขอในนามบุคคลธรรมดา)
          <br /> • ชื่อน้ำดื่มของลูกสะกดเป็นภาษาไทย และ/หรือ ภาษาอังกฤษ (เช่น
          น้ำดื่มตราคุณภาพดี ลูกค้าสามารถตั้งเองได้)
        </Typography>
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          5 การทำฉลาก
        </Typography>
        <Typography color="text.primary" variant="h6">
          • ลูกค้าสามารถออกแบบเองได้โดยส่งไฟล์เป็น photoshop(.ps), Adobe
          Illustrator(.Ai) , รูปภาพที่มีขนาดใหญรายละเอียดชัดเจน(.jpg or .png)
          โดย ลูกค้าจะต้องเว้นที่ไว้ 20%
          สำหรับให้ทางเราจัดวางข้อมูลที่จำเป็นต้องมีบนฉลากเช่น ชื่อบริษัทลูกค้า,
          ชื่อผู้ผลิต , เลขที่อ.ย. เป็นต้น <br />• ลูกค้าสมารถให้ทางเราวาง
          layoutแบบมาตรฐานอย่างง่าย ให้ฟรีไม่มีค่าใช้จ่าย
          โดยทางลูกค้าจะต้องส่งlogoมาให้ (File AI, png หรือ JPG
          ควรมีขนาดใหญ่รายละเอียดชัดเจน) ถ้าลูกค้าต้องการที่จะกำหนด
          ชื่อข้อความหรือช่องทางการติดต่อของลูกค้า สามารถแนบมากับไฟล์logo
          ของลูกค้า โดยกำหนดฟอนต์ที่ต้องการมาด้วย
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.primary"
          style={{ marginBottom: "30px" }}
        >
          *หมายเหตุ ทางลูกค้าจะต้องมี Logo อยู่แล้วโดยทางเราไม่ได้วาดขึ้นใหม่
          หากให้ออกแบบ logo จะมีค่าใช้จ่ายเพิ่มเติม
        </Typography>
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          6 ยืนยันแบบฉลาก และ ผลิตบล็อคสี
        </Typography>
        <Typography
          color="text.primary"
          variant="h6"
          style={{ marginBottom: "20px" }}
        >
          • ลูกค้าสามารถแก้แบบได้ก่อนทำการผลิตบล็อค 2 ครั้ง โดยไม่มีค่าใช้จ่าย
          โดยทางเราจะแจ้งให้ทราบล่วงหน้าว่าสามารถแก้ได้ถึงเมื่อไหร่
          <br />• หลังผลิตแล้วหากลูกค้าต้องการแก้แบบ จะมีค่าแกะบล็อคใหม่
        </Typography>
        <Typography
          color="text.primary"
          variant="h5"
          fontWeight={800}
          style={{ marginBottom: "20px" }}
        >
          7 ผลิต และบรรจุน้ำดื่ม
        </Typography>
        <Typography color="text.primary" variant="h5" fontWeight={800}>
          8 ส่งสินค้า
        </Typography>
        <Typography color="text.primary" variant="h6">
          • ในการสั่งครั้งแรก : ภายในระยะเวลา 30 วันหลังวันที่สั่ง <br />•
          ในการสั่งครั้งต่อ ๆ ไป : ภายในระยะเวลา 10-14 วันหลังวันที่สั่ง
          <br /> • ค่าใช้จ่ายในการส่งสินค้า
          <br />o รับหน้าโรงงาน ไม่มีค่าขนส่ง
          <br /> o นครปฐม : ส่งฟรี <br />o จังหวัดอื่นๆ :
          มีค่าใช้จ่ายเพิ่มเติมตามระยะทาง
        </Typography>
      </div>
    </Container>
  );
};

export default Home;
