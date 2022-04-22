import Head from 'next/head'
import React,{useRef} from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Expand from '@mui/icons-material/ExpandMore'
import Shopping from '@mui/icons-material/ShoppingCartCheckout'
import { IconButton,Chip,Button } from '@mui/material'
import AttachMoney  from '@mui/icons-material/AttachMoney'
import {faker} from '@faker-js/faker'
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import client from '../components/client'
import Intro from '../components/intro'
import Footer from '../components/footer'
import Streamgraph from '../components/streamgraph'
import Services from '../components/services'


export default function Home({posts}) {

  const booksRef=useRef()
  const contactRef=useRef()

  // const booksScroll=()=>booksRef.current.scrollIntoView()
  // const contactScroll=()=>contactRef.current.scrollIntoView()
  //workRef.current.scrollIntoView()

  return (
    <div className='bg-[#B3B3B4]'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



          <div className='grid md:grid-cols-3 space-x-5 justify-items-center'>

            {/* main page wrapper */}
              <div className='grid front-page col-span-2'>
                 <div style={{backgroundColor:'rgba(0,0,0,0.3)'}}  className='grid grid-cols-4'>
                    <div className='grid col-span-3'>
                    <Navbar />
                    </div>

                 <div className='grid justify-end col-span-1'>
                  <SideBar />
                  </div>
                 </div>

              </div>

              <div className='grid bg-[#5E5E5F] md:w-[90%] md:col-span-1 h-[95%] md:mt-[20px] rounded-md'>
                 
              </div>  
          </div>
          <div className='grid  justify-center'>
          <div >
            <Intro />
          </div>
          <div>
            <Services />
          </div>
          </div>
         
          <div>
            <Footer />
          </div>
      
    </div>
  )
}

