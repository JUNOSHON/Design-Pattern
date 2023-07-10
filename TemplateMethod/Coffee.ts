import {CaffeineBeverage} from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage{
    prepare(): void {
        this.boilWater();
        this.brewCoffeeGrinds();

        this.pourInCup();
        this.addSugarAndMilk();
    }

    boilWater(): void {
        console.log('물 긇이는 중');
    }

    brewCoffeeGrinds(): void {
        console.log('필터로 커피 우려내는 중')
    }

    pourInCup(): void {
        console.log('컵에 따르는 중')
    }

    addSugarAndMilk(): void {
        console.log('설탕과 우유 추가 중')
    }

    addCondiments(): void {
        console.log('설탕 우유 추가 중')
    }

    brew(): void {
        console.log('커피 우리는 중')
    }


}
