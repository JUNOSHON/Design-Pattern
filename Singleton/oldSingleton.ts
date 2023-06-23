export class oldSingleton {
    private static uniqueInstance: oldSingleton;

    private constructor() {

    }

    // @ts-ignore
    static getInstance(): oldSingleton{
        if(this.uniqueInstance == null){
            this.uniqueInstance = new oldSingleton();
        }

        return this.uniqueInstance;
    }
}
