import {Command} from "./Command";
import {Light} from "../RemoteControl/Reciever/Light";

export class LightOnCommand implements Command {

    light: Light;

    constructor(light: Light) {
        this.light = light;
    }


    execute() {
        this.light.on();
    }


}


