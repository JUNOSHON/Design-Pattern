import {Beverage} from "./Beverage";

export class americano extends Beverage {

    constructor() {
        super("americano", 2000); //생성자
    }

    cost(): number {
        let total = this.price;

        if (this.hasShot()) {
            total += 500;
        }
        if (this.hasSizeup()) {
            total += 1000;
        }
        if(this.hasIce()) {
            total += 500;
        }
        return total;
    }

    getDescription(): string {
        return "아메리카노";
    }

}
