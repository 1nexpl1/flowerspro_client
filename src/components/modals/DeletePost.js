import React, { useEffect, useState } from 'react'
import { deletePost, fetchPost } from '../../http/contentAPI'
import { Button, Modal, Table } from 'react-bootstrap'
import Checkbox from '../UI/Checkbox/Checkbox'

const DeletePost = ({ show, onHide }) => {
    const [value, setValue] = useState([])
    const [selectId, setSelectId] = useState(null)
    const deleteOnePost = () => {
        deletePost(selectId).then(data => {
            setSelectId(null)
            onHide()
        })
    }
    useEffect(() => {
        fetchPost().then(data => setValue(data))
    }, [])
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить пост
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Заголовок</th>                            
                            <th>Удалить</th>
                        </tr>
                    </thead>            
                    <tbody>
                    {
                    value.map((e) => 
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
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
                <Button variant="outline-success" onClick={deleteOnePost}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeletePost