const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// db connect
// mongoose.connect('mongodb://127.0.0.1:27017/merncrud')
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
