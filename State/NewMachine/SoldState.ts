import {SoldOutState} from "./SoldOutState";
import {State} from "./State";
import {Machine} from "./Machine";


export class SoldState implements State{
    gumballMachine: Machine;

    constructor(gumballMachine:Machine) {
        this.gumballMachine = gumballMachine;
    }
    insertQuarter(): void {
        console.log('알맹이를 내보내고 있습니다.')
    }

    ejectQuarter(): void {
        console.log('알맹이를 이미 뽑으셨습니다.')
    }



    turnCrank(): void {
        console.log('손잡이는 한번만 돌려주세요')
    }

    dispense(): void {
        this.gumballMachine.releaseBall();
        if(this.gumballMachine.getCount()>0){
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
        else{
            console.log('웁스 아웃오브 검볼스');
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

}
