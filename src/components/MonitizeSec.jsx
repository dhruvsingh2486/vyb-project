import React from 'react'
import aImg from '../assets/a.png'
import bImg from '../assets/b.png'
import cImg from '../assets/c.png'
import dImg from '../assets/d.png'

function MonitizeSec() {
  return (
    <section>
     <div className=' border-red-300 w-11/12 lg:w-10/12 m-auto my-6 xl:mt-20 lg:flex lg:flex-wrap xl:flex xl:flex-wrap font-primaryjost'>
{/* left section   */}
     <div className='lg:w-2/5 xl:w-2/5 lg:relative xl:z-10 xl:mt-[345px] xl:relative lg:z-10 lg:mt-[345px] border-red-400 w-12/12 text-[#00dc82] font-medium text-2xl lg:text-4xl xl:text-4xl text-center my-6'>
     <p className=''>
     From Creation to Monitization: VYB Store Has It All 
     </p>
      </div>

      {/* right section  */}
      <div className='flex flex-row gap-1 w-12/12 my-1 border-blue-400 text-center'>

          <div className="flex flex-col gap-8 p-3 rounder-3xl my-none border-green-300 bg-black w-6/12 h-80 lg:w-[280px] lg:h-96 xl:h-96 rounded-2xl text-white my-2 cursor-pointer">

           <div className=''>
           <p className='border-red-300 w-fit m-auto font-medium text-md lg:text-3xl xl:text-3xl'>
              Trusted By Influencers
            </p>
            <p className='text-sm lg:text-md lg:text-lg'> 
              A trusted platform for influencers to grow and earn.
            </p>
           </div>

          <img src={dImg} alt="" className='lg:w-56 mx-auto' />

          </div>

          {/* card-2  */}


          <div className="flex flex-col gap-12 p-3 rounder-3xl my-none border-green-300 bg-black w-6/12 h-[300px] lg:h-[335px] xl:h-[335px] lg:w-[280px] xl:w-[280px] rounded-2xl text-white my-2 cursor-pointer">

           <div className=''>
           <p className='border-red-300 w-fit m-auto font-medium text-md lg:text-3xl xl:text-3xl'>
              Secured Data
            </p>
            <p className='text-sm lg:text-md lg:text-lg'> 
              Advane security measures to protect your valuable data.
            </p>
           </div>

          <img src={cImg} alt=""
                  className='h-32 w-32 mx-auto' />


          </div>
          </div>

          {/* card-3  */}
          <div className='flex flex-row gap-1 w-12/12 rounder-3xl border-blue-400 relative lg:ml-[420px] xl:ml-[450px] lg:mt-[-88px] xl:mt-[-88px]  text-center'>


          <div className="flex flex-col gap-8 p-3 rounder-3xl my-none border-green-300 bg-black w-6/12 h-80 lg:w-[280px] lg:h-96 xl:h-96 rounded-2xl text-white my-2 cursor-pointer">

           <div className='px-3'>
           <p className='border-red-300 w-fit m-auto font-medium text-md lg:text-3xl xl:text-3xl'>
             Authentic Payment Partner
            </p>
            <p className='text-sm lg:text-md lg:text-lg'> 
             Reliable, fast and secure payments you can trust.
            </p>
           </div>

          <img src={aImg} alt=""
           className='h-32 w-32 mx-auto' />

          </div>

          {/* card 4   */}


          <div className="flex flex-col gap-12 relative z-10 mt-[-10px] lg:mt-[-40px] xl:mt-[-40px] md:mt-[-40px] p-3 rounder-3xl my-none border-green-300 bg-black w-6/12 h-80 lg:h-[400px] xl:h-[400px] lg:w-[280px] xl:w-[280px] rounded-2xl text-white my-2 cursor-pointer">

           <div className=''>
           <p className='border-red-300 w-fit m-auto font-medium text-md lg:text-3xl xl:text-3xl'>
              Monitize Your Influence
            </p>
            <p className='text-sm lg:text-md lg:text-lg'> 
              Seemlessly turn your audience into consistent revenue.
            </p>
           </div>

          <img src={bImg} alt="" 
                     className='h-32 w-32 mx-auto' />


          </div>
      

     </div>
     </div>
    </section>
  )
}

export default MonitizeSec