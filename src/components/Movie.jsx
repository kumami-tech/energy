import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import ModalVideo from 'react-modal-video'

const Movie = (props) => {
  return(
    <Dialog
      open={props.open}
      onClose={props.handleClose}
    >
      <ModalVideo channel='youtube' isOpen={props.open} videoId={props.videoId} />
    </Dialog>
  )
}

export default Movie