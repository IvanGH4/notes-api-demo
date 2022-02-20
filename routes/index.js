const express = require('express');
const note = require('../controllers/note');
const router = express.Router();

router.get('/notes', note.index);
router.get('/notes/:id', note.show);

router.post('/notes', note.store);

router.put('/notes/:id', note.update);

router.delete('/notes/:id', note.destroy);

module.exports = router;
