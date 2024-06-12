// Exercise 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, dogNames) {
    let matchFound = false;
    const lowerCaseString = string.toLowerCase();

    dogNames.forEach(dogName => {
        if (lowerCaseString.includes(dogName.toLowerCase())) {
            console.log(`Matched ${dogName}`);
            matchFound = true;
        }
    });

    if (!matchFound) {
        console.log("No Matches");
    }
}

console.log(findWords(dog_string, dog_names))




// Exercise 2

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array) {
    for (let i = 0; i < array.length; i += 2) {
        array.splice(i, 1, "even index");
    }
    return array;
}

console.log(replaceEvens(arr))