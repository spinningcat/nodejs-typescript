// importing the dependencies
import express, { Application, Request, Response } from 'express'
import bodyParser from "body-parser"
import cors from "cors"
///???
//import helmet from "helmet"
///???
import morgan from "morgan"
import Router from'express';
//import User from '../models/user.js'
import userApi from "./users/user";

const app = express();

app.use(express.urlencoded({extended:false}));

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
//app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
//app.use(bodyParser.json());

app.use(bodyParser.json({
 /* limit: '50mb',
  verify(req: any, res, buf, encoding) {
      req.rawBody = buf;
  }*/
}));

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(userApi)

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});
/*app.post('/api/user/register', async (req, res) => {
    console.log(req)
    User.create({ username: req.body.username, password: req.body.password,role: req.body.role, deleteAt: null
    }).then(function(data){res.json(data);})
})*/

// starting the server

export default app



