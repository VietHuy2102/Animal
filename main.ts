import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";
import {Apple} from "./Apple";
import {Orange} from "./Orange";

let animal=[];
animal[0]= new Tiger()
animal[1]= new Chicken()
animal[2] = new Apple()
animal[3] = new Orange()
console.log(animal)
console.log(animal[0].makeSound())
console.log(animal[1].makeSound())
console.log(animal[1].howtoEat())
console.log(animal[2].howtoEat())
console.log(animal[3].howtoEat())
