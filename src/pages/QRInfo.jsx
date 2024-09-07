import React from 'react'
import Title from '../components/UI/Title/Title'
import HoverContact from '../components/HoverContact/HoverContact'
import QRSteps from '../components/QRSteps/QRSteps'
import s1 from '../images/qr2.png'

const QRInfo = () => {
    return (
        <div className='QRwrapper'>
            <Title>QR-код с плеером</Title>
            <div className="whatitisqrwrapper">
                <div className='qrWhatDesc'>
                    <div className='subTitleQR'>Что это такое?</div>
                    <div className='qrText'>Мы решили ввести новую отличительную особенность наших букетов - теперь заказывая букет вы можете дополнить прекрасную композицию небольшой открыткой с QR-кодом, ведущим на наш сайт где находится плеер, в котором стоит заранее выбранная вами аудиозапись</div>
                </div>
                <img className='qrscreen' src={s1} alt='' />
            </div>
            <div className='qrHowOrder'>
                <div className='subTitleQR'>Как заказать?</div>
                <QRSteps />
            </div>
            <HoverContact />
        </div>
    )
}

export default QRInfo