import { Router } from "express"
import { addBook, deletBook, getBook, updateBook } from "../controllers/bookController"

const bookRouter = Router()

bookRouter.get('/get-book', getBook)
bookRouter.post('/add-book', addBook)
bookRouter.put('/update-book/:id', updateBook)
bookRouter.delete('/delete-book/:id', deletBook)

export default bookRouter