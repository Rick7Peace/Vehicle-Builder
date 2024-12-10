//Importing Vehicle and Wheel classes
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";
//Motorbike class extends the Vehicle class, Declares properties  and type of the Motorbike class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  //Creates a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    //constructor call the constructor of the parent class, Vehicle.initialize the properties of the Motorbike class and check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not 
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }
  //Implement the wheelie method and logs the message
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // Override the printDetails method from the Vehicle, calls the printDetails method of the parent class and log the details of the Motorbike
  override printDetails(): void {
    super.printDetails();
    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}
 
// Export the Motorbike class as the default export
export default Motorbike;