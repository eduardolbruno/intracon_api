const { Router, request } = require('express')
const router = Router();
const _ = require('underscore-node')

const phones = require('../phonelist.json')
console.log(phones)

// get
router.get('/', (req,res) =>{
    res.send(phones)
})

module.exports = router