import '../css/CheckOut.css';
import CheckoutItem from './CheckoutItem';

export default function CheckOut({products, active}){
    let total=0;
    products.forEach(product => {
        if(product.quantityInCart > 0){
            product.total=(product.quantityInCart * product.price);
            const accessories=product.accessories;
            accessories.forEach(accessory=>{
                if(accessory.quantityInCart > 0)product.total+=(accessory.quantityInCart * accessory.price);
            })
            total+=product.total;
        }
    });
    return (
        <div className={active ? "checkout show" : "checkout"}>
            <h2>CheckOut - ${total}</h2>
            <div className="cart-items">
                {
                    products.map((product, index)=>{
                        if(product.quantityInCart > 0)return <CheckoutItem key={index} product={product} />
                    })
                }
            </div>
        </div>
    );
}