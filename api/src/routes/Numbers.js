const { Router } = require('express');
const router = Router();
const { Numbers, User } = require('../db');

    //TODO -----> GET a "/numbers" <--------

    router.get('/', async (req, res) => {
        try {

          const numbersDB = await Numbers.findAll();
          
      
          if (numbersDB.length) {
            // Devuelve solo el número de la primera fila
            const { number } = numbersDB[0];
            res.json({ number });
          } else {
            res.status(404).json({ message: 'No se encontraron números.' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error al buscar números.' });
        }
      });
      


router.post('/', async (req, res) => {
    
    const { name , number} = req.body;

    if (!name || !number){

        res.status(400).send('Sorry, I need more videogame data');

    } else {
        
    try {
        let newNumber = await Numbers.create({ ...req.body});
        res.status(200).json(newNumber);

    } catch (error) {

        return console.log(error)
        
    }} 
});


router.put('/', async (req, res) => {

    const { name, number } = req.body;

    try {
        
        let existingNumber = await Numbers.findOne({ where: { name } });

        if (!existingNumber) {
            return res.status(404).json({ message: 'Number not found' });
        }

        existingNumber.number = number || existingNumber.number;

        await existingNumber.save();

        return res.status(200).json(existingNumber);
        
    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: 'El numero proporcionado es incorrecto' });

    }
});


module.exports = router;