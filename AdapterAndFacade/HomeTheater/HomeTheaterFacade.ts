import {Amplifier} from "./Subsystem/Amplifier";
import {Tuner} from "./Subsystem/Tuner";
import {PopcornPopper} from "./Subsystem/PopcornPopper";
import {TheaterLights} from "./Subsystem/TheaterLights";
import {StreamingPlayer} from "./Subsystem/StreamingPlayer";
import {Projector} from "./Subsystem/Projector";
import {Screen} from "./Subsystem/Screen";



export class HomeTheaterFacade {
    private amplifier: Amplifier;
    private tuner: Tuner;
    private screen: Screen;
    private popcornPopper: PopcornPopper;
    private theaterLights: TheaterLights;
    private projector: Projector;
    private streamingPlayer: StreamingPlayer;

    constructor(
        amplifier: Amplifier,
        tuner: Tuner,
        screen: Screen,
        popcornPopper: PopcornPopper,
        theaterLights: TheaterLights,
        projector: Projector,
        streamingPlayer: StreamingPlayer
    ) {
        this.amplifier = amplifier;
        this.tuner = tuner;
        this.screen = screen;
        this.popcornPopper = popcornPopper;
        this.theaterLights = theaterLights;
        this.projector = projector;
        this.streamingPlayer = streamingPlayer;
    }

    watchMovie() {
        console.log('홈시어터를 시작합니다.');

        this.popcornPopper.on();
        this.popcornPopper.pop();
        this.theaterLights.dim();

        this.screen.down()

        this.projector.on();
        this.projector.tvMode()
        this.projector.wideScreenMode()

        this.amplifier.on();
        this.amplifier.setVolume(5);

        this.streamingPlayer.on();
        this.streamingPlayer.play();
    }
    endMovie(): void{
        console.log('홈시어터를 종료합니다.')
        this.popcornPopper.off();
        this.theaterLights.on();
        this.screen.up();
        this.projector.off();
        this.amplifier.off();
        this.streamingPlayer.stop();
        this.streamingPlayer.off();
    }

}
