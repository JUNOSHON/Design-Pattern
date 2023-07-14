import {State} from "./State";
import {Machine} from "./Machine";

export class SoldOutState implements State {

    gumballMachine: Machine;

    constructor(gumballMachine:Machine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log('남은 알맹이가 없으니 동전을 넣지 마세요')
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }

    ejectQuarter(): void {
        console.log('남은 알맹이가 없습니다')
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }

    dispense(): void {
        console.log('이 상태는 될수가 없습니다.');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }

    turnCrank(): void {
        console.log('남은 알맹이가 없습니다')
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }

}
