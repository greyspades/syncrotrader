import React from 'react'
import { Button } from '@mui/material'

const Navbar = (props) => {
  const {books,contact}=props
    return (
        <div>
            <div className='grid grid-cols-4  md:my-9 justify-items-end'>
            <Button style={{color:'white'}} href='/' className='text-white md:text-md hover:text-blue-500'>
              Home
            </Button>

            <Button style={{color:'white'}} href='/main_blog' className='text-white md:text-md hover:text-blue-500'>
              Blog
            </Button>

            <Button style={{color:'white'}} onClick={books} className='text-white md:text-md hover:text-blue-500'>
              Books
            </Button>

            {/* <Button className='text-white md:text-md hover:text-blue-500'>
              Other
            </Button> */}

            <Button style={{color:'white'}} onClick={contact} className='text-white md:text-md hover:text-blue-500'>
              Contact
            </Button>
            
          </div>
        </div>
    )
}

export default Navbar
