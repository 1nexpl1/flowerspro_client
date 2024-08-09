import React from 'react'
import s from './UrBlock.module.css'
import Table from 'react-bootstrap/Table';
import file from '../../files/oferta.docx'
import {motion} from 'framer-motion'
const UrBlock = () => {
    return (
        <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{duration: 0.5}}
        className={s.wrappeTable}>           
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Полное наименование организации:</td>
                        <td>Индивидуальный предприниматель Секерина Юлия Евгеньевна</td>
                    </tr>
                    <tr>
                        <td>Краткое наименование организации:</td>
                        <td>ИП Секерина Ю.Е.</td>
                    </tr>
                    <tr>
                        <td>ИНН</td>
                        <td>667351454280</td>
                    </tr>
                    <tr>
                        <td>ОГРНИП</td>
                        <td>322665800214898</td>
                    </tr>
                </tbody>
            </Table>           
            <a className={s.file} href={file} download>Договор оферты</a>
        </motion.div>
    )
}

export default UrBlock