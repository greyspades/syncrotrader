import React,{useState} from 'react'
import { Button } from '@mui/material'

const Navbar = (props) => {
  const [login,setLogin]=useState(props.login)
  const [signup,setSignup]=useState(props.signup)
  
    return (
        <div className='grid grid-cols-3'>
            <div className='grid col-span-1 font-bold text-2xl '>
              Payfuz
            </div>

            <div className='grid col-span-2 grid-cols-4 space-x-10  w-[600px]'>
            <Button style={{marginLeft:20}} className='mx-6 text-white h-[30px] m-2 w-[100px] hover:text-[#D0D314] text-center rounded-full bg-[#D3D3D3]' href='#'>
              Home
            </Button>
           
            <Button style={{marginLeft:20}} className='mx-6 text-white h-[30px] m-2 w-[100px] hover:text-[#D0D314] text-center rounded-full bg-[#D3D3D3]' href='#'>
              Home
            </Button>
           
            <Button style={{marginLeft:20}} className='mx-6 text-white h-[30px] m-2 w-[100px] hover:text-[#D0D314] text-center rounded-full bg-[#D3D3D3]' href='#'>
              Login
            </Button>

            <Button style={{marginLeft:20}} className='mx-6 text-white h-[30px] m-2 w-[100px] hover:text-[#D0D314] text-center rounded-full bg-[#D3D3D3]' href='#'>
              Signup
            </Button>
            
          </div>
        </div>
    )
}

export default Navbar
