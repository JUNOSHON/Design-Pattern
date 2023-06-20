
import {Display, Reader} from "./interface";

import {Webtoon} from "./author";

export class StateDisplay implements Reader, Display {
    private newBook: boolean = false;
    private nineteen: boolean = false;

    update(): void {
        const webtoon: Webtoon = new Webtoon();
        this.newBook = webtoon.getNewBook();
        this.nineteen = webtoon.getNineteen();
        this.display();
    }

    display(): void {
        // if (this.newBook) {
        //     console.log('무료 충전 완료!');
        // }
        // console.log('쿠키 2개로 다음 화 개봉');
        //
        // if (this.nineteen) {
        //     console.log('성인 인증하기');
        // }
        // console.log('전체 이용가');
    }
}

