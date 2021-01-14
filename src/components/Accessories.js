import '../css/Accessories.css';
import AccessoryItem from './AccessoryItem';

import { useState } from 'react';

export default function Accessories({product, updateCartAccessory}) {
    
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
                            
                            return <AccessoryItem 
                                        key={accessory.id} 
                                        product={product}
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