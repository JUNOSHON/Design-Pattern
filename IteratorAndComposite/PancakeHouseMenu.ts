import {MenuItem} from "./MenuItem";
import {PancakeHouseMenuIterator} from "./Iterator/PancakeHouseMenuIterator";
import {Menu} from "./Iterator/Menu";

export class PancakeHouseMenu implements Menu {
    menuItems: MenuItem[];

    constructor() {
        this.menuItems = [];

        this.addItem("Regular Pancake Breakfast", "Pancakes with scrambled eggs, and bacon", false, 8.99);
        this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 7.99);
        this.addItem("Waffle", "Waffles with your choice of toppings", true, 6.99);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const menuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.push(menuItem);
    }

    // @ts-ignore
    createIterator(): Iterator<MenuItem> {
        return new PancakeHouseMenuIterator(this.menuItems);
    }
}
