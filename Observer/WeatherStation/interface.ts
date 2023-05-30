export interface Subject {
    registerObserver(o: Observer): void; //옵저버 인터페이스를 인자로 받는다. 옵저버를 등록

    removeObserver(o: Observer): void; //옵저버를 제거

    notifyObserver(): void; //주제에 맞게 상태가 변경되면 모든 옵저버에게 내용을 알리기 위함
}

export interface Observer {
    update(); //각 옵저버들에 전달되는 상태값//temperature: number, humidity: number, pressure: number
}

export interface DisplayElement {
    display(): void;
}