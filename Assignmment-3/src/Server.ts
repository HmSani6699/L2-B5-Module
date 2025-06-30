import { Server } from 'http';
import { app } from './App';
import mongoose from 'mongoose';

const PORT = 5000;


let server: Server;


async function main() {
    try {
        // Mongoose ODM 
        await mongoose.connect('mongodb+srv://devsadiq:devsadiq6699@mongodb.oupwmil.mongodb.net/bookhouse?retryWrites=true&w=majority&appName=mongodb');
console.log('✅ Mongodb has connecting in Mogoose...!');

        // Server
        server = app.listen(PORT, () => {
            console.log('✅ Server is runing on the port:5000');
        })
    } catch (error) {
     console.log(error);
    }
}

main();
