import React from 'react'
import ProvideHome from '../img/home.svg'
import ProvideCreditCard from '../img/credit-card.svg'
import ProvideThumbsUp from '../img/thumbs-up.svg'

export default function Provide() {
  return (
    <section className='provideSection'>
      <div className="container">
        <h2 className='provideTitle'>What we provide</h2>
        <div className='provideContent row'>
          <div className="provideInfo col-md-4 col-12">
            <img src={ProvideHome} alt="..." />
            <h2>10 years of experience in furniture business</h2>
            <p>We’re already established since 2012, and in 10 years we have lots of positive reviews and achievements</p>
            <a href="#">See more</a>
          </div>
          <div className="provideInfo col-md-4 col-12">
            <img src={ProvideCreditCard} alt="..." />
            <h2>Afforable price with world class quality</h2>
            <p>Our craftsmen have lots of experience dealing with crafting furnitures and some of them have world class quality</p>
            <a href="#">See more</a>
          </div>
          <div className="provideInfo col-md-4 col-12">
            <img src={ProvideThumbsUp} alt="..." />
            <h2>Bring your ideas into a living product</h2>
            <p>Besides you can buy the existing product, you can also consultate with us also to make your dream furniture</p>
            <a href="#">See more</a>
          </div>
        </div>
      </div>
    </section>
  )
}
