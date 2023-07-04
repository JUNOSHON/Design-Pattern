import {Amplifier} from "./Subsystem/Amplifier";
import {Tuner} from "./Subsystem/Tuner";
import {PopcornPopper} from "./Subsystem/PopcornPopper";
import {TheaterLights} from "./Subsystem/TheaterLights";
import {StreamingPlayer} from "./Subsystem/StreamingPlayer";
import {Projector} from "./Subsystem/Projector";
import {Screen} from "./Subsystem/Screen";
import {HomeTheaterFacade} from "./HomeTheaterFacade";

class HomeTheaterTest {
    main(): void {
        const amplifier = new Amplifier();
        const tuner = new Tuner();
        const screen = new Screen();
        const popcornPopper = new PopcornPopper();
        const theaterLights = new TheaterLights();
        const projector = new Projector();
        const streamingPlayer = new StreamingPlayer();

        const homeTheater = new HomeTheaterFacade(
            amplifier,
            tuner,
            screen,
            popcornPopper,
            theaterLights,
            projector,
            streamingPlayer
        );

        homeTheater.watchMovie();
        homeTheater.endMovie();


    }


}
const test = new HomeTheaterTest();
test.main();
