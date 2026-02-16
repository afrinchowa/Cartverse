import React, { useEffect, useState } from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'

function Home() {

  let heroData = [
    {text1: "Discover the world of", text2: "gaming with us!"},
    {text1: "Join our gaming community", text2: "and level up your skills!"},
    {text1: "Experience the thrill of", text2: "gaming like never before!"},
    {text1: "Unleash your gaming potential", text2: "with us!"},
  ]
  let [heroCount, setHeroCount] = useState(0)
  useEffect(() => {    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
  <div className='overflow-x-hidden relative top-[70px]'>
    <div className='w-full h-screen flex items-center justify-center text-20px md:text-[40px] lg:text-[55px] text-[#88d933] '>
      <p>{heroData[heroCount].text1} {heroData[heroCount].text2}</p>
    
    <Background heroCount={heroCount}/>
    <Hero heroCount={heroCount} 
    setHeroCount={setHeroCount} 
    heroData={heroData[heroCount]}/>
    </div>
    </div>
  )
}

export default Home
