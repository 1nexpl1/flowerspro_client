import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteDevice from '../components/modals/DeleteDevice';
import DeleteType from '../components/modals/DeleteType';
import DeleteBrand from '../components/modals/DeleteBrand';

const AdminPage = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false)
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)
    const [deleteBrandVisible, setDeleteBrandVisible] = useState(false)

    return (
        <div className='adminWrapper'>
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить упаковку
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить товар
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteDeviceVisible(true)}
            >
                Удалить товар
            </Button>
            {/* <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteTypeVisible(true)}
            >
                Удалить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteBrandVisible(true)}
            >
                Удалить упаковку
            </Button> */}
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteDevice show={deleteDeviceVisible} onHide = {() => setDeleteDeviceVisible(false)} />            
            {/* <DeleteType show={deleteTypeVisible} onHide = {() => setDeleteTypeVisible(false)} />        
            <DeleteBrand show={deleteBrandVisible} onHide = {() => setDeleteBrandVisible(false)} /> */}
        </Container>
        </div>
    );
};

export default AdminPage;
