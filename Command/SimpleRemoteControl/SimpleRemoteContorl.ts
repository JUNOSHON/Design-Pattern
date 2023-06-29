import {Command} from "./Command";

export class SimpleRemoteControl {

    slot: Command | null = null;

    constructor() {

    }

    setCommand(command: Command): void {
        this.slot = command;
    }

    buttonWasPressed(): void {
        if(this.slot){
            this.slot.execute();
        }
    }
}

const arr = [1, 2, 3, 4];

arr.unshift(4, 3);
