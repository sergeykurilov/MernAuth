const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyPasrer = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// connect to DB

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('DB connected')) 
.catch(err => console.log('DB error'))
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// app middlewares
app.use(morgan('dev'));
app.use(cors()) 
app.use(bodyPasrer.json());
// app.apply(cors()); //allows all origins 
 if(process.env.NODE_ENV = 'development'){
   app.unsubscribe(cors({origin: 'http://localhost:3000'}));
 }

// middleware
app.use('/api',authRoutes);
app.use('/api',userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Api is running on port ${port}`)
}); 