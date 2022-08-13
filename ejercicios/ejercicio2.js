import Restaurant from "../Restaurant.js";
//Entregue los campos restaurant_id, name, borough y cuisine de todos los documentos.
export default async () =>{
    // const restaurants = await Restaurant.find({},
    //     'restaurant_id name borough cuisine'
    // )
    const restaurants = await Restaurant.find({},
        {restaurant_id: 1, name:1, borough:1, cuisine:1, _id:0}
    )
    // const restaurants = await Restaurant.find({}).select('restaurant_id name borough cuisine');
    console.log(restaurants);
};