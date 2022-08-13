import Restaurant from "../Restaurant.js";

export default async () =>{
    const restaurants = await Restaurant.find()
    console.log(restaurants);
};