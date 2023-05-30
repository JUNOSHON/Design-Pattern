import {DisplayElement, Observer} from "./interface";
import {WeatherData} from "./subject";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        // @ts-ignore
        weatherData.registerObserver(this);
    }

    update() {
        this.temperature = this.weatherData.getTemperature(this.temperature);
        this.humidity = this.weatherData.getHumidity(this.humidity);
        this.pressure = this.weatherData.getPressure(this.pressure);
    }

    display(): void {
        console.log(`현재 상태 : 온도  + ${this.temperature} F, 습도  ${this.humidity} %`);
    }
}
