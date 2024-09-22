// import { db } from "../server/server.js";
import { db } from "./server.js";
// db.query(`CREATE TABLE geusts (
//     id SERIAL PRIMARY KEY,
//     username varchar(255),
//     date DATE,
//     message TEXT,
//     likes INTEGER DEFAULT 0);`);

//Dummy Data
db.query(
  `INSERT INTO geusts(username, date,message) VALUES('hanifah_425', '2024-06-01', 'Lovely air BnB');`
);
db.query(`INSERT INTO geusts(username, date,message) VALUES($1, $2, $3);`, [
  "Ayinke_52",
  "01-07-2024",
  "Horrible air BnB people",
]);
