import React from 'react'
import s from './UrBlock.module.css'
import Table from 'react-bootstrap/Table';
import file from '../../files/oferta.docx'
const UrBlock = () => {
    return (
        <div className={s.wrappeTable}>
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
        </div>
    )
}

export default UrBlock