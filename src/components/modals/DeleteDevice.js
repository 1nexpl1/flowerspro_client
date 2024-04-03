import React, { useContext, useEffect, useState } from 'react'
import { Button,  Form,  Modal, Table } from 'react-bootstrap'
import { deleteDevice, fetchDevices } from '../../http/DeviceAPI'
import { Context } from '../..'
import Checkbox from '../UI/Checkbox/Checkbox'

const DeleteDevice = ({ show, onHide }) => {
    const [value, setValue] = useState([])
    const [selectId, setSelectId] = useState(null)
    const { device } = useContext(Context)
    const deleteOneDevice = () => {
        deleteDevice(selectId).then(data => {
            setSelectId(null)
            onHide()
        })
    }
    useEffect(() => {
        fetchDevices().then(data => setValue(data.rows))
    }, [])
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>            
                    <tbody>
                    {
                    value.map((e) => 
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
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
                <Button variant="outline-success" onClick={deleteOneDevice}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteDevice