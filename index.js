import express from "express";
import todosRoutes from "./routes/todos.routes.js";

//create express app
const app= express();

// Use routes
app.use(todosRoutes);

//Listen to incomin requests
app.listen(4000,()=> {
    console.log('Express app is running')
});




