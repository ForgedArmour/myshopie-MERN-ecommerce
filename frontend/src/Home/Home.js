import React from 'react'
import Hero from '../Hero/Hero'
import FetchProducts from '../Products/FetchProducts'

export default function Home() {
  return (
    <div className="main_container">
      <Hero />
      <FetchProducts />
    </div>
    
  )
}
