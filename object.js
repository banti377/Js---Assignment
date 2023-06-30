// ---> make one object who contain your detail like - name,age,multiple vehicles
// -name,and one function print your name and then do below given task

let details = {
    name: "Banti",
    age: 28,
    vehicales: ["bike", "car"]
}


// 1. print all value of your details object
console.log(details);
console.log(Object.values(details));

// 2. add a function name printAge inside object who print age (from outside)
details.printAge = function () {
    return this.age
}
console.log(details.printAge());


// 3. get all key
console.log(Object.keys(details))

// 4. get all value
console.log(Object.values(details))

// 5. add one key for city name and store your city name on it  (from outside)
details.city = "Surat";
console.log(details.city)

// 6. delete age key from object
delete details.age
console.log(details);

// 7. make one function name addAge who print age with add some year which one pass by user
details.addAge = function () {
    return this.age + 5
}
console.log(details.addAge())