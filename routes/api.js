const express = require('express');
const { getAnimals, addAnimal } = require('../controllers/animalController');
const { getCategories, addCategory } = require('../controllers/categoryController');
const {upload} = require("../utility/multerConfig");
const router = express.Router();

// animals
router.get('/getAnimals', getAnimals);
router.post('/addAnimal',upload, addAnimal);

// categories
router.get('/getCategories', getCategories);
router.post('/addCategory', addCategory);

module.exports = router;
