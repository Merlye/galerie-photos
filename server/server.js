const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());


//ROUTES//

// create
app.post("/photos", async (req, res) => {
  try {
    //console.log(req.body);
    const { description, title, path } = req.body;
    const newPhoto = await pool.query(
      "INSERT INTO photos (description, title, path) VALUES($1, $2, $3) RETURNING *;",
      [description, title, path]
    );
    res.json(newPhoto.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all
app.get("/photos", async (req, res) => {
  try {
    const allPhotos = await pool.query("SELECT * FROM photos;");
    res.json(allPhotos.rows)
  } catch (error) {
    console.error(error.message)
  }
});

// get
app.get("/photos/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const photo = await pool.query("SELECT * FROM photos WHERE img_id = $1;", [id]);

    res.json(photo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update
app.put("/photos/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description, path } = req.body;
    await pool.query("UPDATE photos SET title = $1 WHERE img_id = $2;", [title, id]);
    await pool.query("UPDATE photos SET description = $1 WHERE img_id = $2;", [description, id]);
    await pool.query("UPDATE photos SET path = $1 WHERE img_id = $2;", [path, id]);
    res.json("La photo a été mise à jour")

  } catch (error) {
    console.error(error.message)
  }
});

// delete all
app.delete("/photos", async (req, res) => {
  try {
    await pool.query("TRUNCATE TABLE photos RESTART IDENTITY");
    res.json('Toutes les photos ont été supprimées');
  } catch (error) {
    console.log(error.message);
  }
});

// delete
app.delete("/photos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM photos WHERE img_id = $1", [id]);
    res.json('La photo a été supprimée')
  } catch (error) {
    console.log(error.message);
  }
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Le serveur a démarré sur le port ${port}`));

// Exemple de test de GET pour voir s'assurer que la connexion client/server fonctionne
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });