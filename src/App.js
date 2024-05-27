import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Approuter from "./components/Approuter";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from ".";
import { check } from "./http/userAPI";
import { fetchBrands, fetchDevices, fetchOneDevice, fetchTypes } from "./http/DeviceAPI";
import { useToggle } from "@uidotdev/usehooks";
function App() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  const mediaQuerry = window.matchMedia('(max-width:780px)')
  const [openCart, toggleCart] = useToggle();
  const { device } = useContext(Context)

  useEffect(() => {   
    fetchTypes().then(data => device.setTypes(data))
    check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
      if (data.role === 'ADMIN') {
        user.setIsAdmin(true)
      }
    })
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
      let prices =[]
      device.devices.map((e)=>{
      prices.push(e.price)
      })
      device.setMin(Math.min(...prices))
      device.setMax(Math.max(...prices))
    }).finally(() => setLoading(false))
  }, [])


  const click = (type, brand, flower, value, setType, setBrand) => {
    device.setSelectedType(type)
    device.setSelectedBrand(brand)
    setType(null)
    setBrand(null)
    fetchDevices(device.selectedType, device.selectedBrand).then(data => {
      let arr = []
      data.rows.map((dev) => {
        if ((dev.price >= value[0] && dev.price <= value[1])) {
          if (flower !== null) {
            fetchOneDevice(dev.id).then(e => {
              if (e.info) {
                e.info.map((i) => {
                  if (i.title === 'Состав' || i.title === 'Состав Букета') {
                    let res = i.description.split(', ')
                    let arr2 = []
                    res.map((el) => {
                      arr2.push(el.split(' -')[0])
                    })
                    if (arr2.includes(flower)) {
                      arr.push(dev)
                    }
                  }
                })
              }
              device.setDevices(arr)
              device.setTotalCount(data.count)
            })
          } else {
            data.rows.map((dev) => {
              if ((dev.price >= value[0] && dev.price <= value[1])) {
                arr.push(dev)
              }
            })

            device.setDevices(arr)
            arr = []
            device.setTotalCount(data.count)
          }
        }
      })
    })
  }




  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  if (loading) {
    return <Spinner animation={"grow"} />
  }

  const addItem = (NewItem) => {
    if (!items.includes(NewItem)) {
      setItems([...items, NewItem]);
      setSum(sum + NewItem.price * NewItem.count);
    }
  };
  const deleteItem = (Item) => {
    setItems(items.filter((element) => element.id !== Item.id));
    setSum(sum - Item.price * Item.count);
  };
  return (
    <BrowserRouter>  
      <Navbar click = {click} openCart={openCart} toggleCart={toggleCart} items={items} sum={sum} deleteItem={deleteItem} setSum={setSum} />
      <Approuter click = {click} addItem={addItem} toggleCart={toggleCart} logout={logout}/>
    </BrowserRouter>
  );
}

export default App;
