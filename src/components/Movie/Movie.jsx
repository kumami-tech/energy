import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import ModalVideo from 'react-modal-video'

export default class Movie extends React.Component {

  render() {
    return(
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <ModalVideo channel='youtube' isOpen={this.props.open} videoId='WBcYYC9mEBc' onClose={() => this.setState({open: false})} />
      </Dialog>
    )
  }
}