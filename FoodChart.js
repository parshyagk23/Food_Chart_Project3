// import * as Food from './food.json' assert  {type: 'json'}
import { readFileSync } from 'fs';


// Read data from the JSON file
const rawData = readFileSync('food.json', 'utf-8');
const foodData = JSON.parse(rawData);

function listAllFoodItems(foodData) {
    return foodData.map((item) =>{ item});
  }


function ListAllVegetableItem(data , category){
    // return data.filter((item) => {
    //     if(item.category=== category){
    //         return item;
    //     }})
    let Vegetable_Category =data.filter(item => item.category === category).map(item=> item)
    return Vegetable_Category;
}

function ListAllFruitItem(data,category){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let Fruit_category= data.filter((item)=> item.category === category).map((value)=> value);
    return Fruit_category
}
function ListAllprotienItem(data,category){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let protien_category= data.filter((item)=> item.category.toLowerCase() === category).map((value)=> value);
    return protien_category
}
function ListAllNutsItem(data,category){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let Nuts_category= data.filter((item)=> item.category.toLowerCase() === category.toLowerCase()).map((value)=> value);
    return Nuts_category
}
function ListAllgrainsItem(data,category){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let grains_category= data.filter((item)=> item.category.toLowerCase() === category.toLowerCase()).map((value)=> value);
    return grains_category
}
function ListAlldairyItem(data,category){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let dairy_category= data.filter((item)=> item.category.toLowerCase() === category.toLowerCase()).map((value)=> value);
    return dairy_category
}
function ListAllcalorieAbove100(data){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let calorie= data.filter((item)=> item.calorie>100).map((value)=> value);
    return calorie
}
function ListAllcalorieBelow100(data){
    // return data.filter(item => {
    //     if(item.category === category){
    //         return item;
    //     }
    // }
    // )
    let calorie= data.filter((item)=> item.calorie<100).map((value)=> value);
    return calorie
}
function ProtienHighToLow(data){
    return data.sort((a, b) => b.protiens - a.protiens).map(item => item);
}
function ProtienLowToHigh(data){
    return data.sort((a, b) => a.protiens - b.protiens).map(item => item);
}
console.log("1.List all the aood items", listAllFoodItems(foodData))
console.log("2.List all the aood items with category of Vegetable ", ListAllVegetableItem(foodData , 'Vegetable'))
console.log("3.List all the aood items with category of Fruits ", ListAllFruitItem(foodData , 'Fruit'))
console.log("4.List all the aood items with category of protien ", ListAllprotienItem(foodData , 'protein'))
console.log("5.List all the aood items with category of Nuts ", ListAllNutsItem(foodData , 'Nuts'))
console.log("6.List all the aood items with category of grains ", ListAllgrainsItem(foodData , 'grain'))
console.log("7.List all the aood items with category of dairy ", ListAlldairyItem(foodData , 'dairy'))
console.log("8.List all the aood items with calorie above 100 ", ListAllcalorieAbove100(foodData ))
console.log("9.List all the aood items with calorie Below 100 ", ListAllcalorieBelow100(foodData ))
console.log("10.list all the food items with highest protien content to lowest ", ProtienHighToLow(foodData,'Protein'));
console.log("11.list all the food items with lowest protien content to highest ", ProtienLowToHigh(foodData,'Protein'));

