const express= require("express");
// express.Router() is a class to create route handlers
const authorsRouter = express.Router(); 
authorsRouter.use(express.static("./public"));
function router()
{
    const navigate=[
        {
            link:'/home',name:'Home'
        },
        {
            link:'/authors',name:'Authors'
        },
        {
            link:'/books',name:'Books'
        },
        {
        link:'/authors/newauthor',name:'Add new Author'
        },
        {
            link:'/',name:'Log Out'
        }
    
    
    ];
var authors=[
    {
        title: "A P J Abdul Kalam",
        author:" India 2020: A Vision for the New Millennium,   Wings of Fire: An Autobiography,  Spirit of India",
        genre:" Autobiography ,  science",
        img:"KALAM.jpg"

    },
    {
        title: "Harper Lee",
        author:"To Kill a Mockingbird ,  Go Set a Watchman",
        genre:"Novel,  Fiction",
        img:"HARPER.jpg"

    },
    {
        title: "J.K. Rowling",
        author:"Harry Potter Series, Cormoran Strike series",	
        genre:"Fantasy Fiction, Drama, Crime Fiction",
        img:"ROWLING.jpg"

    },
    {
        title: "Anne Frank",
        author:"The Diary of Anne Frank,  Tales from the Secret Annex",
        genre:"Nonfiction, Short Story",
        img:"ANNE.jpg"

    },
    {
        title: "M.T. Vasudevan Nair  ",
        author:"Randamoozham, Naalukettu ",
        genre:"Drama ,  Novel",
        img:"MT.jpg"

    }
]
authorsRouter.get('/',function(req,res)
{
    res.render("authors",{
        navigate,title:"Authors",authors
        
            });
});
authorsRouter.get('/newauthor',function(req,res)
{
    
  res.render('newauthor',{
    title:"library",navigate
  });

   
});
authorsRouter.get('/:id',function(req,res)
{
    const id= req.params.id;
    res.render('singleauthor',{
    navigate,title:"Authors",singleauthor:authors[id]
  });

   
});
return authorsRouter;
}
module.exports=router;