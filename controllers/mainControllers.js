const Rooms = require('../models/rooms');
const Form = require('../models/roomForm');
const Opinion = require('../models/aboutOpinion');
const Reservation = require('../models/reservation')
const News = require('../models/news')


exports.getHome = (req,res,next)=>{
    Rooms.fetchAll(rooms=>{
        res.render('../views/user/index.ejs',{
        room : rooms,
        len : 0 ,
        pageTitle : 'Home',
        
        }
        );


    });
    
}


exports.posthome = (req,res,next)=>{
    const chechIn = req.body.select1;
    const chechOut = req.body.select2;
    const adults = req.body.select3;
    const children = req.body.select4;
    const form = new Form(chechIn,chechOut,adults,children);
    form.save();
    console.log(form);
    res.redirect('/reservation')
}



exports.getAbout = (req,res,next)=>{
    Opinion.fetchAll(opinions=>{
        res.render('../views/user/about-us.ejs',{
        opin : opinions,
        len : 0 ,
        pageTitle : 'about-us',
        
        }
        );


    });
    
}






exports.getNews = (req,res,next)=>{
    News.fetchAll(News=>{
    res.render('../views/user/News.ejs',{
    news : News,
    len :0,
    pageTitle: 'news'
    })

})}




exports.getRoom = (req,res,next)=>{
    Rooms.fetchAll(rooms=>{
        res.render('../views/user/rooms',{
        room : rooms,
        len : 0 ,
        pageTitle : 'Rooms',
        
        }
        );


    });
    }


exports.getServices = (req,res,next)=>{
    res.render('../views/user/services')
}



exports.getAbout = (req,res,next)=>{
    Opinion.fetchAll(opinions=>{
        res.render('../views/user/about-us.ejs',{
        opin : opinions,
        len : 0 ,
        pageTitle : 'about-us',
        
        }
        );


    });
    
}

// admin home page
exports.getAdminHome = (req,res,next)=>{
	Rooms.fetchAll(rooms=>{
		res.render('../views/admin/admin.ejs',{
			room:rooms,
			len : 0,
			pageTitle : 'admin',
            editing: false


		})
	})
}


exports.postAdminOpinion = (req,res,next)=>{
    const opinion = req.body.opinion;
    const name = req.body.yourName;
    const job = req.body.job;
    const image = req.body.image;
    const opinions = new Opinion(opinion,name,job,image);
    opinions.save();
    res.redirect('/Reservation');

}

exports.postAdminNews = (req,res,next)=>{
    const image = req.body.image;
    const date = req.body.date;
    const title = req.body.title;
    const category = req.body.category;
    const comment = req.body.comment;
    const description = req.body.description;

    const news = new News(image,date,title,category,comment,description);
    news.save();
    res.redirect('/News')
}



exports.postAdminHome = (req,res,next)=>{
    const rooms = new Rooms(req.body.price,req.body.title,req.body.description);
    rooms.save();
    res.redirect('/');

}


exports.getAddRoom = (req, res, next) => {
    res.render('admin/admin.ejs', {
    pageTitle: 'edit Rooms',
    len:0,
    editing: false
    });
};


exports.postAddRoom = (req, res, next) => {
    const price = req.body.price;
    const title = req.body.title;
    const description = req.body.description;
    const room = new Rooms(null,price,title, description);
    room.save();
    res.redirect('/');
};


exports.getEditRoom = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
    return res.redirect('/')
    }
    const roomId = req.params.roomId;
    Rooms.findById(roomId, room => {
    if (!room) {
        return res.redirect('/');
    }
    res.render('admin/admin', {
        pageTitle: 'Edit Product',
        editing: editMode,
        room: room
    });
    });
};



exports.postEditRoom = (req,res,next)=>{
    const roomId = req.body.roomId;
    const updatedPrice = req.body.price;
    const updatedTitle = req.body.title;
    const updatedDesc = req.body.description;
    const updatedRoom = new Rooms(roomId,updatedPrice,updatedTitle,updatedDesc)
    updatedRoom.save();
    res.redirect('/admin')
}


exports.getRooms = (req,res,next)=>{
    Rooms.fetchAll(rooms => {
        res.render('../views/admin/rooms.ejs', {
        room: rooms,
        pageTitle: 'Admin Rooms',
        len:0
        });
    });
}


exports.postDeleteRoom = (req,res,next)=>{
    roomId = req.body.roomId;
    Rooms.DeleteById(roomId);
    res.redirect('/admin')
}

