import express, { Application, Request, Response } from 'express'
import 'dotenv/config'
import connectDb from './utils/db'
import bookRouter from './routes/bookRouts'


const app: Application = express()
const port = process.env.PORT || 3001
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'Hello express'
    })
})

app.use('/', bookRouter)


connectDb()
app.listen(port, () => {
    console.log(`server running this port http://localehost:${port}`)
})