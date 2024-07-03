import React from 'react'
import { Modal } from 'react-bootstrap';
import QRCode from "react-qr-code";
const QrGenegate = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Генерация QR
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <QRCode value="hey" />
            </Modal.Body>
        </Modal>
    )
}

export default QrGenegate