class Vehicles {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk() {
        return('Beep.')
    }
    toString() {
        return(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

class Car extends Vehicles {
    constructor(make, model, year) {
        super()
        this.make = make
        this.model = model
        this.year = year
        
    }
    numWheels() {
        return 4
    }
}

class Motorcycle extends Vehicles {
    constructor(make, model, year) {
        super()
        this.make = make
        this.model = model
        this.year = year
    }
    numWheels() {
        return 2
    }
    revEngine() {
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(capacity){
        this.automobiles = []
        this.capacity = capacity
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicles)){
            return 'only vehicles are allowed in here'
        }
        if(this.automobiles.length >= this.capacity){
            return 'sorry were full'
        }
        this.automobiles.push(newVehicle)
    }

}





