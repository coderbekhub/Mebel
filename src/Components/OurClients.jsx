import React, { Component } from 'react'
import Slider from "react-slick";
import OurClient1 from '../img/ourClient1.png'
import OurClient2 from '../img/ourClient2.png'
import QuoteIcon from '../img/quoteIcon.svg'

export default class OurClients extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 1.4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 6000,
      cssEase: "linear"
    };
    return (
      <section className="ourClientSection">
        <div className="ourClientContent">
          <h2 className="container">What our clients say</h2>
          <div className="ourClientSlider container">
            <Slider {...settings}>
            <div className="ourClientInfo d-flex">
                <img src={OurClient2} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>As expected, 10 years experience on furniture business will not disappointing at all</h3>
                  <p>As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>1</span>
                </div>
              </div>
              <div className="ourClientInfo d-flex">
                <img src={OurClient1} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>As expected, 10 years experience on furniture business will not disappointing at all</h3>
                  <p>As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>2</span>
                </div>
              </div>

              <div className="ourClientInfo d-flex">
                <img src={OurClient2} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>As expected, 10 years experience on furniture business will not disappointing at all</h3>
                  <p>As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>3</span>
                </div>
              </div>
              
              <div className="ourClientInfo d-flex">
                <img src={OurClient1} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>As expected, 10 years experience on furniture business will not disappointing at all</h3>
                  <p>As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>4</span>
                </div>
              </div>

              <div className="ourClientInfo d-flex">
                <img src={OurClient2} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>As expected, 10 years experience on furniture business will not disappointing at all</h3>
                  <p>As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>5</span>
                </div>
              </div>

              <div className="ourClientInfo d-flex">
                <img src={OurClient1} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>As expected, 10 years experience on furniture business will not disappointing at all</h3>
                  <p>As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>6</span>
                </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}