import {WeatherData} from "./subject";
import {CurrentConditionsDisplay} from "./display";

class WeatherStation {

    static main(): void {
        const weatherData = new WeatherData();
        currentDisplay:// @ts-ignore
            CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4);


        weatherData.setMeasurements(82, 70, 29.2);


        weatherData.setMeasurements(78, 90, 29.2);

    }
}
WeatherStation.main();