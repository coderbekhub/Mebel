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
      <section className="lastProductSection">
        <div className="lastProductContent">
          <h2 className="container">Our lates projects</h2>
          <div className="lastProductSlider container">
            <Slider {...settings}>
              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>Kitchen</h3>
                <p>Architech & Interior Design - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>livingroom</h3>
                <p>Architech & Interior Design - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>bedroom</h3>
                <p>Architech & Interior Design - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>Kitchen</h3>
                <p>Architech & Interior Design - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>livingroom</h3>
                <p>Architech & Interior Design - 2023</p>
              </div>

              <div className="lastProductInfo">
                <img src={LastProductsImg1} alt="..." />
                <h3>bedroom</h3>
                <p>Architech & Interior Design - 2023</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}