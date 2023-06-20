export interface Reader {

    update();
}
export interface Author{
    registerReader(r: Reader) : void;
    removeReader(r: Reader) : void;
    notifyReaders() : void;
}

export interface Display{
    display() : void;
}
