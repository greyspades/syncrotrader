import React from 'react'
import Facebook from '@mui/icons-material/Facebook'
import  Twitter  from '@mui/icons-material/Twitter'
import Instagram from '@mui/icons-material/Instagram'
import { Mail } from '@mui/icons-material'

const SideBar = () => {
    return (
        <div style={{backgroundColor:'rgba(0,0,0,0.5)'}} className='grid grid-rows-5 justify-items-center p-4'>
            <div className='grid'>
                <Facebook style={{color:'#D1D415'}} />
            </div>

            <div className='grid'>
                <Twitter style={{color:'#D1D415'}} />
            </div>

            <div className='grid'>
                <Instagram style={{color:'#D1D415'}} />
            </div>
        </div>
    )
}

export default SideBar
