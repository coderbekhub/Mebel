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
      <section className="ourClientSection" id='mijozlarimiz'>
        <div className="ourClientContent">
          <h2 data-aos="fade-down" className="container">Mijozlarimiz fikri</h2>
          <div className="ourClientSlider container">
            <Slider {...settings}>
            <div className="ourClientInfo d-flex">
                <img src={OurClient2} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>Aytish kerakki, mebel sanoatidagi 10 yillik tajriba butunlay izsiz ketmaydi</h3>
                  <p>Ular aytganidek, ularning mebel va interyer biznesidagi 10 yillik tajribasi haqiqiydir. Ular bir vaqtning o'zida professional va do'stona ishlaydi va, albatta, natijalar mening kutganimdan ham yuqori.</p>
                  <h4>Muhammad</h4>
                  <span>1</span>
                </div>
              </div>
              <div className="ourClientInfo d-flex">
                <img src={OurClient1} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>Aytish kerakki, mebel sanoatidagi 10 yillik tajriba butunlay izsiz ketmaydi</h3>
                  <p>Ular aytganidek, ularning mebel va interyer biznesidagi 10 yillik tajribasi haqiqiydir. Ular bir vaqtning o'zida professional va do'stona ishlaydi va, albatta, natijalar mening kutganimdan ham yuqori.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>2</span>
                </div>
              </div>

              <div className="ourClientInfo d-flex">
                <img src={OurClient2} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>Aytish kerakki, mebel sanoatidagi 10 yillik tajriba butunlay izsiz ketmaydi</h3>
                  <p>Ular aytganidek, ularning mebel va interyer biznesidagi 10 yillik tajribasi haqiqiydir. Ular bir vaqtning o'zida professional va do'stona ishlaydi va, albatta, natijalar mening kutganimdan ham yuqori.</p>
                  <h4>Muhammad</h4>
                  <span>3</span>
                </div>
              </div>
              
              <div className="ourClientInfo d-flex">
                <img src={OurClient1} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>Aytish kerakki, mebel sanoatidagi 10 yillik tajriba butunlay izsiz ketmaydi</h3>
                  <p>Ular aytganidek, ularning mebel va interyer biznesidagi 10 yillik tajribasi haqiqiydir. Ular bir vaqtning o'zida professional va do'stona ishlaydi va, albatta, natijalar mening kutganimdan ham yuqori.</p>
                  <h4>Roy Rakabuming</h4>
                  <span>4</span>
                </div>
              </div>

              <div className="ourClientInfo d-flex">
                <img src={OurClient2} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>Aytish kerakki, mebel sanoatidagi 10 yillik tajriba butunlay izsiz ketmaydi</h3>
                  <p>Ular aytganidek, ularning mebel va interyer biznesidagi 10 yillik tajribasi haqiqiydir. Ular bir vaqtning o'zida professional va do'stona ishlaydi va, albatta, natijalar mening kutganimdan ham yuqori.</p>
                  <h4>Muhammad</h4>
                  <span>5</span>
                </div>
              </div>

              <div className="ourClientInfo d-flex">
                <img src={OurClient1} alt="..." />
                <div>
                  <img className='quoteIcon' src={QuoteIcon} alt="..." />
                  <h3>Aytish kerakki, mebel sanoatidagi 10 yillik tajriba butunlay izsiz ketmaydi</h3>
                  <p>Ular aytganidek, ularning mebel va interyer biznesidagi 10 yillik tajribasi haqiqiydir. Ular bir vaqtning o'zida professional va do'stona ishlaydi va, albatta, natijalar mening kutganimdan ham yuqori.</p>
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