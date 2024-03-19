import React, { useEffect, useState } from 'react'
import PhotosItem from '../components/PhotosItem/PhotosItem'
import ItemDescrip from '../components/ItemDescrip/ItemDescrip'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/DeviceAPI'

const ItemPage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  console.log(device);
  return (
    <div className='wrapperItem'>
       <PhotosItem item={device}/> 
       <ItemDescrip item={device}/>
    </div>
  )
}

export default ItemPage