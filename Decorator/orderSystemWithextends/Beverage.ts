export abstract class Beverage {
    protected name: string;
    protected price: number;
    protected almondBreeze: boolean;
    protected shot: boolean;
    protected whipping: boolean;
    protected sizeup: boolean;
    protected ice: boolean;


    constructor(name: string, price: number) { //생성자
        this.name = name;
        this.price = price;
        this.almondBreeze = false; //디폴트로 false
        this.shot = false;
        this.whipping = false;
        this.sizeup = false;
        this.ice = false;
    }

    abstract getDescription(): string; //

    abstract cost(): number //각 서브 클래스에서는 이 cost 함수를 구현해야 함


    //세터 메소드 작성
    setAlmondBreeze(value: boolean): void {
        this.almondBreeze = value; //인자로 받은 값으로 아몬드 브리즈 첨가 여부를 바꿈
    }

    setShot(value: boolean): void {
        this.shot = value; //인자로 받은 값으로 샷 추가 여부를 바꿈
    }

    setWhipping(value: boolean): void {
        this.whipping = value; //인자로 받은 값으로 휘핑크림 추가 여부를 바꿈
    }

    setSizeup(value: boolean): void {
        this.sizeup = value;
    }
    setIce(value: boolean) : void{
        this.ice = value;
    }


    //게터메소드 작성
    hasAlmondBreeze(): boolean {
        return this.almondBreeze;
    }

    hasShot(): boolean {
        return this.shot;
    }

    hasWhipping(): boolean {
        return this.whipping;
    }

    hasSizeup(): boolean {
        return this.sizeup;
    }
    hasIce() : boolean{
        return this.ice;
    }
}
