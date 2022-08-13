import mongoose from "mongoose";
import ejercicio1 from "./ejercicios/ejercicio1.js";

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Se ha conectado a la base de datos 🟢');
});

db.on('connecting', () => {
    console.info('Intentando conectar a la base de datos de mongo 🟡');
});

db.on('error', () => {
    console.info('Ha ocurrido un error en la conexion 🔴');
});

db.on('disconnected', () => {
    console.info('Se ha desconectado la base de datos 🟨');
});



mongoose.connect('mongodb://127.0.0.1:27017/Queries', async() => {
    console.log('Ejercicios:');
    /**
     * 1.- Entregue todos los documentos de la colección restaurants
     */
     await ejercicio1();
});


