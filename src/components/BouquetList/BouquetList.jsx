import React, { useContext } from 'react'
import { Context } from '../..'
import Item from '../Item/Item'

const BouquetList = (props) => {
  const {device} = useContext(Context)
  return (
    <>
    {device.devices.map(device =>
        <Item key={device.id} item={device} addItem={props.addItem}/>
    )}
    </>
  )
}

export default BouquetList