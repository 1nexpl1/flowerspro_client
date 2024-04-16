import React, { useEffect, useState } from 'react'
import { deleteStorie, fetchStorie } from '../../http/contentAPI'
import { Button, Modal, Table } from 'react-bootstrap'
import Checkbox from '../UI/Checkbox/Checkbox'

const DeleteStorie = ({ show, onHide }) => {
    const [value, setValue] = useState([])
    const [selectId, setSelectId] = useState(null)
    const deleteOneStorie = () => {
        deleteStorie(selectId).then(data => {
            setSelectId(null)
            onHide()
        })
    }
    useEffect(() => {
        fetchStorie().then(data => setValue(data))
    }, [])
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить историю
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>                            
                            <th>Удалить</th>
                        </tr>
                    </thead>            
                    <tbody>
                    {
                    value.map((e) => 
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                            <Checkbox setType={setSelectId} id = {e.id}/>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={deleteOneStorie}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteStorie