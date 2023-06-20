import {Webtoon} from "./author";
import {CurrentConditionsDisplay} from "../WeatherStation/display";
import {stateDisplay} from "./display";


class junoToon{

    static main() : void {

        const webtoon = new Webtoon();
        const currentState:stateDisplay = new stateDisplay(webtoon);

        webtoon.setState(true,true);
        currentState.display();




    }
}junoToon.main();
