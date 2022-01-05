import React, {useState} from 'react'
import axios from 'axios'

import {Formik} from 'formik'
import Person from '@mui/icons-material/Person'
import { Input, TextField, Button, CircularProgress } from '@mui/material'
import Mail from '@mui/icons-material/Email'





const Contact = () => {

    const [loading,setLoading]=useState({
        pending:false,
        done:false
    })

    return (
        <div>
            <div className='bg-[#2D5797] py-6 md:py-12'>
                    <h3 className='text-white text-2xl text-center'>
                        Get in touch
                    </h3>
                <form>
                    <Formik initialValues={{sender:'',email:'',message:''}} onSubmit={(value)=>{
                        
                        let data={
                            sender:value.sender,
                            email:value.email,
                            message:value.message

                        }

                        if(value.sender && value.email && value.message){
                            setLoading({
                                pending:true,
                                done:false
                            })
                            axios.post('/api/mail',{data})
                            .then((res)=>{
                                if(res.data==SUCCESS){
                                    alert('your message has been sent successfully')
                                    setLoading({
                                        pending:false,
                                        done:true
                                    })
                                }
                            })
                        }
                        else {
                            alert('please fill out all forms')
                        }


                    }} >
                        {({handleChange, handleSubmit, values})=>(
                            <div className='py-6 grid grid-row-4 justify-center'>
                                 <Input
                disableUnderline={true}
            //className='mail-input'
            placeholder='Name'
            className='bg-[#9BAFCD] my-6 rounded-md'
            type='text'
            value={values.sender}
            onChange={handleChange('sender')}
            startAdornment={<Person style={{color:'#5274A6'}} />}
        />
                                 <Input
                disableUnderline={true}
            //className='mail-input'
            placeholder='Email address'
            className='bg-[#9BAFCD] my-6 rounded-md mt-[-5px]'
            type='email'
            value={values.email}
            onChange={handleChange('email')}
            startAdornment={<Mail style={{color:'#5274A6'}} />}
        />

                                <TextField
                                className='bg-[#9BAFCD] mt-[-5px] my-6 rounded-md w-[300px] md:w-[500px]'
                                multiline
                                rows={4}
                                type='text'
                                placeholder='Message'
                                value={values.message}
                                onChange={handleChange('message')}
                                />

                                <div className='justify-center grid'>
                                    {
                                        !loading.pending && !loading.done
                                        ?
                                        <Button onClick={handleSubmit} className='bg-blue-400 text-white w-[80%] justify-self-center'>
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
    )
}

export default Contact
