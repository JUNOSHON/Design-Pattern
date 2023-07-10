import {MenuItem} from "../MenuItem";

// @ts-ignore
export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
    menuItems: MenuItem[];
    position: number;

    constructor(menuItems: MenuItem[]) {
        this.menuItems = menuItems;
        this.position = 0;
    }

    hasNext(): boolean {
        return this.position < this.menuItems.length;
    }

    next(): MenuItem {
        const menuItem: MenuItem = this.menuItems[this.position];
        this.position++;
        return menuItem;
    }
}
