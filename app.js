const express= require("express");
const app= new express();
const port=process.env.PORT || 3000;
const nav=[
    {
        link:'/home',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'authors'
    }];
const booksRouter= require("./src/routes/bookRoutes")();
const authorsRouter=require("./src/routes/authorRoutes")();
const loginRouter=require("./src/routes/loginRoutes")(nav);
const signupRouter=require("./src/routes/signupRoutes")(nav);
app.use(express.static("./public"));
app.set("view engine","ejs");
// use'.' or__dirname
app.set("views","./src/views");
app.use('/',loginRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.use('/signup',signupRouter);

//  app.listen(3000);
app.listen(port,()=>{console.log("Server is ready at" + port)});