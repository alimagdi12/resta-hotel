const fs = require('fs');
const path = require('path');
const util = require('../util/path')

module.exports = class Opinion {
    constructor(opinion,name,job,image){
        this.opinion = opinion;
        this.name = name;
        this.job = job;
        this.image = image; 

    }

    save(){
        const p = path.join(util,'data','aboutOpinion.json');
        fs.readFile(p,(err,filecontent)=>{
            let opinions = [];
            if(!err){
                opinions = JSON.parse(filecontent)
            }
            opinions.push(this);
            fs.writeFile(p,JSON.stringify(opinions),err=>{
                    console.log(err)
            })
        })

    }
    static fetchAll(cb){
        const p = path.join(util, 'data','aboutOpinion.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                return cb([]);
            }
            cb(JSON.parse(filecontent))
        })
    }
}
