import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <>
      <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='hero-map' />

        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w--50px]'
        />
        <h1 className='bold-52 lg:bold-88'>Sobi Hill Camp Area</h1>
        <p className='reguar-16 mt-6 text-gray-30 xl:max-w-[520px]'>We want to be with you on your journey into nature. Come and experience it with us</p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                alt='star'
                width={24}
                height={24}
                key={index}
              />
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            20k <span className='regular-16 lg:regular-20 ml-1'>Top ratings</span> 
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type='button' title='Download App' variant='btn_green'/>
          <Button type='button' title='About Camp' variant='btn_dark_green' icon='/play.svg'/>
        </div>
        </div>

        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 w-[268px] flex-col rounded-3xl gap-8 bg-green-90 px-7 py-8">

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero