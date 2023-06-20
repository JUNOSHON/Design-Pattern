
import {Author} from "./interface";
import {Reader} from "./interface";

export class Webtoon implements Author{
    private nineteen : boolean =  false;
    private newBook: boolean = false;

    private readers: Reader[] = [];

    constructor() {
        this.readers = [];
    }

    registerReader(r: Reader) {
        this.readers.push(r) ; // 독자 추가
    }
    removeReader(r: Reader) {
        const index = this.readers.indexOf(r);
        if(index !== -1){
            this.readers.splice(index, 1);
        }
    }

    notifyReader() {
        for(const reader of this.readers){
            reader.update(this.newBook, this.nineteen);
        }
    }
    stateChanged(): void {
        this.notifyReader();
    }
    setState(newBook: boolean, nineteen:boolean):void {
        this.newBook = newBook;
        this.nineteen = nineteen;

        this.stateChanged();//변화감지
    }
}
