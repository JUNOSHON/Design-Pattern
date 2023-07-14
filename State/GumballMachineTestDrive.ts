import {Machine} from "./Machine";

class GumballMachineTestDrive extends Machine {
    private gumballMachine: any;

    main(): void {
        gumballMachine:
            // @ts-ignore
            Machine = new Machine(5);
        console.log(this.gumballMachine);

        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();

        console.log(this.gumballMachine)

        this.gumballMachine.insertQuarter();
        this.gumballMachine.ejectQuarter();
        this.gumballMachine.turnCrank();

        console.log(this.gumballMachine);

        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();
        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();
        this.gumballMachine.ejectQuarter();

        console.log(this.gumballMachine);

        this.gumballMachine.insertQuarter();
        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();
        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();
        this.gumballMachine.insertQuarter();
        this.gumballMachine.turnCrank();

        console.log(this.gumballMachine);

    }

}


const gumblemachine = new GumballMachineTestDrive(5);
gumblemachine.main();
