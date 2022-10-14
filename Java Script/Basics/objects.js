const obj = {
    name : "Adnan", // key : value , keys should be unique, otherwise it will overwrite the previous value
    lname: "khan", // value can be anything, even a function or an object , or it self
    age: 23,

    fullName: function speak(){  // one way of defining a function
        console.log("You accessed the function 1");
        return this.name + " " + this.lname;
    
    },

    speak(){ // another way of defining a function
        console.log("You accessed the function 2");
        return this.name + " " + this.lname;
    },

    // object inside an object
    address: {
        city: "Karachi",
        country: "Pakistan",
        zip: 12345
        },

    //function to get address and name
    getAddress(){
        return this.name + " " + this.lname + " " + this.address.city + " " + this.address.country + " " + this.address.zip;
    }
}

// function to get the value of an object and its address 



// typical way of accessing the object
console.log(obj.name);
console.log(obj.lname);
console.log(obj.age);

// other way to access the object
 console.log(obj["name"]);
    console.log(obj["lname"]);
    console.log(obj["age"]);

// accessing the function1 from the object

console.log(obj.fullName());

// accessing the function2 from the object
console.log(obj.speak());

// accessing the object inside an object
console.log(obj.address.city);
console.log(obj.address.country);
console.log(obj.address.zip);

// accessing the function to get the address and name

console.log(obj.getAddress());

