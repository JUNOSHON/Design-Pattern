import {Observer, Subject} from "./interface";

class WeatherData implements Subject {

    private temperature: number;
    private humidity: number;
    private pressure: number;

    private readonly observers: Observer[] = [];

    constructor() {

        this.observers = [];
    }

    registerObserver(o: Observer) {
        this.observers.push(o); //옵저버가 등록을 요청하면 목록 맨 뒤에 추가한다.
    }

    removeObserver(o: Observer) {
        const index = this.observers.indexOf(o);
        if (index !== -1) {
            this.observers.splice(index, 1);//indexOf로 배열에서 o의 인덱스를 찾고
            //해당 인덱스의 요소를 제거
        }

    }

    notifyObserver() {

        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementChanged(): void {
        this.notifyObserver();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.measurementChanged();
    }

}

