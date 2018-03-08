const router = require('express').Router()
const dataLink = require("../dataLink");
router.get("/",(req,res)=>{
    res.json("['thing':'thing']");
    res.end();
})

router.get("/:id",(req,res)=>{
    dataLink.getArticle(req.params.id).then((article)=>{
        res.json(article);
        res.end();
    }).catch((err)=>{
        res.end();
    })
    
})

module.exports=router;