const { createUserTable, createServiceProviderTable, createAdminTable } = require("./queries");
const { createOrdersTable } = require("./orders");
const { createMenuTable } = require("./menu");
const { createCartTable } = require("./cart");
const { populateDatabase } = require("./services");
const createTables = () => {
  createUserTable();
  createServiceProviderTable();
  createAdminTable()
  createMenuTable();
  createCartTable();
  createOrdersTable();
  populateDatabase();
};
createTables()
