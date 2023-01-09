import image220cc from "../../pic/bottle/220.webp";
import image350cc from "../../pic/bottle/350.webp";
import image600cc from "../../pic/bottle/600.webp";
import image1500cc from "../../pic/bottle/1500.webp";
import imageggalonblue from "../../pic/bottle/galonblue.webp";
import imageggalonwhite from "../../pic/bottle/galonwhite.png";

export type ImageList = {
  id: number;
  image: string;
  title: string;
  colors: string[];
  description: string;
  summary: string;
  capcolor: string;
};

export const ImageData: ImageList[] = [
  {
    id: 1,
    image: image220cc,
    title: "PPS cup 220 cc",
    colors: ["#0090f1"],
    description:
      "น้ำถ้วยขนาดบรรจุ 220 cc แก้วผลิตจากพลาสติกPP 1ลังบรรจุ 48ถ้วย พร้อมหลอด รัปประกันไม่มีน้ำรั่วซึมในทุกกล่องมั่นใจในคุณภาพ รับผลิตในแบรนด์ลูกค้าตามแบบที่ลูกค้าต้องการ สามารถทำได้มากกว่า 1 สี",
    summary: "ผลิตแบรนด์เพิ่มพูนทรัพย์ และ รับผลิตในแบรนด์ลูกค้า",
    capcolor: "สีฝาแบรนด์เพิ่มพูนทรัพย์",
  },
  {
    id: 2,
    image: image350cc,
    title: "PPS bottle 350 cc",
    colors: ["#FFFFFF"],
    description:
      "บรรจุขวด PET ใสชนิดกลม เป็นทรงกระปุกลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 350 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กระปุกลอนและกระปุกลายเพรช",
    summary: "ผลิตแบรนด์เพิ่มพูนทรัพย์ และ รับผลิตในแบรนด์ลูกค้า",
    capcolor: "สีฝาแบรนด์เพิ่มพูนทรัพย์",
  },
  {
    id: 3,
    image: image600cc,
    title: "PPS bottle 600 cc",
    colors: ["#FFFFFF"],
    description:
      "บรรจุขวด PET ใสชนิดกลม รูปแบบ กลมลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 600 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กลมลอน กลมเรียบ กลมเกลียว",
    summary: "ผลิตแบรนด์เพิ่มพูนทรัพย์ และ รับผลิตในแบรนด์ลูกค้า (มีขนาด500cc)",
    capcolor: "สีฝาแบรนด์เพิ่มพูนทรัพย์",
  },
  {
    id: 4,
    image: image1500cc,
    title: "PPS bottle 1500 cc",
    colors: ["#FFFFFF"],
    description:
      "บรรจุขวด PETใส รูปแบบกลมเกลียว 1 แพ็คบรรจุ 6 ขวด สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 1500 cc",
    summary: "ผลิตแบรนด์เพิ่มพูนทรัพย์",
    capcolor: "สีฝาแบรนด์เพิ่มพูนทรัพย์",
  },

  {
    id: 5,
    image: imageggalonblue,
    title: "PPS galon blue 18.9L",
    colors: ["#0066df"],
    description:
      "น้ำ 18.9ลิตร แบรนด์เพิ่มพูนทรัพย์ บรรจุในถังใสสีฟ้าชนิดกลม Polycarbonates(PC) ตัวถังสามารคว่ำบนเครื่องทำน้ำร้อนและน้ำเย็นได้ แข็งแรงทนทานไม่ตกแตกหรือชำรุดได้ง่ายและไม่ยุบตัวง่ายเมื่อเจอความร้อนหรือแรงดัน น้ำทุกหยดใสสะอาดมีคุณภาพไม่เปลี่ยนแปลงตั้งแต่โรงงานผลิตจนถึงมือลูกค้า ฝาที่ปิดปากถังเป็นฝาชนิดดึงใช้ครั้งเดียว มั่นใจในคุณภาพมั่นใจในน้ำดื่มของเรา หมายเหตุลูกค้าต้องมัดจำถังละ 300บาทต่อใบ",
    summary: "ผลิตแบรนด์เพิ่มพูนทรัพย์",
    capcolor: "สีฝาแบรนด์เพิ่มพูนทรัพย์",
  },
  {
    id: 6,
    image: imageggalonwhite,
    title: "PPS galon white 20L",
    colors: ["#FFFFFF"],
    description:
      "น้ำ 20 ลิตรบรรจุในถังขาวขุ่นชนิดกลม Polyethylene (PE) แบรนด์เพิ่มพูนทรัพย์  แข็งแรงทนทาน เหมาะสำหรับการคว่ำบนเครื่องทำน้ำร้อนและน้ำเย็น ไม่ยุบตัวง่าย ปากภาชนะมีซิลเพื่อรักษาคุณภาพจนถึงมือลูกค้า หมายเหตุลูกค้าต้องมัดจำถังละ 100บาทต่อใบ ",
    summary: "ผลิตแบรนด์เพิ่มพูนทรัพย์",
    capcolor: "สีฝาแบรนด์เพิ่มพูนทรัพย์",
  },
];
