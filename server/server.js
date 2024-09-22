import express, { query } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

//Set up database request pool
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

//Set up local port (8080)
app.listen(PORT, () => {
  console.log(`Server is ready and running 🏃 in PORT ${PORT}`);
});

//Root route
app.get("/", (request, response) => {
  response.json({ message: "The root route" });
});

//New endpoint to read data from the database
app.get("/read-data", async (request, response) => {
  const query = await db.query(`SELECT * FROM geusts`);
  response.json(query.rows);
  console.log(query);
});

//Endpoint to add data to the database
app.post("/add-data", function (request, response) {
  const bodyData = request.body;
  console.log(bodyData);
  response.json({
    message: "Body data received",
  });
  db.query(`INSERT INTO geusts(username, date,message) VALUES($1, $2, $3);`, [
    `${bodyData.formValues.username}`,
    `${bodyData.formValues.date}`,
    `${bodyData.formValues.message}`,
  ]);
});
