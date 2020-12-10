const express= require("express");

// express.Router() is a class to create route handlers
const booksRouter = express.Router(); 
booksRouter.use(express.static("./public"));
function router()
{
    const navigate=[
        {
            link:'/home',name:'Home'
        },
        {
            link:'/books',name:'Books'
        },
        {
            link:'/authors',name:'authors'
        },
        
        {
        link:'/books/newbook',name:'Add new book'
        },
        {
            link:'/',name:'Log Out'
        }
    
    
    ];
var books=[
    {
        title: "Wings of Fire ",
        author:"A P J Abdul Kalam, Arun Tiwari",
        genre:"Autobiography",
        img:"imgkalam.jpg"

    },
    {
        title: "To Kill a Mockingbird ",
        author:"Harper Lee",
        genre:"Novel",
        img:"img2.jpg"

    },
    {
        title: "Harry Potter and the Philosopher’s Stone ",
        author:"J.K. Rowling",
        genre:"Fantasy Fiction",
        img:"img3.jpg"

    },
    {
        title: "The Diary of Anne Frank  ",
        author:"Anne Frank ",
        genre:"Nonfiction",
        img:"img1.jpg"

    },
    {
        title: "Randamoozham  ",
        author:"M.T. Vasudevan Nair ",
        genre:"Drama",
        img:"img5.jpg"

    }
]
booksRouter.get('/',function(req,res)
{
    res.render("books",{
        navigate,title:"Books",books
        
            });
});
booksRouter.get('/newbook',function(req,res)
{
    
  res.render('newbook',{
    title:"library",navigate
  });

   
});
booksRouter.get('/:id',function(req,res)
{
    const id= req.params.id;
  res.render('singlebook',{
    navigate,title:"Books",singlebook:books[id]
  });

   
});

return booksRouter;
}
module.exports=router;