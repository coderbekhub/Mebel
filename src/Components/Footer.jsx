import React from 'react'
import FooterBrand from '../img/footerBrand.svg'

export default function Footer() {
  return (
    <section className="footerSection" id='aloqa'> 
      <div className="container">
        <nav className='footerNav'>
          <div className='footerContent'>
            <img src={FooterBrand} alt="..."/>
              <h2>Yaxshi mebel bilan, yaxshi yashang</h2>
              <div className='footerInfo'>
                <a className='footerAddress'>Manzil
                  <span>Tashkent, Yashnobod 3/12</span>
                </a> 
                <br /> 
                <a className='footerContact'>Biz bilan bog'lanish
                  <span>mebel@gmail.com</span>
                </a>
              </div>
            </div>

            <ul className="footerList">
              <li>
                <h2>Veb-sayt</h2>
              </li>
              <li>
                <a href="/">Bosh sahifa</a>
              </li>
              <li>
                <a href="#taminlash">Biz haqimizda</a>
              </li>
              <li>
                <a href="#mijozlarimiz">Mijozlar fikri</a>
              </li>
              <li>
                <a href="#yangi-mahsulot">Yangi mahsulotlar</a>
              </li>
            </ul>

            <ul className="footerCatalog">
                <li><h2>Mahsulotlar</h2></li>
                <li>Javon</li>
                <li>O'rindiqlar</li>
                <li>Seyflar</li>
                <li>Dekoratsiyalar</li>
            </ul>

            <div className='hr'></div>

          </nav>
          <div className='companyInfo'>
            <h2>© MEBEL</h2>
            <div>
              <a href="#">Maxfiylik shartlari</a>
              <a href="#">Huquqiy eslatma</a>
              <a href="#">Tillar</a>
            </div>

            <ul className="footerSocialList">
              <li>
                <a href="https://www.instagram.com/webmarketing_uz/" target='_blank'>
                  <i className='bx bxl-instagram-alt'></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100094433897785" target='_blank'>
                  <i className='bx bxl-facebook' ></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/webmarketing_hr" target='_blank'>
                  <i className='bx bxl-telegram' ></i>
                </a>
              </li>
              <li>
                <a href="#" target='_blank'>
                  <i className='bx bxl-twitter' ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}
