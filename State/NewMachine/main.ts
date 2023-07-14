import {Machine} from "./Machine";

class Main {
    gumballMachine: Machine;

    constructor(gumballMachine: Machine) {
        this.gumballMachine = gumballMachine;
    }

    main(): void {
        gumballMachine:// @ts-ignore
            Machine = new Machine(5);

        console.log(this.gumballMachine);

        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();

        console.log(this.gumballMachine);

        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();
        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();

        console.log(this.gumballMachine)
    }
}

const mainInstance = new Main(new Machine(5));
mainInstance.main();
