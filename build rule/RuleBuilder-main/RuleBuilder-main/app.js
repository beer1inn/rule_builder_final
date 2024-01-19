const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;
let db;
const uri = 'mongodb+srv://vedikachowdhary2003:t4fdMSk3taKyQy6R@cluster0.ko87hig.mongodb.net/'; // Replace with your MongoDB connection string
const dbName = 'mongo'; // Replace with your MongoDB database name
const collectionName = 'aastha';

app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let client;

(async () => {
  try {
    if (!client || !client.isConnected()) {
      client = await MongoClient.connect(uri);
      console.log('Connected to MongoDB');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
})();

app.post('/add', async (req, res) => {
  const { property, operator, value } = req.body;

  db = client.db(dbName);
  const collection = db.collection(collectionName);

  try {
    const result = await collection.insertOne({ property, operator, value });
    console.log('Rule added to MongoDB:', result.ops[0]);
    res.json({ success: true, rule: result.ops[0] });
  } catch (err) {
    console.error('Error inserting data to MongoDB:', err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/secondPage', (req, res) => {
  res.sendFile(path.join(__dirname, 'secondpage.html'));
});

app.get('/login',(req,res)=>{
  console.log("Login");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Close MongoDB connection when the server is terminated
process.on('SIGINT', () => {
  console.log('Closing MongoDB connection...');
  if (client) {
    client.close();
  }
  process.exit();
});