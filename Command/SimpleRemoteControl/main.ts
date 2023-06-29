import {SimpleRemoteControl} from "./SimpleRemoteContorl";
import {Light} from "../RemoteControl/Reciever/Light";
import {LightOnCommand} from "./LightOnCommand";

class Main {

    main(): void {
        let remote: SimpleRemoteControl = new SimpleRemoteControl();
        const light: Light = new Light();
        const lightOn: LightOnCommand = new LightOnCommand(light);

        remote.setCommand(lightOn);
        remote.buttonWasPressed();
    }

}

const main = new Main();
main.main();
