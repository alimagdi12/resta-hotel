const fs = require('fs');
const path = require('path');
const util = require('../util/path')

module.exports = class New {
    constructor(image,date,title,category,comment,description){
        this.image = image;
        this.date = date;
        this.title = title;
        this.category = category;
        this.comment = comment;
        this.description = description; 

    }

    save(){
        const p = path.join(util,'data','news.json');
        fs.readFile(p,(err,filecontent)=>{
            let news = [];
            if(!err){
                news = JSON.parse(filecontent)
            }
            news.push(this);
            fs.writeFile(p,JSON.stringify(news),err=>{
                    console.log(err)
            })
        })

    }
    static fetchAll(cb){
        const p = path.join(util, 'data','news.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                return cb([]);
            }
            cb(JSON.parse(filecontent))
        })
    }
}
