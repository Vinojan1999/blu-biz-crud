module.exports = app => {
    const devices = require("../controllers/device.controller.js");

    var router = require('express').Router()
  
    // Create a new Device
    router.post("/", devices.create);

    // Get all devices
    router.get("/", devices.findAll);

    // Delete a device by ID
    router.delete("/:id", devices.delete);

    app.use('/api/device', router);
};