function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = 42;

const instructor = {
    firstName: "colt",
    [favoriteNumber]: "that is my favorite" 
}

const instructor = {
    firstName: "colt",
    sayHi(){
        return "hi!"
    },
    sayBye(){
        return this.firstName + " says bye!"
    }
}

const animalObj = (species, verb, noise) => {
    return {
        species,
        [verb](){
            console.log(noise)
        }
    }
}