
import {Author} from "./interface";
import {Reader} from "./interface";


export class Webtoon implements Author {
    private newBook: boolean = false;
    private nineteen: boolean = false;
    private readers: Reader[] = [];

    registerReader(reader: Reader): void {
        this.readers.push(reader);
    }

    removeReader(reader: Reader): void {
        const index = this.readers.indexOf(reader);
        if (index !== -1) {
            this.readers.splice(index, 1);
        }
    }

    notifyReaders(): void {
        for (const reader of this.readers) {
            reader.update();
        }
    }

    setState(newBook: boolean, nineteen: boolean): void {
        this.newBook = newBook;
        this.nineteen = nineteen;
        this.notifyReaders();
    }

    getNewBook(): boolean {
        return this.newBook;
    }

    getNineteen(): boolean {
        return this.nineteen;
    }
}
