const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const app = express();
// const cors = require('cors');

app.use(staticMiddleware);
app.use(express.json());

// Routes

app.use('/auth', require('../routes/jwt-auth'));
app.use('/account', require('../routes/account'));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
