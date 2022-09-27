const router = require('express').Router();
const pool = require('../server/db');
const authorization = require('..//server/authorization');

router.get('/', authorization, async (req, res) => {
  try {

    const user = await pool.query('SELECT (name) FROM users WHERE "userId" = $1', [req.user]);

    res.json(user.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
