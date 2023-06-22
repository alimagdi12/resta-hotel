const path = require('path');

const express = require('express');

const router = express.Router();

const mainControllers = require('../controllers/mainControllers')
const mailControllers = require('../controllers/mail')

// admin page 

router.post('/news',mainControllers.postAdminNews)

router.get('/',mainControllers.getHome );

router.get('/admin',mainControllers.getAdminHome)
// booking form home
router.post('/general-form', mainControllers.posthome)

router.get('/f&B',mainControllers.getFB)

router.get('/about', mainControllers.getAbout);
router.post('/about-opinion',mainControllers.postAdminOpinion)

router.get('/contact',mailControllers.getContact );

router.post('/contact-form',mailControllers.postContactMail)



router.get('/news',mainControllers.getNews );

router.get('/room',mainControllers.getRoom)

router.get('/reservation', mailControllers.getReservation);


router.post('/reservation-form',mailControllers.postMail)

router.get('/services', mainControllers.getServices);


// admin room

router.get('/rooms',mainControllers.getRooms );

router.get('/admin/add-rooms',mainControllers.getAddRoom);

router.post('/admin/add-rooms',mainControllers.postAddRoom);

router.get('/admin/edit-rooms/:roomId',mainControllers.getEditRoom);

router.post('/admin/edit-rooms',mainControllers.postEditRoom);

router.post('/admin/delete-room',mainControllers.postDeleteRoom)

router.get('/admin/rooms/',mainControllers.getRooms);

module.exports = router;
