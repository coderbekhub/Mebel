import React from 'react'

export default function Details() {
  return (
    <section className='detailSection'>
      <div className="container">
        <div className='detailsContent'>
          <h2 data-aos="fade-right">Har bir bajargan ishimizning mayda detallarigacha e'tibor qaratamiz</h2>
          <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit et nisl tristique nulla. Nisl, egestas molestie vestibulum lectus habitasse donec morbi. At est parturient id eu ut. </p>
          <div data-aos="fade-right" className='detailsBtn d-flex align-items-center'>
            <a href="#">Biz bilan bog'lanish</a>
            <a href="#">Loyihalarni ko'rish</a>
          </div>
        </div>
      </div>
    </section>
  )
}
