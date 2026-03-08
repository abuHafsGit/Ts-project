import { Router } from "express"
import { addBook, getBook } from "../controllers/bookController"

const bookRouter = Router()

bookRouter.get('/get-book', getBook)
bookRouter.post('/add-book', addBook)

export default bookRouter