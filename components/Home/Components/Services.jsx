import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section className='md:w-[90%] grid grid-cols-1 md:grid-cols-3 m-auto p-12 gap-3 bg-white rounded-md  '>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        
    </section>
  )
}

export default Services