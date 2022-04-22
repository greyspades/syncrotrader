import React from 'react'
import Image from 'next/image'
import faker from '@faker-js/faker'

const Intro = () => {
    return (
       <div className='grid justify-center bg-[#5E5E5F]'>
            <div className='grid grid-cols-5  h-[300px] md:w-[1300px] m-5 rounded-md justify-center'>
           <div className='grid col-span-3'>
           <div className='grid m-9 p-6 border-[#D1D415] border-4 rounded-2xl  grid-cols-4  bg-gradient-to-r from-black'>
                <h3 className='grid col-span-3 text-white text-4xl font-bold'>
                    Trade with an Award winning broker
                </h3>
            </div>
           </div>

           <div style={{height:'90%',width:'90%'}} className='grid col-span-2 justify-center'>
            <Image src={'/coinhand.jpg'} width={600} height={150} layout='intrinsic'  />
           </div>
        </div>

        <div className='grid justify-center'>
        
            <div className='relative md:w-[900px] h-[300px] bg-[#D3D3D3] md:ml-[150px] my-9 rounded-3xl p-6'>
            <h3 className='text-3xl font-bold text-center'>
                On Your Own Terms
            </h3>

            {/* //*intro talk */}
            
            <div className='relative' style={{zIndex:200,height:100}}>
            <p  className='text-center z-100 font-semibold text-lg'>
                {faker.lorem.paragraphs()}
            </p>
            </div>
             <div style={{zIndex:0}} className='absolute left-[-150px] top-[-50px]' >
             <Image className='z-10' width={400} height={400} src="/statistics(7).png" />
             </div>
           </div>
        </div>
       </div>

    )
}

export default Intro
