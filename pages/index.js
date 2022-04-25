import Head from 'next/head'
import React,{useRef,useState} from 'react'
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
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export default function Home({posts}) {
  const [login,setLogin]=useState(false)
  const [signup,setSignup]=useState(false)

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
                    <Navbar signup={setLogin} login={setLogin} />
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
      <div className='grid justify-center '>
      <Modal className='md:my-[100px] md:mx-[400px]' style={{}} open={true}>
        <div className='grid justify-center   w-[800]'>
        <div className='grid bg-[#D3D3D3] h-[400px] md:w-[500px] rounded-3xl'>
            <h3 className='text-center text-xl my-4 font-bold'>
              Signup for an Account
            </h3>

            <div>
              <form>
                <Formik initialValues={{fiirstname:'',lastname:'',email:'',password:''}} onSubmit={(values)=>{

                }}>
                  {({handleChange,handleSubmit,values})=>(
                    <div>
                     <div>
                     <input
                      onChange={handleChange('firstname')}
                      value={values.firstname}
                      placeholder=''
                     />
                     </div>
                    </div>
                  )}
                </Formik>
              </form>
            </div>
        </div>
        </div>
      </Modal>
      </div>
    </div>
  )
}

