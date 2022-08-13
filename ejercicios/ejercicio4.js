import Restaurant from "../Restaurant.js";
// Función que imprima los restaurantes que tengan al menos una calificación (grade) mayor a 9.
export default async () =>{
    const restaurants = await Restaurant.find({
       grades:{
        $elemMatch:
            {score: 
                {$gt:9}
            }
        }
    },{name:1});
    console.log(restaurants);
};