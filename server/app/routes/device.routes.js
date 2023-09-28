module.exports = app => {
    const devices = require("../controllers/device.controller.js");

    var router = require('express').Router()
  
    // Create a new Device
    router.get("/", devices.create);

    app.use('/api/device', router);
};