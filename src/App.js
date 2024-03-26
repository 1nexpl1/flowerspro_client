import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Approuter from "./components/Approuter";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from ".";
import {check} from "./http/userAPI";
import { fetchBrands, fetchDevices, fetchTypes } from "./http/DeviceAPI";
function App() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  const {device} = useContext(Context)
    // useEffect(() => {
    //     check().then(data => {
    //         user.setUser(data)
    //         user.setIsAuth(true)
    //         console.log(data);
    //     }).finally(() => setLoading(false))
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
      <Navbar items={items} sum={sum} deleteItem={deleteItem} setSum={setSum}/>
      <Approuter addItem={addItem} />
    </BrowserRouter>
  );
}

export default App;
