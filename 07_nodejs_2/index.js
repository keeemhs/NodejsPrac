const express = require('express')
const app = express()
const PORT = 8000

app.get('/',(req,res) => {
    // send() 클라이언트에 응답 데이터를 보낼 떄
    // res.send("HEllo Express")
    res.send({ result: true, code: 1000, message: '회원가입성공', data: {name: "keeemhs"} })
})
app.get('/kdt9',(req,res)=>{
    res.send("HEllo kdt9")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})