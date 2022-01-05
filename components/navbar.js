import React from 'react'
import { Button } from '@mui/material'

const Navbar = () => {
    return (
        <div>
            <div className='grid grid-cols-4  md:my-9 justify-items-end'>
            <Button className='text-white md:text-md hover:text-blue-500'>
              Blog
            </Button>

            <Button className='text-white md:text-md hover:text-blue-500'>
              Books
            </Button>

            <Button className='text-white md:text-md hover:text-blue-500'>
              Other
            </Button>

            <Button className='text-white md:text-md hover:text-blue-500'>
              Contact
            </Button>
            
          </div>
        </div>
    )
}

export default Navbar
