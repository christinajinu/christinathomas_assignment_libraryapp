const express= require("express");

// express.Router() is a class to create route handlers
const loginRouter = express.Router(); 
loginRouter.use(express.static("./public"));
function router(nav)
{
    loginRouter.get('/',function(req,res)
    {
        res.render("index",
        {
          title:"Library",nav
    
        });
    });
    
    loginRouter.get('/home',function(req,res)
    {
        res.render("home",
        {
        title:"Library",link:'/signup',name:'signup',nav
    
        });
    });
    
      return loginRouter;
    }
    module.exports=router;     