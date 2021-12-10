require('dotenv').config();
const express = require('express');
const { router } = require('./router');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
