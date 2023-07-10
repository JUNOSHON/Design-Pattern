import {Menu} from "./Menu";
import {MenuItem} from "../MenuItem";
import {DinerMenu} from "./DinerMenu";
import {PancakeHouseMenu} from "../PancakeHouseMenu";

class Waitress {
    pancakeHouseMenu: Menu;
    dinerMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }

    printMenu(): void {
        console.log("MENU\n----\nBREAKFAST");
        const pancakeIterator = this.pancakeHouseMenu.createIterator();
        this.printMenuItems({iterator: pancakeIterator});

        console.log("\nLUNCH");
        const dinerIterator = this.dinerMenu.createIterator();
        this.printMenuItems({iterator: dinerIterator});
    }

    // @ts-ignore
    printMenuItems(iterator: Iterator<MenuItem>): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            console.log(`${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`);
        }
    }
}
const pancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu(10);

const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
waitress.printMenu();
