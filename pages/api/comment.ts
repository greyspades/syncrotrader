import client from '../../components/client'

const comment=async(req,res)=>{
    let data=req.body.data
    console.log(data)

    client.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: data.id,
        },
       name:data.name,
       email:data.email,
       comment:data.comment
      })
      .then((info)=>{
          console.log(info)
          res.send('SUCCESS')
          console.log('commented')
      })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
}
export default comment