import {Animal} from "./Animal";
import {Edible} from "./Edible";
export class Chicken extends Animal implements Edible{
    makeSound() {
        return "Chiken: cluck-cluck"
    }
    howtoEat() {
        return "Could be fied"
    }
}