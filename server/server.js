import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";

import { User } from '../src/database/models.js'

// create express instance
const app = express();
const PORT = 8000;

// setup middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Import handler functions
import handlerFunctions from "./controller.js"

function loginRequired(req, res, next) {
    if (!req.session.userId) {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      next();
    }
}
// ENDPOINTS

// Authentification
app.post('/api/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
  
    console.log("Post Login Attempted");

    if (user && user.password === password) {
      req.session.userId = user.userId;
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
});
    
app.post('/api/logout', loginRequired, (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});


// POKEMON SPECIES

// POKEMON INSTANCES

// USERS

// MOVES

// ABILITIES

  

// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})