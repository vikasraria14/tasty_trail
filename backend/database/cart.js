const { connection } = require('./connection');

const createCartTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS cart (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      menu_id INT(11) NOT NULL,
      category VARCHAR(255) NOT NULL,
      quantity INT(11) NOT NULL,
      FOREIGN KEY (menu_id) REFERENCES menu(id)
    )
`;

  try {
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
      console.log('Cart Table created successfully!');
    });
  } catch (error) {
    console.error('Error creating table:', error);
  }
};


const addToCart = (username, menuId, quantity, category) => {
  const sql = `
    INSERT INTO cart (username, menu_id, quantity, category) VALUES (?, ?, ?, ?)
  `;

  try {
    connection.query(sql, [username, menuId, quantity, category], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
      console.log('Data inserted successfully!');
    });
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

const getCartByUsername = async (username) => {
  const sql = `
    SELECT c.id, c.username, p.id as menu_id, p.name AS menu_name, p.label as label, p.cost AS price, p.category, c.quantity, p.image
    FROM cart c
    INNER JOIN menu p ON c.menu_id = p.id
    WHERE c.username = ?
  `;

  try {
    const result = await get(sql, username);
    console.log('Data fetched successfully!');
    return result;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};

const get = (query, username) => {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, [username], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllCartData = async () => {
  const sql = `
    SELECT c.id, c.username, p.name AS menu_name, p.cost AS price, c.category, c.quantity, p.image
    FROM cart c
    INNER JOIN menu p ON c.menu_id = p.id
  `;

  try {
    const result = await get1(sql);
    console.log('Data fetched successfully!');
    return result;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};

const get1 = (query, params = []) => {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCartItem = (id) => {
  const sql = 'DELETE FROM cart WHERE id = ?';

  try {
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error deleting cart item:', err);
        return;
      }
      console.log(`Cart item with ID ${id} deleted successfully!`);
    });
  } catch (error) {
    console.error('Error deleting cart item:', error);
  }
};

const updateCartMenuQuantity = (id, quantity) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE cart SET quantity = ? WHERE id = ?';

    try {
      connection.query(sql, [quantity, id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCartByUser = (username) => {
  const sql = 'DELETE FROM cart WHERE username = ?';

  return new Promise((resolve, reject) => {
    try {
      connection.query(sql, [username], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  addToCart,
  getCartByUsername,
  getAllCartData,
  deleteCartItem,
  updateCartMenuQuantity,
  deleteCartByUser,
  createCartTable
};
``
