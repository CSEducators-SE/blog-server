const router = require('express').Router()
const dataLink = require("../dataLink");
router.get("/", (req, res) => {
    dataLink.getAllArticles().then((articles) => {
        
        res.json(JSON.stringify(articles))
        res.end();
    }).catch(err => {
        res.end();
    })
})

router.get("/:id", (req, res) => {
    dataLink.getArticle(req.params.id).then((article) => {
        res.json(article);
        res.end();
    }).catch((err) => {
        res.end();
    })

})

module.exports = router;