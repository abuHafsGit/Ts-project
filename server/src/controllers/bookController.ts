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