import React from 'react'
import FeatureCard from './FeatureCard'

function Features() {
  return (
    <section className=' w-[98%] grid md:grid-cols-4 grid-cols-2 gap-3 '>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        
    </section>
  )
}

export default Features