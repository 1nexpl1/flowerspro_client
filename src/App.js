import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Approuter from "./components/Approuter";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from ".";
import {check} from "./http/userAPI";
import { fetchBrands, fetchDevices, fetchTypes } from "./http/DeviceAPI";
import { useToggle } from "@uidotdev/usehooks";
function App() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [openCart, toggleCart] = useToggle();
  const {device} = useContext(Context)
    // useEffect(() => {
    //   try {
    //     check().then(data => {
    //       user.setUser(data)
    //       user.setIsAuth(true)
    //     }).finally(() => setLoading(false))
    //   } catch (error) {
    //     setLoading(false)
    //   }
        
    // }, [])

    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }

  
  const addItem = (NewItem) => {
    if (!items.includes(NewItem)){
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
      <Navbar openCart ={openCart} toggleCart={toggleCart} items={items} sum={sum} deleteItem={deleteItem} setSum={setSum}/>
      <Approuter addItem={addItem} toggleCart={toggleCart}/>
    </BrowserRouter>
  );
}

export default App;
