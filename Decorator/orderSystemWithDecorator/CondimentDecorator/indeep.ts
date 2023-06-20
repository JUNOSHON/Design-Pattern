import {Beverage} from "../Beverage";
import {americano} from "../../orderSystemWithextends/americano";
import {Americano} from "../Americano";
import {ice} from "./ice";
import {sizeUp} from "./sizeUp";

class inDeepCoffee {

    public static main(): void {

        const beverage: Beverage = new Americano();
        console.log(beverage.getDescription() + " ₩" + beverage.cost());


        const beverage2:Beverage = new ice();



    }


}
