import React from 'react'
import ProvideHome from '../img/home.svg'
import ProvideCreditCard from '../img/credit-card.svg'
import ProvideThumbsUp from '../img/thumbs-up.svg'

export default function Provide() {
  return (
    <section className='provideSection' id='taminlash'>
      <div className="container">
        <h2 data-aos="fade-down" className='provideTitle'>Biz nimani ta'minlaymiz</h2>
        <div className='provideContent row'>
          <div data-aos="fade-right" className="provideInfo col-md-4 col-xl-4 col-12">
            <img src={ProvideHome} alt="..." />
            <h2>Mebel biznesida 10 yillik tajriba</h2>
            <p>Biz 2012 - yildan beri o'z faoliyatimizni yuritamiz va 10 yil ichida koplab sharhlar va yutuqlarga erishdik</p>
            <a href="#">Batafsil</a>
          </div>
          <div data-aos="fade-down" className="provideInfo col-md-4 col-xl-4 col-12">
            <img src={ProvideCreditCard} alt="..." />
            <h2>Jahon darajasidagi sifat bilan hamyonbop narx</h2>
            <p>Bizning ustalarimiz mebel ishlab chiqarish bo'yicha katta tajribaga ega va ularning ba'zilari jahon darajasidagi sifatga ega</p>
            <a href="#">Batafsil</a>
          </div>
          <div data-aos="fade-left" className="provideInfo col-md-4 col-xl-4 col-12">
            <img src={ProvideThumbsUp} alt="..." />
            <h2>O'z g'oyalaringizni jonli mahsulotga aylantiring</h2>
            <p>Mavjud mahsulotni xarid qilishdan tashqari, biz bilan maslahatlashib, orzuingizdagi mebelni yaratishingiz ham mumkin</p>
            <a href="#">Batafsil</a>
          </div>
        </div>
      </div>
    </section>
  )
}
