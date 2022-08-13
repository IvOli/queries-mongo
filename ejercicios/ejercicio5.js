import Restaurant from "../Restaurant.js";
// Función que imprima los primero 10 restaurante que lleven cocina americana(cuisine) ordenados por su nombre alfabeticamente
export default async () =>{
    const restaurants = await Restaurant.find({
       cuisine:"American "
    },
    {name:1})
    // .sort( {"name": 1 } )
    .sort("name")
    .limit(10);
    console.log(restaurants);
};