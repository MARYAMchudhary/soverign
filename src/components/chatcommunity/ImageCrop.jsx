import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import Cropper from "react-easy-crop";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "#fff !important",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ImageCrop({ image, onCropDone }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };
  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };
  // useEffect(() => {
  //   handleOpen();
  // }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "#fff",
          },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          backgroundColor: "#fff !important",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div>
          <div>
            <Cropper
              image={image}
              aspect={aspectRatio}
              crop={crop}
              zoom={zoom}
              cropShape="rect"
              // cropSize={{ width: 300, height: 200 }}
              showGrid={false}
              onCropChange={onCropChange}
              onZoomChange={onZoomChange}
              onCropComplete={onCropComplete}
              style={{
                containerStyle: {
                  width: "100%",
                  height: "80%",
                  backgroundColor: "#fff",
                },
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: "50%",
              transform: "translateX(-50%)",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => onZoomChange(zoom)}
              classes={{ container: "slider" }}
            />
          </div>
          <button
            className="btn"
            style={{
              position: "relative",
              top: "304px",
              left: "89%",
              padding: "2%",
              backgroundColor: "#000",
              color: "#fff",
            }}
            onClick={() => {
              onCropDone(croppedArea);
              handleClose();
            }}
          >
            Upload
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ImageCrop;
