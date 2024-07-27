import React, { useContext, useEffect, useState } from 'react'
import s from './Profile.module.css'
import { Context } from '../..'
import Title from '../UI/Title/Title'
import { fetchOrders, fetchOrdersPersonal } from '../../http/OrderAPI'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RawTable from './RawTable/RawTable'
import { Spinner } from 'react-bootstrap'
const Profile = (props) => {
    const { user } = useContext(Context)
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchOrdersPersonal(user.user.id).then(data => {
            setOrders(data)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"} />
    }
    let sum = 0
    orders.map((el) => {
        sum += el.value
    })
    return (
        <div className={s.wrapper}>
            <Title>Профиль</Title>
            <h1 className={s.title}>Данные</h1>
            <div className={s.text}>{user.user.name}</div>
            <div className={s.text}>{user.user.email}</div>
            <h1 className={s.title}>Ваша скидка</h1>
            {sum >= 10000 ? (
                <div className={s.textDiscWrapper}>
                    <div className={s.textDiscrip}>Ваша скидка</div>
                    <div className={s.textDisc}>5%</div>
                    <div className={s.numberCartDisc}>Номер карты</div>
                    <div className={s.numberCart}>{user.user.id}</div>
                </div>
            ) : (
                <div className={s.textDiscWrapper}>
                    <div className={s.textDiscrip}>Ваша скидка</div>
                    <div className={s.textDisc}>2%</div>
                </div>
            )}
            <h1 className={s.title}>Заказы</h1>
            <div className={s.orders}>
                {orders.length == 0 ? (
                    <h3 className={s.subTitle}>Пока нет заказов</h3>
                ) : (
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
                )}
            </div>


            <button className={s.paymentBut} onClick={props.logout}><span>Выйти</span></button>
        </div>
    )
}

export default Profile