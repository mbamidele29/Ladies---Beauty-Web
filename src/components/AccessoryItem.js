export default function AccessoryItem({product, cart, accessory, active, onClick, updateCartAccessory}) {
    const update = ()=>{
        onClick(accessory.id);
    }
    
    const addItem = () => {
        updateCartAccessory(product.id, accessory.id, 1);
    }
    const removeItem = () => {
        updateCartAccessory(product.id, accessory.id, -1);
    }
    return (
        <div key={accessory.id} className={active===accessory.id ? "accesories-item active" : "accesories-item"} onClick={update}>
            <p className="accesories-price">{ accessory.price }</p>
            <img alt="" className="accessories-image" src={process.env.PUBLIC_URL+'/assets/'+accessory.image} />
            <div className="desc">
                <h2 className="accesories-name">{ accessory.name }</h2>
                <p className="accesories-category">{ accessory.category }</p>
                <div className="item-qty">
                    <div className="qty-control neg" onClick={removeItem}>-</div>
                    <p className="quantity">{cart ? cart.quantity : 0}</p>
                    <div className="qty-control pos" onClick={addItem}>+</div>
                </div>
            </div>
        </div>
    );
}