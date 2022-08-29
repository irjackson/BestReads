const express = require('express')

const apiController = require('../Controller/controllers.js')

const router = express.Router()


router.post('/login', apiController.verifyUser, (req, res) => {
    return res.status(200).json(res.locals.data);
}) 

router.post('/signup', apiController.addUser, apiController.verifyUser, (req, res) => {
    return res.status(200).json(res.locals.data).redirect('/app')
})

router.post('/explore', apiController.addBook, (req, res) => {
    return res.status(200).json(res.locals.book);
})

router.get('/app', apiController.getBooks, (req, res) => {
    return res.status(200).json(res.locals.allBooks);
})
//users, login, books, reviews,

module.exports = router