// arrays in javascript are ordered lists of values 
// while objects are unordered lists of key value pairs

// arrays are created using square brackets
// arrays can hold any type of data

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const country = [];

const cities = [];

// accessing the array

console.log(daysOfWeek);

//array length
console.log(daysOfWeek.length);

// joining the array
console.log(daysOfWeek.join(""));


console.log(" access the array using a loop");
//Now accessing the array using a loop

for(Day of daysOfWeek){
    console.log(Day);
}

// adding an element to the array

country.push("Pakistan");
country.push("India");
country.push("China");

console.log("accessing the array after adding elements");
for(Country of country){
    console.log(Country);
}

// adding city objects to the array

cities.push({name: "Karachi", country: "Pakistan"});
cities.push({name: "Lahore", country: "Pakistan"});
cities.push({name: "Islamabad", country: "Pakistan"});

console.log("accessing the array after adding objects");
for(City of cities){
    console.log(City.name + " " + City.country);
}

// removing an element from the array

cities.splice(1, 2);

console.log("accessing the array after removing elements");
for(City of cities){
    console.log(City.name + " " + City.country);
}