import mongoose from "mongoose";
import ejercicio1 from "./ejercicios/ejercicio1.js";
import ejercicio2 from "./ejercicios/ejercicio2.js";
import ejercicio3 from "./ejercicios/ejercicio3.js";
import ejercicio4 from "./ejercicios/ejercicio4.js";
import ejercicio5 from "./ejercicios/ejercicio5.js";

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Se ha conectado a la base de datos 馃煝');
});

db.on('connecting', () => {
    console.info('Intentando conectar a la base de datos de mongo 馃煛');
});

db.on('error', () => {
    console.info('Ha ocurrido un error en la conexion 馃敶');
});

db.on('disconnected', () => {
    console.info('Se ha desconectado la base de datos 馃煥');
});



mongoose.connect('mongodb://127.0.0.1:27017/Queries', async() => {
    console.log('Ejercicios:');
    /**
     * 1.- Entregue todos los documentos de la colecci贸n restaurants
     * 2.- Entregue los campos restaurant_id, name, borough y cuisine de todos los documentos.
     * 3.- Funci贸n que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base.
     * 4.- Funci贸n que imprima los restaurantes que tengan al menos una calificaci贸n (grade) mayor a 9.
     * 5.- Funci贸n que imprima los primero 10 restaurante que lleven cocina americana(cuisine) ordenados por su nombre alfabeticamente.
     */
    //  await ejercicio1();
    // await ejercicio2();
    // await ejercicio3();
    // await ejercicio4();
    await ejercicio5();
});


