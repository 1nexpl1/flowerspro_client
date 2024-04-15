import React, { useContext, useState } from 'react'
import { Context } from '../..'
import { Button, Form, FormCheck, Modal } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { createPost } from '../../http/contentAPI'

const CreatePost = observer(({show, onHide}) => {


    const {content} = useContext(Context)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('')
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
        formData.append('title', title)
        formData.append('description', description)
        formData.append('color', color)
        formData.append('imgs1', file)
        formData.append('imgs2', file1)
        createPost(formData).then(data => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Пост
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заголовок"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание(подпись)"
                    />
                    <Form.Control
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        className="mt-3"
                        placeholder="Введите цвет hex (в формате #000000 )"
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

export default CreatePost