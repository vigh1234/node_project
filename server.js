const express=require('express')
const dotenv=require('dotenv') .config()
const contactsRouter=require('./routes/contactsRouts')
const app=express()
app.use(express.json())
const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
app.use('/api/contacts', contactsRouter)

// app.get('/api/contacts',(req,res)=>{
//     res.status(200).json({message:'get all contacts'})
// })
