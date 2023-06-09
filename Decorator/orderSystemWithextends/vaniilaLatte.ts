import {Beverage} from "./Beverage";

export class vanillaLatte extends Beverage {


    constructor() {
        super("vanillaLatte", 3500);
    }

    cost(): number {
        let total = this.price;

        if (this.hasAlmondBreeze()) {
            total += 500;
        }

        if (this.hasSizeup()) {
            total += 1000;
        }

        if (this.hasShot()) {
            total += 500;
        }
        if(this.hasIce()) {
            total += 500;
        }


        return total;
    }

    getDescription(): string {
        return "바닐라라떼";
    }

}
