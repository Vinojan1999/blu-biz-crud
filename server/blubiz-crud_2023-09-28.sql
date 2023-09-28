DROP TABLE IF EXISTS `blubiz_crud`;

CREATE TABLE
  `device_info` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `type` varchar(255) DEFAULT NULL,
    `imei` varchar(255) DEFAULT NULL,
    `vahicle_no` varchar(255) DEFAULT NULL,
    `connection_no` int DEFAULT NULL,
    `renewal_at` date DEFAULT NULL,
    `topup_validity` int DEFAULT NULL,
    `topup_validity_option` varchar(255) DEFAULT NULL,
    `speed_limit` int DEFAULT NULL,
    `fuel_consumption` int DEFAULT NULL,
    `level_no` varchar(255) DEFAULT NULL,
    `selected_level` varchar(255) DEFAULT NULL,
    `gps_sync_interval` int DEFAULT NULL,
    `idling_time` int DEFAULT NULL,
    `updatedAt` timestamp NULL DEFAULT NULL,
    `createdAt` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `device_info` WRITE;
insert into `device_info` (`connection_no`, `createdAt`, `fuel_consumption`, `gps_sync_interval`, `id`, `idling_time`, `imei`, `level_no`, `name`, `renewal_at`, `selected_level`, `speed_limit`, `topup_validity`, `topup_validity_option`, `type`, `updatedAt`, `vahicle_no`) values (1, '2023-09-28 15:28:29', 25, 0, 2, 1, '12345678', 'Level 1', 'Toyota', '2012-04-23', 'Advance', 200, 10, 'Days', 'iOS', '2023-09-28 15:28:29', 'BMF2425');
insert into `device_info` (`connection_no`, `createdAt`, `fuel_consumption`, `gps_sync_interval`, `id`, `idling_time`, `imei`, `level_no`, `name`, `renewal_at`, `selected_level`, `speed_limit`, `topup_validity`, `topup_validity_option`, `type`, `updatedAt`, `vahicle_no`) values (1, '2023-09-28 15:29:58', 20, 0, 3, 1, '12345678', 'Level 2', 'Honda', '2012-04-23', 'Advance', 300, 10, 'Months', 'Android', '2023-09-28 15:29:58', 'BMF2905');
insert into `device_info` (`connection_no`, `createdAt`, `fuel_consumption`, `gps_sync_interval`, `id`, `idling_time`, `imei`, `level_no`, `name`, `renewal_at`, `selected_level`, `speed_limit`, `topup_validity`, `topup_validity_option`, `type`, `updatedAt`, `vahicle_no`) values (12, '2023-09-28 16:41:37', 12, 30, 4, 5, '1223212', 'Level 1', 'BMW', '2023-09-26', 'Beginner', 250, 32, 'Months', 'Android', '2023-09-28 16:41:37', 'BMW 1212');
insert into `device_info` (`connection_no`, `createdAt`, `fuel_consumption`, `gps_sync_interval`, `id`, `idling_time`, `imei`, `level_no`, `name`, `renewal_at`, `selected_level`, `speed_limit`, `topup_validity`, `topup_validity_option`, `type`, `updatedAt`, `vahicle_no`) values (34, '2023-09-28 16:45:39', 20, 2, 5, 9, '15762816', 'Level 1', 'Audi', '2023-09-15', 'Advance', 280, 56, 'Days', 'iOS', '2023-09-28 16:45:39', 'AUD 2657');
UNLOCK TABLES;