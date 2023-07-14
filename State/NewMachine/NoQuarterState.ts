import {State} from "./State";
import {Machine} from "./Machine";

export class NoQuarterState implements State{
    gumballMachine: Machine;

    constructor(gumballMachine:Machine) {
        this.gumballMachine = gumballMachine;
    }
    insertQuarter(): void {
        console.log('동전을 넣었습니다')
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());

    }
    dispense(): void {
        console.log('동전을 넣어주세요')
    }

    ejectQuarter(): void {
        console.log('동전을 넣어주세요')
    }



    turnCrank(): void {
        console.log('동전을 넣어주세요')
    }

}
