const CategoryModel = require('../models/CategoryModel');

const getCategories = async (req, res) => {

    try{
        const categories = await CategoryModel.find();
        res.json(categories);
    }
    catch (e) {
        res.status(500).json({ message: "Something went wrong" });
    }

};

const addCategory = async (req, res) => {
    try {
        const newCategory = new CategoryModel(req.body);
        await newCategory.save();
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ message: "Error adding category" });
    }
};

module.exports = { getCategories, addCategory };
