import {MenuItem} from "../MenuItem";
import {DinerMenuIterator} from "./DinerMenuIterator";
import {Menu} from "./Menu";

export class DinerMenu implements Menu {
    menuItems: MenuItem[];
    capacity: number;
    numberOfItems: number;

    constructor(capacity: number) {
        this.menuItems = new Array(capacity);
        this.capacity = capacity;
        this.numberOfItems = 0;

        this.addItem("Vegetarian BLT", "Fake bacon with lettuce & tomato on whole wheat", true, 9.99);
        this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", false, 8.99);
        this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 6.99);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        if (this.numberOfItems >= this.capacity) {
            console.log("Sorry, the menu is full. Unable to add new item.");
            return;
        }

        const menuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems[this.numberOfItems] = menuItem;
        this.numberOfItems++;
    }

    // @ts-ignore
    createIterator(): Iterator<MenuItem> {
        return new DinerMenuIterator(this.menuItems);
    }
}
