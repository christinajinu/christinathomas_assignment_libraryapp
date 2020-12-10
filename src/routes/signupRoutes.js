const express= require("express");

// express.Router() is a class to create route handlers
const signupRouter = express.Router(); 
signupRouter.use(express.static("./public"));
function router()
{
    signupRouter.get('/',function(req,res)
    {
        res.render("signup",
        {title:"Library"});
    }) ; 
    return signupRouter;
  }
  module.exports=router;      