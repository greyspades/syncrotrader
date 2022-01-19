import client from '../../components/client'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from '../../components/navbar'
import { Button, Divider, TextField, InputAdornment, Input, CircularProgress } from '@mui/material'
import Card from '../../components/card'
import Person from '@mui/icons-material/Person'
import Mail from '@mui/icons-material/Email'
import Comment from '@mui/icons-material/Comment'
import { Formik } from 'formik'
import Email from '@mui/icons-material/Email'
import Axios from 'axios'
import Footer from '../../components/footer'


const Post = ({post}) => {

  const [loading,setLoading]=useState({
    pending:false,
    done:false
})

  // useEffect(()=>{
  //   console.log(post._id)
  // },[])

  const getImage=(src)=>{
    if(post){
      return imageUrlBuilder(client)?.image(src)
    }
  }
  
  return (
    <div >
      <article className='bg-[#5274A6] md:mt-[-30px] p-3 md:p-6'  >

<Navbar />

  <div className='grid md:grid-cols-4 md:gap-4'>
  
  <div className='bg-[#9BAFCD] md:px-10 md:p-6 md:col-span-3 rounded-lg'>
  
  <div className='justify-center grid'>
      <img className='w-[500px] h-[200px] md:w-[950px] md:h-[400px]' src={getImage(post?.mainImage)?.url()} />
  </div>

  <h1 className='md:text-3xl text-2xl font-bold m-4'>
    {post?.title}
  </h1>

  <div className='text-xl m-6'>
  <BlockContent
  
    blocks={post?.body}
    imageOptions={{ w: 320, h: 240, fit: 'max' }}
    {...client.config()}
  />
  </div>
  
  <Divider className='my-6' style={{backgroundColor:'#5274A6'}} variant='fullWidth' />

  <div className='p-6 px-8'>
    
    <h3 className='text-start text-2xl mb-6 font-bold'>
      Comment
    </h3>
    <form>
      <Formik initialValues={{name:'',email:'',comment:''}} onSubmit={(value)=>{

          if(value.name && value.email && value.comment){
              // setLoading({
              //   pending:true,
              //   done:false,
                
              // })

              let data={
                name:value.name,
                email:value.email,
                comment:value.comment,
                id:post._id
              }

              Axios.post('/api/comment',{data})
              .then((res)=>{
                console.log(res)
                if(res.data=='SUCCESS'){
                  setLoading({
                    pending:false,
                    done:false
                  })
                }
              })
              .catch((err)=>{
                if(err){
                  console.log(err)
                  alert('A problem occured could not contact the server please check your internet connection and try again')
                }
              })
          }
          else {
            alert('Please fill out all input fields')
          }

      }}>
        {({handleSubmit,handleChange,values})=>(
          <div className='my-6c'>
           <div className=' grid justify-center md:grid-cols-2'>
           <Input
                disableUnderline={true}
            //className='mail-input'
            placeholder='Name'
            className='bg-[#5274A6]  w-[300px]  rounded-md'
            type='text'
            value={values.name}
            onChange={handleChange('name')}
            startAdornment={<Person style={{color:'#9BAFCD'}} />}
        />

       <Input
                disableUnderline={true}
            //className='mail-input'
            placeholder='Email address'
            className='bg-[#5274A6] md:my-0 my-4 w-[300px] rounded-md'
            type='email'
            value={values.email}
            onChange={handleChange('email')}
            startAdornment={<Email style={{color:'#9BAFCD'}} />}
        />
           </div>

               <div className=''>
               <TextField
                                className='bg-[#5274A6] my-6 rounded-md w-full'
                                multiline
                                rows={4}
                                type='text'
                                placeholder='Comment'
                                value={values.comment}
                                onChange={handleChange('comment')}
                                />

               </div>
               <div className='justify-center grid'>
                                    {
                                        !loading.pending && !loading.done
                                        ?
                                        <Button onClick={handleSubmit} className='bg-[#2D5797] text-white w-[80%] justify-self-center'>
                                        Send
                                       </Button>
                                       :
                                       loading.pending && !loading.done
                                       ?
                                       <CircularProgress />
                                       :
                                       null
                                    }
                                </div>
          </div>
        )}

      </Formik>
    </form>

  </div>

  </div>


  <div className='md:m-8 '>
    
    <div className='md:fixed grid justify-center md:h-[700px]md: w-[250px]  bg-[#9BAFCD] rounded-lg md:p-4 '>
        {/* <Card /> */}
        <div>

        </div>
    </div>


  </div>



  </div>
</article>
<Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0]
    `, { slug })
    //console.log(post)
    //console.log(post.body[0].children[0].text)
    return {
      props: {
        post
      }
    }
  }
  
  export default Post
