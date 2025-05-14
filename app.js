const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
// const userModel = require("./models/user")
// const postModel = require("./models/post")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const upload = require("./config/multerconfig")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())


app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.get('/',function(req,res){
    res.render('index')
})
app.listen(3000)