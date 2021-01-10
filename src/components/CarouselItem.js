import '../css/CarouselItem.css';

export default function CarouselItem({product, active}){
    return (
        <div className={active ? "carousel-item active" : "carousel-item"}>
            <img alt="" className="item-img" src={process.env.PUBLIC_URL+'/assets/'+product.image} />
            <div className="desc">
                <h1 className="item-name">{ product.name }</h1>
                <p className="item-category">{ product.category }</p>
                <p className="item-price">{ product.price }</p>
            </div> 
        </div>
    );
}