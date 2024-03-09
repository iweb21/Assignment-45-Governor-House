/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

 let favorite_fruits = ["apple", "mango","Banana"];
if(favorite_fruits.includes("Orange")){
    console.log(`i would like to eat Orange`)
}
else if(favorite_fruits.includes("apple")){
    console.log(`i would like to eat apple`)
}
else{
    console.log(`fruits are unavailable`)
}




let fruitAvaiable = "apple";
if(favorite_fruits.includes(fruitAvaiable)){
    console.log(`i would like to eat ${fruitAvaiable}`)
}
else{
    console.log(`fruits are unavailable`)
}
