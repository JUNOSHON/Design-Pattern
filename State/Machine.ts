export class Machine {
    static SOLD_OUT: number = 0;
    static NO_QUARTER: number = 1
    static HAS_QUARTER: number = 2
    static SOLD: number = 3

    state: number = Machine.SOLD_OUT
    count: number = 0;

    constructor(count: number) {
        this.count = count;
        if (count > 0) {
            this.state = Machine.NO_QUARTER
        }
    }

    insertQuarter(): void {
        if (this.state == Machine.HAS_QUARTER) {
            console.log('동전은 한개만');
        } else if (this.state == Machine.NO_QUARTER) {
            this.state = Machine.HAS_QUARTER;
            console.log('동전을 넣었습니다.')
        } else if (this.state == Machine.SOLD_OUT) {
            console.log('매진');

        } else if (this.state == Machine.SOLD) {
            console.log('알맹이를 내보내는 중')
        }
    }

    ejectQuarter(): void {
        if (this.state == Machine.HAS_QUARTER) {
            console.log('동전반환')
            this.state = Machine.NO_QUARTER;
        } else if (this.state == Machine.NO_QUARTER) {
            console.log('동전을 넣어주세요')
        } else if (this.state == Machine.SOLD) {
            console.log('이미 알맹이를 뽑으셨습니다.')
        } else if (this.state == Machine.SOLD_OUT) {
            console.log('동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다.')
        }
    }

    turnCrank(): void {
        if (this.state == Machine.SOLD) {
            console.log('손잡이는 한번만 돌려주세요')
        } else if (this.state == Machine.NO_QUARTER) {
            console.log('동전을 넣어주세요')
        } else if (this.state == Machine.SOLD_OUT) {
            console.log('매진되었습니다.')
        } else if (this.state == Machine.HAS_QUARTER) {
            console.log('손잡이를 돌리셨습니다')
            this.state = Machine.SOLD;
            //dispense();
        }
    }

    dispense(): void {
        if (this.state == Machine.SOLD) {
            console.log('알맹이를 내보내고 있습니다')
            this.count = this.count - 1;
            if(this.count == 0){
                console.log('더이상 알맹이가 없습니다');
                this.state = Machine.SOLD_OUT;
            }
            else{
                this.state = Machine.NO_QUARTER;
            }
        }
        else if(this.state == Machine.NO_QUARTER){
            console.log('동전을 넣어주세요')
        }
        else if(this.state == Machine.SOLD_OUT){
            console.log('매진입니다')
        }
        else if(this.state==Machine.HAS_QUARTER){
            console.log('알맹이를 내보낼 수 없습니다.')
        }
    }

}
