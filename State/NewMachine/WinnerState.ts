import {State} from "./State";
import {Machine} from "./Machine";

export class WinnerState implements State {
    gumballMachine: Machine;

    constructor(gumballMachine: Machine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log('Error!')
    }


    ejectQuarter(): void {
        console.log('Error!')
    }


    turnCrank(): void {
        console.log('Error!')
    }

    dispense(): void {
        this.gumballMachine.releaseBall();
        if(this.gumballMachine.getCount()==0){
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
        else{
            this.gumballMachine.releaseBall();
            console.log('축하합니다! 알맹이를 하나 더 받으실 수 있습니다.')
            if(this.gumballMachine.getCount()>0){
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            }
            else{
                console.log('더 이상 알맹이가 없습니다.')
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    }
}
