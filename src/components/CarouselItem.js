import '../css/CarouselItem.css';

export default function CarouselItem({product, cart, active, updateCurrentProduct, updateCartProduct, updateActiveProduct}){
    const updateProduct = ()=>{
        updateActiveProduct(product.id);
        updateCurrentProduct(product.id);
    }
    const addItem = () => {
        updateCartProduct(product.id, 1);
    }
    const removeItem = () => {
        updateCartProduct(product.id, -1);
    }
    return (
        <div className={active ? "carousel-item active" : "carousel-item"} onClick={updateProduct}>
            <img alt="" className="item-img" src={process.env.PUBLIC_URL+'/assets/'+product.image} />
            <div className="desc">
                <h1 className="item-name">{ product.name }</h1>
                <p className="item-category">{ product.category }</p>
                <p className="item-price">{ product.price }</p>
                <div className="item-qty">
                    <div className="qty-control neg" onClick={removeItem}>-</div>
                    <p className="quantity">{cart ? cart.quantity : 0}</p>
                    <div className="qty-control pos" onClick={addItem}>+</div>
                </div>
            </div> 
        </div>
    );
}