const router = require('express').Router()
const controller = require('../controllers/Controller')

Router.get('/breweries', controller.getAllBreweries)

Router.get('/breweries/:breweryId', controller.getOneBrewery)

//routes here

//Breweries

router.get('/brewery', controller.getBrewery)

router.post('/create_router', controller.createBrewery)

router.put('/:brewery_id', controller.updateBrewery)

router.delete('/:brewery_id', controller.deleteBrewery)

//User

router.get('/user', controller.getUsers)

router.post('/users/new', controller.createUser)

router.put('/:user_id', controller.updateUser)

router.delete('/:user_id', controller.deleteUser)

//Reviews

router.get('/reviews', controller.getReview)

router.post('/reviews/new', controller.createReview)

router.put('/:review_id', controller.updateReview)

router.delete('/:review_id', controller.deleteReview)

//routes here
module.exports = router
