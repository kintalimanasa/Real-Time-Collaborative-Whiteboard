// server/api/invitations.js
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const db = require('../db'); // assume a database connection is established

router.post('/', (req, res) => {
  const { sessionId, username } = req.body;
  const invitationLink = `https://example.com/invite/${uuid.v4()}`;

  // Store the invitation link in a database or cache
  db.query(`INSERT INTO invitations (session_id, username, link) VALUES (?, ?, ?)`, [sessionId, username, invitationLink], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to generate invitation link' });
    } else {
      res.json({ invitationLink });
    }
  });
});

module.exports = router;