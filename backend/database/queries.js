const { connection } = require('./connection');

const createUserTable = async () => {
  try {
    console.log("Here to create staff table");
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS staff (
      name VARCHAR(50),
      username VARCHAR(50) PRIMARY KEY,
      password VARCHAR(255)
    )`;

    // Create the table
    connection.query(createTableQuery, (err) => {
      if (err) {
        console.error("Error creating table:", err);
        return;
      }
      console.log("Table created successfully");
    });
  } catch (error) {
    console.error('Error creating staff table:', error);
  }
};

const createServiceProviderTable = async () => {
  try {
    console.log("Here to create staff table");
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS staff (
      name VARCHAR(50),
      username VARCHAR(50) PRIMARY KEY,
      password VARCHAR(255),
      phone VARCHAR(255),
      email VARCHAR(255)
     
    )`;

    // Create the table
    connection.query(createTableQuery, (err) => {
      if (err) {
        console.error("Error creating table:", err);
        return;
      }
      console.log("Table created successfully");
    });
  } catch (error) {
    console.error('Error creating staff table:', error);
  }
};

const createAdminTable = async () => {
  try {
    console.log("Here to create admin table");
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS admin (
      name VARCHAR(50),
      username VARCHAR(50) PRIMARY KEY,
      password VARCHAR(255)
     
    )`;

    // Create the table
    connection.query(createTableQuery, (err) => {
      if (err) {
        console.error("Error creating table:", err);
        return;
      }
      console.log("Table created successfully");
    });
  } catch (error) {
    console.error('Error creating admin table:', error);
  }
};

const insertIntoUser = async (name, username, password, userType) => {
  try {
    const sql = 'INSERT INTO staff (name, username, password) VALUES (?, ?, ?)';

    // Execute the SQL query with the values as parameters
    connection.query(sql, [name, username, password], (err, result) => {
      if (err) {
        console.error('Error inserting staff:', err.message);
      } else {
        console.log('User inserted successfully');
      }
    });
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

const insertIntoAdmin = async (name, username, password, userType) => {
  try {
    const sql = 'INSERT INTO admin (name, username, password) VALUES (?, ?, ?)';

    // Execute the SQL query with the values as parameters
    connection.query(sql, [name, username, password], (err, result) => {
      if (err) {
        console.error('Error inserting admin:', err.message);
      } else {
        console.log('User inserted successfully');
      }
    });
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

const searchUser = async (username) => {
  try {
    const sql = `SELECT * FROM staff WHERE username = ?`;
    let res = await get(sql, username);
    return res;
  } catch (error) {
    console.error('Error searching user:', error);
  }
};

const searchServiceProvider = async (username) => {
  try {
    const sql = `SELECT * FROM staff WHERE username = ?`;
    let res = await get(sql, username);
    return res;
  } catch (error) {
    console.error('Error searching staff:', error);
  }
};

const searchAdmin = async (username) => {
  try {
    const sql = `SELECT * FROM admin WHERE username = ?`;
    let res = await get(sql, username);
    return res;
  } catch (error) {
    console.error('Error searching user:', error);
  }
};

let get = (query, username) => {
  return new Promise((resolve, reject) => {
    connection.query(query, [username], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

function insertIntoCustomer(name, username, phoneNumber, email) {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS customers (
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) PRIMARY KEY,
        phone_number VARCHAR(255),
        email VARCHAR(255)
      )
    `;

    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
      console.log('Customer Table created successfully!');

      const insertSql = `
        INSERT INTO customers (name, username, phone_number, email)
        VALUES ('${name}', '${username}', '${phoneNumber}', '${email}')
      `;

      connection.query(insertSql, (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          return;
        }
        console.log('Data inserted successfully!');
      });
    });
  } catch (error) {
    console.error('Error inserting customer:', error);
  }
}

function insertIntoServiceProvider(name, username, phoneNumber, email, password) {
  try {
    const sql = `
    CREATE TABLE IF NOT EXISTS staff (
      name VARCHAR(50),
      username VARCHAR(50) PRIMARY KEY,
      password VARCHAR(255),
      phone VARCHAR(255),
      email VARCHAR(255)
     
    )`;
  
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
      console.log('Staff Table created successfully!');
  
      const insertSql = `
        INSERT INTO staff (name, username, phone,email, password)
        VALUES ('${name}', '${username}', '${phoneNumber}', '${email}', '${password}')
      `;
  
      connection.query(insertSql, (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          return;
        }
        console.log('Data inserted successfully!');
      });
    });
  } catch (error) {
    console.error('Error inserting staff:', error);
  }
}

function insertIntoEmployee(name, username, phoneNumber, email) {
  try {
    const sql = `
    CREATE TABLE IF NOT EXISTS staff (
      name VARCHAR(50),
      username VARCHAR(50) PRIMARY KEY,
      password VARCHAR(255),
      phone VARCHAR(255),
      email VARCHAR(255),
     
    )`;
  
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
      console.log('Employees Table created successfully!');
  
      const insertSql = `
        INSERT INTO staff (name, username, phone_number,email)
        VALUES ('${name}', '${username}', '${phoneNumber}', '${email}')
      `;
  
      connection.query(insertSql, (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          return;
        }
        console.log('Data inserted successfully!');
      });
    });
  } catch (error) {
    console.error('Error inserting employee:', error);
  }
}

module.exports = {
  createUserTable,
  insertIntoUser,
  searchUser,
  insertIntoCustomer,
  insertIntoEmployee,
  createServiceProviderTable,
  searchServiceProvider,
  insertIntoServiceProvider,
  createAdminTable,
  insertIntoAdmin,
  searchAdmin
};
