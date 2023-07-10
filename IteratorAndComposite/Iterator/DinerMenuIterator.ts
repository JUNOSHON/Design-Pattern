export class DinerMenuIterator implements Iterator<MenuItem> {
    menuItems: MenuItem[];
    position: number;

    constructor(menuItems: MenuItem[]) {
        this.menuItems = menuItems;
        this.position = 0;
    }

    hasNext(): boolean {
        return this.position < this.menuItems.length && this.menuItems[this.position] !== null;
    }

    next(): MenuItem {
        const menuItem: MenuItem = this.menuItems[this.position];
        this.position++;
        return menuItem;
    }
}
