const fs = require('fs');
const path = require('path');
const util = require('../util/path')

module.exports = class Reservation {
    constructor(name,phone,room,guests,arrivalDate,departureDate,email){
        this.name = name;
        this.phone = phone;
        this.room = room;
        this.guests = guests;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.email = email ; 

    }

    save(){
        const p = path.join(util,'data','reservation.json');
        fs.readFile(p,(err,filecontent)=>{
            let reservations = [];
            if(!err){
                reservations = JSON.parse(filecontent)
            }
            reservations.push(this);
            fs.writeFile(p,JSON.stringify(reservations),err=>{
                    console.log(err)
            })
        })

    }
    static fetchAll(cb){
        const p = path.join(util, 'data','reservation.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                return cb([]);
            }
            cb(JSON.parse(filecontent))
        })
    }
}
