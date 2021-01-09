import '../css/CarouselItem.css';

export default function CarouselItem({product}){
    return (
        <div className="carousel-item">
            <img className="item-img" src={process.env.PUBLIC_URL+`/assets/item-2.png`} />
            <div className="desc">
                <h1 className="item-name">{ product.name }</h1>
                <p className="item-category">{ product.category }</p>
                <p className="item-price">{ product.price }</p>
            </div> 
        </div>
    );
}