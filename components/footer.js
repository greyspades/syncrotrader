import React from 'react'
import Facebook from '@mui/icons-material/Facebook'

import Instagram from '@mui/icons-material/Instagram'
import { Copyright } from '@mui/icons-material'

 const Footer = () => {
    return (
        <div className='bg-[#9BAFCD] p-6'>
            <footer className='grid grid-rows-3 justify-center gap-2 pb-6'>

<p>
  <Copyright />
  2021
    Uju the storyteller All Rights Reserved
</p>

<div className='grid grid-cols-2 justify-self-center'>
    <Facebook />

    <Instagram />
</div>

 <div className='grid text-center'>
 Dev by{' '} Grey
 </div>
  
</footer>
        </div>
    )
}

export default Footer
