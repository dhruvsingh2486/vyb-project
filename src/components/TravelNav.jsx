import React from 'react'

function TravelNav() {
    const travelNavArr = ["Travel", "Digital", "Brand", "Merch"]
  return (
    <>
    <section className='border-1 border-white text-white font-primaryjost'>
        <ul className='flex w-full lg:w-10/12 xl:w-10/12 m-auto justify-between my-5 bg-black px-3 h-20 py-2 rounded-3xl' >
    {travelNavArr.map((menu)=>
    <li key={menu}  className='font-semibold text-xl md:text-3xl lg:text-3xl xl:text-3xl hover:border-b-[4px] border-[#00dc82] p-3 duration-200 h-16'>{menu}</li>

    )}
            

      
            
           
        </ul>
    </section>
    </>
  )
}

export default TravelNav

{/* <li className='font-semibold text-2xl hover:border-b-[5px] border-[#00dc82] p-3 duration-200'>{travNav.text}</li> */}
