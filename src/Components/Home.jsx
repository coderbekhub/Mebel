import React from 'react'
import Header from './Header'
import Provide from './Provide'
import Products from './Products'
import LastProjects from './LastProjects'
import NewComer from './NewComer'
import OurClients from './OurClients'
// import Details from './Details'
// import Footer from './Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Provide />
      <Products />
      <LastProjects />
      <NewComer />
      <OurClients />
      {/* <Details /> */}
      {/* <Footer /> */}
    </>
  )
}
