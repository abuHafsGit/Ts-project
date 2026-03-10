import { Request, Response } from "express"
import { Book } from "../models/Book";


export const getBook = async (req: Request, res: Response) => {
    try {
        const books = await Book.find()

        return res.status(200).json({
            success: true,
            message: "get book successfully",
            books: books
        })
    } catch (error) {

    }
}

export const addBook = async (req: Request, res: Response) => {
    try {

        const { name, author, publishYear, description } = req.body;

        const book = await Book.create({
            name, author, publishYear, description
        })

        return res.status(201).json({
            success: true,
            message: 'book Created succesfuly',
            book: book
        })

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const updateBook = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { name, author, publishYear, description } = req.body;

    try {
        const book = await Book.findByIdAndUpdate(id, { name, author, publishYear, description })

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Book updated ",
            book: book
        })
    } catch (error) {

    }
}


export const deletBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const book = await Book.findByIdAndDelete(id)

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "book deleted"
        })
    } catch (error) {

    }
}