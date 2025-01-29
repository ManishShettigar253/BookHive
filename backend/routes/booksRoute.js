import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

//route for saving new book
router.post('/', async(req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({message : 'Please fill all the fields'});
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);

    }catch(err){
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
});

//route for retriving all books
router.get('/', async(req, res) => {
    try{
        const book = await Book.find({});
        return res.status(200).json(book);

    }catch(err){
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
});

//route for retriving 1 book by id
router.get('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const book = await Book.findById(id);
        return res.status(200).json(book);

    }catch(err){
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
});

//route for updating 1 book by id
router.put('/:id', async(req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({message : 'Please fill all the fields'});
        }
        const id = req.params.id;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            return res.status(404).send({message : 'Book not found'});
        }
        return res.status(200).send({message : 'Book Updated Successfully'});   

    }catch(err){
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
});


//route for deleting 1 book by id
router.delete('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send({message : 'Book not found'});
        }
        return res.status(200).send({message : 'Book Deleted Successfully'});

    }catch(err){
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
});

export default router;