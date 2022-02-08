import { decodeBase64 } from 'bcryptjs';
import express from 'express';
import { route } from 'express/lib/application';
import connectDatabase from './config/db';
import {check, validationResult } from 'express-validator';

// Initialize express application
const app = express();

// Connect database
connectDatabase();

// Configure Middleware
app.use(express.json({ extended: false}));

// API endpoints
/** 
 * @route GET /
 * @decode Test endpoint
*/

app.get('/', (req, res) => 
    res.send('http get request sent to root api endpoint')
    );

/** 
 * @route POST api/users
 * @decode Register user
*/

app.post('/api/users',
[
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6})
],
(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    } else{
        return res.send(req.body);
    }
});

    // Connection Listener
    app.listen(3000, () => console.log('Express server running on port 3000'));