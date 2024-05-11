import axios from "axios"
import md5 from "md5"

export const GoToPay = async(OutSum) => {
    const invoiceID = await axios.post('https://auth.robokassa.ru/Merchant/Indexjson.aspx', {params: {
        'MerchantLogin': 'flowers-pro-vp.ru',
        'OutSum': OutSum,
        'SignatureValue': md5(`flowers-pro-vp.ru:${OutSum}::Theteda123-45`)
        }})
    return('https://auth.robokassa.ru/Merchant/Index/'+ invoiceID.invoiceID)
}