import React, { useContext, useEffect, useState } from 'react'
import s from './Profile.module.css'
import { Context } from '../..'
import Title from '../UI/Title/Title'
import { fetchOrders } from '../../http/OrderAPI'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Profile = (props) => {
    const { user } = useContext(Context)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetchOrders().then(data => {
            setOrders(data)
        })
    }, [])
    console.log(orders);
    return (
        <div className={s.wrapper}>
            <Title>Профиль</Title>
            <h1 className={s.title}>Данные</h1>
            <div className={s.text}>{user.user.name}</div>
            <div className={s.text}>{user.user.email}</div>           
            <h1 className={s.title}>Ваша скидка</h1>
            <div className={s.textDisc}>5%</div>
            <h1 className={s.title}>Заказы</h1>
            <div className={s.orders}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Имя</TableCell>
                                <TableCell align="right">Адрес</TableCell>
                                <TableCell align="right">Номер телефона</TableCell>
                                <TableCell align="right">Цена</TableCell>
                                <TableCell align="right">Статус</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.adress}</TableCell>
                                    <TableCell align="right">{row.number}</TableCell>
                                    <TableCell align="right">{row.value}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


            <button className={s.paymentBut} onClick={props.logout}>Выйти</button>
        </div>
    )
}

export default Profile