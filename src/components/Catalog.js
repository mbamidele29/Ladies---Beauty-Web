import '../css/Catalog.css';
import { Link } from 'react-router-dom';
import { FaSort, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import CarouselItem from './CarouselItem';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Component } from 'react';



function CarouselButton({direction='', onClick}){
    return (
        <button className="icon-link" title={direction} onClick={onClick}>
            {direction.toLowerCase() === 'right' ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
    );
}

export default class Catalog extends Component {
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);

        this.state={
            prevSlide:0,
            activeSlide: 0
        }
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
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
            beforeChange: (current, next) => this.setState({ prevSlide: next }),
            afterChange: current => this.setState({ activeSlide: current })
          };

          const { products } = this.props || [];
        return(
            <div className="catalog">
                <div className="heading">
                    <h1 className="title">Best Sellers</h1>
                    <Link className="icon-link order" title="order" to="#"><FaSort /></Link>
                    <div className="carousel-button">
                        <CarouselButton direction="left" onClick={this.previous} />
                        <CarouselButton direction="right" onClick={this.next} />
                    </div>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        products.map((item, index)=>{
                            return <CarouselItem product={item} key={index} active={this.state.activeSlide+1 === index ? true : false} />
                        })
                    }
                </Slider>
            </div>
        );
    }
}