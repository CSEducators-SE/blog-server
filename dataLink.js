const fs = require("fs");

var getArticle=function(id){
const ob=JSON.parse(`{"thing":"${id}"}`);
    return new Promise((resolve,reject)=>{
        resolve(ob);
    })

}

var getAllArticles=function(){
    const ob=JSON.parse(`[{"thing":"2"},{"thing":"3"}]`);
    return new Promise((resolve,reject)=>{
        resolve(ob);
    })
}


module.exports={
    getArticle,
    getAllArticles
}
