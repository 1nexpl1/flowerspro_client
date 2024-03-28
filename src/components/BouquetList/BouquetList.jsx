import React, { useContext } from 'react'
import { Context } from '../..'
import Item from '../Item/Item'
import { observer } from 'mobx-react-lite'

const BouquetList = observer((props) => {
  const {device} = useContext(Context)
  return (
    <>
    {device.devices.map(device =>
        <Item toggleCart={props.toggleCart} key={device.id} item={device} addItem={props.addItem}/>
    )}
    </>
  )
})

export default BouquetList