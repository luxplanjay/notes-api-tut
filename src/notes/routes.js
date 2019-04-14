const { Router } = require('express');
const { getNotes, postNotes } = require('./controller');

const router = Router();

// GET localhost:8080/notes
// POST localhost:8080/notes {id, title, text}

router.get('/', getNotes);

router.post('/', postNotes);

module.exports = router;
