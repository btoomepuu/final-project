require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.post('/api/orders', async (req, res) => {
  try {
    const { typeCoffee, coffeeStyle, beanGrind, amount, frequency, total, userId, addressId } = req.body;
    const newOrder = await db.query(
      'insert into "orders" ("typeCoffee", "coffeeStyle", "beanGrind", "amount", "frequency", "total", "userId", "addressId") values ($1, $2, $3, $4, $5, $6, $7, $8)', [typeCoffee, coffeeStyle, beanGrind, amount, frequency, total, userId, addressId]
    );
    res.json(newOrder);
  } catch (err) {
    console.log(err.message);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
