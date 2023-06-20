export interface Reader {

    update(newBook: boolean, nineteen : boolean);
}
export interface Author{
    registerReader(r: Reader) : void;
    removeReader(r: Reader) : void;
    notifyReader() : void;
}

export interface Display{
    display() : void;
}
