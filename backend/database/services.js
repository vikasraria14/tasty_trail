const fs = require('fs');
const { connection } = require('./connection');


const serviceData =[
  {
    "label": "Butter Chicken",
    "name": "butter_chicken",
    "category": "indian",
    "image": "uploads/indian1.jpg",
    "cost": 12.99,
    "quantity": 50,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Paneer Tikka Masala",
    "name": "paneer_tikka_masala",
    "category": "indian",
    "image": "uploads/indian2.jpg",
    "cost": 15.99,
    "quantity": 40,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Vegetable Biryani",
    "name": "vegetable_biryani",
    "category": "indian",
    "image": "uploads/indian3.jpg",
    "cost": 10.99,
    "quantity": 60,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Samosa",
    "name": "samosa",
    "category": "indian",
    "image": "uploads/indian4.jpg",
    "cost": 2.99,
    "quantity": 100,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Masala Chai",
    "name": "masala_chai",
    "category": "indian",
    "image": "uploads/indian5.jpg",
    "cost": 3.99,
    "quantity": 80,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Gulab Jamun",
    "name": "gulab_jamun",
    "category": "indian",
    "image": "uploads/indian6.jpg",
    "cost": 6.99,
    "quantity": 30,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  }
,
  {
    "label": "Sweet and Sour Chicken",
    "name": "sweet_sour_chicken",
    "category": "chinese",
    "image": "uploads/chinese1.jpg",
    "cost": 14.99,
    "quantity": 45,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Beef and Broccoli",
    "name": "beef_broccoli",
    "category": "chinese",
    "image": "uploads/chinese2.jpg",
    "cost": 16.99,
    "quantity": 35,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Spring Rolls",
    "name": "spring_rolls",
    "category": "chinese",
    "image": "uploads/chinese3.jpg",
    "cost": 8.99,
    "quantity": 55,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Fried Rice",
    "name": "fried_rice",
    "category": "chinese",
    "image": "uploads/chinese4.jpg",
    "cost": 11.99,
    "quantity": 70,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "General Tso's Chicken",
    "name": "general_tsos_chicken",
    "category": "chinese",
    "image": "uploads/chinese5.jpg",
    "cost": 15.99,
    "quantity": 40,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Dim Sum Platter",
    "name": "dim_sum_platter",
    "category": "chinese",
    "image": "uploads/chinese6.jpg",
    "cost": 18.99,
    "quantity": 25,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  }
,
  {
    "label": "Tacos al Pastor",
    "name": "tacos_pastor",
    "category": "mexican",
    "image": "uploads/mexican1.jpg",
    "cost": 12.99,
    "quantity": 40,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Guacamole with Chips",
    "name": "guacamole_chips",
    "category": "mexican",
    "image": "uploads/mexican2.jpg",
    "cost": 9.99,
    "quantity": 55,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Enchiladas",
    "name": "enchiladas",
    "category": "mexican",
    "image": "uploads/mexican3.jpg",
    "cost": 14.99,
    "quantity": 35,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Chiles Rellenos",
    "name": "chiles_rellenos",
    "category": "mexican",
    "image": "uploads/mexican4.jpg",
    "cost": 16.99,
    "quantity": 30,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Quesadillas",
    "name": "quesadillas",
    "category": "mexican",
    "image": "uploads/mexican5.jpg",
    "cost": 10.99,
    "quantity": 50,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Salsa Verde Chicken",
    "name": "salsa_verde_chicken",
    "category": "mexican",
    "image": "uploads/mexican6.jpg",
    "cost": 15.99,
    "quantity": 45,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  }
,
  {
    "label": "Hummus with Pita Bread",
    "name": "hummus_pita",
    "category": "mediterranean",
    "image": "uploads/mediterranean1.jpg",
    "cost": 8.99,
    "quantity": 40,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Greek Salad",
    "name": "greek_salad",
    "category": "mediterranean",
    "image": "uploads/mediterranean2.jpg",
    "cost": 10.99,
    "quantity": 35,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Falafel Wrap",
    "name": "falafel_wrap",
    "category": "mediterranean",
    "image": "uploads/mediterranean3.jpg",
    "cost": 12.99,
    "quantity": 30,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Moussaka",
    "name": "moussaka",
    "category": "mediterranean",
    "image": "uploads/mediterranean4.jpg",
    "cost": 14.99,
    "quantity": 25,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Lamb Kebabs",
    "name": "lamb_kebabs",
    "category": "mediterranean",
    "image": "uploads/mediterranean5.jpg",
    "cost": 16.99,
    "quantity": 20,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Tabbouleh",
    "name": "tabbouleh",
    "category": "mediterranean",
    "image": "uploads/mediterranean6.jpg",
    "cost": 9.99,
    "quantity": 45,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  }
,
  {
    "label": "Margherita Pizza",
    "name": "margherita_pizza",
    "category": "italian",
    "image": "uploads/italian1.jpg",
    "cost": 11.99,
    "quantity": 30,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Spaghetti Bolognese",
    "name": "spaghetti_bolognese",
    "category": "italian",
    "image": "uploads/italian2.jpg",
    "cost": 13.99,
    "quantity": 25,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Chicken Alfredo Pasta",
    "name": "chicken_alfredo_pasta",
    "category": "italian",
    "image": "uploads/italian3.jpg",
    "cost": 15.99,
    "quantity": 20,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Caprese Salad",
    "name": "caprese_salad",
    "category": "italian",
    "image": "uploads/italian4.jpg",
    "cost": 9.99,
    "quantity": 35,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Ravioli with Tomato Sauce",
    "name": "ravioli_tomato_sauce",
    "category": "italian",
    "image": "uploads/italian5.jpg",
    "cost": 14.99,
    "quantity": 22,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Tiramisu",
    "name": "tiramisu",
    "category": "italian",
    "image": "uploads/italian6.jpg",
    "cost": 8.99,
    "quantity": 40,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  }
 ,
  {
    "label": "Sushi Platter",
    "name": "sushi_platter",
    "category": "japanese",
    "image": "uploads/japanese1.jpg",
    "cost": 24.99,
    "quantity": 18,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Ramen Noodles",
    "name": "ramen_noodles",
    "category": "japanese",
    "image": "uploads/japanese2.jpg",
    "cost": 14.99,
    "quantity": 30,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Tempura Shrimp",
    "name": "tempura_shrimp",
    "category": "japanese",
    "image": "uploads/japanese3.jpg",
    "cost": 19.99,
    "quantity": 22,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Miso Soup",
    "name": "miso_soup",
    "category": "japanese",
    "image": "uploads/japanese4.jpg",
    "cost": 8.99,
    "quantity": 35,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Teriyaki Chicken Donburi",
    "name": "teriyaki_chicken_donburi",
    "category": "japanese",
    "image": "uploads/japanese5.jpg",
    "cost": 16.99,
    "quantity": 25,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  },
  {
    "label": "Matcha Green Tea Ice Cream",
    "name": "matcha_ice_cream",
    "category": "japanese",
    "image": "uploads/japanese6.jpg",
    "cost": 10.99,
    "quantity": 28,
    "rating": Math.round(Math.random() * 5),
    "addedBy": "admin"
  }
  
]



