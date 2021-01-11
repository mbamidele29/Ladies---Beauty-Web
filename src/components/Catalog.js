import '../css/Catalog.css';
import { Link } from 'react-router-dom';
import { FaSort, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import CarouselItem from './CarouselItem';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Component } from 'react';



function CarouselButton({classN='', direction='', onClick}){
    return (
        <button className={classN} title={direction} onClick={onClick}>
            {direction.toLowerCase() === 'right' ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
    );
}

export default class Catalog extends Component {
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);
        this.updateActiveProduct=this.updateActiveProduct.bind(this);

        this.state={
            active: 1,
        }
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    updateActiveProduct(productId){
        this.setState({
            active: productId,
        })
    }

    render() {
        const settings = {
            dots: false,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "70px",
            slidesToShow: 2,
            speed: 500,
          };

          const { products } = this.props || [];
        return(
            <div className="catalog">
                <div className="heading">
                    <h1 className="title">Best Sellers</h1>
                    <Link className="icon-link order" title="order" to="#"><FaSort /></Link>
                    <div className="carousel-button">
                        <CarouselButton classN="icon-link left" direction="left" onClick={this.previous} />
                        <CarouselButton classN="icon-link right" direction="right" onClick={this.next} />
                    </div>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        products.map((item, index)=>{
                            const cartItem = this.props.cart.filter(c => {
                                return c.id === item.id;
                            })
                            return <CarouselItem 
                                        key={index}
                                        cart={cartItem[0]}
                                        updateCartProduct={this.props.updateCartProduct} 
                                        updateCurrentProduct={this.props.updateCurrentProduct} 
                                        product={item}
                                        updateActiveProduct={this.updateActiveProduct}
                                        active={this.state.active === item.id ? true : false}
                                    />
                        })
                    }
                </Slider>
            </div>
        );
    }
}