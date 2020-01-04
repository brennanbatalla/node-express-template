'use strict';

let mysql = require('mysql');
const TABLE_NAMES = require('./TableNames');
let initMethods = null;
const createTableENVs = ['dev', 'qa'];

let initTables = (connection) => {

    let sql = mysql.format("SHOW TABLES FROM ??", [process.env.mysql_database]);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }

        let tableMap = {};
        results.forEach((RowDataPacket) => {
            tableMap[RowDataPacket.Tables_in_fat_cat] = true;
        });

        initMethods.forEach((method) => {
            method(tableMap, connection);
        })

    });

};

const initCompaniesTable = (tables, connection) => {
    let table = TABLE_NAMES.COMPANY_TABLE;
    if (tables[table]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE ?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `name` VARCHAR(45) NOT NULL,\n" +
        "  PRIMARY KEY (`id`));", [table]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Created Companies Table");

        if (!createTableENVs.includes(process.env.NODE_ENV)) {
            return;
        }

        let sql = mysql.format("INSERT INTO ?? (`id`, `name`) VALUES " +
            "('1', 'Fat Cat')",
            [table]);

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error(error);
            }

            console.log("SEEDED Companies TABLE");
        })
    })


};

const initAddressTable = (tables, connection) => {
    if (tables[TABLE_NAMES.ADDRESS_TABLE]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE FAT_CAT.??" +
        " (id INT NOT NULL AUTO_INCREMENT, street VARCHAR(255) NOT NULL," +
        "  city VARCHAR(150) NOT NULL, state VARCHAR(45) NOT NULL, zipcode VARCHAR(20)" +
        " NOT NULL, PRIMARY KEY (id));", [TABLE_NAMES.ADDRESS_TABLE]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Created Address Table");

        if (!createTableENVs.includes(process.env.NODE_ENV)) {
            return;
        }

        let sql = mysql.format("INSERT INTO ?? (`id`, `street`, `city`, `state`, `zipcode`) VALUES " +
            "('1', '117 Frog Hollow Road', 'Forked River', 'NJ', '08731')," +
            "('2', '712 S Juniper st', 'Philadelphia', 'PA', '19147')," +
            "('3', '1611 South st', 'Philadelphia', 'PA', '19146')," +
            "('4', '3671 John F Kennedy BLVD', 'Jersey City', 'NJ', '07307')",
            [TABLE_NAMES.ADDRESS_TABLE]);

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error(error);
            }

            console.log("SEEDED Address Table");
        })

    })


};

const initStoreLocationTable = (tables, connection) => {
    if (tables[TABLE_NAMES.STORES_TABLE]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE ?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `companyId` INT NOT NULL,\n" +
        "  `name` VARCHAR(45) NOT NULL,\n" +
        "  `addressId` INT NOT NULL,\n" +
        "  `active` VARCHAR(45) BINARY NULL DEFAULT 'false',\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  INDEX `id_idx` (`addressId` ASC),\n" +
        "  INDEX `companyId_idx` (`companyId` ASC),\n" +
        "  CONSTRAINT `StoreToCompanyId`\n" +
        "    FOREIGN KEY (`companyId`)\n" +
        "    REFERENCES `FAT_CAT`.`companies` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `StoreToAddressId`\n" +
        "    FOREIGN KEY (`addressId`)\n" +
        "    REFERENCES `FAT_CAT`.`addresses` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [TABLE_NAMES.STORES_TABLE]
        )
    ;


    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Created Stores Table");

        if (!createTableENVs.includes(process.env.NODE_ENV)) {
            return;
        }

        let sql = mysql.format("INSERT INTO ?? (`id`,`companyId`, `name`, `addressId`, `active`) VALUES " +
            "('1','1', 'Fat Cat of Lacey', '1', 'true')," +
            "('2','1', 'Fat Cat of Philadelphia', '2', 'true')," +
            "('3','1', 'Fat Cat of the Heights', '4', 'true')",
            [TABLE_NAMES.STORES_TABLE]);

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error(error);
            }

            console.log("SEEDED Stores TABLE");
        })
    })


};

