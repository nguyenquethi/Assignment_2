let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ OPeration */
router.get('/', bookController.displayBookList);

/* GET Route for displaying Add page - CREATE OPeration */
router.get('/add', bookController.displayAddPage);

/* POST Route for processing Add page - CREATE OPeration */
router.post('/add', bookController.processAddPage);

/* GET Route for displaying Edit page - UPDATE OPeration */
router.get('/edit/:id', bookController.displayEditPage);

/* POST Route for processing Edit page - UPDATE OPeration */
router.post('/edit/:id', bookController.processEditPage);

/* GET to perform Deletion - DELETE OPeration */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;