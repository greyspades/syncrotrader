import faker from '@faker-js/faker'
import React from 'react'

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
           

           <div className='grid justify-center mt-[60px]'>
           <div className='bg-[#D3D3D3] rounded-full md:w-[800px] h-[120px] grid justify-center p-8'>
                <p className='text-center text-md font-medium'>
                    {faker.lorem.paragraph()}
                </p>
            </div>
           </div>

           <div className='grid justify-center mt-[60px]'>

                <div className='grid grid-cols-4 justify-items-center space-x-20'>
                    <div className='w-[200px] h-[200px] rounded-full bg-[#5E5E5F]'>

                    </div>

                    <div className='w-[200px] h-[200px] rounded-full bg-[#5E5E5F]'>

                    </div>

                    <div className='w-[200px] h-[200px] rounded-full bg-[#5E5E5F]'>

                    </div>

                    <div className='w-[200px] h-[200px] rounded-full bg-[#5E5E5F]'>

                    </div>
                </div>
           </div>


        </div>
    )
}

export default Services
