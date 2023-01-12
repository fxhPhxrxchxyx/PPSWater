import { Box, Modal, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import style from "./ProductCard.module.scss";
import { HiX } from "react-icons/hi";
import ProductModal from "./ProductModal";
import { CatalogType } from "./CatalogType";
import useBreakpoint from "../../hook/useBreakpoint";
type Props = {
  detail: CatalogType;
};
const ProductCard: React.FC<Props> = ({ detail }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const breakpoint = useBreakpoint();
  return (
    <Stack width="100%" spacing={2} alignContent="center">
      <Box className={style.container}>
        <div className={style.card}>
          <p className={style.backgroundText}>pps</p>
          <div className={style.imgBx}>
            <img src={detail.image} />
          </div>
          <div className={style.contentBx}>
            <h2 style={{ fontFamily: "IBM Plex Sans Thai", fontSize: "24px" }}>
              {detail.title}
            </h2>
            <div className={style.color}>
              <h3>Cover Color :</h3>
            </div>

            <div
              className={style.color}
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "15px",
                gap: "4px",
              }}
            >
              {detail.colors.map((color) => (
                <div key={color} style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <Box
              onClick={handleOpen}
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "3px",
              }}
              className={style.boxinfo}
            >
              <h3>คลิกเพื่อดูรายละเอียดเพิ่มเติม</h3>

              {detail.summary}
            </Box>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "15px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#f7fafd",
                  borderRadius: "15px",
                  padding: "20px",
                  width: "100%",
                  maxWidth: "800px",
                  overflowY: "auto",
                  maxHeight: "calc(100vh - 80px)",
                }}
              >
                <HiX onClick={handleClose} cursor="pointer" />

                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h2"
                  textAlign="center"
                  marginBottom="20px"
                  sx={{
                    fontFamily: "IBM Plex Sans Thai",
                  }}
                >
                  {detail.title}
                </Typography>

                <Stack
                  flexDirection={breakpoint < 600 ? "column" : "row"}
                  spacing={2}
                >
                  <img
                    alt="pps"
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      height: "auto",
                      pointerEvents: "none",
                    }}
                    src={detail.image}
                  />
                  <Stack>
                    <Typography
                      textAlign="center"
                      variant="h6"
                      sx={{
                        fontFamily: "IBM Plex Sans Thai",
                        maxHeight: "350px",
                        alignItems: "center",
                        marginBottom: "40px",
                      }}
                    >
                      {detail.description}
                    </Typography>

                    <Stack justifyContent="space-between">
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "IBM Plex Sans Thai",
                          fontWeight: "bold",
                        }}
                        textAlign="center"
                      >
                        {detail.capcolor}
                      </Typography>
                    </Stack>
                    <Box>
                      <div
                        className={style.color}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          marginTop: "10px",
                          marginBottom: "20px",
                          gap: "4px",
                        }}
                      >
                        {detail.colors.map((color) => (
                          <div
                            key={color}
                            style={{ backgroundColor: color, margin: 15 }}
                          ></div>
                        ))}
                      </div>
                      {(detail.screen !== undefined ||
                        detail.label !== undefined) && (
                        <Fragment>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: "IBM Plex Sans Thai",
                              fontWeight: "bold",
                              marginBottom: "10px",
                            }}
                            textAlign="center"
                          >
                            ตัวอย่างmock upขวด
                          </Typography>

                          <ProductModal detail={detail} />
                        </Fragment>
                      )}
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Modal>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default ProductCard;
