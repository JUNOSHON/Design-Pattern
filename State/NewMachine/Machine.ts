import {State} from "./State";
import {SoldState} from "./SoldState";
import {NoQuarterState} from "./NoQuarterState";
import {HasQuarterState} from "./HasQuarterState";

export class Machine {

    soldOutState: State;
    noQuarterState: State
    hasQuarterState: State;
    soldState: State;
    // winnerState:State;

    state: State = this["soldOutState"];
    count: number = 0;

    constructor(numberGumballs: number) {
        this.soldOutState = new SoldState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this)
        this.soldState = new SoldState(this);

        this.count = numberGumballs;
        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }

    insertQuarter(): void {
        this.state.insertQuarter();
    }

    ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    turnCrank(): void {
        this.state.turnCrank();
    }

    setState(state: State) {
        this.state = state;
    }

    releaseBall(): void {
        console.log('알맹이를 내보내고 있습니다')
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }

    getHasQuarterState(): State {
        return this.state;
    }

    getSoldState(): State {
        return this.state
    }

    getNoQuarterState(): State {
        return this.state;

    }

    getCount(): number {
        return this.count;
    }
    getSoldOutState():State{
        return this.state
    }
    getWinnerState() : State{
        return this.state;
    }
}

