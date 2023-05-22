import {Duck} from "./Duck";

class MallardDuck extends Duck{
    display() {
        console.log(`display mallard duck`);
    }
}
class RedheadDuck extends Duck{
    display() {
        console.log(`display redhead duck`);
    }
}
class RubberDuck extends Duck{
    quack() {
        console.log("삒삒");
    }
}
const mallardDuck = new MallardDuck();
const redHeadDuck = new RedheadDuck();
const rubberDuck = new RubberDuck();
mallardDuck.display();
redHeadDuck.display();
rubberDuck.quack();