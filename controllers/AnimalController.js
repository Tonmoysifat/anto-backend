const AnimalModel = require('../models/AnimalModel')
const uploadResult = require("../utility/cloudin");
const getAnimals = async (req, res) => {
    try{
        const { category } = req.query;
        const animals = await AnimalModel.find(category ? { category } : {});
        res.json(animals);
    }
    catch (e) {
        res.status(500).json({ message: "Something went wrong" })
    }
};
const addAnimal = async (req, res) => {
    try {
        const img = await uploadResult(req.file.path)
        let animalData = {
            name:req.body["name"],
            category:req.body["category"],
            imageUrl:img.secure_url
        }
        const newAnimal = new AnimalModel(animalData);
        await newAnimal.save();
        res.json(newAnimal);
    } catch (error) {
        res.status(500).json({ message: "Error adding animal" });
    }
};
module.exports = { getAnimals, addAnimal };