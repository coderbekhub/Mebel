import React from 'react'
import FooterBrand from '../img/footerBrand.svg'

export default function Footer() {
  return (
    <section className="footerSection">
      <div className="container">
        <nav className='footerNav'>
          <div className='footerContent'>
            <img src={FooterBrand} alt="..."/>
              <h2>Better Furniture, Better Living</h2>
              <div className='footerInfo'>
                <a className='footerAddress'>Address
                  <span>7319 Wagon Lane Bradenton, FL 34203</span>
                </a> 
                <br /> 
                <a className='footerContact'>Contact Us
                  <span>hellosansbrothers@gmail.com</span>
                </a>
              </div>
            </div>

            <ul className="footerList">
              <li>
                <h2>Website</h2>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>

            <ul className="footerCatalog">
                <li><h2>Products</h2></li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Storages</li>
                <li>Decorations</li>
            </ul>

            <div className='hr'></div>

          </nav>
          <div className='companyInfo'>
            <h2>© Sans Brothers</h2>
            <div>
              <a href="#">Privacy and Terms</a>
              <a href="#">Legal Notice</a>
              <a href="#">Languanges</a>
            </div>

            <ul className="footerSocialList">
              <li>
                <a href="#">
                  <i className='bx bxl-instagram-alt'></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='bx bxl-facebook' ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='bx bxl-linkedin' ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='bx bxl-twitter' ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}
