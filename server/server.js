import express from "express";
import bodyParser from "body-parser";
import submitRouter from './routes/submit.js'
import cors from "cors";
import {getDatabase} from "./controllers/submit.js"
const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

app.use('/submit', submitRouter)
// Server configuration
const PORT = process.env.PORT || 1010;
// app.set('port', PORT);
// app.set('view engine', 'ejs');
// app.use(express.static("public"));
// app.use(express.json());

app.use('/datos', getDatabase)


app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`);
})