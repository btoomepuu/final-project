const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const app = express();
const cors = require('cors');

app.use(staticMiddleware);
app.use(express.json());

// Routes

app.use('/auth', require('../routes/jwt-auth'));

app.use('/api', require('../routes/jwt-auth'));

// app.post('/api/orders', async (req, res) => {
//   try {
//     const { typeCoffee, coffeeStyle, beanGrind, amount, frequency, total, userId, addressId } = req.body;
//     const newOrder = await db.query(
//       'insert into "orders" ("typeCoffee", "coffeeStyle", "beanGrind", "amount", "frequency", "total", "userId", "addressId") values ($1, $2, $3, $4, $5, $6, $7, $8)', [typeCoffee, coffeeStyle, beanGrind, amount, frequency, total, userId, addressId]
//     );
//     res.json(newOrder);
//   } catch (err) {
//     // console.log(err.message);
//   }
// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
