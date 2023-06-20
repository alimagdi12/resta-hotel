const fs = require('fs');
const path = require('path');
const util = require('../util/path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'rooms.json'
  );
  
  const getRoomsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };
  



module.exports = class Rooms {
    constructor(id,price , title , description){
        this.id = id ;
        this.price = price ;
        this.title = title ;
        this.description = description ;
    }
    save(){
        getRoomsFromFile(rooms=>{
          if(this.id){
            const existingRoomIndex = rooms.findIndex(room => room.id === this.id);
            const updatedRoom = [...rooms];
            updatedRoom[existingRoomIndex] = this ;
            fs.writeFile(p, JSON.stringify(updatedRoom), err => {
                      console.log(err);
        });
          }else{
            this.id =Math.random().toString();
            rooms.push(this);
            fs.writeFile(p,JSON.stringify(rooms),err=>{
                    console.log(err)
            })
          }
          
        })
        }


    static DeleteById(id){
        getRoomsFromFile(rooms=>{
        const room = rooms.find(room=>room.id===id)
        const updatedRooms = rooms.filter(room=>room.id !== id);
        fs.writeFile(p,JSON.stringify(updatedRooms),err=>{
          if(!err){
                return;
          }
        })
      })
      
    }
      
    static fetchAll(cb){
        getRoomsFromFile(cb)
    }

    static findById(id,cb){
        getRoomsFromFile(rooms=>{
            const room = rooms.find(p=>p.id===id)
            cb(room)
        })
    }
}
  