const initMenuCategoriesTable = (tables, connection) => {
    const tableName = TABLE_NAMES.MENU_CATEGORIES_TABLE;
    if (tables[tableName]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE `FAT_CAT`.?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `companyId` INT NOT NULL,\n" +
        "  `name` VARCHAR(45) NOT NULL,\n" +
        "  `position` INT NOT NULL,\n" +
        "  `storeId` INT NULL,\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  INDEX `storeId_idx` (`storeId` ASC),\n" +
        "  UNIQUE INDEX `position_UNIQUE` (`position` ASC),\n" +
        "  CONSTRAINT `MenuCatsToCompanyId`\n" +
        "    FOREIGN KEY (`companyId`)\n" +
        "    REFERENCES `FAT_CAT`.`companies` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `MenuCatsToStoreId`\n" +
        "    FOREIGN KEY (`storeId`)\n" +
        "    REFERENCES `FAT_CAT`.`stores` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [tableName]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Created Menu Categories Table");

        if (!createTableENVs.includes(process.env.NODE_ENV)) {
            return;
        }

        let sql = mysql.format("INSERT INTO ?? (`id`,`companyId`, `name`, `position`) VALUES " +
            "('1','1', 'Small Bites', '10')," +
            "('2','1', 'Fat Sandwiches', '20')," +
            "('3','1', 'Not So Fat Sandwiches', '30')," +
            "('4','1', 'Pizza', '40')," +
            "('5','1', 'Salads', '50')," +
            "('9','1', 'Specials', '60')," +
            "('6','1', 'Desserts', '70')," +
            "('7','1', 'Party Platters', '80')," +
            "('8','1', 'Beverages', '90')",
            [tableName]);

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error(error);
            }

            console.log("SEEDED Menu Categories TABLE");
        })
    })

};

const initMenuItemsTable = (tables, connection) => {
    const tableName = TABLE_NAMES.MENU_ITEMS_TABLE;
    if (tables[tableName]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE `FAT_CAT`.`menu_items` (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `companyId` INT NOT NULL,\n" +
        "  `storeId` INT NULL,\n" +
        "  `name` VARCHAR(45) NULL,\n" +
        "  `price` VARCHAR(45) NULL,\n" +
        "  `menuCategoryId` INT NOT NULL,\n" +
        "  `active` BOOLEAN NULL DEFAULT 0,\n" +
        "  `description` VARCHAR(255) NULL,\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  UNIQUE INDEX `id_UNIQUE` (`id` ASC),\n" +
        "  INDEX `MenuItemToCompany_idx` (`companyId` ASC),\n" +
        "  INDEX `MenuItemToStore_idx` (`storeId` ASC),\n" +
        "  INDEX `MenuItemToCategory_idx` (`menuCategoryId` ASC),\n" +
        "  CONSTRAINT `MenuItemToCompany`\n" +
        "    FOREIGN KEY (`companyId`)\n" +
        "    REFERENCES `FAT_CAT`.`companies` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `MenuItemToStore`\n" +
        "    FOREIGN KEY (`storeId`)\n" +
        "    REFERENCES `FAT_CAT`.`stores` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `MenuItemToCategory`\n" +
        "    FOREIGN KEY (`menuCategoryId`)\n" +
        "    REFERENCES `FAT_CAT`.`menu_categories` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [tableName]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Created Menu Items Table");

        if (!createTableENVs.includes(process.env.NODE_ENV)) {
            return;
        }

        let sql = mysql.format("INSERT INTO ?? (`companyId`, `name`,  `price`, `menuCategoryId`,  `active`, `description`) VALUES " +
            "('1', 'Mozzarella Sticks', '6.99', '1', '1', 'Succulent, gooey, stringy, ORGANIC sticks')," +
            "('1', 'Onion Rings', '4.99', '1', '1', 'so so oniony')," +
            "('1', 'Fat Cat', '9.99', '2', '1', '')," +
            "('1', 'Fat Porkster', '9.99', '1', '1', '')," +
            "('1', 'Skinny Mike', '8.99', '3', '1', '')," +
            "('1', 'Classic Cheese Steak', '8.99', '3', '1', '')," +
            "('1', 'Classic Chicken Cheese Steak', '8.99', '3', '1', '')," +
            "('1', 'Classic Smashed Burger', '5.99', '3', '1', '')," +
            "('1', 'Bacon Smashed Burger', '6.99', '3', '1', '')," +
            "('1', 'Cheese Pizza', '11.99', '4', '1', '')," +
            "('1', 'Margarita Pizza', '11.99', '4', '1', '')," +
            "('1', 'Chopped Salad', '8.99', '5', '1', '')," +
            "('1', 'Cheese Cake', '11.99', '6', '1', '')," +
            "('1', 'Super Bowl King', '24.99', '7', '1', '20 Chicken Tenders, 15 Mozzarella Sticks, 15 Onion Rings, 2 Pounds of Fries!')," +
            "('1', 'Pepsi Can', '.99', '8', '1', '')," +
            "('1', 'Pepsi 2 Liter', '2.99', '8', '1', '');",
            [tableName]);

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error(error);
            }

            console.log("SEEDED Menu Items TABLE");
        })
    })

};

