import { Box, Button, Modal, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { list350, list500, list600 } from "./PackageData";
import style from "./ProductCard.module.css";
import { HiX } from "react-icons/hi";
import { CatalogType } from "./CatalogType";

type Props = {
  detail: CatalogType;
};
const ProductModal: React.FC<Props> = ({ detail }) => {
  const [open, setOpen] = React.useState<string | null>(null);

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        gap={2}
        justifyContent="center"
        sx={{ cursor: "pointer" }}
      >
        {detail.label && (
          <Button
            onClick={() => setOpen(detail.label || "")}
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#dce9fe",
              color: "#444",
              "&:hover": { backgroundColor: "#b6dcff" },
            }}
          >
            สวมสลาก
          </Button>
        )}
        {detail.screen && (
          <Button
            onClick={() => setOpen(detail.screen || "")}
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#dce9fe",
              color: "#444",
              "&:hover": { backgroundColor: "#b6dcff" },
            }}
          >
            สกรีน
          </Button>
        )}
      </Box>

      <Modal
        hideBackdrop
        open={open != null}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            maxWidth: "800px",
          }}
        >
          <HiX onClick={handleClose} cursor="pointer" />
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            textAlign="center"
            sx={{
              fontFamily: "IBM Plex Sans Thai",
            }}
          >
            ตัวอย่าง mock up
          </Typography>
          <img
            alt="mockup"
            style={{
              width: "320px",
              height: "auto",
              borderRadius: "25px",
              marginBottom: "20px",
              pointerEvents: "none",
            }}
            src={open || ""}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ProductModal;
