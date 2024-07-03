import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Container } from "react-bootstrap";
import RawTable from '../components/Profile/RawTable/RawTable';
import Title from '../components/UI/Title/Title';
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreatePost from '../components/modals/CreatePost';
import CreateSong from '../components/modals/CreateSong';
import CreateStorie from '../components/modals/CreateStorie';
import CreateType from "../components/modals/CreateType";
import DeleteBrand from '../components/modals/DeleteBrand';
import DeleteDevice from '../components/modals/DeleteDevice';
import DeletePost from '../components/modals/DeletePost';
import DeleteStorie from '../components/modals/DeleteStorie';
import DeleteType from '../components/modals/DeleteType';
import QrGenegate from '../components/modals/QrGenegate';
import { fetchOrders } from '../http/OrderAPI';

const AdminPage = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [postVisible, setPostVisible] = useState(false)
    const [storieVisible, setStorieVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false)
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)
    const [deleteBrandVisible, setDeleteBrandVisible] = useState(false)
    const [deletePostVisible, setDeletePostVisible] = useState(false)
    const [deleteStorieVisible, setDeleteStorieVisible] = useState(false)
    const [createSongVisible, setCreateSongVisible] = useState(false)
    const [createQrVisible, setCreateQrVisible] = useState(false)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetchOrders().then(data => {
            setOrders(data)
        })
    }, [])
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
                    onClick={() => setPostVisible(true)}
                >
                    Добавить пост
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setStorieVisible(true)}
                >
                    Добавить историю
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
                <Button
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
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setDeletePostVisible(true)}
                >
                    Удалить пост
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setDeleteStorieVisible(true)}
                >
                    Удалить историю
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setCreateSongVisible(true)}
                >
                    Добавить трек
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setCreateQrVisible(true)}
                >
                    Сгенерировать QR
                </Button>

                <div className='adminWrapper'>
                    <Title>Заказы</Title>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Имя</TableCell>
                                    <TableCell align="right">Адрес</TableCell>
                                    <TableCell align="right">Номер телефона</TableCell>
                                    <TableCell align="right">Цена</TableCell>
                                    <TableCell align="right">Статус</TableCell>
                                </TableRow>
                            </TableHead>
                            {orders.map((row) => (
                                <TableBody>
                                    <RawTable row={row} />
                                </TableBody>
                            ))}
                        </Table>
                    </TableContainer>
                </div>


                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <CreatePost show={postVisible} onHide={() => setPostVisible(false)} />
                <CreateStorie show={storieVisible} onHide={() => setStorieVisible(false)} />
                <DeleteDevice show={deleteDeviceVisible} onHide={() => setDeleteDeviceVisible(false)} />
                <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
                <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)} />
                <DeletePost show={deletePostVisible} onHide={() => setDeletePostVisible(false)} />
                <DeleteStorie show={deleteStorieVisible} onHide={() => setDeleteStorieVisible(false)} />
                <CreateSong show={createSongVisible} onHide={() => setCreateSongVisible(false)}/>
                <QrGenegate show={createQrVisible} onHide={()=> setCreateQrVisible(false)}/>
            </Container>
        </div>
    );
};

export default AdminPage;
