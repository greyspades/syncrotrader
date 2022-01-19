import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import client from '../components/client'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import {Button} from '@mui/material'
import Footer from '../components/footer'


const Blog = ({posts}) => {
  function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

  const getImage=(src)=>{
    return imageUrlBuilder(client).image(src)
  }

    return (
        <div className='bg-[#5274A6] grid grid-rows-1'>
            <div className='blog-hero h-[400px] bg-no-repeat md:bg-repeat md:bg-cover bg-contain md:h-[550px] md:mt-[-150px]'>
                <div className='md:mt-[120px] bg-[#2D5797] h-[80px] pt-1 '>
                
                <Navbar  />
                
                </div>
            </div>
            <div className='m-6 text-2xl text-center md:my-6 my-[-50px]'>
              Blog posts
            </div>
            <div className='grid md:grid-cols-3 justify-items-center justify-center  md:mt-10 md:p-8'>
            
              {
                posts.map(({title='',slug='',body,mainImage,_createdAt,_id})=>slug &&(
                  <div key={_id} className='mb-10'>
                    <Card title={title} slug={slug.current} body={body} image={mainImage} date={_createdAt} id={_id} />

                  </div>
                ))
              }
            </div>
            <div>
              <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(`
      *[_type == "post" ]{_id,_createdAt,body,mainImage,title,slug}[0...4]
    `)

    //console.log(posts[0]._createdAt.slice(0,10))
    return {
      props: {
        posts
      }
    }
}


export default Blog
