import faker from '@faker-js/faker'
import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='grid justify-center my-[60px]'>
           <div className='grid justify-center'>
                {/* //* services header */}
            <div className='bg-[#D3D3D3] rounded-full md:w-[600px] h-[40px]'>
                <h3 className='text-center text-2xl font-bold'>
                    Top Tier Services
                </h3>
            </div>
           </div>

           <div className='grid justify-center mt-[60px] '>
           <div className='bg-[#D3D3D3] shadow-2xl rounded-full md:w-[800px] h-[70px] grid justify-center p-8'>
                <p className='text-center text-md font-medium'>
                    {/* {faker.lorem.paragraph()} */}
                </p>
            </div>
           </div>

           <div className='grid grid-cols-4 mt-[80px] space-x-20 '>
               <div className='grid justify-center grid-rows-3'>
               <div className='relative bg-[#5E5E5F] rounded-full  h-[200px] w-[200px]'>
                    <div className='absolute left-[25%] top-[25%]'>
                    <Image src='/museum.png' width={100} height={100} layout='intrinsic' />
                    </div>
                </div>

                <div className='w-[200px] mt-[10px]  text-center bg-[#D3D3D3] h-[30px] rounded-full shadow-2xl border-2 border-[#D1D415]'>
                    Crypto Currency wallets
                </div>
               </div>

               {/* //*other item */}

               <div className='grid justify-center grid-rows-3'>
               <div className='relative bg-[#5E5E5F] rounded-full  h-[200px] w-[200px]'>
                    <div className='absolute left-[25%] top-[25%]'>
                    <Image src='/cryptocurrencies.png' width={100} height={100} layout='intrinsic' />
                    </div>
                </div>

                <div className='w-[200px] mt-[10px]  text-center bg-[#D3D3D3] h-[30px] rounded-full shadow-2xl border-2 border-[#D1D415]'>
                    Crypto Currency wallets
                </div>
               </div>

               {/* //*other item */}

               <div className='grid justify-center grid-rows-3'>
               <div className='relative bg-[#5E5E5F] rounded-full  h-[200px] w-[200px]'>
                    <div className='absolute left-[25%] top-[25%]'>
                    <Image src='/blockchain.png' width={100} height={100} layout='intrinsic' />
                    </div>
                </div>

                <div className='w-[200px] mt-[10px]  text-center bg-[#D3D3D3] h-[30px] rounded-full shadow-2xl border-2 border-[#D1D415]'>
                    Crypto Currency wallets
                </div>
               </div>

               {/* //*other item */}

                <div className='grid justify-center grid-rows-3'>
               <div className='relative bg-[#5E5E5F] rounded-full  h-[200px] w-[200px]'>
                    <div className='absolute left-[25%] top-[25%]'>
                    <Image src='/statistics(3).png' width={100} height={100} layout='intrinsic' />
                    </div>
                </div>

                <div className='w-[200px] mt-[10px]  text-center bg-[#D3D3D3] h-[30px] rounded-full shadow-2xl border-2 border-[#D1D415]'>
                    Crypto Currency wallets
                </div>
               </div>
                
           </div>

            <div className='grid bg-[#5E5E5F] h-[400px]'>

            </div>


        </div>
    )
}

export default Services
