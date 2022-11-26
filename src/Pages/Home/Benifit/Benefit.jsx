import React from 'react'
import BenefitBg from '../../../images/benefit-bg.jpg'
import LaptopImg from '../../../images/laptop.png'
const Benefit = () => {
  return (
    <section style={{background: `url(${BenefitBg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div className="container mx-auto">
        <div className='md:flex items-center justify-between'>
          <div className='py-24'>
            <h1 className='text-infinity font-semibold text-5xl '>Register & Benefit</h1>
            <ul className='text-white list-disc list-inside leading-10 my-8'>
              <li>Participate in auctions</li>
              <li>Submit your ads</li>
              <li>Promote your ads</li>
              <li>Get reviewed to become noticeable</li>
              <li>Save favorite ads</li>
              <li>And more</li>
              
            </ul>
            <button
              className="inline-block  bg-infinity px-8 py-4 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              How It works
            </button>
          </div>
          <div className='text-center'>
            <img className='w-full md:w-3/4 ml-auto' src={LaptopImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit