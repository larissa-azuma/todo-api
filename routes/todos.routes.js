import { Router } from "express";

const router =Router();

//Define routes
router.post('/todos',(req,res) =>{
    res.send('Add todo!');
});

router.get('/todos',(req,res)=>{
    res.send('Get all todos!');
});

router.get('/todos/:id',(req,res) =>{
    res.send(`Get single todo with id: ${req.params.id}!`);
});

router.patch('/todos/:id',(req,res) =>{
    res.send('Update a single todo!');
});
     
router.delete('/todos/:id',(req,res) =>{
    res.send('Delete a single todo!');
});

export default router;