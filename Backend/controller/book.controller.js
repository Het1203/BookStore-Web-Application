import Book from '../model/book.model.js';

export const getBooks = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({ message: error.message });
    }
};

export const addBook = async (req, res) => {
    const { name, price, category, image, description } = req.body;

    try {
        const newBook = new Book({
            name,
            price,
            category,
            image,
            description,
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error });
    }
};