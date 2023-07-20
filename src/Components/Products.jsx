import React, { Component } from "react";
import Slider from "react-slick";
import ProductsImg1 from '../img/ProductsImg1.png'
import ProductsImg2 from '../img/ProductsImg2.png'
import ProductsImg3 from '../img/ProductsImg3.png'
import ProductsImg4 from '../img/ProductsImg4.png'
import ProductsImg5 from '../img/ProductsImg5.png'

export default class Products extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <section className="productSection">
        <div className="productContent">
          <h2 className="container">Ko'p sotiladigan mahsulotlar</h2>
          <div className="productSlider">
            <Slider {...settings}>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg1} alt="..." />
                </div>
                <span className="productType">Ofis kreslosi</span>
                <h3>Kremli ofis kreslosi</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 50,00</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg2} alt="..." />
                </div>
                <span className="productType">Seyf</span>
                <h3>Celestra kulrang shkafi</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 35,05</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg3} alt="..." />
                </div>
                <span className="productType">Bezatish</span>
                <h3>Feyka sun'iy zavodi</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 5,00</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg4} alt="..." />
                </div>
                <span className="productType">Yoritgichlar</span>
                <h3>Oq turuvchi chiroq</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 23,58</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg5} alt="..." />
                </div>
                <span className="productType">Yotoq javoni</span>
                <h3>Jigarrang yog'och stol</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 23,58</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg1} alt="..." />
                </div>
                <span className="productType">Ofis kreslosi</span>
                <h3>Kremli ofis kreslosi</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 50,00</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg2} alt="..." />
                </div>
                <span className="productType">Seyf</span>
                <h3>Celestra kulrang shkafi</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 35,05</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg3} alt="..." />
                </div>
                <span className="productType">Bezatish</span>
                <h3>Suniy gullar</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 5,00</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg4} alt="..." />
                </div>
                <span className="productType">Yoritgichlar</span>
                <h3>Oq turuvchi chiroq</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 23,58</span>
              </div>
              <div className="productInfo">
                <div className="imgContent">
                  <img src={ProductsImg5} alt="..." />
                </div>
                <span className="productType">Yotoq javoni</span>
                <h3>Jigarrang yog'och stol</h3>
                <span className="productSize">40 x 50 x 60</span>
                <span className="productPrice">$ 23,58</span>
              </div>            
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}