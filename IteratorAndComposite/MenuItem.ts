export class MenuItem {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
}
