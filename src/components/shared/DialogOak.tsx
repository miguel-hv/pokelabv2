import React from 'react';
import { Box, Modal } from '@mui/material';

interface DialogOakProps {
    open: boolean;
    onClose: () => void;
    onAccept: () => void;
    description: string;
    okButton: string;
    noButton: string;
}

const style = {
  position: 'fixed' as const,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  // marginLeft: '-8px',
  maxWidth: '390px',
  bgcolor: 'white',
  boxShadow: 24,
  p: 2,
  borderRadius: '8px 8px 0 0',
};

const backdropStyle = {
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent', // Transparent backdrop
  },
};

const DialogOak: React.FC<DialogOakProps> = ({ open, onClose, onAccept, description, okButton, noButton }) => (
  <Modal 
    open={open} 
    onClose={onClose}
    aria-labelledby="modal-Oak"
    aria-describedby="modal-Oak-professor-dialog"
    sx={backdropStyle}
  >
    <Box sx={style}>
      <div className="dialog__image-container">
        <img src="./../../../../../assets/images/pokemon/oak2.png" alt="image"/>
      </div>
      <div className="dialog__text">
        {description}
      </div>
      <div className="dialog__buttons-container">
        {
          okButton && (<button onClick={onAccept} className="button button--primary">{okButton}</button>)
        }{
          noButton && (<button onClick={onClose} className="button button--secondary">{noButton}</button>)
        }
      </div>
      {/* TODO: Add buttons */}
      {/* <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" color="primary" onClick={onAccept}>
          Accept
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box> */}
    </Box>
  </Modal>
);

export default DialogOak;
