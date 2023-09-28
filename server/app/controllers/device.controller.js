const db = require("../models");

exports.create = (req, res) => {

    const device = {
        name: req.body.name,
        type: req.body.type,
        imei: req.body.imei,
        vahicle_no: req.body.vahicle_no,
        connection_no: req.body.connection_no,
        renewal_at: req.body.renewal_at,
        topup_validity: req.body.topup_validity,
        topup_validity_option: req.body.topup_validity_option,
        speed_limit: req.body.speed_limit,
        fuel_consumption: req.body.fuel_consumption,
        level_no: req.body.level_no,
        selected_level: req.body.selected_level,
        gps_sync_interval: req.body.gps_sync_interval,
        idling_time: req.body.idling_time
    }

    db.device.create(device)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating project."
            });
            console.error("STORING ERROR", err);
        });
}

exports.findAll = (req, res) => {
    db.device.findAll({
        attributes: [
            'id',
            'name',
            'type',
            'imei',
            'vahicle_no',
            'connection_no',
            'renewal_at',
            'topup_validity',
            'topup_validity_option',
            'speed_limit',
            'fuel_consumption',
            'level_no',
            'selected_level',
            'gps_sync_interval',
            'idling_time',
            'updatedAt',
            'createdAt'
        ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving project_unit."
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    
    db.device.destroy({
        where: { id: id },
    })
    .then((num) => {
        if (num === 1) {
          res.send({ message: "Device was deleted successfully." });
        } else {
          res.status(404).send({
            message: `Cannot delete Device with id=${id}. Device not found.`,
          });
        }
    })
    .catch((err) => {
        res.status(500).send({
          message: "Could not delete Device with id=" + id,
        });
        console.error("DELETE ERROR", err);
    });
}