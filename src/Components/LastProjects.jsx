import React, { Component } from 'react'
import Slider from "react-slick";
import LastProductsImg1 from '../img/lastProjectImg1.png'

export default class LastProjects extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      dots: false,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1335,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],

    };
    return (
      <section className="lastProductSection" id='loyiha'>
        <div className="lastProductContent">
          <h2 data-aos="fade-down" className="container">Bizni so‘nggi loyihalarimiz</h2>
          <div className="lastProductSlider container">
            <center>
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

            </center>
          </div>
        </div>
      </section>
    );
  }
}