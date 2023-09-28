module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("device_info", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.STRING,
        },
        imei: {
            type: Sequelize.INTEGER,
        },
        vahicle_no: {
            type: Sequelize.STRING,
        },
        connection_no: {
            type: Sequelize.INTEGER,
        },
        renewal_at: {
            type: Sequelize.DATE,
        },
        topup_validity: {
            type: Sequelize.INTEGER,
        },
        topup_validity_option: {
            type: Sequelize.STRING,
        },
        speed_limit: {
            type: Sequelize.INTEGER,
        },
        fuel_consumption: {
            type: Sequelize.INTEGER,
        },
        level_no: {
            type: Sequelize.STRING,
        },
        selected_level: {
            type: Sequelize.STRING,
        },
        gps_sync_interval: {
            type: Sequelize.INTEGER,
        },
        idling_time: {
            type: Sequelize.INTEGER,
        },
    },{
        freezeTableName: true,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    });
  
    return Device;
};
  