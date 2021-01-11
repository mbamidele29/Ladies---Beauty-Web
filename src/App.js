import { useState } from "react";

import Nav from './components/Nav';
import Catalog from './components/Catalog';
import './css/App.css';

import { data } from './utils/data';
import Accessories from './components/Accessories';

function filterProduct(products, productId) {
  const item = products.filter((product)=>product.id===productId);
  return item || [];
}

function App() {
  const [cart, setCart]=useState([]);
  const [currentProduct, setCurrentProduct]=useState(1);

  function updateCartProduct(productId, count){
    let found=false;
    let newCart=[];
    cart.forEach(item => {
        if(item.id===productId){
          found=true;
          let qty=item.quantity + count;
          if(qty>10)qty=10;
          if(qty>0){
            const newItem ={...item, "quantity": qty};
            newCart.push(newItem);
          }
        }else newCart.push(item);
    });
    
    if(!found){
      if(count === 1){
        newCart=[...newCart, {
          "id": productId,
          "quantity": count,
          "accessories": [],
        }];
      }
    }
    setCart(newCart);
  }
  
  function updateCartAccessory(productId, accessoryId, count){
    let newCart=[];
    let foundCart=null;
    cart.forEach(item => {
        if(item.id===productId){
          foundCart=item;
        }else newCart.push(item);
    });


    if(foundCart != null){

      let found=false;
      let newAccessories=[];
      const accessories=foundCart.accessories;

      accessories.forEach(item => {
        if(item.id===accessoryId){
          found=true;
          let qty=item.quantity + count;
          if(qty>10)qty=10;
          if(qty>0){
            const newItem ={...item, "quantity": qty};
            newAccessories.push(newItem);
          }
        }else newAccessories.push(item);
      });

      if(!found){
        if(count === 1){
          newAccessories=[...newAccessories, {
            "id": accessoryId,
            "quantity": count,
            "accessories": [],
          }];
        }
      }

      foundCart.accessories=newAccessories;
      
    
      newCart.push(foundCart);
      setCart(newCart);
    }
  }

  return (
    <div className="main">
      <Nav cart={cart} />
      <div className="mart">
        <Catalog products={data} cart={cart} updateCurrentProduct={setCurrentProduct} updateCartProduct={updateCartProduct} />
        <Accessories product={filterProduct(data, currentProduct)[0]} cart={cart} updateCartAccessory={updateCartAccessory} />
      </div>
    </div>
  );
}

export default App;
