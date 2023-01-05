import express from 'express';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.send("Hello user");
})

router.post('/users', (req, res) ={
    
})

export default router;