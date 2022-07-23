import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Confirm = ({id, title, message, show, hide, confirm}) => {
    
    return (
        <Modal show={show} onHide={hide}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>
              Close
            </Button>
            <Button variant="primary"  onClick={() => confirm(id) }>
              I'm sure
            </Button>
          </Modal.Footer>
        </Modal>

    );
  }
  
export default Confirm;