const initMenuItemsMappingTable = (tables, connection) => {
    const tableName = TABLE_NAMES.MENU_ITEMS_TO_STORE_ACTIVE_TABLE;
    if (tables[tableName]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE `FAT_CAT`.?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `itemId` INT NOT NULL,\n" +
        "  `storeId` INT NOT NULL,\n" +
        "  `active` TINYINT NOT NULL DEFAULT 1,\n" +
        "  UNIQUE INDEX `id_UNIQUE` (`itemId` ASC, `storeId` ASC),\n" +
        "  INDEX `MenuItemToStore_idx` (`storeId` ASC),\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  CONSTRAINT `StoreActiveItemMAP`\n" +
        "    FOREIGN KEY (`storeId`)\n" +
        "    REFERENCES `FAT_CAT`.`stores` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `ItemActiveStoreMAP`\n" +
        "    FOREIGN KEY (`itemId`)\n" +
        "    REFERENCES `FAT_CAT`.`menu_items` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [tableName]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }
        console.log("Created Menu Items Mapping Table");
    })
};

const initUsersTable = (tables, connection) => {
    const tableName = TABLE_NAMES.USERS_TABLE;
    if (tables[tableName]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE `FAT_CAT`.?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `firstName` VARCHAR(150) NULL,\n" +
        "  `lastName` VARCHAR(150) NULL,\n" +
        "  `addressId` INT NULL DEFAULT 1,\n" +
        "  `email` VARCHAR(150) NULL,\n" +
        "  `phoneNumber` VARCHAR(30) NULL,\n" +
        "  UNIQUE INDEX `id_UNIQUE` (`id` ASC),\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  INDEX `userToAddressId_idx` (`addressId` ASC),\n" +
        "  CONSTRAINT `userToAddressId`\n" +
        "    FOREIGN KEY (`addressId`)\n" +
        "    REFERENCES `FAT_CAT`.`addresses` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [tableName]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }

        console.log(`Created ${tableName} Table`);

        let sql = mysql.format("INSERT INTO ?? (`firstName`,`lastName`, `addressId`, `email`, `phoneNumber`) VALUES " +
            "('Brennan','Batalla', '1',  'brennan.batalla@gmail.com', '609713097')," +
            "('Daniel','Batalla', '2',  'dbatalla65@gmail.com', '6092429102');",
            [tableName]);

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error(error);
            }

            console.log(`SEEDED ${tableName} TABLE`);
        });
    })
};

const initOrdersTable = (tables, connection) => {
    const tableName = TABLE_NAMES.ORDERS_TABLE;
    if (tables[tableName]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE `FAT_CAT`.?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `customerId` INT NOT NULL,\n" +
        "  `transactionId` VARCHAR(25) NOT NULL,\n" +
        "  `created` DATETIME DEFAULT CURRENT_TIMESTAMP,\n" +
        "  `status` VARCHAR(45) NOT NULL,\n" +
        "  `price` FLOAT NOT NULL,\n" +
        "  `discountCode` VARCHAR(45) NULL,\n" +
        "  `storeId` INT NOT NULL,\n" +
        "  `deliveryAddressId` INT NOT NULL,\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  UNIQUE INDEX `id_UNIQUE` (`transactionId` ASC),\n" +
        "  INDEX `OrderToStore_idx` (`storeId` ASC),\n" +
        "  INDEX `OrderToDeliveryAddress_idx` (`deliveryAddressId` ASC),\n" +
        "  CONSTRAINT `orderToCustomer`\n" +
        "    FOREIGN KEY (`customerId`)\n" +
        "    REFERENCES `FAT_CAT`.`users` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `OrderToStore`\n" +
        "    FOREIGN KEY (`storeId`)\n" +
        "    REFERENCES `FAT_CAT`.`stores` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `OrderToDeliveryAddress`\n" +
        "    FOREIGN KEY (`deliveryAddressId`)\n" +
        "    REFERENCES `FAT_CAT`.`addresses` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [tableName]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }

        console.log(`Created ${tableName} Table`);
    })
};

const initOrderedItemsTable = (tables, connection) => {
    const tableName = TABLE_NAMES.ORDERED_ITEMS_TABLE;
    if (tables[tableName]) {
        return;
    }

    let sql = mysql.format("CREATE TABLE `FAT_CAT`.?? (\n" +
        "  `id` INT NOT NULL AUTO_INCREMENT,\n" +
        "  `orderId` INT NOT NULL,\n" +
        "  `menuItemId` INT NOT NULL,\n" +
        "  `notes` VARCHAR(255) NULL,\n" +
        "  PRIMARY KEY (`id`),\n" +
        "  INDEX `OrderedItemToMenuItem_idx` (`menuItemId` ASC),\n" +
        "  CONSTRAINT `OrderedItemToOrder`\n" +
        "    FOREIGN KEY (`id`)\n" +
        "    REFERENCES `FAT_CAT`.`orders` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION,\n" +
        "  CONSTRAINT `OrderedItemToMenuItem`\n" +
        "    FOREIGN KEY (`menuItemId`)\n" +
        "    REFERENCES `FAT_CAT`.`menu_items` (`id`)\n" +
        "    ON DELETE NO ACTION\n" +
        "    ON UPDATE NO ACTION);", [tableName]);

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw new Error(error);
        }

        console.log(`Created ${tableName} Table`);
    })
};



initMethods = [];

module.exports = initTables;