const insertMenu = (menuData) => {
  try {
    const sql = `
      INSERT INTO menu (label, name, category, cost, rating, image, quantity, addedBy)
      VALUES (?, ?, ?, ?, ?, ?,?,?)
    `;

    const values = [
      menuData.label,
      menuData.name,
      menuData.category,
      menuData.cost,
      menuData.rating,
      menuData.image,
      menuData.quantity,
      menuData.addedBy
    ];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting menu:', err);
        return;
      }
      console.log(`Menu ${menuData.name} inserted successfully!`);
    });
  } catch (error) {
    console.error('Error inserting menu:', error);
  }
};

function createNewTableByCategory(table_name, category) {
  try {
    const newTableName = table_name;

    // Create new table query
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${newTableName} (
      id INT NOT NULL AUTO_INCREMENT,
      item_no INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      cost INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (item_no) REFERENCES menu(id)
    )`;

    connection.query(createTableQuery, (error, results, fields) => {
      if (error) {
        console.log(`Error creating new table: ${error}`);
        return;
      }

      console.log(`New table ${newTableName} created successfully.`);
    });

    let insertQuery = ` INSERT INTO ${newTableName} (name, cost, item_no)
    SELECT name, cost, id FROM menu WHERE category = '${category}';`;

    connection.query(insertQuery, (error, results, fields) => {
      if (error) {
        console.log(`Error inserting into the table: ${error}`);
        return;
      }

      console.log(`Inserted into ${newTableName}`);
    });
  } catch (error) {
    console.error('Error creating or inserting into a new table:', error);
  }
}

const populateDatabase = () => {
  try {
    serviceData.forEach((service) => {
      insertMenu(service);
    });

    const distinctCategories = [...new Set(serviceData.map((item) => item.category))];

    distinctCategories.forEach((category) => {
      createNewTableByCategory(category, category);
    });
  } catch (error) {
    console.error('Error populating the database:', error);
  }
};

module.exports = {populateDatabase, insertMenu}
