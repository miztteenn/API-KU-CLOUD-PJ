const express = require('express')
const router = express.Router()
const webServiceController = require('../controllers/webService.Controllers')

//post
router.post('/createWebService',webServiceController.createfirstWebService)

module.exports = router