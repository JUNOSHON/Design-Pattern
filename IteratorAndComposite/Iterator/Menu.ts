import {MenuItem} from "../MenuItem";

export interface Menu {
    // @ts-ignore
    createIterator(): Iterator<MenuItem>;
}
