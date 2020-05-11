const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

//---------------------------------------------------

app.use(cookieParser());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
};

if (process.env.NODE_ENV !== 'production') {
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
  };
  app.use(cors(corsOptions));
};


const trackerRoute = require('./api/tracker/tracker.routes');
app.use('/api/tracker', trackerRoute);

if (process.env.NODE_ENV === 'production') {  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
};

const port = process.env.PORT || 4000;

http.listen(port, () =>
  console.log('Covid-19 Tracker App Backend Is Listening on Port ' + port + '!')
);
