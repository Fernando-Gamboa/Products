const { Pool } = require("pg");
const Promise = require("bluebird");

// use .env for this data
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});


// bluebird ----------------------------
const db = Promise.promisifyAll(pool, { multiArgs: true });

// if .connectASYNC no need for schema.sql file ---
db.connectAsync()
  .then(() => console.log(`Connected to Postgres`))
  .then(() =>
    // Expand this table definition as needed: PRODUCTS ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS products (id serial NOT NULL PRIMARY KEY, name VARCHAR(500) NOT NULL, slogan VARCHAR(500) NOT NULL, description VARCHAR(500) NOT NULL, category VARCHAR(500) NOT NULL, default_price VARCHAR(500) NOT NULL)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: STYLES ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS styles (id serial NOT NULL PRIMARY KEY, productid INT REFERENCES products(id), name VARCHAR(500) NOT NULL, sale_price VARCHAR(500), original_price INT, default_style BOOLEAN)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: RELATED ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS related (id serial NOT NULL PRIMARY KEY, current_product_id INT, related_product_id INT)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: FEATURES ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS features (id serial NOT NULL PRIMARY KEY, product_id INT REFERENCES products(id), feature VARCHAR(500) NOT NULL, value VARCHAR(500) NOT NULL)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: PHOTOS ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS photos (id serial NOT NULL PRIMARY KEY, styleid INT REFERENCES styles(id), url VARCHAR(1000) NOT NULL, thumbnail_url VARCHAR(50000) NOT NULL)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: SKUS ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS skus (id serial NOT NULL PRIMARY KEY, styleid INT REFERENCES styles(id), size VARCHAR(500) NOT NULL, quantity INT)"
    )
  )
  .catch((err) => console.log(err));


// copy csv data into tables
//COPY products FROM '/Users/Fer/Desktop/HR_SDC_FILES/product.csv' DELIMITER ',' csv header;
//COPY styles FROM '/Users/Fer/Desktop/HR_SDC_FILES/styles.csv' DELIMITER ',' csv header;
//COPY related FROM '/Users/Fer/Desktop/HR_SDC_FILES/related.csv' DELIMITER ',' csv header;
//COPY features FROM '/Users/Fer/Desktop/HR_SDC_FILES/features.csv' DELIMITER ',' csv header;
//COPY photos FROM '/Users/Fer/Desktop/HR_SDC_FILES/photos.csv' DELIMITER ',' csv header;
//COPY skus FROM '/Users/Fer/Desktop/HR_SDC_FILES/skus.csv' DELIMITER ',' csv header;


module.exports = db;



