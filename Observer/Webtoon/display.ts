import {DisplayElement} from "../WeatherStation/interface";
import {Reader} from "./interface";
import {Webtoon} from "./author";

export class stateDisplay implements Reader,DisplayElement{
    private newBook: boolean = false;
    private nineteen: boolean = false;

    private webtoonState = Webtoon;

    constructor(webtoonstate:Webtoon) {
        this.webtoonState = Webtoon;
        // @ts-ignore
        webtoonstate.registerReader(this);
    }

    update(newBook: boolean, nineteen: boolean) {
        this.newBook = newBook;
        this.nineteen = nineteen;
    }
    display() :void{

        if(this.newBook){
            console.log('무료 충전 완료!');
        }
        console.log("쿠키 2개로 다음 화 개봉\n");
        if(this.nineteen){
            console.log('성인인증하기');
        }
        console.log("전체 이용가");

    }
}
