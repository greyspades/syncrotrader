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

        <div className='talk-body'>        
           <div className='grid justify-center md:mt-[50px]'>
           <div className='bg-[#D3D3D3] w-[600px] h-[40px] rounded-full relative z-50 shadow-2xl'>
            <h3 className='text-3xl font-bold text-center'>
                On Your Own Terms
            </h3>
            </div>


           </div>
        <div className='grid justify-center relative md:mt-[10px] '>
        
            <div className='relative ' >
            <div className='md:w-[900px] h-[250px] bg-[#D3D3D3]  my-9 rounded-full p-10 z-50 relative shadow-2xl'>
           

            {/* //*intro talk */}
            
            <div className='relative' style={{zIndex:200,height:100}}>
            <p  className='text-center z-100 font-semibold text-lg'>
                {faker.lorem.paragraph()}
            </p>
            </div>
             
           </div>
            </div>

           <div style={{zIndex:0}} className='absolute md:right-[30px] md:bottom-[100px] z-0' >
             <Image className='z-10' width={350} height={350} src="/statistics(7).png" />
             </div>
        </div>
                </div>
       </div>

    )
}

export default Intro
