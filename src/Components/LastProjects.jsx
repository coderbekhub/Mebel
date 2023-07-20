import React, { Component } from 'react'
import Slider from "react-slick";
import LastProductsImg1 from '../img/lastProjectImg1.png'

export default class LastProjects extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <section className="lastProductSection" id='loyiha'>
        <div className="lastProductContent">
          <h2 data-aos="fade-down" className="container">Bizni so‘nggi loyihalarimiz</h2>
          <div className="lastProductSlider container">
            <Slider {...settings}>
              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>Oshxona</h3>
                <p>Arxitek & Interer dizayni - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>Mehmonxona</h3>
                <p>Arxitek & Interer dizayni - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>yotoqxona</h3>
                <p>Arxitek & Interer dizayni - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>Oshxona</h3>
                <p>Arxitek & Interer dizayni - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>Mehmonxona</h3>
                <p>Arxitek & Interer dizayni - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>yotoqxona</h3>
                <p>Arxitek & Interer dizayni - 2023</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}