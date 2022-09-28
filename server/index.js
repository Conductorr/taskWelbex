const express = require('express');
const valueRouter = require('./routesValue/value.routes');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', valueRouter);

app.listen(PORT, () => {
  console.log(`server has started ${PORT}`);
});
