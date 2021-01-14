import { useState } from "react";

import Nav from './components/Nav';
import Catalog from './components/Catalog';
import './css/App.css';

import { data as rawData } from './utils/data';
import Accessories from './components/Accessories';
import Checkout from "./components/Checkout";

function filterProduct(products, productId) {
  const item = products.filter((product)=>product.id===productId);
  return item || [];
}

function App() {
  const [showCart, setShowCart]=useState(false);
  const [cart, setCart]=useState(0);
  const [data, setData]=useState(rawData);
  const [currentProduct, setCurrentProduct]=useState(1);

  function updateCartProduct(productId, count){
    let newData=[];
    let newCart=0;
    data.forEach(item => {
        if(item.id===productId){
          let qty=item.quantityInCart + count;
          if(qty>item.quantityAvailable)qty=item.quantityAvailable;
          if(qty<0)qty=0;

          const newItem ={...item, "quantityInCart": qty};
          newData.push(newItem);
        }else newData.push(item);
    });

    newData.forEach(item=>{
      if(item.quantityInCart > 0)newCart++;
    })

    setCart(newCart);
    setData(newData);
  }
  
  function updateCartAccessory(productId, accessoryId, count){
    let newData=[];
    let newAccessories=[];
    data.forEach(item => {
        if(item.id===productId && item.quantityInCart>0){
          let accessories=item.accessories;
          accessories.forEach(accessory => {
            if(accessory.id===accessoryId){
              if(!accessory.quantityInCart)accessory.quantityInCart=0;
              let qty=accessory.quantityInCart + count;
              if(qty<0)qty=0;
              newAccessories.push({...accessory , "quantityInCart": qty});
            }else newAccessories.push(accessory);
          });
          const newItem ={...item, "accessories": newAccessories};
          newData.push(newItem);
        }else newData.push(item);
    });
    setData(newData);
  }

  const toggleCart =()=>{
    setShowCart(!showCart);
  }
  return (
    <div className="main">
      <Nav cart={cart} toggleCart={toggleCart} />
      <div className="mart">
        <Catalog products={data} updateCurrentProduct={setCurrentProduct} updateCartProduct={updateCartProduct} />
        <Accessories product={filterProduct(data, currentProduct)[0]} updateCartAccessory={updateCartAccessory} />
        <Checkout products={data} active={showCart} />
      </div>
    </div>
  );
}

export default App;
