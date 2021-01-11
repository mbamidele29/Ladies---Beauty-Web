import '../css/Accessories.css';
import AccessoryItem from './AccessoryItem';

import { useState } from 'react';

export default function Accessories({product, cart, updateCartAccessory}) {
    
    const [active, setActive]=useState(-1);
    const onClick = (accessory_id) => {
        setActive(accessory_id);
    }

    return (
        <div className="accessories">
            <h2>Accessories</h2>
            
            <div className="accessories-items">
                {
                    (product && product.accessories.length>0) ?
                        product.accessories.map((accessory, index)=>{
                            let cartAccessories=[];
                            const cartItem = cart.filter(c => {
                                return c.id === product.id;
                            })

                            cartAccessories= cartItem.length > 0 ? 
                                (cartItem[0].accessories.filter(a => {
                                    return a.id === accessory.id;
                                })) : [];
                            return <AccessoryItem 
                                        key={accessory.id} 
                                        product={product}
                                        cart={cartAccessories[0]}
                                        accessory={accessory} 
                                        active={active} 
                                        onClick={onClick} 
                                        updateCartAccessory={updateCartAccessory} 
                                    />
                        })
                    : null
                }
            </div>
        </div>
    );
}