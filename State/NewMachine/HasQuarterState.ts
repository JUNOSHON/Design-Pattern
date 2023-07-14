import {State} from "./State";
import {Machine} from "./Machine";

export class HasQuarterState implements State {

    gumballMachine: Machine;
    constructor(gumballMachine: Machine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log('동전은 한개만 넣어주세요')
    }



    ejectQuarter(): void {
        console.log('동전이 반환됩니다.')
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    turnCrank(): void {
        console.log('손잡이를 돌리셨습니다.')
        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
    dispense(): void {
        console.log('알맹이를 내보낼 수 없습니다.')
    }


}
