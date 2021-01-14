export default function  CheckoutItem({product}) {
    return (
        <div className="cart-item card">
                <div className="product-container">
                    <div className="product card">
                        <img alt="" className="item-img" src={process.env.PUBLIC_URL+'/assets/'+product.image} />
                        <div className="desc">
                            <h1 className="item-name">{ product.name }</h1>
                            <p className="item-category">{ product.category }</p>
                            <p className="item-quantity">{ product.quantityInCart > 1 ? `${product.quantityInCart} Items` : `${product.quantityInCart} Item` } In Cart</p>
                        </div> 
                    </div>
                    <div className="cart-accessories">
                        {
                            product.accessories.map((accessory, index)=> {
                                if(accessory.quantityInCart > 0){
                                    return (
                                        <div key={index}>
                                            <p>{accessory.name} x{accessory.quantityInCart || 0}</p>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
                <p className="item-price">${ product.total }</p>
            </div>
    );
}