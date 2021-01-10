import '../css/Accessories.css';
import AccessoryItem from './AccessoryItem';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Accessories({product}) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
    };
    return (
        <div className="accessories">
            <h2>Accessories</h2>
            
            <div className="accessories-items">
                {/* <Slider {...settings}>
                    {
                        product.accessories.map((accessory, index)=>{
                            return <AccessoryItem key={accessory.id} accessory={accessory} active={index===1 ? true : false} />
                        })
                    }
                </Slider> */}
                {
                    product.accessories.map((accessory, index)=>{
                        return <AccessoryItem key={accessory.id} accessory={accessory} active={index===1 ? true : false} />
                    })
                }
            </div>
        </div>
    );
}