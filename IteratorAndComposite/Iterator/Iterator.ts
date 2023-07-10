import {MenuItem} from "../MenuItem";

export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}
