import {Beverage} from "./Beverage";

export class vanillaLatte extends Beverage {

    constructor() {
        super();
        this.description = "바닐라 라떼";
    }
    cost() : number {
        return 3500;
    }

}
