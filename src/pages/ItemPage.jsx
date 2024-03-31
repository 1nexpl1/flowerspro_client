import React, { useEffect, useState } from 'react'
import PhotosItem from '../components/PhotosItem/PhotosItem'
import ItemDescrip from '../components/ItemDescrip/ItemDescrip'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/DeviceAPI'
import HoverContact from '../components/HoverContact/HoverContact'

const ItemPage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  return (
    <div className='wrapperItem'>
       <PhotosItem item={device}/> 
       <ItemDescrip item={device}/>
       <HoverContact />
    </div>
  )
}

export default ItemPage