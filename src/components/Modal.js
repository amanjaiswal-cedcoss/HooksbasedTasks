import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const {open,setOpen,formData}={...props}
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            {formData && formData.map(item=>{let itemArr=Object.entries(item);return(<Typography key={itemArr[0]}  id="modal-modal-description" sx={{ mt: 2 }}>{itemArr[0]}:{itemArr[1]}</Typography>)})}
        </Box>
      </Modal>
    </div>
  );
}