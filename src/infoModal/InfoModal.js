import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function InfoModal() {
  let [show2, setShow2] = useState(false);
  function handleClose2() {
    setShow2(false);
  }
  function handleShow2() {
    setShow2(true);
  }
  return (
    <Modal
      show={show2}
      onHide={handleClose2}
      className="homepageModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modalHeading">heading</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
}

export default InfoModal;
