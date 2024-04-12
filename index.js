const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const port = process.env.PORT || 5001

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const connection = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'fesztivalok'
})

connection.connect();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

  
  app.use(cors(corsOptions));
  
app.post('/fesztivalHozzaad', (req, res) => {
    const { nev, szuletesi_datum, telefonszam, email, foglalt_napok_szama,osszeg } = req.body;
    const SQL = "INSERT INTO fesztival ( nev, szuletesi_datum, telefonszam, email, foglalt_napok_szama,osszeg) VALUES (?,?,?,?,?,?)";
    connection.query(SQL, [ nev, szuletesi_datum, telefonszam, email, foglalt_napok_szama,osszeg], (err, row) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/?message=successful');
      }
    });
  });

  app.get('/fesztivalKiir', (req, res) => {
    const sqlQuery = 'SELECT * FROM fesztival';
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            console.error('Error fetching form data:', error);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

app.delete('/fesztivaltorol/:id', (req, res) => {
  const fesztivalId = req.params.id;
  const sqlQuery = "DELETE  FROM fesztival WHERE id = ?";
  connection.query(sqlQuery, fesztivalId, (err, result) => {
      if (err) {
          console.error('Error deleting nyaralas:', err);
          res.status(500).send('Internal Server Error');
      } else {
          res.status(200).send('Nyaralas deleted successfully');
      }
  });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
} )