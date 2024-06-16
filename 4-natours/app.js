const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res
//     .status(404)
//     .json({ message: 'Hello From the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
