import React from 'react';
import { Box, Button, Modal } from '@mui/material';

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
    className="dialog"
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
          okButton && (<Button onClick={onAccept} variant="contained">{okButton}</Button>)
        }{
          noButton && (<Button onClick={onClose} variant="outlined">{noButton}</Button>)
        }
      </div>
    </Box>
  </Modal>
);

export default DialogOak;
