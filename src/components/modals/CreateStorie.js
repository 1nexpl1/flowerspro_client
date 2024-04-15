import React, { useContext, useState } from 'react'
import { Context } from '../..'
import { Button, Form,  Modal } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { createStorie } from '../../http/contentAPI'

const CreateStorie = observer(({show, onHide}) => {


    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const [file1, setFile1] = useState(null)

    
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const selectFile1 = e => {
        setFile1(e.target.files[0])
    }
    

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', title)
        formData.append('imgSmall', file)
        formData.append('imgMain', file1)
        createStorie(formData).then(data => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Историю
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}            
                    />                  
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile1}
                    />                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateStorie